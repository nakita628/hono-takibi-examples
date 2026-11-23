import { OpenAPIHono } from '@hono/zod-openapi'
import { appstoreHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appstoreHandler).route('/', v1Handler)

export default app
