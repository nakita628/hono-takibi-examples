import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCompaniesCompanyIdSyncCommerceLatestRoute,
  postMetaCompaniesCompanyIdSyncCommerceHistoricRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app
  .openapi(postCompaniesCompanyIdSyncCommerceLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetaCompaniesCompanyIdSyncCommerceHistoricRoute, (c) => {
    throw new Error('Not implemented')
  })
