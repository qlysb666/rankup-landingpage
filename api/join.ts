import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { email, rank, agent, consent, source } = req.body || {};
    if (!email || !String(email).includes('@')) {
      return res.status(400).json({ ok:false, error:'Invalid email' });
    }
    const { error } = await supabase.from('waitlist').insert({
      email: String(email).trim().toLowerCase(),
      rank, agent, consent: !!consent, source
    });
    // 唯一约束(重复提交)也当成功
    // @ts-ignore
    if (error && error.code !== '23505') return res.status(500).json({ ok:false, error: error.message });
    return res.status(200).json({ ok:true });
  } catch (e:any) {
    return res.status(500).json({ ok:false, error: e?.message || 'Server error' });
  }
}
