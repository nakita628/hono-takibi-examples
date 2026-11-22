import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSyncNameVariantVariantRoute,
  getSyncStatusRoute,
  postSyncNameVariantVariantRoute,
  postSyncPauseRoute,
  postSyncStartRoute,
  postSyncTriggerRoute,
  putSyncUpdateConnectionFrequencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app
  .openapi(postSyncTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncNameVariantVariantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSyncNameVariantVariantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSyncUpdateConnectionFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
