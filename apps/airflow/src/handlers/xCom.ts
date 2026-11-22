import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const xComHandler = app
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
