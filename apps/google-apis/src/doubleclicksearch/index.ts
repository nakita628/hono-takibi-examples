import { OpenAPIHono } from '@hono/zod-openapi'
import { doubleclicksearchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', doubleclicksearchHandler)

export default app
