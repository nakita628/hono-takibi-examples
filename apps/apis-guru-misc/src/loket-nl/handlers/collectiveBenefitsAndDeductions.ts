import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersEmployerIdEmployeesEmploymentsBenefitsanddeductionsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectiveBenefitsAndDeductionsHandler = app.openapi(
  postProvidersEmployersEmployerIdEmployeesEmploymentsBenefitsanddeductionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
