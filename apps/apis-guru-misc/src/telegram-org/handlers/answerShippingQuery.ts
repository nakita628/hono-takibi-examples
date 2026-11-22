import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswerShippingQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const answerShippingQueryHandler = app.openapi(postAnswerShippingQueryRoute, (c) => {
  throw new Error('Not implemented')
})
