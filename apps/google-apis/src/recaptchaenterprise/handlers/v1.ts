import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1KeyRetrieveLegacySecretKeyRoute,
  getV1NameRoute,
  getV1ParentFirewallpoliciesRoute,
  getV1ParentKeysRoute,
  getV1ParentMembershipsRoute,
  getV1ParentRelatedaccountgroupsRoute,
  patchV1NameRoute,
  postV1NameAnnotateRoute,
  postV1NameMigrateRoute,
  postV1ParentAssessmentsRoute,
  postV1ParentFirewallpoliciesRoute,
  postV1ParentKeysRoute,
  postV1ProjectRelatedaccountgroupmembershipsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1KeyRetrieveLegacySecretKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentFirewallpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentFirewallpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRelatedaccountgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectRelatedaccountgroupmembershipsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
