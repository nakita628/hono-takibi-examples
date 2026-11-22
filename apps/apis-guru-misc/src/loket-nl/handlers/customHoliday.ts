import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersCustomholidaysCustomHolidayIdRoute,
  getProvidersEmployersCustomholidaysCustomHolidayIdRoute,
  getProvidersEmployersEmployerIdCustomholidaysRoute,
  postProvidersEmployersEmployerIdCustomholidaysRoute,
  putProvidersEmployersCustomholidaysCustomHolidayIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customHolidayHandler = app
  .openapi(deleteProvidersEmployersCustomholidaysCustomHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersCustomholidaysCustomHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersCustomholidaysCustomHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdCustomholidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdCustomholidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
