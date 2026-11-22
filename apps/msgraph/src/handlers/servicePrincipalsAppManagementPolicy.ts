import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesAppManagementPolicyIdRoute,
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdAppManagementPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsAppManagementPolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdAppManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdAppManagementPoliciesAppManagementPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdAppManagementPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
