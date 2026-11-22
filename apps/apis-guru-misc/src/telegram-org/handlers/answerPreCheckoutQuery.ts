import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswerPreCheckoutQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const answerPreCheckoutQueryHandler = app.openapi(postAnswerPreCheckoutQueryRoute, (c) => {
  throw new Error('Not implemented')
})
