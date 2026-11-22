import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const operationalHandler = app
  .openapi(getReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
