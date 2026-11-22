import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageIdRoute,
  getApiV4ProjectsIdIssuesIssueIidMetricImagesRoute,
  postApiV4ProjectsIdIssuesIssueIidMetricImagesAuthorizeRoute,
  postApiV4ProjectsIdIssuesIssueIidMetricImagesRoute,
  putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricImagesHandler = app
  .openapi(postApiV4ProjectsIdIssuesIssueIidMetricImagesAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidMetricImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidMetricImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
