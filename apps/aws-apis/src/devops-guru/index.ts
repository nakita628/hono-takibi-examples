import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsIdRoute,
  deleteInsightsIdRoute,
  getAccountsHealthResourceCollectionResourceCollectionTypeRoute,
  getAccountsHealthRoute,
  getAnomaliesIdRoute,
  getCostEstimationRoute,
  getInsightsIdRoute,
  getResourceCollectionsResourceCollectionTypeRoute,
  getServiceIntegrationsRoute,
  postAccountsOverviewRoute,
  postAnomaliesInsightInsightIdRoute,
  postChannelsRoute,
  postEventSourcesRoute,
  postEventsRoute,
  postFeedbackRoute,
  postInsightsRoute,
  postInsightsSearchRoute,
  postListLogAnomaliesRoute,
  postMonitoredResourcesRoute,
  postOrganizationHealthResourceCollectionRoute,
  postOrganizationHealthRoute,
  postOrganizationInsightsRoute,
  postOrganizationInsightsSearchRoute,
  postOrganizationOverviewRoute,
  postRecommendationsRoute,
  putChannelsRoute,
  putCostEstimationRoute,
  putEventSourcesRoute,
  putFeedbackRoute,
  putResourceCollectionsRoute,
  putServiceIntegrationsRoute,
} from './routes'
import {
  deleteChannelsIdRouteHandler,
  deleteInsightsIdRouteHandler,
  getAccountsHealthResourceCollectionResourceCollectionTypeRouteHandler,
  getAccountsHealthRouteHandler,
  getAnomaliesIdRouteHandler,
  getCostEstimationRouteHandler,
  getInsightsIdRouteHandler,
  getResourceCollectionsResourceCollectionTypeRouteHandler,
  getServiceIntegrationsRouteHandler,
  postAccountsOverviewRouteHandler,
  postAnomaliesInsightInsightIdRouteHandler,
  postChannelsRouteHandler,
  postEventSourcesRouteHandler,
  postEventsRouteHandler,
  postFeedbackRouteHandler,
  postInsightsRouteHandler,
  postInsightsSearchRouteHandler,
  postListLogAnomaliesRouteHandler,
  postMonitoredResourcesRouteHandler,
  postOrganizationHealthResourceCollectionRouteHandler,
  postOrganizationHealthRouteHandler,
  postOrganizationInsightsRouteHandler,
  postOrganizationInsightsSearchRouteHandler,
  postOrganizationOverviewRouteHandler,
  postRecommendationsRouteHandler,
  putChannelsRouteHandler,
  putCostEstimationRouteHandler,
  putEventSourcesRouteHandler,
  putFeedbackRouteHandler,
  putResourceCollectionsRouteHandler,
  putServiceIntegrationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putChannelsRoute, putChannelsRouteHandler)
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(deleteInsightsIdRoute, deleteInsightsIdRouteHandler)
  .openapi(getInsightsIdRoute, getInsightsIdRouteHandler)
  .openapi(getAccountsHealthRoute, getAccountsHealthRouteHandler)
  .openapi(postAccountsOverviewRoute, postAccountsOverviewRouteHandler)
  .openapi(getAnomaliesIdRoute, getAnomaliesIdRouteHandler)
  .openapi(postEventSourcesRoute, postEventSourcesRouteHandler)
  .openapi(putEventSourcesRoute, putEventSourcesRouteHandler)
  .openapi(postFeedbackRoute, postFeedbackRouteHandler)
  .openapi(putFeedbackRoute, putFeedbackRouteHandler)
  .openapi(postOrganizationHealthRoute, postOrganizationHealthRouteHandler)
  .openapi(postOrganizationOverviewRoute, postOrganizationOverviewRouteHandler)
  .openapi(
    postOrganizationHealthResourceCollectionRoute,
    postOrganizationHealthResourceCollectionRouteHandler,
  )
  .openapi(
    getAccountsHealthResourceCollectionResourceCollectionTypeRoute,
    getAccountsHealthResourceCollectionResourceCollectionTypeRouteHandler,
  )
  .openapi(getServiceIntegrationsRoute, getServiceIntegrationsRouteHandler)
  .openapi(putServiceIntegrationsRoute, putServiceIntegrationsRouteHandler)
  .openapi(getCostEstimationRoute, getCostEstimationRouteHandler)
  .openapi(putCostEstimationRoute, putCostEstimationRouteHandler)
  .openapi(
    getResourceCollectionsResourceCollectionTypeRoute,
    getResourceCollectionsResourceCollectionTypeRouteHandler,
  )
  .openapi(postAnomaliesInsightInsightIdRoute, postAnomaliesInsightInsightIdRouteHandler)
  .openapi(postListLogAnomaliesRoute, postListLogAnomaliesRouteHandler)
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(postInsightsRoute, postInsightsRouteHandler)
  .openapi(postMonitoredResourcesRoute, postMonitoredResourcesRouteHandler)
  .openapi(postOrganizationInsightsRoute, postOrganizationInsightsRouteHandler)
  .openapi(postRecommendationsRoute, postRecommendationsRouteHandler)
  .openapi(deleteChannelsIdRoute, deleteChannelsIdRouteHandler)
  .openapi(postInsightsSearchRoute, postInsightsSearchRouteHandler)
  .openapi(postOrganizationInsightsSearchRoute, postOrganizationInsightsSearchRouteHandler)
  .openapi(putResourceCollectionsRoute, putResourceCollectionsRouteHandler)

export default app
