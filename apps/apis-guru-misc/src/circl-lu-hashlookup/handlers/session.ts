import { OpenAPIHono } from '@hono/zod-openapi'
import { getSessionCreateNameRoute, getSessionGetNameRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(getSessionCreateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
