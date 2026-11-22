import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCustomerGroupsIdRoute,
  getAdminCustomerGroupsIdRoute,
  getAdminCustomerGroupsRoute,
  postAdminCustomerGroupsIdCustomersRoute,
  postAdminCustomerGroupsIdRoute,
  postAdminCustomerGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerGroupsHandler = app
  .openapi(getAdminCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
