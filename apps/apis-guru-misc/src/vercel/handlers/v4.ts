import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4AliasesIdOrAliasRoute,
  getV4AliasesRoute,
  getV4DomainsDomainRecordsRoute,
  getV4DomainsPriceRoute,
  getV4DomainsStatusRoute,
  postV4DomainsBuyRoute,
  postV4DomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4AliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AliasesIdOrAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4DomainsBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DomainsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DomainsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
