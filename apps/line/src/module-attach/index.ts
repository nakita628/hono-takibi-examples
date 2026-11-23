import { OpenAPIHono } from '@hono/zod-openapi'
import { postModuleAuthV1TokenRoute } from './routes'
import { postModuleAuthV1TokenRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postModuleAuthV1TokenRoute, postModuleAuthV1TokenRouteHandler)

export default app
