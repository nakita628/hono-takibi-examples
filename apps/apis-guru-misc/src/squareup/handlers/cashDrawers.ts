import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CashDrawersShiftsRoute,
  getV2CashDrawersShiftsShiftIdEventsRoute,
  getV2CashDrawersShiftsShiftIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cashDrawersHandler = app
  .openapi(getV2CashDrawersShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CashDrawersShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CashDrawersShiftsShiftIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
