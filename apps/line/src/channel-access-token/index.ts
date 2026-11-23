import { OpenAPIHono } from '@hono/zod-openapi'
import { oauth2Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', oauth2Handler).route('/', v2Handler)

export default app
