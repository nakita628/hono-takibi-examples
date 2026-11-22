import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHomeRealmDiscoveryPolicyHandler = app
  .openapi(getApplicationsApplicationIdHomeRealmDiscoveryPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApplicationsApplicationIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
