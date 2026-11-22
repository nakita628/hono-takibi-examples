import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRoute,
  getCompaniesCompanyIdDataCreditNotesCreditNoteIdRoute,
  getCompaniesCompanyIdDataCreditNotesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditNotesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCreditNotesCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
