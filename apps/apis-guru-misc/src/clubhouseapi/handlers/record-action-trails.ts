import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecordActionTrailsRoute } from '../routes'

const app = new OpenAPIHono()

export const recordActionTrailsHandler = app.openapi(postRecordActionTrailsRoute, (c) => {
  throw new Error('Not implemented')
})
