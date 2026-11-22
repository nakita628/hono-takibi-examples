import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute,
  deleteProvidersEmployersConceptemployeesConceptEmployeeIdDossierRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdAudittrailRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDossierRoute,
  postProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsRoute,
  putProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conceptEmployeeDossierHandler = app
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdAudittrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteProvidersEmployersConceptemployeesConceptEmployeeIdDossierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdDossierRoute, (c) => {
    throw new Error('Not implemented')
  })
