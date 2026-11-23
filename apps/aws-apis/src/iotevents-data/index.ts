import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlarmsAlarmModelNameKeyValuesIndexRoute,
  getAlarmsAlarmModelNameRoute,
  getDetectorsDetectorModelNameKeyValuesIndexRoute,
  getDetectorsDetectorModelNameRoute,
  postAlarmsAcknowledgeRoute,
  postAlarmsDisableRoute,
  postAlarmsEnableRoute,
  postAlarmsResetRoute,
  postAlarmsSnoozeRoute,
  postDetectorsDeleteRoute,
  postDetectorsRoute,
  postInputsMessagesRoute,
} from './routes'
import {
  getAlarmsAlarmModelNameKeyValuesIndexRouteHandler,
  getAlarmsAlarmModelNameRouteHandler,
  getDetectorsDetectorModelNameKeyValuesIndexRouteHandler,
  getDetectorsDetectorModelNameRouteHandler,
  postAlarmsAcknowledgeRouteHandler,
  postAlarmsDisableRouteHandler,
  postAlarmsEnableRouteHandler,
  postAlarmsResetRouteHandler,
  postAlarmsSnoozeRouteHandler,
  postDetectorsDeleteRouteHandler,
  postDetectorsRouteHandler,
  postInputsMessagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlarmsAcknowledgeRoute, postAlarmsAcknowledgeRouteHandler)
  .openapi(postDetectorsDeleteRoute, postDetectorsDeleteRouteHandler)
  .openapi(postAlarmsDisableRoute, postAlarmsDisableRouteHandler)
  .openapi(postAlarmsEnableRoute, postAlarmsEnableRouteHandler)
  .openapi(postInputsMessagesRoute, postInputsMessagesRouteHandler)
  .openapi(postAlarmsResetRoute, postAlarmsResetRouteHandler)
  .openapi(postAlarmsSnoozeRoute, postAlarmsSnoozeRouteHandler)
  .openapi(postDetectorsRoute, postDetectorsRouteHandler)
  .openapi(
    getAlarmsAlarmModelNameKeyValuesIndexRoute,
    getAlarmsAlarmModelNameKeyValuesIndexRouteHandler,
  )
  .openapi(
    getDetectorsDetectorModelNameKeyValuesIndexRoute,
    getDetectorsDetectorModelNameKeyValuesIndexRouteHandler,
  )
  .openapi(getAlarmsAlarmModelNameRoute, getAlarmsAlarmModelNameRouteHandler)
  .openapi(getDetectorsDetectorModelNameRoute, getDetectorsDetectorModelNameRouteHandler)

export default app
