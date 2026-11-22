import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalSslPoliciesSslPolicyRoute,
  getProjectsProjectAggregatedSslPoliciesRoute,
  getProjectsProjectGlobalSslPoliciesListAvailableFeaturesRoute,
  getProjectsProjectGlobalSslPoliciesRoute,
  getProjectsProjectGlobalSslPoliciesSslPolicyRoute,
  patchProjectsProjectGlobalSslPoliciesSslPolicyRoute,
  postProjectsProjectGlobalSslPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslPoliciesHandler = app
  .openapi(getProjectsProjectAggregatedSslPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSslPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSslPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSslPoliciesListAvailableFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalSslPoliciesSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
