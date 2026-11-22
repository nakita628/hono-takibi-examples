import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  deletePoliciesAuthenticationMethodsPolicyRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  getPoliciesAuthenticationMethodsPolicyRoute,
  patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  patchPoliciesAuthenticationMethodsPolicyRoute,
  postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAuthenticationMethodsPolicyHandler = app
  .openapi(deletePoliciesAuthenticationMethodsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAuthenticationMethodsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAuthenticationMethodsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
