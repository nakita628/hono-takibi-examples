import { OpenAPIHono } from '@hono/zod-openapi'
import { BatchGetRecordHandler, FeatureGroupHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', BatchGetRecordHandler).route('/', FeatureGroupHandler)

export default app
