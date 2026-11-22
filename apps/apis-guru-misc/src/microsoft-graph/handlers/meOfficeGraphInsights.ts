import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeInsightsRoute,
  deleteMeInsightsSharedSharedInsightIdRoute,
  deleteMeInsightsTrendingTrendingIdRoute,
  deleteMeInsightsUsedUsedInsightIdRoute,
  getMeInsightsRoute,
  getMeInsightsSharedRoute,
  getMeInsightsSharedSharedInsightIdLastSharedMethodRoute,
  getMeInsightsSharedSharedInsightIdResourceRoute,
  getMeInsightsSharedSharedInsightIdRoute,
  getMeInsightsTrendingRoute,
  getMeInsightsTrendingTrendingIdResourceRoute,
  getMeInsightsTrendingTrendingIdRoute,
  getMeInsightsUsedRoute,
  getMeInsightsUsedUsedInsightIdResourceRoute,
  getMeInsightsUsedUsedInsightIdRoute,
  patchMeInsightsRoute,
  patchMeInsightsSharedSharedInsightIdRoute,
  patchMeInsightsTrendingTrendingIdRoute,
  patchMeInsightsUsedUsedInsightIdRoute,
  postMeInsightsSharedRoute,
  postMeInsightsTrendingRoute,
  postMeInsightsUsedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOfficeGraphInsightsHandler = app
  .openapi(deleteMeInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeInsightsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsSharedSharedInsightIdLastSharedMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsSharedSharedInsightIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeInsightsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsTrendingTrendingIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeInsightsUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsUsedUsedInsightIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
