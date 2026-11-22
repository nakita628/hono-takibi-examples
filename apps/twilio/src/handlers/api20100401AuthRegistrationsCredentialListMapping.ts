import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AuthRegistrationsCredentialListMappingHandler = app
  .openapi(
    post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
