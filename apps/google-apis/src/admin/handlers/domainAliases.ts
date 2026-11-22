import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainaliasesRoute,
  postAdminDirectoryV1CustomerCustomerDomainaliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainAliasesHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerDomainaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerDomainaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
