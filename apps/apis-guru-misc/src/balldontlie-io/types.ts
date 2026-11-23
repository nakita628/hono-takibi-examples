declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/games': {
      $get: {
        input: { query: { 'seasons[]'?: string | undefined; 'team_ids[]'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/games/32881': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/players': {
      $get: {
        input: { query: { search?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/players/237': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/stats': {
      $get: {
        input: { query: { 'season[]'?: string | undefined; 'player_ids[]'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/teams': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/api/v1/teams/1': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
