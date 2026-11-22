import { OpenAPIHono } from '@hono/zod-openapi'
import { enterprisesHandler, signupUrlsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', enterprisesHandler).route('/', signupUrlsHandler)

export default app
