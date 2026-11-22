import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2EvmSwapsQuoteRoute, postV2EvmSwapsRoute } from '../routes'

const app = new OpenAPIHono()

export const evmSwapsHandler = app
  .openapi(getV2EvmSwapsQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSwapsRoute, (c) => {
    throw new Error('Not implemented')
  })
