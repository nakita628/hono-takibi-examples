import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute,
  getProjectsProjectAggregatedResourcePoliciesRoute,
  getProjectsProjectRegionsRegionResourcePoliciesResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute,
  getProjectsProjectRegionsRegionResourcePoliciesRoute,
  patchProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute,
  postProjectsProjectRegionsRegionResourcePoliciesResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionResourcePoliciesResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionResourcePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcePoliciesHandler = app
  .openapi(getProjectsProjectAggregatedResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionResourcePoliciesResourcePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionResourcePoliciesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionResourcePoliciesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionResourcePoliciesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
