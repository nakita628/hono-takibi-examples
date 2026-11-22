import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const definitionHandler = app.openapi(
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
