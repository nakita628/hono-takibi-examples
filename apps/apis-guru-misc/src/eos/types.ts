declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/net/connect': {
      $post: {
        input: { json: { endpoint: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/net/connections': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {
          connecting?: boolean | undefined
          last_handshake?:
            | {
                agent?: string | undefined
                chain_id?: string | undefined
                generation?: number | undefined
                head_id?: string | undefined
                head_num?: number | undefined
                key?: string | undefined
                last_irreversible_block_id?: string | undefined
                last_irreversible_block_num?: number | undefined
                network_version?: number | undefined
                node_id?: string | undefined
                os?: string | undefined
                p2p_address?: string | undefined
                sig?: string | undefined
                time?: string | undefined
                token?: string | undefined
              }
            | undefined
          peer?: string | undefined
          syncing?: boolean | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/net/disconnect': {
      $post: {
        input: { json: { endpoint: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/net/status': {
      $post: {
        input: { json: { endpoint: string } }
        output: {
          connecting?: boolean | undefined
          last_handshake?:
            | {
                agent?: string | undefined
                chain_id?: string | undefined
                generation?: number | undefined
                head_id?: string | undefined
                head_num?: number | undefined
                key?: string | undefined
                last_irreversible_block_id?: string | undefined
                last_irreversible_block_num?: number | undefined
                network_version?: number | undefined
                node_id?: string | undefined
                os?: string | undefined
                p2p_address?: string | undefined
                sig?: string | undefined
                time?: string | undefined
                token?: string | undefined
              }
            | undefined
          peer?: string | undefined
          syncing?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
