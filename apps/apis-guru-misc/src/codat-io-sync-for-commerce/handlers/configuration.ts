import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigCompaniesCompanyIdSyncCommerceRoute,
  getMetaCompaniesCompanyIdSyncCommerceStatusRoute,
  postConfigCompaniesCompanyIdSyncCommerceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getConfigCompaniesCompanyIdSyncCommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigCompaniesCompanyIdSyncCommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaCompaniesCompanyIdSyncCommerceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
