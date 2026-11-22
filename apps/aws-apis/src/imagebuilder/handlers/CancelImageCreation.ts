import { OpenAPIHono } from '@hono/zod-openapi'
import { putCancelImageCreationRoute } from '../routes'

const app = new OpenAPIHono()

export const CancelImageCreationHandler = app.openapi(putCancelImageCreationRoute, (c) => {
  throw new Error('Not implemented')
})
