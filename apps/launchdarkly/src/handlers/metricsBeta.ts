import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  getApiV2ProjectsProjectKeyMetricGroupsRoute,
  patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  postApiV2ProjectsProjectKeyMetricGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsBetaHandler = app
  .openapi(getApiV2ProjectsProjectKeyMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
