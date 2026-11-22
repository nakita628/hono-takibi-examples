import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestBodyFormDataExampleRoute } from '../routes'

const app = new OpenAPIHono()

export const requestBodyFormDataExampleHandler = app.openapi(
  postRequestBodyFormDataExampleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
