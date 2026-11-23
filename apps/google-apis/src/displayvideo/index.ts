import { OpenAPIHono } from '@hono/zod-openapi'
import { downloadHandler, mediaHandler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', downloadHandler).route('/', mediaHandler).route('/', v2Handler)

export default app
