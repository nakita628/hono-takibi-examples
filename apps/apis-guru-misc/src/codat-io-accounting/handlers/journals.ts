import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRoute,
  getCompaniesCompanyIdDataJournalsJournalIdRoute,
  getCompaniesCompanyIdDataJournalsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
