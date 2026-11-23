import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1IamTroubleshootRoute } from './routes'
import { postV1IamTroubleshootRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1IamTroubleshootRoute, postV1IamTroubleshootRouteHandler)

export default app
