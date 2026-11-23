import { OpenAPIHono } from '@hono/zod-openapi'
import { fileStorageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', fileStorageHandler)

export default app
