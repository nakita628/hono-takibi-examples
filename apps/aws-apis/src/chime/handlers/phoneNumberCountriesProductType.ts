import { OpenAPIHono } from '@hono/zod-openapi'
import { getPhoneNumberCountriesProductTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumberCountriesProductTypeHandler = app.openapi(
  getPhoneNumberCountriesProductTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
