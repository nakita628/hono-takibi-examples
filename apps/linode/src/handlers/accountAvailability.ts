import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountAvailabilityRegionIdRoute,
  getApiVersionAccountAvailabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountAvailabilityHandler = app
  .openapi(getApiVersionAccountAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountAvailabilityRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
