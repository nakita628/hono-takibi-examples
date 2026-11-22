import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApmConfigRetentionFiltersFilterIdRoute,
  getApiV2ApmConfigRetentionFiltersFilterIdRoute,
  getApiV2ApmConfigRetentionFiltersRoute,
  postApiV2ApmConfigRetentionFiltersRoute,
  putApiV2ApmConfigRetentionFiltersExecutionOrderRoute,
  putApiV2ApmConfigRetentionFiltersFilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apmRetentionFiltersHandler = app
  .openapi(getApiV2ApmConfigRetentionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApmConfigRetentionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ApmConfigRetentionFiltersExecutionOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApmConfigRetentionFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApmConfigRetentionFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ApmConfigRetentionFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
