import { OpenAPIHono } from '@hono/zod-openapi'
import { postBalanceTransfersRoute } from '../routes'

const app = new OpenAPIHono()

export const balanceTransfersHandler = app.openapi(postBalanceTransfersRoute, (c) => {
  throw new Error('Not implemented')
})
