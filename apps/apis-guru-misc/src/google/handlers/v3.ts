import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3NameRoute,
  getV3NameFreeBookingLinksReportViewsQueryRoute,
  getV3NameParticipationReportViewsQueryRoute,
  getV3NamePropertyPerformanceReportViewsQueryRoute,
  getV3NameRoute,
  getV3ParentAccountLinksRoute,
  getV3ParentBrandsRoute,
  getV3ParentHotelViewsRoute,
  getV3ParentHotelViewsSummarizeRoute,
  getV3ParentIconsRoute,
  getV3ParentPriceAccuracyViewsRoute,
  getV3ParentPriceAccuracyViewsSummarizeRoute,
  getV3ParentPriceCoverageViewsLatestRoute,
  getV3ParentPriceCoverageViewsRoute,
  getV3ParentReconciliationReportsRoute,
  patchV3NameRoute,
  postV3AccountHotelsSetLiveOnGoogleRoute,
  postV3ParentAccountLinksRoute,
  postV3ParentBrandsRoute,
  postV3ParentIconsRoute,
  postV3ParentListingsVerifyRoute,
  postV3ParentReconciliationReportsRoute,
  postV3ParentReconciliationReportsValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(postV3AccountHotelsSetLiveOnGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameFreeBookingLinksReportViewsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameParticipationReportViewsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NamePropertyPerformanceReportViewsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentAccountLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentAccountLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentHotelViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentHotelViewsSummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentListingsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentPriceAccuracyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentPriceAccuracyViewsSummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentPriceCoverageViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentPriceCoverageViewsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentReconciliationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentReconciliationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentReconciliationReportsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
