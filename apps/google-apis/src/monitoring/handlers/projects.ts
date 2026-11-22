import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLocationLocationPrometheusApiV1LabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationLocationPrometheusApiV1MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLocationLocationPrometheusApiV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLocationLocationPrometheusApiV1QueryExemplarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLocationLocationPrometheusApiV1QueryRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLocationLocationPrometheusApiV1SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
