import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1AlertsAlertIdRoute,
  getV1beta1AlertsAlertIdFeedbackRoute,
  getV1beta1AlertsAlertIdMetadataRoute,
  getV1beta1AlertsAlertIdRoute,
  getV1beta1AlertsRoute,
  getV1beta1SettingsRoute,
  patchV1beta1SettingsRoute,
  postV1beta1AlertsAlertIdFeedbackRoute,
  postV1beta1AlertsAlertIdUndeleteRoute,
  postV1beta1AlertsBatchDeleteRoute,
  postV1beta1AlertsBatchUndeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1AlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1AlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AlertsAlertIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AlertsAlertIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AlertsAlertIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AlertsAlertIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AlertsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AlertsBatchUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
