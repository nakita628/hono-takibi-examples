import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatTranscriptRidRoute,
  postApiV1LivechatTranscriptRidRoute,
  postApiV1LivechatTranscriptRoute,
  postApiV1OmnichannelRidRequestTranscriptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelTranscriptHandler = app
  .openapi(postApiV1LivechatTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTranscriptRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatTranscriptRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelRidRequestTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
