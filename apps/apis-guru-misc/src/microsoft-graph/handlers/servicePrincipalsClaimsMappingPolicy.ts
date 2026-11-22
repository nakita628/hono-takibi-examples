import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRoute,
  postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsClaimsMappingPolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdClaimsMappingPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdClaimsMappingPoliciesClaimsMappingPolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
