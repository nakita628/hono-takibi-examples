import { OpenAPIHono } from '@hono/zod-openapi'
import { terraintilesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', terraintilesHandler)

export default app
