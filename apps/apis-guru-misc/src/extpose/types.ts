type Extension = {
  avg_rating?: number | undefined
  extension_id?: bigint | undefined
  install_count?: bigint | undefined
  prev_avg_rating?: number | undefined
  prev_install_count?: bigint | undefined
  prev_rating_count?: bigint | undefined
  rating_count?: bigint | undefined
  update_ts?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/user-extensions': {
      $get:
        | { input: {}; output: Extension[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
