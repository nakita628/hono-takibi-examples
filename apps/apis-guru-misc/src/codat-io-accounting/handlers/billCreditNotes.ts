import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRoute,
  getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRoute,
  getCompaniesCompanyIdDataBillCreditNotesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billCreditNotesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
