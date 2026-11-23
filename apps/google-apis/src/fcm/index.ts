import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ParentMessagesSendRoute } from './routes'
import { postV1ParentMessagesSendRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1ParentMessagesSendRoute, postV1ParentMessagesSendRouteHandler)

export default app
