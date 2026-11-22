import { OpenAPIHono } from '@hono/zod-openapi'
import { greengrassHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', greengrassHandler).route('/', tagsHandler)

export default app
