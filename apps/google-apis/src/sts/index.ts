import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1betaTokenRoute } from './routes'
import { postV1betaTokenRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1betaTokenRoute, postV1betaTokenRouteHandler)

export default app
