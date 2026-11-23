import { OpenAPIHono } from '@hono/zod-openapi'
import { postMakePdfRoute } from '../routes'

const app = new OpenAPIHono()

export const makePdfHandler = app.openapi(postMakePdfRoute, (c) => {
  throw new Error('Not implemented')
})
