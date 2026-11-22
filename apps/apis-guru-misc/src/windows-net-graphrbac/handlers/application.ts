import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDApplicationsApplicationObjectIdRoute,
  deleteTenantIDDeletedApplicationsApplicationObjectIdRoute,
  getTenantIDApplicationsApplicationObjectIdRoute,
  getTenantIDApplicationsRoute,
  patchTenantIDApplicationsApplicationObjectIdRoute,
  postTenantIDApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getTenantIDApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDDeletedApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
