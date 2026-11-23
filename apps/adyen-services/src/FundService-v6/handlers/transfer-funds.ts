import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransferFundsRoute } from '../routes'

const app = new OpenAPIHono()

export const transferFundsHandler = app.openapi(postTransferFundsRoute, (c) => {
  throw new Error('Not implemented')
})
