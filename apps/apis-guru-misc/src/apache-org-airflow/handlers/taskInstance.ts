import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute,
  postDagsTildeDagRunsTildeTaskInstancesListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskInstanceHandler = app
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsTildeDagRunsTildeTaskInstancesListRoute, (c) => {
    throw new Error('Not implemented')
  })
