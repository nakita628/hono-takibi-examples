import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRoute,
  getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
  putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodsHandler = app
  .openapi(
    putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
