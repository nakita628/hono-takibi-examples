type Request = { ip?: string | undefined }
type Response = {
  city?: string | undefined
  country?: string | undefined
  country_code?: string | undefined
  ip?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  state?: string | undefined
  timezone?: string | undefined
  zip?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | { input: { json: Request }; output: Response; outputFormat: 'json'; status: 200 }
        | { input: { json: Request }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Request }; output: {}; outputFormat: string; status: 403 }
    }
  },
  '/'
>
export default routes
