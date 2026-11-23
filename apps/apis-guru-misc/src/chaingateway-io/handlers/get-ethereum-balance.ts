import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetEthereumBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const getEthereumBalanceHandler = app.openapi(postGetEthereumBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
