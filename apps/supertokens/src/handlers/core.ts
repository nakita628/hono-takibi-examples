import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppidAppIdEeLicenseRoute,
  deleteAppidAppIdTenantIdHelloRoute,
  getAppidAppIdApiversionRoute,
  getAppidAppIdEeFeatureflagRoute,
  getAppidAppIdEeLicenseRoute,
  getAppidAppIdRequestsStatsRoute,
  getAppidAppIdTelemetryRoute,
  getAppidAppIdTenantIdHelloRoute,
  getAppidAppIdTenantIdIndexRoute,
  getAppidAppIdTenantIdUsersByAccountinfoRoute,
  getAppidAppIdTenantIdUsersCountRoute,
  getAppidAppIdTenantIdUsersRoute,
  getAppidAppIdUserIdRoute,
  getAppidAppIdUsersCountActiveRoute,
  getAppidAppIdUserSearchTagsRoute,
  getAppidAppIdWellKnownJwksJsonRoute,
  getConfigRoute,
  postAppidAppIdTenantIdHelloRoute,
  postAppidAppIdUserRemoveRoute,
  putAppidAppIdEeLicenseRoute,
  putAppidAppIdTenantIdHelloRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coreHandler = app
  .openapi(getAppidAppIdWellKnownJwksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdApiversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUsersCountActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUserSearchTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdEeFeatureflagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersByAccountinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRequestsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
