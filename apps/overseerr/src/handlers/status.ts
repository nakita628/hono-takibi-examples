import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatusAppdataRoute, getStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusAppdataRoute, (c) => {
    throw new Error('Not implemented')
  })
