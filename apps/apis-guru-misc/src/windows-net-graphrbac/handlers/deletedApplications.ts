import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantIDDeletedApplicationsRoute,
  postTenantIDDeletedApplicationsObjectIdRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deletedApplicationsHandler = app
  .openapi(getTenantIDDeletedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDDeletedApplicationsObjectIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
