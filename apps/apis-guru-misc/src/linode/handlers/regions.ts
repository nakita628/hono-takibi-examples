import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegionsRegionIdRoute, getRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
