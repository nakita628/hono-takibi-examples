import { OpenAPIHono } from '@hono/zod-openapi'
import { getSingleTypeMultipleExamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const singleTypeMultipleExamplesHandler = app.openapi(
  getSingleTypeMultipleExamplesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
