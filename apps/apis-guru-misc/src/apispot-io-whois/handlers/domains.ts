import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsDomainCheckRoute,
  getDomainsDomainRankRoute,
  getDomainsDomainWhoisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsDomainCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainRankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainWhoisRoute, (c) => {
    throw new Error('Not implemented')
  })
