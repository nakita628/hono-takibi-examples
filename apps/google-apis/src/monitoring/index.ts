import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRoute,
  getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRoute,
  getV1NameLocationLocationPrometheusApiV1MetadataRoute,
  getV1NameRoute,
  getV1ParentDashboardsRoute,
  patchV1NameRoute,
  postV1NameLocationLocationPrometheusApiV1LabelsRoute,
  postV1NameLocationLocationPrometheusApiV1QueryExemplarsRoute,
  postV1NameLocationLocationPrometheusApiV1QueryRangeRoute,
  postV1NameLocationLocationPrometheusApiV1QueryRoute,
  postV1NameLocationLocationPrometheusApiV1SeriesRoute,
  postV1ParentDashboardsRoute,
  postV1ParentProjectsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRouteHandler,
  getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRouteHandler,
  getV1NameLocationLocationPrometheusApiV1MetadataRouteHandler,
  getV1NameRouteHandler,
  getV1ParentDashboardsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameLocationLocationPrometheusApiV1LabelsRouteHandler,
  postV1NameLocationLocationPrometheusApiV1QueryExemplarsRouteHandler,
  postV1NameLocationLocationPrometheusApiV1QueryRangeRouteHandler,
  postV1NameLocationLocationPrometheusApiV1QueryRouteHandler,
  postV1NameLocationLocationPrometheusApiV1SeriesRouteHandler,
  postV1ParentDashboardsRouteHandler,
  postV1ParentProjectsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRoute,
    getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(
    getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRoute,
    getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRouteHandler,
  )
  .openapi(
    postV1NameLocationLocationPrometheusApiV1LabelsRoute,
    postV1NameLocationLocationPrometheusApiV1LabelsRouteHandler,
  )
  .openapi(
    getV1NameLocationLocationPrometheusApiV1MetadataRoute,
    getV1NameLocationLocationPrometheusApiV1MetadataRouteHandler,
  )
  .openapi(
    postV1NameLocationLocationPrometheusApiV1QueryRoute,
    postV1NameLocationLocationPrometheusApiV1QueryRouteHandler,
  )
  .openapi(
    postV1NameLocationLocationPrometheusApiV1QueryExemplarsRoute,
    postV1NameLocationLocationPrometheusApiV1QueryExemplarsRouteHandler,
  )
  .openapi(
    postV1NameLocationLocationPrometheusApiV1QueryRangeRoute,
    postV1NameLocationLocationPrometheusApiV1QueryRangeRouteHandler,
  )
  .openapi(
    postV1NameLocationLocationPrometheusApiV1SeriesRoute,
    postV1NameLocationLocationPrometheusApiV1SeriesRouteHandler,
  )
  .openapi(getV1ParentDashboardsRoute, getV1ParentDashboardsRouteHandler)
  .openapi(postV1ParentDashboardsRoute, postV1ParentDashboardsRouteHandler)
  .openapi(postV1ParentProjectsRoute, postV1ParentProjectsRouteHandler)

export default app
