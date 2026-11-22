import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRoute,
  getV1WorkgroupsWorkgroupIdQuotesRoute,
  getV1WorkgroupsWorkgroupIdQuoteStatesRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdQuoteStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
