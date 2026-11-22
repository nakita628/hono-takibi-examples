import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute,
  deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute,
  postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsHomeRealmDiscoveryPolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdHomeRealmDiscoveryPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
