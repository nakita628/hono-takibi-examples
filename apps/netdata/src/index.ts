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
} from './routes'
import {
  getApiV1AclkRouteHandler,
  getApiV1AlarmCountRouteHandler,
  getApiV1AlarmLogRouteHandler,
  getApiV1AlarmsRouteHandler,
  getApiV1AlarmsValuesRouteHandler,
  getApiV1AlarmVariablesRouteHandler,
  getApiV1AllmetricsRouteHandler,
  getApiV1BadgeSvgRouteHandler,
  getApiV1ChartRouteHandler,
  getApiV1ChartsRouteHandler,
  getApiV1ConfigRouteHandler,
  getApiV1ContextRouteHandler,
  getApiV1ContextsRouteHandler,
  getApiV1DataRouteHandler,
  getApiV1DbengineStatsRouteHandler,
  getApiV1FunctionRouteHandler,
  getApiV1FunctionsRouteHandler,
  getApiV1InfoRouteHandler,
  getApiV1ManageHealthRouteHandler,
  getApiV1MetricCorrelationsRouteHandler,
  getApiV1MlInfoRouteHandler,
  getApiV1RegistryRouteHandler,
  getApiV1VariableRouteHandler,
  getApiV1WeightsRouteHandler,
  getApiV2AlertConfigRouteHandler,
  getApiV2AlertsRouteHandler,
  getApiV2AlertTransitionsRouteHandler,
  getApiV2BearerGetTokenRouteHandler,
  getApiV2BearerProtectionRouteHandler,
  getApiV2ClaimRouteHandler,
  getApiV2ContextsRouteHandler,
  getApiV2DataRouteHandler,
  getApiV2FunctionsRouteHandler,
  getApiV2InfoRouteHandler,
  getApiV2NodeInstancesRouteHandler,
  getApiV2NodesRouteHandler,
  getApiV2ProgressRouteHandler,
  getApiV2QRouteHandler,
  getApiV2VersionsRouteHandler,
  getApiV2WeightsRouteHandler,
  getApiV3AlertConfigRouteHandler,
  getApiV3AlertsRouteHandler,
  getApiV3AlertTransitionsRouteHandler,
  getApiV3AllmetricsRouteHandler,
  getApiV3BadgeSvgRouteHandler,
  getApiV3BearerGetTokenRouteHandler,
  getApiV3BearerProtectionRouteHandler,
  getApiV3ClaimRouteHandler,
  getApiV3ConfigRouteHandler,
  getApiV3ContextRouteHandler,
  getApiV3ContextsRouteHandler,
  getApiV3DataRouteHandler,
  getApiV3FunctionRouteHandler,
  getApiV3FunctionsRouteHandler,
  getApiV3InfoRouteHandler,
  getApiV3MeRouteHandler,
  getApiV3NodeInstancesRouteHandler,
  getApiV3NodesRouteHandler,
  getApiV3ProgressRouteHandler,
  getApiV3QRouteHandler,
  getApiV3SettingsRouteHandler,
  getApiV3StreamInfoRouteHandler,
  getApiV3StreamPathRouteHandler,
  getApiV3VariableRouteHandler,
  getApiV3VersionsRouteHandler,
  getApiV3WeightsRouteHandler,
  postApiV1ConfigRouteHandler,
  postApiV2RtcOfferRouteHandler,
  postApiV3ConfigRouteHandler,
  postApiV3FunctionRouteHandler,
  postApiV3RtcOfferRouteHandler,
  putApiV3SettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV2NodesRoute, getApiV2NodesRouteHandler)
  .openapi(getApiV3NodesRoute, getApiV3NodesRouteHandler)
  .openapi(getApiV2ContextsRoute, getApiV2ContextsRouteHandler)
  .openapi(getApiV3ContextsRoute, getApiV3ContextsRouteHandler)
  .openapi(getApiV2QRoute, getApiV2QRouteHandler)
  .openapi(getApiV3QRoute, getApiV3QRouteHandler)
  .openapi(getApiV1InfoRoute, getApiV1InfoRouteHandler)
  .openapi(getApiV1ChartsRoute, getApiV1ChartsRouteHandler)
  .openapi(getApiV1ChartRoute, getApiV1ChartRouteHandler)
  .openapi(getApiV1ContextsRoute, getApiV1ContextsRouteHandler)
  .openapi(getApiV1ContextRoute, getApiV1ContextRouteHandler)
  .openapi(getApiV3ContextRoute, getApiV3ContextRouteHandler)
  .openapi(getApiV1ConfigRoute, getApiV1ConfigRouteHandler)
  .openapi(postApiV1ConfigRoute, postApiV1ConfigRouteHandler)
  .openapi(getApiV2DataRoute, getApiV2DataRouteHandler)
  .openapi(getApiV3DataRoute, getApiV3DataRouteHandler)
  .openapi(getApiV1DataRoute, getApiV1DataRouteHandler)
  .openapi(getApiV1AllmetricsRoute, getApiV1AllmetricsRouteHandler)
  .openapi(getApiV1BadgeSvgRoute, getApiV1BadgeSvgRouteHandler)
  .openapi(getApiV3BadgeSvgRoute, getApiV3BadgeSvgRouteHandler)
  .openapi(getApiV3AllmetricsRoute, getApiV3AllmetricsRouteHandler)
  .openapi(getApiV3AlertsRoute, getApiV3AlertsRouteHandler)
  .openapi(getApiV3AlertTransitionsRoute, getApiV3AlertTransitionsRouteHandler)
  .openapi(getApiV3AlertConfigRoute, getApiV3AlertConfigRouteHandler)
  .openapi(getApiV3VariableRoute, getApiV3VariableRouteHandler)
  .openapi(getApiV3InfoRoute, getApiV3InfoRouteHandler)
  .openapi(getApiV3NodeInstancesRoute, getApiV3NodeInstancesRouteHandler)
  .openapi(getApiV3StreamPathRoute, getApiV3StreamPathRouteHandler)
  .openapi(getApiV3VersionsRoute, getApiV3VersionsRouteHandler)
  .openapi(getApiV3ProgressRoute, getApiV3ProgressRouteHandler)
  .openapi(getApiV3FunctionRoute, getApiV3FunctionRouteHandler)
  .openapi(postApiV3FunctionRoute, postApiV3FunctionRouteHandler)
  .openapi(getApiV3FunctionsRoute, getApiV3FunctionsRouteHandler)
  .openapi(getApiV3ConfigRoute, getApiV3ConfigRouteHandler)
  .openapi(postApiV3ConfigRoute, postApiV3ConfigRouteHandler)
  .openapi(getApiV3SettingsRoute, getApiV3SettingsRouteHandler)
  .openapi(putApiV3SettingsRoute, putApiV3SettingsRouteHandler)
  .openapi(getApiV3StreamInfoRoute, getApiV3StreamInfoRouteHandler)
  .openapi(postApiV3RtcOfferRoute, postApiV3RtcOfferRouteHandler)
  .openapi(getApiV3ClaimRoute, getApiV3ClaimRouteHandler)
  .openapi(getApiV3BearerProtectionRoute, getApiV3BearerProtectionRouteHandler)
  .openapi(getApiV3BearerGetTokenRoute, getApiV3BearerGetTokenRouteHandler)
  .openapi(getApiV3MeRoute, getApiV3MeRouteHandler)
  .openapi(getApiV2WeightsRoute, getApiV2WeightsRouteHandler)
  .openapi(getApiV2AlertsRoute, getApiV2AlertsRouteHandler)
  .openapi(getApiV2AlertTransitionsRoute, getApiV2AlertTransitionsRouteHandler)
  .openapi(getApiV2AlertConfigRoute, getApiV2AlertConfigRouteHandler)
  .openapi(getApiV2InfoRoute, getApiV2InfoRouteHandler)
  .openapi(getApiV2NodeInstancesRoute, getApiV2NodeInstancesRouteHandler)
  .openapi(getApiV2VersionsRoute, getApiV2VersionsRouteHandler)
  .openapi(getApiV2ProgressRoute, getApiV2ProgressRouteHandler)
  .openapi(getApiV2FunctionsRoute, getApiV2FunctionsRouteHandler)
  .openapi(postApiV2RtcOfferRoute, postApiV2RtcOfferRouteHandler)
  .openapi(getApiV2ClaimRoute, getApiV2ClaimRouteHandler)
  .openapi(getApiV2BearerProtectionRoute, getApiV2BearerProtectionRouteHandler)
  .openapi(getApiV2BearerGetTokenRoute, getApiV2BearerGetTokenRouteHandler)
  .openapi(getApiV3WeightsRoute, getApiV3WeightsRouteHandler)
  .openapi(getApiV1WeightsRoute, getApiV1WeightsRouteHandler)
  .openapi(getApiV1MetricCorrelationsRoute, getApiV1MetricCorrelationsRouteHandler)
  .openapi(getApiV1FunctionRoute, getApiV1FunctionRouteHandler)
  .openapi(getApiV1FunctionsRoute, getApiV1FunctionsRouteHandler)
  .openapi(getApiV1AlarmsRoute, getApiV1AlarmsRouteHandler)
  .openapi(getApiV1AlarmsValuesRoute, getApiV1AlarmsValuesRouteHandler)
  .openapi(getApiV1AlarmLogRoute, getApiV1AlarmLogRouteHandler)
  .openapi(getApiV1AlarmCountRoute, getApiV1AlarmCountRouteHandler)
  .openapi(getApiV1AlarmVariablesRoute, getApiV1AlarmVariablesRouteHandler)
  .openapi(getApiV1ManageHealthRoute, getApiV1ManageHealthRouteHandler)
  .openapi(getApiV1AclkRoute, getApiV1AclkRouteHandler)
  .openapi(getApiV1VariableRoute, getApiV1VariableRouteHandler)
  .openapi(getApiV1RegistryRoute, getApiV1RegistryRouteHandler)
  .openapi(getApiV1DbengineStatsRoute, getApiV1DbengineStatsRouteHandler)
  .openapi(getApiV1MlInfoRoute, getApiV1MlInfoRouteHandler)

export default app
