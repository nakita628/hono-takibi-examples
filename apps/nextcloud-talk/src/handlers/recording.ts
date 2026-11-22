import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordingHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
