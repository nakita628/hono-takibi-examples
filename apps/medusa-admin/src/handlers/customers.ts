import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCustomersIdAddressesAddressIdRoute,
  deleteAdminCustomersIdRoute,
  getAdminCustomersIdAddressesAddressIdRoute,
  getAdminCustomersIdAddressesRoute,
  getAdminCustomersIdRoute,
  getAdminCustomersRoute,
  postAdminCustomersExportRoute,
  postAdminCustomersIdAddressesAddressIdRoute,
  postAdminCustomersIdAddressesRoute,
  postAdminCustomersIdCustomerGroupsRoute,
  postAdminCustomersIdRoute,
  postAdminCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
