import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DynamicLinkLinkStatsRoute,
  postV1InstallAttributionRoute,
  postV1ReopenAttributionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1InstallAttributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReopenAttributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DynamicLinkLinkStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
