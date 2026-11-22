import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNetworkingVlansRegionIdLabelRoute,
  getApiVersionNetworkingVlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vlaNsHandler = app
  .openapi(getApiVersionNetworkingVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingVlansRegionIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
