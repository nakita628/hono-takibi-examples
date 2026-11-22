import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2HamrRoute, postApiV2HamrRoute } from '../routes'

const app = new OpenAPIHono()

export const highAvailabilityMultiRegionHandler = app
  .openapi(getApiV2HamrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2HamrRoute, (c) => {
    throw new Error('Not implemented')
  })
