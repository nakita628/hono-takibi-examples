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
} from './routes'
import {
  deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  deleteCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  getCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  getCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  patchCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  patchCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  postCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  postCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  postCrmExtensionsCalling202609InboundCallRouteHandler,
  postCrmExtensionsCalling202609RecordingsReadyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postCrmExtensionsCalling202609InboundCallRoute,
    postCrmExtensionsCalling202609InboundCallRouteHandler,
  )
  .openapi(
    postCrmExtensionsCalling202609RecordingsReadyRoute,
    postCrmExtensionsCalling202609RecordingsReadyRouteHandler,
  )
  .openapi(
    getCrmExtensionsCalling202609AppIdSettingsRoute,
    getCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  )
  .openapi(
    postCrmExtensionsCalling202609AppIdSettingsRoute,
    postCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  )
  .openapi(
    deleteCrmExtensionsCalling202609AppIdSettingsRoute,
    deleteCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  )
  .openapi(
    patchCrmExtensionsCalling202609AppIdSettingsRoute,
    patchCrmExtensionsCalling202609AppIdSettingsRouteHandler,
  )
  .openapi(
    getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
    getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  )
  .openapi(
    postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
    postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  )
  .openapi(
    deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
    deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  )
  .openapi(
    patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute,
    patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRouteHandler,
  )
  .openapi(
    getCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
    getCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  )
  .openapi(
    postCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
    postCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  )
  .openapi(
    patchCrmExtensionsCalling202609AppIdSettingsRecordingRoute,
    patchCrmExtensionsCalling202609AppIdSettingsRecordingRouteHandler,
  )

export default app
