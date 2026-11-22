import { OpenAPIHono } from '@hono/zod-openapi'
import { getStackRegionsClosestRoute, getStackRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const stackRegionsHandler = app
  .openapi(getStackRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStackRegionsClosestRoute, (c) => {
    throw new Error('Not implemented')
  })
