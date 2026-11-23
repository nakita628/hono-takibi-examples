import { OpenAPIHono } from '@hono/zod-openapi'
import { metastoreV1CompactionServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metastoreV1CompactionServiceHandler)

export default app
