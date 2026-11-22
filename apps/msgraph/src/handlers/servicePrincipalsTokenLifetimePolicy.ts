import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
  deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
  getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute,
  postServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsTokenLifetimePolicyHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
