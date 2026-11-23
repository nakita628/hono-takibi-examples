import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuestionsRoute, postQuestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const questionsHandler = app
  .openapi(getQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
