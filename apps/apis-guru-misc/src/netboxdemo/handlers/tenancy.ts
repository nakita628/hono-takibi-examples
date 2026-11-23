import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenancyTenantGroupsIdIndexRoute,
  deleteTenancyTenantsIdIndexRoute,
  getTenancyTenantGroupsIdIndexRoute,
  getTenancyTenantGroupsIndexRoute,
  getTenancyTenantsIdIndexRoute,
  getTenancyTenantsIndexRoute,
  patchTenancyTenantGroupsIdIndexRoute,
  patchTenancyTenantsIdIndexRoute,
  postTenancyTenantGroupsIndexRoute,
  postTenancyTenantsIndexRoute,
  putTenancyTenantGroupsIdIndexRoute,
  putTenancyTenantsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenancyHandler = app
  .openapi(getTenancyTenantGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenancyTenantGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenancyTenantGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenancyTenantGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenancyTenantGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTenancyTenantGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenancyTenantsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenancyTenantsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenancyTenantsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenancyTenantsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenancyTenantsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTenancyTenantsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
