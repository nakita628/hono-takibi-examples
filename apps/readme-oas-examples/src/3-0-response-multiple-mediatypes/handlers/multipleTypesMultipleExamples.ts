import { OpenAPIHono } from '@hono/zod-openapi'
import { postMultipleTypesMultipleExamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const multipleTypesMultipleExamplesHandler = app.openapi(
  postMultipleTypesMultipleExamplesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
