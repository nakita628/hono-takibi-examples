import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdRoute,
  getAdAccountsAdAccountIdAdGroupsAnalyticsRoute,
  getAdAccountsAdAccountIdAdGroupsRoute,
  getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdPromotionAppliedEntitiesRoute,
  patchAdAccountsAdAccountIdAdGroupsRoute,
  postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRoute,
  postAdAccountsAdAccountIdAdGroupsAudienceSizingRoute,
  postAdAccountsAdAccountIdAdGroupsRoute,
  postAdAccountsAdAccountIdBidFloorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adGroupsHandler = app
  .openapi(getAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsAudienceSizingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdBidFloorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPromotionAppliedEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
