import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetaCompaniesCompanyIdConnectionsRoute,
  getMetaCompaniesCompanyIdSyncCommerceStatusRoute,
  getMetaCompaniesRoute,
  patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute,
  postMetaCompaniesCompanyIdConnectionsRoute,
  postMetaCompaniesCompanyIdSyncCommerceHistoricRoute,
  postMetaCompaniesSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metaHandler = app
  .openapi(getMetaCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetaCompaniesSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaCompaniesCompanyIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetaCompaniesCompanyIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetaCompaniesCompanyIdSyncCommerceHistoricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaCompaniesCompanyIdSyncCommerceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
