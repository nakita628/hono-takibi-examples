import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetaCompaniesCompanyIdConnectionsRoute,
  getMetaCompaniesRoute,
  patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute,
  postMetaCompaniesCompanyIdConnectionsRoute,
  postMetaCompaniesSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyManagementHandler = app
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
