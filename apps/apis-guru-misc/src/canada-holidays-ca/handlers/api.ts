import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1HolidaysHolidayIdRoute,
  getApiV1HolidaysRoute,
  getApiV1ProvincesProvinceIdRoute,
  getApiV1ProvincesRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProvincesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProvincesProvinceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SpecRoute, (c) => {
    throw new Error('Not implemented')
  })
