import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1LogsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(postV1LogsGetRoute, (c) => {
  throw new Error('Not implemented')
})
