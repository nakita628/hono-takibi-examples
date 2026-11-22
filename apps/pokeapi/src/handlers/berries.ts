import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BerryFirmnessIdIndexRoute,
  getApiV2BerryFirmnessIndexRoute,
  getApiV2BerryFlavorIdIndexRoute,
  getApiV2BerryFlavorIndexRoute,
  getApiV2BerryIdIndexRoute,
  getApiV2BerryIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const berriesHandler = app
  .openapi(getApiV2BerryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFirmnessIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFirmnessIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFlavorIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFlavorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
