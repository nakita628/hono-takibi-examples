import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2AnyChannelChannelbackReportErrorRoute,
  postApiV2AnyChannelPushRoute,
  postApiV2AnyChannelValidateTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelFrameworkHandler = app
  .openapi(postApiV2AnyChannelChannelbackReportErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnyChannelPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnyChannelValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
