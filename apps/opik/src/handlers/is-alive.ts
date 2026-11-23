import { OpenAPIHono } from '@hono/zod-openapi'
import { getIsAlivePingRoute, getIsAliveVerRoute } from '../routes'

const app = new OpenAPIHono()

export const isAliveHandler = app
  .openapi(getIsAlivePingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIsAliveVerRoute, (c) => {
    throw new Error('Not implemented')
  })
