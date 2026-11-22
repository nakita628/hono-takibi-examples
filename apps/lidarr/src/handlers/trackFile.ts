import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TrackfileBulkRoute,
  deleteApiV1TrackfileIdRoute,
  getApiV1TrackfileIdRoute,
  getApiV1TrackfileRoute,
  putApiV1TrackfileEditorRoute,
  putApiV1TrackfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackFileHandler = app
  .openapi(getApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TrackfileEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TrackfileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
