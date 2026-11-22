import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, chapterHandler, verseHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', chapterHandler).route('/', verseHandler).route('/', authHandler)

export default app
