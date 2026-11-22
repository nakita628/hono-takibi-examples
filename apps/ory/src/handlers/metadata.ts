import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthAliveRoute, getHealthReadyRoute, getVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getHealthAliveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
