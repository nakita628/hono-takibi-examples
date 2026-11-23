declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/deployments/:deployment-id/chat/completions': {
      $post: {
        input: { param: { 'deployment-id': string } } & { query: { 'api-version': string } } & {
          json: {
            messages: {
              role: 'system' | 'user' | 'assistant'
              content: string
              name?: string | undefined
            }[]
            temperature?: (number | null) | undefined
            top_p?: (number | null) | undefined
            n?: (number | null) | undefined
            stream?: (boolean | null) | undefined
            stop?: (string | null) | string[] | undefined
            max_tokens?: number | undefined
            presence_penalty?: number | undefined
            frequency_penalty?: number | undefined
            logit_bias?: ({ [x: string]: unknown } | null) | undefined
            user?: string | undefined
          }
        }
        output: {
          id: string
          object: string
          created: number
          model: string
          choices: {
            index?: number | undefined
            message?: { role: 'system' | 'user' | 'assistant'; content: string } | undefined
            finish_reason?: string | undefined
          }[]
          usage?:
            | { prompt_tokens: number; completion_tokens: number; total_tokens: number }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
