import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute,
  postServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsTokenIssuancePolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
