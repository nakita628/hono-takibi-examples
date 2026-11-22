import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedbackDiagnosisRoute,
  getZonesZoneIdBotManagementFeedbackRoute,
  postFeedbackSendRoute,
  postZonesZoneIdBotManagementFeedbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app
  .openapi(getFeedbackDiagnosisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedbackSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdBotManagementFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdBotManagementFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
