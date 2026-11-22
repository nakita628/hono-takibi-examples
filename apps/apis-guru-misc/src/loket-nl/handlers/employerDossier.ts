import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployerIdDocumentsDocumentIdRoute,
  getProvidersEmployersEmployerIdDocumentsDocumentIdAudittrailRoute,
  getProvidersEmployersEmployerIdDocumentsDocumentIdRoute,
  getProvidersEmployersEmployerIdDocumentsRoute,
  postProvidersEmployersEmployerIdDocumentsRoute,
  putProvidersEmployersEmployerIdDocumentsDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerDossierHandler = app
  .openapi(getProvidersEmployersEmployerIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployerIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdDocumentsDocumentIdAudittrailRoute, (c) => {
    throw new Error('Not implemented')
  })
