import { OpenAPIHono } from '@hono/zod-openapi'
import { channelAccessTokenHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', channelAccessTokenHandler)

export default app
