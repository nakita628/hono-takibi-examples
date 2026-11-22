import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
  getApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
  getApiLogisticsPvtConfigurationHolidaysRoute,
  putApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holidaysHandler = app
  .openapi(getApiLogisticsPvtConfigurationHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
