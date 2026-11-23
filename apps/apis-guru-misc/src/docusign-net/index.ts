import { OpenAPIHono } from '@hono/zod-openapi'
import { serviceInformationHandler, v21Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', serviceInformationHandler).route('/', v21Handler)

export default app
