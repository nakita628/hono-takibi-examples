import { OpenAPIHono } from '@hono/zod-openapi'
import { mediaHandler, spacesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mediaHandler).route('/', spacesHandler)

export default app
