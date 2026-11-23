import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AclkRoute,
  getApiV1AlarmCountRoute,
  getApiV1AlarmLogRoute,
  getApiV1AlarmsRoute,
  getApiV1AlarmsValuesRoute,
  getApiV1AlarmVariablesRoute,
  getApiV1AllmetricsRoute,
  getApiV1BadgeSvgRoute,
  getApiV1ChartRoute,
  getApiV1ChartsRoute,
  getApiV1ConfigRoute,
  getApiV1ContextRoute,
  getApiV1ContextsRoute,
  getApiV1DataRoute,
  getApiV1DbengineStatsRoute,
  getApiV1FunctionRoute,
  getApiV1FunctionsRoute,
  getApiV1InfoRoute,
  getApiV1ManageHealthRoute,
  getApiV1MetricCorrelationsRoute,
  getApiV1MlInfoRoute,
  getApiV1RegistryRoute,
  getApiV1VariableRoute,
  getApiV1WeightsRoute,
  getApiV2AlertConfigRoute,
  getApiV2AlertsRoute,
  getApiV2AlertTransitionsRoute,
  getApiV2BearerGetTokenRoute,
  getApiV2BearerProtectionRoute,
  getApiV2ClaimRoute,
  getApiV2ContextsRoute,
  getApiV2DataRoute,
  getApiV2FunctionsRoute,
  getApiV2InfoRoute,
  getApiV2NodeInstancesRoute,
  getApiV2NodesRoute,
  getApiV2ProgressRoute,
  getApiV2QRoute,
  getApiV2VersionsRoute,
  getApiV2WeightsRoute,
  getApiV3AlertConfigRoute,
  getApiV3AlertsRoute,
  getApiV3AlertTransitionsRoute,
  getApiV3AllmetricsRoute,
  getApiV3BadgeSvgRoute,
  getApiV3BearerGetTokenRoute,
  getApiV3BearerProtectionRoute,
  getApiV3ClaimRoute,
  getApiV3ConfigRoute,
  getApiV3ContextRoute,
  getApiV3ContextsRoute,
  getApiV3DataRoute,
  getApiV3FunctionRoute,
  getApiV3FunctionsRoute,
  getApiV3InfoRoute,
  getApiV3MeRoute,
  getApiV3NodeInstancesRoute,
  getApiV3NodesRoute,
  getApiV3ProgressRoute,
  getApiV3QRoute,
  getApiV3SettingsRoute,
  getApiV3StreamInfoRoute,
  getApiV3StreamPathRoute,
  getApiV3VariableRoute,
  getApiV3VersionsRoute,
  getApiV3WeightsRoute,
  postApiV1ConfigRoute,
  postApiV2RtcOfferRoute,
  postApiV3ConfigRoute,
  postApiV3FunctionRoute,
  postApiV3RtcOfferRoute,
  putApiV3SettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AllmetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BadgeSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BadgeSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AllmetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlertTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlertConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3VariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3StreamPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3VersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3StreamInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3RtcOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BearerProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BearerGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RtcOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BearerProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BearerGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetricCorrelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ManageHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AclkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DbengineStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
