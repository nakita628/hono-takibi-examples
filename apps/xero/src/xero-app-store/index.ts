import { OpenAPIHono } from '@hono/zod-openapi'
import { appStoreHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appStoreHandler)

export default app
