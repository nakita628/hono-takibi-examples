import { OpenAPIHono } from '@hono/zod-openapi'
import { getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute } from '../routes'

const app = new OpenAPIHono()

export const phoneValidationHandler = app.openapi(
  getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
