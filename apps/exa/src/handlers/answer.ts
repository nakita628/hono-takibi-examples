import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswerRoute } from '../routes'

const app = new OpenAPIHono()

export const answerHandler = app.openapi(postAnswerRoute, (c) => {
  throw new Error('Not implemented')
})
