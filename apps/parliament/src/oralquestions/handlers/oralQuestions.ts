import { OpenAPIHono } from '@hono/zod-openapi'
import { getOralquestionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const oralQuestionsHandler = app.openapi(getOralquestionsListRoute, (c) => {
  throw new Error('Not implemented')
})
