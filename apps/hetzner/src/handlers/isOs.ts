import { OpenAPIHono } from '@hono/zod-openapi'
import { getIsosIdRoute, getIsosRoute } from '../routes'

const app = new OpenAPIHono()

export const isOsHandler = app
  .openapi(getIsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIsosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
