import { OpenAPIHono } from '@hono/zod-openapi'
import { oauth2Handler, userinfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', oauth2Handler).route('/', userinfoHandler)

export default app
