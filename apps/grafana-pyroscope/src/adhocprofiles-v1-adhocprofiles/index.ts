import { OpenAPIHono } from '@hono/zod-openapi'
import { adhocprofilesV1AdHocProfileServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', adhocprofilesV1AdHocProfileServiceHandler)

export default app
