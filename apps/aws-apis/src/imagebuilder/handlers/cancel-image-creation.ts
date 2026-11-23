import { OpenAPIHono } from '@hono/zod-openapi'
import { putCancelImageCreationRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelImageCreationHandler = app.openapi(putCancelImageCreationRoute, (c) => {
  throw new Error('Not implemented')
})
