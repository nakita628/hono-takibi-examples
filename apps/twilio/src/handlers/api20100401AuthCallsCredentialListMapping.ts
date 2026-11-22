import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AuthCallsCredentialListMappingHandler = app
  .openapi(
    post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
