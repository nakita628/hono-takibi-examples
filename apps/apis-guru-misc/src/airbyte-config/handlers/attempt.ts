import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1AttemptSaveStatsRoute,
  postV1AttemptSaveSyncConfigRoute,
  postV1AttemptSetWorkflowInAttemptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attemptHandler = app
  .openapi(postV1AttemptSaveStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSetWorkflowInAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
