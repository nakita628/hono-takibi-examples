import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmWorkflowsIdRoute,
  getAdminRealmsRealmWorkflowsIdRoute,
  getAdminRealmsRealmWorkflowsRoute,
  getAdminRealmsRealmWorkflowsScheduledResourceIdRoute,
  postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute,
  postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute,
  postAdminRealmsRealmWorkflowsMigrateRoute,
  postAdminRealmsRealmWorkflowsRoute,
  putAdminRealmsRealmWorkflowsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getAdminRealmsRealmWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmWorkflowsScheduledResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
