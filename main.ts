import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "cdn.discordapp.com";

serve(async (request) => {
  const url = new URL(request.url);



  url.host = OPENAI_API_HOST;
  return await fetch(url, request);
});
