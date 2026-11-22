import { OpenAPIHono } from '@hono/zod-openapi'
import { metadataHandler, searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metadataHandler).route('/', searchHandler)

export default app
