type Comic = {
  alt?: string | undefined
  day?: string | undefined
  img?: string | undefined
  link?: string | undefined
  month?: string | undefined
  news?: string | undefined
  num?: number | undefined
  safe_title?: string | undefined
  title?: string | undefined
  transcript?: string | undefined
  year?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/info.0.json': { $get: { input: {}; output: Comic; outputFormat: 'text'; status: 200 } } } & {
    '/:comicId/info.0.json': {
      $get: {
        input: { param: { comicId: number } }
        output: Comic
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
