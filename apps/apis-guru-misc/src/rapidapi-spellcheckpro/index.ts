import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckSpellingRoute } from './routes'
import { postCheckSpellingRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postCheckSpellingRoute, postCheckSpellingRouteHandler)

export default app
