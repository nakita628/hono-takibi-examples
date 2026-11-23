import { OpenAPIHono } from '@hono/zod-openapi'
import { gwHandler, oauth2Handler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', gwHandler).route('/', oauth2Handler).route('/', v1Handler)

export default app
