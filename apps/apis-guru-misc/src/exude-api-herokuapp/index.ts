import { OpenAPIHono } from '@hono/zod-openapi'
import { postExudeTypeDataRoute, postExudeTypeFileRoute } from './routes'
import { postExudeTypeDataRouteHandler, postExudeTypeFileRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postExudeTypeDataRoute, postExudeTypeDataRouteHandler)
  .openapi(postExudeTypeFileRoute, postExudeTypeFileRouteHandler)

export default app
