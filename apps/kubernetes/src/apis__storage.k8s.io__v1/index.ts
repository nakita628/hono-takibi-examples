import { OpenAPIHono } from '@hono/zod-openapi'
import { storageV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', storageV1Handler)

export default app
