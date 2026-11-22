import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute,
  deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdRoute,
  deleteInstancesInstanceIdPluginsPluginSlugOrIdRoute,
  deleteInstancesInstanceIdRoute,
  getInstancesInstanceIdApiServiceaccountsSearchRoute,
  getInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute,
  getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute,
  getInstancesInstanceIdPluginsPluginSlugOrIdRoute,
  getInstancesInstanceIdPluginsRoute,
  getInstancesInstanceIdReadinessRoute,
  getInstancesInstanceIdRoute,
  getInstancesInstanceIdUsersRoute,
  getInstancesRoute,
  postInstancesInstanceIdApiServiceaccountsRoute,
  postInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute,
  postInstancesInstanceIdPluginsPluginSlugOrIdRoute,
  postInstancesInstanceIdPluginsRoute,
  postInstancesInstanceIdRoute,
  postInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app
  .openapi(getInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesInstanceIdApiServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdApiServiceaccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesInstanceIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesInstanceIdPluginsPluginSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdPluginsPluginSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesInstanceIdPluginsPluginSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdReadinessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesInstanceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
