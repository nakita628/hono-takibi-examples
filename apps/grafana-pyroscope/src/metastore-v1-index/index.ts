import { OpenAPIHono } from '@hono/zod-openapi'
import { metastoreV1IndexServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metastoreV1IndexServiceHandler)

export default app
