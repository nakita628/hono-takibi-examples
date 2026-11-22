import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HolidaysHolidayIdRoute, getApiV1HolidaysRoute } from '../routes'

const app = new OpenAPIHono()

export const holidaysHandler = app
  .openapi(getApiV1HolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
