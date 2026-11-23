import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlertsActiveAreaAreaRoute,
  getAlertsActiveCountRoute,
  getAlertsActiveRegionRegionRoute,
  getAlertsActiveRoute,
  getAlertsActiveZoneZoneIdRoute,
  getAlertsIdRoute,
  getAlertsRoute,
  getAlertsTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsActiveCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsActiveZoneZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsActiveAreaAreaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsActiveRegionRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
