import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute,
  getProjectsProjectRegionsRegionSslPoliciesListAvailableFeaturesRoute,
  getProjectsProjectRegionsRegionSslPoliciesRoute,
  getProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute,
  patchProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute,
  postProjectsProjectRegionsRegionSslPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionSslPoliciesHandler = app
  .openapi(getProjectsProjectRegionsRegionSslPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSslPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSslPoliciesListAvailableFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
