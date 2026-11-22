import { OpenAPIHono } from '@hono/zod-openapi'
import {
  destinationsHandler,
  deviceProfilesHandler,
  eventConfigurationsHandler,
  eventConfigurationsResourceTypeHandler,
  eventConfigurationsResourceTypesHandler,
  fuotaTasksHandler,
  logLevelsHandler,
  multicastGroupsHandler,
  networkAnalyzerConfigurationsHandler,
  partnerAccountsHandler,
  positionConfigurationsHandler,
  positionEstimateHandler,
  positionsHandler,
  resourcePositionsHandler,
  serviceEndpointHandler,
  serviceProfilesHandler,
  tagsResourceArnHandler,
  tagsResourceArnTagKeysHandler,
  wirelessDeviceImportTaskHandler,
  wirelessDeviceImportTaskIdHandler,
  wirelessDeviceImportTasksHandler,
  wirelessDevicesHandler,
  wirelessGatewaysHandler,
  wirelessGatewayTaskDefinitionsHandler,
  wirelessSingleDeviceImportTaskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', partnerAccountsHandler)
  .route('/', fuotaTasksHandler)
  .route('/', multicastGroupsHandler)
  .route('/', wirelessDevicesHandler)
  .route('/', wirelessGatewaysHandler)
  .route('/', destinationsHandler)
  .route('/', deviceProfilesHandler)
  .route('/', networkAnalyzerConfigurationsHandler)
  .route('/', serviceProfilesHandler)
  .route('/', wirelessGatewayTaskDefinitionsHandler)
  .route('/', wirelessDeviceImportTaskHandler)
  .route('/', eventConfigurationsResourceTypesHandler)
  .route('/', logLevelsHandler)
  .route('/', positionsHandler)
  .route('/', positionConfigurationsHandler)
  .route('/', positionEstimateHandler)
  .route('/', eventConfigurationsHandler)
  .route('/', resourcePositionsHandler)
  .route('/', serviceEndpointHandler)
  .route('/', wirelessDeviceImportTaskIdHandler)
  .route('/', eventConfigurationsResourceTypeHandler)
  .route('/', tagsResourceArnHandler)
  .route('/', wirelessDeviceImportTasksHandler)
  .route('/', wirelessSingleDeviceImportTaskHandler)
  .route('/', tagsResourceArnTagKeysHandler)

export default app
