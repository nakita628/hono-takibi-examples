import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsTokenLifetimePolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
