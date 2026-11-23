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
} from './routes'
import {
  deleteV3NameRouteHandler,
  getV3NameFreeBookingLinksReportViewsQueryRouteHandler,
  getV3NameParticipationReportViewsQueryRouteHandler,
  getV3NamePropertyPerformanceReportViewsQueryRouteHandler,
  getV3NameRouteHandler,
  getV3ParentAccountLinksRouteHandler,
  getV3ParentBrandsRouteHandler,
  getV3ParentHotelViewsRouteHandler,
  getV3ParentHotelViewsSummarizeRouteHandler,
  getV3ParentIconsRouteHandler,
  getV3ParentPriceAccuracyViewsRouteHandler,
  getV3ParentPriceAccuracyViewsSummarizeRouteHandler,
  getV3ParentPriceCoverageViewsLatestRouteHandler,
  getV3ParentPriceCoverageViewsRouteHandler,
  getV3ParentReconciliationReportsRouteHandler,
  patchV3NameRouteHandler,
  postV3AccountHotelsSetLiveOnGoogleRouteHandler,
  postV3ParentAccountLinksRouteHandler,
  postV3ParentBrandsRouteHandler,
  postV3ParentIconsRouteHandler,
  postV3ParentListingsVerifyRouteHandler,
  postV3ParentReconciliationReportsRouteHandler,
  postV3ParentReconciliationReportsValidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV3AccountHotelsSetLiveOnGoogleRoute, postV3AccountHotelsSetLiveOnGoogleRouteHandler)
  .openapi(deleteV3NameRoute, deleteV3NameRouteHandler)
  .openapi(getV3NameRoute, getV3NameRouteHandler)
  .openapi(patchV3NameRoute, patchV3NameRouteHandler)
  .openapi(
    getV3NameFreeBookingLinksReportViewsQueryRoute,
    getV3NameFreeBookingLinksReportViewsQueryRouteHandler,
  )
  .openapi(
    getV3NameParticipationReportViewsQueryRoute,
    getV3NameParticipationReportViewsQueryRouteHandler,
  )
  .openapi(
    getV3NamePropertyPerformanceReportViewsQueryRoute,
    getV3NamePropertyPerformanceReportViewsQueryRouteHandler,
  )
  .openapi(getV3ParentAccountLinksRoute, getV3ParentAccountLinksRouteHandler)
  .openapi(postV3ParentAccountLinksRoute, postV3ParentAccountLinksRouteHandler)
  .openapi(getV3ParentBrandsRoute, getV3ParentBrandsRouteHandler)
  .openapi(postV3ParentBrandsRoute, postV3ParentBrandsRouteHandler)
  .openapi(getV3ParentHotelViewsRoute, getV3ParentHotelViewsRouteHandler)
  .openapi(getV3ParentHotelViewsSummarizeRoute, getV3ParentHotelViewsSummarizeRouteHandler)
  .openapi(getV3ParentIconsRoute, getV3ParentIconsRouteHandler)
  .openapi(postV3ParentIconsRoute, postV3ParentIconsRouteHandler)
  .openapi(postV3ParentListingsVerifyRoute, postV3ParentListingsVerifyRouteHandler)
  .openapi(getV3ParentPriceAccuracyViewsRoute, getV3ParentPriceAccuracyViewsRouteHandler)
  .openapi(
    getV3ParentPriceAccuracyViewsSummarizeRoute,
    getV3ParentPriceAccuracyViewsSummarizeRouteHandler,
  )
  .openapi(getV3ParentPriceCoverageViewsRoute, getV3ParentPriceCoverageViewsRouteHandler)
  .openapi(
    getV3ParentPriceCoverageViewsLatestRoute,
    getV3ParentPriceCoverageViewsLatestRouteHandler,
  )
  .openapi(getV3ParentReconciliationReportsRoute, getV3ParentReconciliationReportsRouteHandler)
  .openapi(postV3ParentReconciliationReportsRoute, postV3ParentReconciliationReportsRouteHandler)
  .openapi(
    postV3ParentReconciliationReportsValidateRoute,
    postV3ParentReconciliationReportsValidateRouteHandler,
  )

export default app
