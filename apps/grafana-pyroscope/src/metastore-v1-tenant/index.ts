import { OpenAPIHono } from '@hono/zod-openapi'
import { metastoreV1TenantServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metastoreV1TenantServiceHandler)

export default app
