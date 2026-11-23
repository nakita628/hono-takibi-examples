import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestBodyMultiMediaTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const requestBodyMultiMediaTypesHandler = app.openapi(
  postRequestBodyMultiMediaTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
