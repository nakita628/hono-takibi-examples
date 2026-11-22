import { OpenAPIHono } from '@hono/zod-openapi'
import { imagePngHandler, multipartFormDataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', imagePngHandler).route('/', multipartFormDataHandler)

export default app
