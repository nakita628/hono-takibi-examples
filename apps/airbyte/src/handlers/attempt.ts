import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1AttemptCreateNewAttemptNumberRoute,
  postV1AttemptFailRoute,
  postV1AttemptGetCombinedStatsRoute,
  postV1AttemptGetForJobRoute,
  postV1AttemptSaveStatsRoute,
  postV1AttemptSaveStreamMetadataRoute,
  postV1AttemptSaveSyncConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attemptHandler = app
  .openapi(postV1AttemptCreateNewAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveStreamMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptGetCombinedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptGetForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
