import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDagsDagIdDagRunsDagRunIdRoute,
  getDagsDagIdDagRunsDagRunIdRoute,
  getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute,
  getDagsDagIdDagRunsRoute,
  patchDagsDagIdDagRunsDagRunIdRoute,
  patchDagsDagIdDagRunsDagRunIdSetNoteRoute,
  postDagsDagIdDagRunsDagRunIdClearRoute,
  postDagsDagIdDagRunsRoute,
  postDagsTildeDagRunsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagRunHandler = app
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
  .openapi(getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsTildeDagRunsListRoute, (c) => {
    throw new Error('Not implemented')
  })
