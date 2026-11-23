import { OpenAPIHono } from '@hono/zod-openapi'
import { postSchedulesPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app.openapi(postSchedulesPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
