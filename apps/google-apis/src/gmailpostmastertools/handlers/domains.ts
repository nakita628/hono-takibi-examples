import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1DomainsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentTrafficStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getV1beta1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTrafficStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
