import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateProjectsIdRoute,
  getV1PrivateProjectsFeedbackScoresNamesRoute,
  getV1PrivateProjectsIdRoute,
  getV1PrivateProjectsIdTokenUsageNamesRoute,
  getV1PrivateProjectsProjectIdActivitiesRoute,
  getV1PrivateProjectsProjectIdAlertsRoute,
  getV1PrivateProjectsProjectIdDashboardsRoute,
  getV1PrivateProjectsProjectIdDatasetsRoute,
  getV1PrivateProjectsProjectIdExperimentsRoute,
  getV1PrivateProjectsProjectIdOptimizationsRoute,
  getV1PrivateProjectsProjectIdPromptsRoute,
  getV1PrivateProjectsRoute,
  getV1PrivateProjectsStatsRoute,
  patchV1PrivateProjectsIdRoute,
  postV1PrivateProjectsDeleteRoute,
  postV1PrivateProjectsIdKpiCardsRoute,
  postV1PrivateProjectsIdMetricsRoute,
  postV1PrivateProjectsRetrieveRoute,
  postV1PrivateProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1PrivateProjectsProjectIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdPromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsIdTokenUsageNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsIdKpiCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
