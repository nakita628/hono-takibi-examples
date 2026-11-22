import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getOpenapiJsonRoute, getStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
