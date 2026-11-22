import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BackfillsBackfillIdDagRunsRoute,
  getApiV2BackfillsBackfillIdRoute,
  getApiV2BackfillsRoute,
  postApiV2BackfillsDryRunRoute,
  postApiV2BackfillsRoute,
  putApiV2BackfillsBackfillIdCancelRoute,
  putApiV2BackfillsBackfillIdPauseRoute,
  putApiV2BackfillsBackfillIdUnpauseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backfillHandler = app
  .openapi(getApiV2BackfillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BackfillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BackfillsBackfillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BackfillsBackfillIdDagRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BackfillsBackfillIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BackfillsDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
