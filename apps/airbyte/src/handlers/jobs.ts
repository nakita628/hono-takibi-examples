import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1JobsCancelQueuedJobRoute,
  postV1JobsCancelRoute,
  postV1JobsCheckDataWorkerCapacityRoute,
  postV1JobsCreateRoute,
  postV1JobsDeleteStreamResetRecordsRoute,
  postV1JobsDidPreviousJobSucceedRoute,
  postV1JobsEvaluateOutlierRoute,
  postV1JobsExplainRoute,
  postV1JobsFailNonTerminalRoute,
  postV1JobsFinalizeRoute,
  postV1JobsGetDebugInfoRoute,
  postV1JobsGetInputRoute,
  postV1JobsGetLastReplicationJobRoute,
  postV1JobsGetLastReplicationJobWithCancelRoute,
  postV1JobsGetLightRoute,
  postV1JobsGetRoute,
  postV1JobsGetWebhookConfigRoute,
  postV1JobsGetWithoutLogsRoute,
  postV1JobsJobFailureRoute,
  postV1JobsJobSuccessWithAttemptNumberRoute,
  postV1JobsListForWorkspacesRoute,
  postV1JobsListRoute,
  postV1JobsPersistCancellationRoute,
  postV1JobsReportJobStartRoute,
  postV1JobsSetJobQueuedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postV1JobsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsJobSuccessWithAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListForWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobWithCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetWithoutLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetDebugInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsFailNonTerminalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsReportJobStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsSetJobQueuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCancelQueuedJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCheckDataWorkerCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetWebhookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsJobFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsDeleteStreamResetRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsEvaluateOutlierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsDidPreviousJobSucceedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsPersistCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
