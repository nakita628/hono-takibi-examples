import { OpenAPIHono } from '@hono/zod-openapi'
import { postMultipleTypesSingleExampleRoute } from '../routes'

const app = new OpenAPIHono()

export const multipleTypesSingleExampleHandler = app.openapi(
  postMultipleTypesSingleExampleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
