import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdEmployeesEmploymentsWageProposalsRoute,
  patchProvidersEmployersEmployeesEmploymentsWageProposalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wageProposalHandler = app
  .openapi(patchProvidersEmployersEmployeesEmploymentsWageProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsWageProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
