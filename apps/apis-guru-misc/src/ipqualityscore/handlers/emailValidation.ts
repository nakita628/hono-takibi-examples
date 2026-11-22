import { OpenAPIHono } from '@hono/zod-openapi'
import { getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute } from '../routes'

const app = new OpenAPIHono()

export const emailValidationHandler = app.openapi(
  getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
