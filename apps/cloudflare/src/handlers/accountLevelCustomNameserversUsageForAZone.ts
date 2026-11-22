import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdCustomNsRoute, putZonesZoneIdCustomNsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountLevelCustomNameserversUsageForAZoneHandler = app
  .openapi(getZonesZoneIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
