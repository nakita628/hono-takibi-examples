import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNetworkingIpv6RangesRangeRoute,
  getApiVersionNetworkingIpv6RangesRangeRoute,
  getApiVersionNetworkingIpv6RangesRoute,
  postApiVersionNetworkingIpv6RangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iPv6RangesHandler = app
  .openapi(postApiVersionNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
