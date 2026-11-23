import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlertsAlertIdAnnotationsRoute,
  getAlertsAlertIdAttachmentsAttachmentIdRoute,
  getAlertsAlertIdAttachmentsRoute,
  getAlertsAlertIdNotificationsRoute,
  getAlertsAlertIdOverviewRoute,
  getAlertsAlertIdRoute,
  getAlertsReportRoute,
  postAlertsAcknowledgeAllRoute,
  postAlertsAcknowledgeMultipleRoute,
  postAlertsAlertIdAcknowledgeRoute,
  postAlertsAlertIdAnnotateRoute,
  postAlertsAlertIdCloseRoute,
  postAlertsAlertIdUndoAcknowledgeRoute,
  postAlertsAlertIdUndoCloseRoute,
  postAlertsCloseAllRoute,
  postAlertsCloseMultipleRoute,
  postAlertsPagedRoute,
  postAlertsRoute,
  postAlertsUndoAcknowledgeMultipleRoute,
  postAlertsUndoCloseMultipleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(postAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAcknowledgeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAcknowledgeMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsCloseAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsCloseMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsUndoAcknowledgeMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsUndoCloseMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdUndoAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdUndoCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
