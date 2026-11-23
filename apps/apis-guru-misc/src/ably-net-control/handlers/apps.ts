import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdNamespacesNamespaceIdRoute,
  deleteAppsAppIdQueuesQueueIdRoute,
  deleteAppsAppIdRulesRuleIdRoute,
  deleteAppsIdRoute,
  getAppsAppIdKeysRoute,
  getAppsAppIdNamespacesRoute,
  getAppsAppIdQueuesRoute,
  getAppsAppIdRulesRoute,
  getAppsAppIdRulesRuleIdRoute,
  patchAppsAppIdKeysKeyIdRoute,
  patchAppsAppIdNamespacesNamespaceIdRoute,
  patchAppsAppIdRulesRuleIdRoute,
  patchAppsIdRoute,
  postAppsAppIdKeysKeyIdRevokeRoute,
  postAppsAppIdKeysRoute,
  postAppsAppIdNamespacesRoute,
  postAppsAppIdQueuesRoute,
  postAppsAppIdRulesRoute,
  postAppsIdPkcs12Route,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsAppIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsIdPkcs12Route, (c) => {
    throw new Error('Not implemented')
  })
