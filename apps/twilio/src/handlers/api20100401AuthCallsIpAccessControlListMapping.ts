import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AuthCallsIpAccessControlListMappingHandler = app
  .openapi(
    post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
