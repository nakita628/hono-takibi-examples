import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDCurrencyCloudBeneficiaryRequirementRoute } from '../routes'

const app = new OpenAPIHono()

export const currencyCloudBeneficiaryRequirementHandler = app.openapi(
  getUserUserIDCurrencyCloudBeneficiaryRequirementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
