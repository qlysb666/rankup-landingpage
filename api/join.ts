import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' });

  try {
    let payload: any = {};
    // 兼容 JSON 和表单
    const ct = (req.headers['content-type'] || '').toLowerCase();
    if (ct.includes('application/json')) {
      payload = req.body || {};
    } else {
      // x-www-form-urlencoded 或 multipart
      // @ts-ignore
      const body = req.body || {};
      payload.email  = body.email;
      payload.rank   = body.rank;
      payload.agent  = body.agent;
      payload.consent= body.consent === 'yes' || body.consent === 'true' || body.consent === true;
      payload.source = body.source;
    }

    const { email, rank, agent, consent, source } = payload;
    if (!email || !String(email).includes('@')) {
      return res.status(400).json({ ok:false, error:'Invalid email' });
    }

    const { error } = await supabase.from('waitlist').insert({
      email: String(email).trim().toLowerCase(),
      rank: rank ?? null,
      agent: agent ?? null,
      consent: !!consent,
      source: source ?? 'landing'
    });

    // 唯一约束（重复）也当成功
    // @ts-ignore
    if (error && error.code !== '23505') {
      return res.status(500).json({ ok:false, error: error.message });
    }
    return res.status(200).json({ ok:true });
  } catch (e:any) {
    return res.status(500).json({ ok:false, error: e?.message || 'Server error' });
  }
}
