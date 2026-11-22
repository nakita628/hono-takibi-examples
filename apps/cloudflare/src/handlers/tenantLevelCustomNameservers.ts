import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantsTenantIdCustomNsCustomNsIdRoute,
  getTenantsTenantIdCustomNsRoute,
  postTenantsTenantIdCustomNsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantLevelCustomNameserversHandler = app
  .openapi(getTenantsTenantIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantsTenantIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantsTenantIdCustomNsCustomNsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
