import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsTokenIssuancePolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
