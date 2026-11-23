import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChargersChargerIdRoute,
  getChargersRoute,
  postChargersChargerIdChargingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargersHandler = app
  .openapi(getChargersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChargersChargerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChargersChargerIdChargingRoute, (c) => {
    throw new Error('Not implemented')
  })
