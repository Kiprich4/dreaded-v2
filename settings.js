/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElrNWZDN3FzT2txTVR2bHNVRkc3U2dCbElLU2s4Wm1NeFZMYlAyQzlucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXphYWMyZDNROEcrc1ZSZlIyWVRkb3UxVnhLYUxnR2FFT09UODhXTXVtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRzVVWWMrWTRWQkd5VzBJYi9hL2tFcDFzbURrMitDelZmMVF0ZkR4R0ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyM2gvZ1IwOWFPV0wxRkc2S3FVYjg4c3ZlSmlKOHQrUGl3bEIyYnJLUFV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JTU9rZDRRR0h2WFAzNE9Ic2hqbVFOQTRtelJYVExHQnl6cCtNYklvMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklUZ3lGTXMyTVNuK2p3MHpFRUdDZHkvMVFpak1PSHkyQUNsTGxVd3BHbGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZOZXVkbys0L2hkalR5SjcvNmZuYk43QVRmNDQ0WnFMeFByZ3VETExFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBFWDRESVYvekZXNGwzUmRLQkxIVDNjRTBEVGtKTjJjKzNsWExjeCszcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBPUSsvQWtkcURlSWN0R0F1UVpmOFkxLzBHbStMMHI3emZnalhoNkJlR0NUNElhbXdGMzExZ2tkWXNYL2VrdWdHSUxTOEVsY2h2bjFsWGdaSzZZOWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJQSGYyZzR1WTJYUGdEQk9TZFp1MXdLeUd2Z2NOOXpWNk9YOGt1aTlyazlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1Nzk4ODgxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERDEzOTZENjIzQTExRjBDMkY1MzIzNDA4QzQ3QzYwNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwODg4ODU2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyM2ptUFdxYVNTS0t4MHE4QlhHOEx3IiwicGhvbmVJZCI6ImJhYmU2MDk5LTdjYWYtNDRkOC1hYjlmLTIxMDYxNWEzZGE4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtN2RtT0dXaGE3dmFEelpZYVVQNUxUMEF0MW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BEV3NXYzg2TGRjN091TE1oMW1POGpRK3ZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNWWVM4SE1WIiwibWUiOnsiaWQiOiIyNTQ3NTc5ODg4MTU6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2lwcmljaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFVeU9JQ0VJT0pyYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRG5uQ1dLK2lhTDd0N0x0WmFSL0NVT2UvbjFob29mVFljL3VkazBTSVRDcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT0VCM01Uc2FicUxSMnJBNUhGWThkSlBDcTVad21wdkgweC91ZFhNMjdEVWNsd3pIeWZibysxRWRBdk9DT2JTY1pCREx6UUZnait0UU5sNk0ySkp2QVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRTZjFoakh0OFo4Mi85a1ZlMGg4NmtYRmdPWElnWENqaHc5bHd3T3FzQkNjd2h3aVUrQ2RnUWdVYU41R0x0Q0tHUWlNTXowUXZtNW9jMlR0cGY3WGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3OTg4ODE1Ojc2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE1NXdsaXZvbWkrN2V5N1dXa2Z3bERudjU5WWFLSDAySFA3blpORWlFd3IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA4ODg4NDh9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254757988815";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254757988815';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
