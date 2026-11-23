import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV5DomainsDomainRecordsRoute,
  getV5DomainsDomainRoute,
  getV5DomainsRoute,
  getV5UserTokensTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v5Handler = app
  .openapi(getV5DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
