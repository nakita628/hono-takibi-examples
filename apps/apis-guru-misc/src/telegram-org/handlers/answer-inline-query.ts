import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswerInlineQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const answerInlineQueryHandler = app.openapi(postAnswerInlineQueryRoute, (c) => {
  throw new Error('Not implemented')
})
