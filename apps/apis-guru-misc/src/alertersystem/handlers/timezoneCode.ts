import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTimezoneCodeIdRoute, getApiTimezoneCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const timezoneCodeHandler = app
  .openapi(getApiTimezoneCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTimezoneCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
