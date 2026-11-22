import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestV1NeoSentryAsteroidIdRoute, getRestV1NeoSentryRoute } from '../routes'

const app = new OpenAPIHono()

export const neosentryHandler = app
  .openapi(getRestV1NeoSentryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoSentryAsteroidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
