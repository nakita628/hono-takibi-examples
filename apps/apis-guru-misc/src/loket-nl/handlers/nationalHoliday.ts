import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdNationalholidaysNationalHolidayIdRoute,
  getProvidersEmployersEmployerIdNationalholidaysRoute,
  putProvidersEmployersEmployerIdNationalholidaysNationalHolidayIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nationalHolidayHandler = app
  .openapi(getProvidersEmployersEmployerIdNationalholidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdNationalholidaysNationalHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdNationalholidaysNationalHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
