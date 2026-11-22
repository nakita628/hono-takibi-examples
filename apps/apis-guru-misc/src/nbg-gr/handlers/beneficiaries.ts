import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdBeneficiariesRoute } from '../routes'

const app = new OpenAPIHono()

export const beneficiariesHandler = app.openapi(getAccountsAccountIdBeneficiariesRoute, (c) => {
  throw new Error('Not implemented')
})
