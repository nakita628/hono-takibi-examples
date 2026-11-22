import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionProfileRoute, putApiVersionProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getApiVersionProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
