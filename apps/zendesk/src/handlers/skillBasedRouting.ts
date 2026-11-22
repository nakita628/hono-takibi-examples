import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RoutingAttributesAttributeIdRoute,
  deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  getApiV2RoutingAgentsInstanceValuesRoute,
  getApiV2RoutingAgentsUserIdInstanceValuesRoute,
  getApiV2RoutingAttributesAttributeIdRoute,
  getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  getApiV2RoutingAttributesAttributeIdValuesRoute,
  getApiV2RoutingAttributesDefinitionsRoute,
  getApiV2RoutingAttributesRoute,
  getApiV2RoutingRequirementsFulfilledRoute,
  getApiV2RoutingTicketsTicketIdInstanceValuesRoute,
  patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  postApiV2RoutingAgentsInstanceValuesJobsRoute,
  postApiV2RoutingAgentsUserIdInstanceValuesRoute,
  postApiV2RoutingAttributesAttributeIdValuesRoute,
  postApiV2RoutingAttributesRoute,
  postApiV2RoutingTicketsTicketIdInstanceValuesRoute,
  putApiV2RoutingAttributesAttributeIdRoute,
  putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skillBasedRoutingHandler = app
  .openapi(getApiV2RoutingAgentsUserIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAgentsUserIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAgentsInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAgentsInstanceValuesJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAttributesAttributeIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingRequirementsFulfilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingTicketsTicketIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingTicketsTicketIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
