import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  getNetworksNetworkIdSwitchLinkAggregationsRoute,
  postNetworksNetworkIdSwitchLinkAggregationsRoute,
  putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkAggregationsHandler = app
  .openapi(getNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
