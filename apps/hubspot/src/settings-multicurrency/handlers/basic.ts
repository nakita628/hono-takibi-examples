import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsCurrencies202609CodesRoute,
  getSettingsCurrencies202609CompanyCurrencyRoute,
  putSettingsCurrencies202609CompanyCurrencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getSettingsCurrencies202609CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CompanyCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsCurrencies202609CompanyCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
