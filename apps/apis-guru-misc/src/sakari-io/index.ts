import { OpenAPIHono } from '@hono/zod-openapi'
import { oauth2Handler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', oauth2Handler).route('/', v1Handler)

export default app
