import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProductAnalyticsEntityMappingConnectionIdRoute,
  deleteApiV2ProductAnalyticsUsersUserIdRoute,
  getApiV2ProductAnalyticsEntityMappingConnectionsRoute,
  getApiV2ProductAnalyticsEntityMappingRoute,
  postApiV2ProductAnalyticsAccountsFacetInfoRoute,
  postApiV2ProductAnalyticsAccountsQueryRoute,
  postApiV2ProductAnalyticsEntityMappingConnectionRoute,
  postApiV2ProductAnalyticsUsersEventFilteredQueryRoute,
  postApiV2ProductAnalyticsUsersFacetInfoRoute,
  postApiV2ProductAnalyticsUsersQueryRoute,
  putApiV2ProductAnalyticsEntityMappingConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumAudienceManagementHandler = app
  .openapi(postApiV2ProductAnalyticsAccountsFacetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsAccountsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsUsersEventFilteredQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsUsersFacetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsUsersQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProductAnalyticsUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProductAnalyticsEntityMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsEntityMappingConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProductAnalyticsEntityMappingConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProductAnalyticsEntityMappingConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProductAnalyticsEntityMappingConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
