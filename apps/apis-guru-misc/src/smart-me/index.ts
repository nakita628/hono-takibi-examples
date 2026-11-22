import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokenHandler,
  accountHandler,
  actionsHandler,
  additionalDeviceInformationHandler,
  customDeviceHandler,
  deviceBySerialHandler,
  devicesByEnergyHandler,
  devicesBySubTypeHandler,
  devicesHandler,
  fastSendDeviceValuesHandler,
  folderAssignHandler,
  folderHandler,
  folderMenuHandler,
  folderSettingsHandler,
  healthHandler,
  mBusHandler,
  meterFolderInformationHandler,
  meterValuesHandler,
  oAuthHandler,
  picoChargingHandler,
  picoChargingHistoryHandler,
  picoEnableFixCableLockHandler,
  picoHandler,
  picoLoadmanagementGroupHandler,
  picoLoadmanagementSetDynamicCurrentHandler,
  picoSettingsHandler,
  registerForRealtimeApiHandler,
  smartMeDeviceConfigurationHandler,
  subUserHandler,
  userHandler,
  userToFolderAssignHandler,
  valuesHandler,
  valuesInPastHandler,
  valuesInPastMultipleHandler,
  virtualBillingMeterActiveHandler,
  virtualBillingMeterDeactivateHandler,
  virtualBillingMetersHandler,
  virtualMeterCalculateFormulaHandler,
  virtualTariffConsumptionHandler,
  virtualTariffHandler,
  virtualTariffsForPropertyHandler,
  virtualTariffsStatusForPropertyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessTokenHandler)
  .route('/', accountHandler)
  .route('/', actionsHandler)
  .route('/', additionalDeviceInformationHandler)
  .route('/', customDeviceHandler)
  .route('/', deviceBySerialHandler)
  .route('/', devicesHandler)
  .route('/', devicesByEnergyHandler)
  .route('/', devicesBySubTypeHandler)
  .route('/', fastSendDeviceValuesHandler)
  .route('/', folderHandler)
  .route('/', folderMenuHandler)
  .route('/', healthHandler)
  .route('/', mBusHandler)
  .route('/', meterFolderInformationHandler)
  .route('/', meterValuesHandler)
  .route('/', registerForRealtimeApiHandler)
  .route('/', smartMeDeviceConfigurationHandler)
  .route('/', subUserHandler)
  .route('/', userHandler)
  .route('/', valuesHandler)
  .route('/', valuesInPastHandler)
  .route('/', valuesInPastMultipleHandler)
  .route('/', virtualBillingMeterActiveHandler)
  .route('/', virtualBillingMeterDeactivateHandler)
  .route('/', virtualBillingMetersHandler)
  .route('/', virtualMeterCalculateFormulaHandler)
  .route('/', virtualTariffHandler)
  .route('/', virtualTariffConsumptionHandler)
  .route('/', virtualTariffsForPropertyHandler)
  .route('/', virtualTariffsStatusForPropertyHandler)
  .route('/', folderAssignHandler)
  .route('/', folderSettingsHandler)
  .route('/', userToFolderAssignHandler)
  .route('/', oAuthHandler)
  .route('/', picoHandler)
  .route('/', picoChargingHandler)
  .route('/', picoChargingHistoryHandler)
  .route('/', picoLoadmanagementGroupHandler)
  .route('/', picoLoadmanagementSetDynamicCurrentHandler)
  .route('/', picoSettingsHandler)
  .route('/', picoEnableFixCableLockHandler)

export default app
