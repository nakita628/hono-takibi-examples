import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworkTokensNetworkTokenIdRoute,
  patchNetworkTokensNetworkTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkTokensHandler = app
  .openapi(getNetworkTokensNetworkTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworkTokensNetworkTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
