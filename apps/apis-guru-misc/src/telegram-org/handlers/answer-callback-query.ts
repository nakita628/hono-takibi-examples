import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswerCallbackQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const answerCallbackQueryHandler = app.openapi(postAnswerCallbackQueryRoute, (c) => {
  throw new Error('Not implemented')
})
