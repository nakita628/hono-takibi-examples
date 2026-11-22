import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPDomainsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401DomainHandler = app
  .openapi(get20100401AccountsAccountSidSIPDomainsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPDomainsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidSIPDomainsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPDomainsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidSIPDomainsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
