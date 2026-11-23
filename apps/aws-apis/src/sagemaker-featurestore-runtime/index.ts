import { OpenAPIHono } from '@hono/zod-openapi'
import { batchGetRecordHandler, featureGroupHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', batchGetRecordHandler).route('/', featureGroupHandler)

export default app
