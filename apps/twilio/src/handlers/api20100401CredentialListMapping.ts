import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CredentialListMappingHandler = app
  .openapi(
    post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
