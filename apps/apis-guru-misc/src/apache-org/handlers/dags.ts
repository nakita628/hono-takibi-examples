import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDagsDagIdDagRunsDagRunIdRoute,
  deleteDagsDagIdRoute,
  getDagsDagIdDagRunsDagRunIdRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute,
  getDagsDagIdDagRunsRoute,
  getDagsDagIdDetailsRoute,
  getDagsDagIdRoute,
  getDagsDagIdTasksRoute,
  getDagsDagIdTasksTaskIdRoute,
  getDagsRoute,
  patchDagsDagIdDagRunsDagRunIdRoute,
  patchDagsDagIdDagRunsDagRunIdSetNoteRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute,
  patchDagsDagIdRoute,
  patchDagsRoute,
  postDagsDagIdClearTaskInstancesRoute,
  postDagsDagIdDagRunsDagRunIdClearRoute,
  postDagsDagIdDagRunsRoute,
  postDagsDagIdUpdateTaskInstancesStateRoute,
  postDagsTildeDagRunsListRoute,
  postDagsTildeDagRunsTildeTaskInstancesListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagsHandler = app
  .openapi(getDagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdClearTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdDagRunsDagRunIdClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdDagRunsDagRunIdSetNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
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
  .openapi(getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdUpdateTaskInstancesStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsTildeDagRunsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsTildeDagRunsTildeTaskInstancesListRoute, (c) => {
    throw new Error('Not implemented')
  })
