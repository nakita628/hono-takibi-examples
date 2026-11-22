import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAudittrailRoute,
  getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDeclarationsRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarationsRoute,
  patchProvidersEmployersEmployeesEmploymentsDeclarationsProcessRoute,
  patchProvidersEmployersEmployeesEmploymentsDeclarationsReviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const declarationsHandler = app
  .openapi(patchProvidersEmployersEmployeesEmploymentsDeclarationsProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsDeclarationsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAudittrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
