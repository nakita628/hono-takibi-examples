import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IpAccessControlListMappingHandler = app
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
