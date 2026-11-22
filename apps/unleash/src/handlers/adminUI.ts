import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminInsightsLifecycleRoute,
  getApiAdminInsightsRoute,
  getApiAdminUiConfigRoute,
  postApiAdminFeedbackRoute,
  postApiAdminRecordUiErrorRoute,
  postApiAdminSplashIdRoute,
  postApiAdminUiConfigCorsRoute,
  putApiAdminFeedbackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminUIHandler = app
  .openapi(getApiAdminInsightsLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUiConfigCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeedbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSplashIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminRecordUiErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
