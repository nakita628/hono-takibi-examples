import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserAnalyticsStoreIdOptimisationsActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsCopyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analytics__OptimisationsHandler = app
  .openapi(postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
