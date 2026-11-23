import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, oauth2Handler, wellKnownHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', wellKnownHandler).route('/', apiHandler).route('/', oauth2Handler)

export default app
