import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateBankAccountIdentificationRoute } from '../routes'

const app = new OpenAPIHono()

export const bankAccountValidationHandler = app.openapi(
  postValidateBankAccountIdentificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
