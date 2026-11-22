import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiUserRoute, getApiUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(deleteApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
