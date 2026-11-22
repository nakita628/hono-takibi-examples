import { OpenAPIHono } from '@hono/zod-openapi'
import { metastoreV1MetadataQueryServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metastoreV1MetadataQueryServiceHandler)

export default app
