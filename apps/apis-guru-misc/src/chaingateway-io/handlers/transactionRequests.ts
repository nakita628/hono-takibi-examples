import { OpenAPIHono } from '@hono/zod-openapi'
import { postClearAddressRoute, postSendEthereumRoute, postSendTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionRequestsHandler = app
  .openapi(postClearAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendEthereumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
