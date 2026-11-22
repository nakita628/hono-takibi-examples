import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountOrderImpactRoute } from '../routes'

const app = new OpenAPIHono()

export const orderMarginRequirementsHandler = app.openapi(
  postAccountsAccountOrderImpactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
