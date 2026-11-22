import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3RedactStatusJobIdRoute, postRestApi3RedactRoute } from '../routes'

const app = new OpenAPIHono()

export const issueRedactionHandler = app
  .openapi(postRestApi3RedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RedactStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
