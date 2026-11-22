import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCustomHostnamesFallbackOriginRoute,
  getZonesZoneIdCustomHostnamesFallbackOriginRoute,
  putZonesZoneIdCustomHostnamesFallbackOriginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customHostnameFallbackOriginForAZoneHandler = app
  .openapi(deleteZonesZoneIdCustomHostnamesFallbackOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomHostnamesFallbackOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCustomHostnamesFallbackOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
