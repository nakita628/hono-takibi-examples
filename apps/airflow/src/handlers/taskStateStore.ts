import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute,
  patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
  putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskStateStoreHandler = app
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
