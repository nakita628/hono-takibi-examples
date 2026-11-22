import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRoute,
  getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRoute,
  getCompaniesCompanyIdDataJournalEntriesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalEntriesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
