import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DagsDagIdDagRunsDagRunIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdRoute,
  getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute,
  getApiV2DagsDagIdDagRunsDagRunIdWaitRoute,
  getApiV2DagsDagIdDagRunsRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdRoute,
  patchApiV2DagsDagIdDagRunsRoute,
  postApiV2DagsDagIdClearDagRunsRoute,
  postApiV2DagsDagIdClearPartitionsRoute,
  postApiV2DagsDagIdDagRunsDagRunIdClearRoute,
  postApiV2DagsDagIdDagRunsListRoute,
  postApiV2DagsDagIdDagRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagRunHandler = app
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdClearDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdClearPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
