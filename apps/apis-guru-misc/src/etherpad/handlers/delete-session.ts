import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeleteSessionRoute, postDeleteSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSessionHandler = app
  .openapi(getDeleteSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
