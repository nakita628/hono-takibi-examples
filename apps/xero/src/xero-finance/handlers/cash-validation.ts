import { OpenAPIHono } from '@hono/zod-openapi'
import { getCashValidationRoute } from '../routes'

const app = new OpenAPIHono()

export const cashValidationHandler = app.openapi(getCashValidationRoute, (c) => {
  throw new Error('Not implemented')
})
