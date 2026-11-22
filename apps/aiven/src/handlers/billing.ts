import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdAddressAddressIdRoute,
  getInvoicesInvoiceNumberRoute,
  getOrganizationOrganizationIdAddressAddressIdRoute,
  getOrganizationOrganizationIdAddressesRoute,
  patchOrganizationOrganizationIdAddressAddressIdRoute,
  postOrganizationOrganizationIdAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getInvoicesInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
