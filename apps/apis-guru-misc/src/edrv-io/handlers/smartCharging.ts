import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CommandsChargingscheduleRoute,
  postV1CommandsChargingscheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smartChargingHandler = app
  .openapi(deleteV1CommandsChargingscheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsChargingscheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
