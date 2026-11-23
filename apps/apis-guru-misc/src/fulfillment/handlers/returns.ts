import { OpenAPIHono } from '@hono/zod-openapi'
import { getReturnsRoute, putReturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsHandler = app
  .openapi(getReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
