import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionRegionsAvailabilityRoute,
  getApiVersionRegionsRegionIdAvailabilityRoute,
  getApiVersionRegionsRegionIdRoute,
  getApiVersionRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getApiVersionRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsRegionIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
