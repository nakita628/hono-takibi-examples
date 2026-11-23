import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendEthereumRoute } from '../routes'

const app = new OpenAPIHono()

export const sendEthereumHandler = app.openapi(postSendEthereumRoute, (c) => {
  throw new Error('Not implemented')
})
