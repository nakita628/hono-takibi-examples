import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainsRoute,
  postAdminDirectoryV1CustomerCustomerDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
