import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSettingsV1RecordingRulesServiceDeleteRecordingRuleRoute,
  postSettingsV1RecordingRulesServiceGetRecordingRuleRoute,
  postSettingsV1RecordingRulesServiceListRecordingRulesRoute,
  postSettingsV1RecordingRulesServiceUpsertRecordingRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsV1RecordingRulesServiceHandler = app
  .openapi(postSettingsV1RecordingRulesServiceDeleteRecordingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsV1RecordingRulesServiceGetRecordingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsV1RecordingRulesServiceListRecordingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsV1RecordingRulesServiceUpsertRecordingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
