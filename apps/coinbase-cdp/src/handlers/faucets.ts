import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2EvmFaucetRoute, postV2SolanaFaucetRoute } from '../routes'

const app = new OpenAPIHono()

export const faucetsHandler = app
  .openapi(postV2EvmFaucetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaFaucetRoute, (c) => {
    throw new Error('Not implemented')
  })
