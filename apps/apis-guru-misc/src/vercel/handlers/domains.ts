import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV6DomainsDomainRoute,
  getV4DomainsPriceRoute,
  getV4DomainsStatusRoute,
  getV5DomainsDomainRoute,
  getV5DomainsRoute,
  getV6DomainsDomainConfigRoute,
  postV4DomainsBuyRoute,
  postV4DomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
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
  .openapi(getV5DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV6DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DomainsDomainConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
