import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployeesEmployeeIdOccupationaldisabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const occupationalDisabilityHandler = app.openapi(
  getProvidersEmployersEmployeesEmployeeIdOccupationaldisabilitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
