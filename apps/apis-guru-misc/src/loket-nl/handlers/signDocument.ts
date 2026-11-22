import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureRoute,
  deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureReportRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureReportRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureRoute,
  postProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureInitiateRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signDocumentHandler = app
  .openapi(
    deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
