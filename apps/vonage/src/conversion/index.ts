import { OpenAPIHono } from '@hono/zod-openapi'
import { smsConversionHandler, voiceConversionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', smsConversionHandler).route('/', voiceConversionHandler)

export default app
