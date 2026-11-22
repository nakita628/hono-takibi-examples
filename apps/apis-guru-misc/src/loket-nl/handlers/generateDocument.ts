import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocumentPreviewRoute,
  postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocumentRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocumentPreviewRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocumentRoute,
  postProvidersEmployersEmployerIdDocumenttemplatesDocumentIdGeneratedocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generateDocumentHandler = app
  .openapi(
    postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocumentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocumentPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocumentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocumentPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployerIdDocumenttemplatesDocumentIdGeneratedocumentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
