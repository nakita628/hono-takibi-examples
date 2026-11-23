import { OpenAPIHono } from '@hono/zod-openapi'
import { batchHandler, imagesHandler, qrcodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', batchHandler).route('/', imagesHandler).route('/', qrcodeHandler)

export default app
