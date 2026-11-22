import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminProvisioningAccessControlReloadRoute,
  postAdminProvisioningDashboardsReloadRoute,
  postAdminProvisioningDatasourcesReloadRoute,
  postAdminProvisioningPluginsReloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminProvisioningHandler = app
  .openapi(postAdminProvisioningAccessControlReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningDashboardsReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningDatasourcesReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningPluginsReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
