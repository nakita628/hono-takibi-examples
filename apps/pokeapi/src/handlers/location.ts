import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2LocationAreaIdIndexRoute,
  getApiV2LocationAreaIndexRoute,
  getApiV2LocationIdIndexRoute,
  getApiV2LocationIndexRoute,
  getApiV2PalParkAreaIdIndexRoute,
  getApiV2PalParkAreaIndexRoute,
  getApiV2RegionIdIndexRoute,
  getApiV2RegionIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationHandler = app
  .openapi(getApiV2LocationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationAreaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationAreaIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PalParkAreaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PalParkAreaIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RegionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RegionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
