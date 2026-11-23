import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetIdentityFeedbackForwardingEnabledRoute,
  postActionSetIdentityFeedbackForwardingEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetIdentityFeedbackForwardingEnabledHandler = app
  .openapi(getActionSetIdentityFeedbackForwardingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIdentityFeedbackForwardingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
