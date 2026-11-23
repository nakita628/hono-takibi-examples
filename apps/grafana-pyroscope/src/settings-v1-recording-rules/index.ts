import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSettingsV1RecordingRulesServiceDeleteRecordingRuleRoute,
  postSettingsV1RecordingRulesServiceGetRecordingRuleRoute,
  postSettingsV1RecordingRulesServiceListRecordingRulesRoute,
  postSettingsV1RecordingRulesServiceUpsertRecordingRuleRoute,
} from './routes'
import {
  postSettingsV1RecordingRulesServiceDeleteRecordingRuleRouteHandler,
  postSettingsV1RecordingRulesServiceGetRecordingRuleRouteHandler,
  postSettingsV1RecordingRulesServiceListRecordingRulesRouteHandler,
  postSettingsV1RecordingRulesServiceUpsertRecordingRuleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSettingsV1RecordingRulesServiceDeleteRecordingRuleRoute,
    postSettingsV1RecordingRulesServiceDeleteRecordingRuleRouteHandler,
  )
  .openapi(
    postSettingsV1RecordingRulesServiceGetRecordingRuleRoute,
    postSettingsV1RecordingRulesServiceGetRecordingRuleRouteHandler,
  )
  .openapi(
    postSettingsV1RecordingRulesServiceListRecordingRulesRoute,
    postSettingsV1RecordingRulesServiceListRecordingRulesRouteHandler,
  )
  .openapi(
    postSettingsV1RecordingRulesServiceUpsertRecordingRuleRoute,
    postSettingsV1RecordingRulesServiceUpsertRecordingRuleRouteHandler,
  )

export default app
