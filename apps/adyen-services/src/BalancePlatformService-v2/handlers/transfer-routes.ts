import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransferRoutesCalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const transferRoutesHandler = app.openapi(postTransferRoutesCalculateRoute, (c) => {
  throw new Error('Not implemented')
})
