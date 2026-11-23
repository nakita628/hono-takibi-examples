import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
  deleteCrmExtensionsCalling202609AppIdSettingsRoute,
  getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
  getCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
  getCrmExtensionsCalling202609AppIdSettingsRoute,
  patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
  patchCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
  patchCrmExtensionsCalling202609AppIdSettingsRoute,
  postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
  postCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
  postCrmExtensionsCalling202609AppIdSettingsRoute,
  postCrmExtensionsCalling202609InboundCallRoute,
  postCrmExtensionsCalling202609RecordingsReadyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(postCrmExtensionsCalling202609InboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609RecordingsReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCalling202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsCalling202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmExtensionsCalling202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCalling202609AppIdSettingsRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609AppIdSettingsRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmExtensionsCalling202609AppIdSettingsRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
