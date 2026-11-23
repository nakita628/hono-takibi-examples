import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnswersRoute } from '../routes'

const app = new OpenAPIHono()

export const answersHandler = app.openapi(postAnswersRoute, (c) => {
  throw new Error('Not implemented')
})
