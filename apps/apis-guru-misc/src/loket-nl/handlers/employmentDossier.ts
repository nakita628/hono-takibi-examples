import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdAudittrailRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsRoute,
  putProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employmentDossierHandler = app
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdAudittrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
