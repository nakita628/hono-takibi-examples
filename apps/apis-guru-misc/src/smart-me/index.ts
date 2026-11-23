import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiFolderSettingsIdRoute,
  deleteApiFolderUserAssignRoute,
  deleteApiRegisterForRealtimeApiIdRoute,
  deleteApiSubUserIdRoute,
  deleteApiUserRoute,
  getApiAccountLoginRoute,
  getApiActionsIdRoute,
  getApiAdditionalDeviceInformationIdRoute,
  getApiCustomDeviceIdRoute,
  getApiCustomDeviceRoute,
  getApiDeviceBySerialRoute,
  getApiDevicesByEnergyRoute,
  getApiDevicesBySubTypeRoute,
  getApiDevicesIdRoute,
  getApiDevicesRoute,
  getApiFastSendDeviceValuesIdRoute,
  getApiFolderIdRoute,
  getApiFolderMenuRoute,
  getApiFolderSettingsIdRoute,
  getApiHealthRoute,
  getApiMeterFolderInformationIdRoute,
  getApiMeterValuesIdRoute,
  getApiOauthAuthorizeRoute,
  getApiPicoChargingIdRoute,
  getApiPicoHistoryIdRoute,
  getApiPicoLoadmanagementgroupIdRoute,
  getApiPicoLoadmanagementgroupRoute,
  getApiPicoRoute,
  getApiPicoSettingsIdRoute,
  getApiRegisterForRealtimeApiRoute,
  getApiSmartMeDeviceConfigurationIdRoute,
  getApiSubUserIdRoute,
  getApiUserRoute,
  getApiValuesIdRoute,
  getApiValuesInPastIdRoute,
  getApiValuesInPastMultipleIdRoute,
  getApiVirtualBillingMeterActiveRoute,
  getApiVirtualBillingMetersRoute,
  getApiVirtualMeterCalculateFormulaRoute,
  getApiVirtualTariffConsumptionRoute,
  getApiVirtualTariffIdRoute,
  getApiVirtualTariffRoute,
  getApiVirtualTariffsForPropertyIdRoute,
  getApiVirtualTariffsStatusForPropertyIdRoute,
  postApiAccountLoginRoute,
  postApiActionsRoute,
  postApiCustomDeviceRoute,
  postApiDevicesRoute,
  postApiFolderAssignRoute,
  postApiFolderMenuRoute,
  postApiFolderSettingsIdRoute,
  postApiFolderUserAssignRoute,
  postApiMBusRoute,
  postApiMeterFolderInformationRoute,
  postApiOauthAuthorizeRoute,
  postApiPicoLoadmanagementgroupCurrentSerialRoute,
  postApiPicoTryenablecablelockIdRoute,
  postApiRegisterForRealtimeApiRoute,
  postApiSmartMeDeviceConfigurationRoute,
  postApiSubUserRoute,
  postApiVirtualBillingMeterActiveRoute,
  postApiVirtualBillingMeterDeactivateRoute,
  putApiAccessTokenRoute,
  putApiDevicesIdRoute,
} from './routes'
import {
  deleteApiFolderSettingsIdRouteHandler,
  deleteApiFolderUserAssignRouteHandler,
  deleteApiRegisterForRealtimeApiIdRouteHandler,
  deleteApiSubUserIdRouteHandler,
  deleteApiUserRouteHandler,
  getApiAccountLoginRouteHandler,
  getApiActionsIdRouteHandler,
  getApiAdditionalDeviceInformationIdRouteHandler,
  getApiCustomDeviceIdRouteHandler,
  getApiCustomDeviceRouteHandler,
  getApiDeviceBySerialRouteHandler,
  getApiDevicesByEnergyRouteHandler,
  getApiDevicesBySubTypeRouteHandler,
  getApiDevicesIdRouteHandler,
  getApiDevicesRouteHandler,
  getApiFastSendDeviceValuesIdRouteHandler,
  getApiFolderIdRouteHandler,
  getApiFolderMenuRouteHandler,
  getApiFolderSettingsIdRouteHandler,
  getApiHealthRouteHandler,
  getApiMeterFolderInformationIdRouteHandler,
  getApiMeterValuesIdRouteHandler,
  getApiOauthAuthorizeRouteHandler,
  getApiPicoChargingIdRouteHandler,
  getApiPicoHistoryIdRouteHandler,
  getApiPicoLoadmanagementgroupIdRouteHandler,
  getApiPicoLoadmanagementgroupRouteHandler,
  getApiPicoRouteHandler,
  getApiPicoSettingsIdRouteHandler,
  getApiRegisterForRealtimeApiRouteHandler,
  getApiSmartMeDeviceConfigurationIdRouteHandler,
  getApiSubUserIdRouteHandler,
  getApiUserRouteHandler,
  getApiValuesIdRouteHandler,
  getApiValuesInPastIdRouteHandler,
  getApiValuesInPastMultipleIdRouteHandler,
  getApiVirtualBillingMeterActiveRouteHandler,
  getApiVirtualBillingMetersRouteHandler,
  getApiVirtualMeterCalculateFormulaRouteHandler,
  getApiVirtualTariffConsumptionRouteHandler,
  getApiVirtualTariffIdRouteHandler,
  getApiVirtualTariffRouteHandler,
  getApiVirtualTariffsForPropertyIdRouteHandler,
  getApiVirtualTariffsStatusForPropertyIdRouteHandler,
  postApiAccountLoginRouteHandler,
  postApiActionsRouteHandler,
  postApiCustomDeviceRouteHandler,
  postApiDevicesRouteHandler,
  postApiFolderAssignRouteHandler,
  postApiFolderMenuRouteHandler,
  postApiFolderSettingsIdRouteHandler,
  postApiFolderUserAssignRouteHandler,
  postApiMBusRouteHandler,
  postApiMeterFolderInformationRouteHandler,
  postApiOauthAuthorizeRouteHandler,
  postApiPicoLoadmanagementgroupCurrentSerialRouteHandler,
  postApiPicoTryenablecablelockIdRouteHandler,
  postApiRegisterForRealtimeApiRouteHandler,
  postApiSmartMeDeviceConfigurationRouteHandler,
  postApiSubUserRouteHandler,
  postApiVirtualBillingMeterActiveRouteHandler,
  postApiVirtualBillingMeterDeactivateRouteHandler,
  putApiAccessTokenRouteHandler,
  putApiDevicesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putApiAccessTokenRoute, putApiAccessTokenRouteHandler)
  .openapi(getApiAccountLoginRoute, getApiAccountLoginRouteHandler)
  .openapi(postApiAccountLoginRoute, postApiAccountLoginRouteHandler)
  .openapi(postApiActionsRoute, postApiActionsRouteHandler)
  .openapi(getApiActionsIdRoute, getApiActionsIdRouteHandler)
  .openapi(
    getApiAdditionalDeviceInformationIdRoute,
    getApiAdditionalDeviceInformationIdRouteHandler,
  )
  .openapi(getApiCustomDeviceRoute, getApiCustomDeviceRouteHandler)
  .openapi(postApiCustomDeviceRoute, postApiCustomDeviceRouteHandler)
  .openapi(getApiCustomDeviceIdRoute, getApiCustomDeviceIdRouteHandler)
  .openapi(getApiDeviceBySerialRoute, getApiDeviceBySerialRouteHandler)
  .openapi(getApiDevicesRoute, getApiDevicesRouteHandler)
  .openapi(postApiDevicesRoute, postApiDevicesRouteHandler)
  .openapi(getApiDevicesIdRoute, getApiDevicesIdRouteHandler)
  .openapi(putApiDevicesIdRoute, putApiDevicesIdRouteHandler)
  .openapi(getApiDevicesByEnergyRoute, getApiDevicesByEnergyRouteHandler)
  .openapi(getApiDevicesBySubTypeRoute, getApiDevicesBySubTypeRouteHandler)
  .openapi(getApiFastSendDeviceValuesIdRoute, getApiFastSendDeviceValuesIdRouteHandler)
  .openapi(getApiFolderIdRoute, getApiFolderIdRouteHandler)
  .openapi(getApiFolderMenuRoute, getApiFolderMenuRouteHandler)
  .openapi(postApiFolderMenuRoute, postApiFolderMenuRouteHandler)
  .openapi(getApiHealthRoute, getApiHealthRouteHandler)
  .openapi(postApiMBusRoute, postApiMBusRouteHandler)
  .openapi(postApiMeterFolderInformationRoute, postApiMeterFolderInformationRouteHandler)
  .openapi(getApiMeterFolderInformationIdRoute, getApiMeterFolderInformationIdRouteHandler)
  .openapi(getApiMeterValuesIdRoute, getApiMeterValuesIdRouteHandler)
  .openapi(getApiRegisterForRealtimeApiRoute, getApiRegisterForRealtimeApiRouteHandler)
  .openapi(postApiRegisterForRealtimeApiRoute, postApiRegisterForRealtimeApiRouteHandler)
  .openapi(deleteApiRegisterForRealtimeApiIdRoute, deleteApiRegisterForRealtimeApiIdRouteHandler)
  .openapi(postApiSmartMeDeviceConfigurationRoute, postApiSmartMeDeviceConfigurationRouteHandler)
  .openapi(getApiSmartMeDeviceConfigurationIdRoute, getApiSmartMeDeviceConfigurationIdRouteHandler)
  .openapi(postApiSubUserRoute, postApiSubUserRouteHandler)
  .openapi(deleteApiSubUserIdRoute, deleteApiSubUserIdRouteHandler)
  .openapi(getApiSubUserIdRoute, getApiSubUserIdRouteHandler)
  .openapi(deleteApiUserRoute, deleteApiUserRouteHandler)
  .openapi(getApiUserRoute, getApiUserRouteHandler)
  .openapi(getApiValuesIdRoute, getApiValuesIdRouteHandler)
  .openapi(getApiValuesInPastIdRoute, getApiValuesInPastIdRouteHandler)
  .openapi(getApiValuesInPastMultipleIdRoute, getApiValuesInPastMultipleIdRouteHandler)
  .openapi(getApiVirtualBillingMeterActiveRoute, getApiVirtualBillingMeterActiveRouteHandler)
  .openapi(postApiVirtualBillingMeterActiveRoute, postApiVirtualBillingMeterActiveRouteHandler)
  .openapi(
    postApiVirtualBillingMeterDeactivateRoute,
    postApiVirtualBillingMeterDeactivateRouteHandler,
  )
  .openapi(getApiVirtualBillingMetersRoute, getApiVirtualBillingMetersRouteHandler)
  .openapi(getApiVirtualMeterCalculateFormulaRoute, getApiVirtualMeterCalculateFormulaRouteHandler)
  .openapi(getApiVirtualTariffRoute, getApiVirtualTariffRouteHandler)
  .openapi(getApiVirtualTariffIdRoute, getApiVirtualTariffIdRouteHandler)
  .openapi(getApiVirtualTariffConsumptionRoute, getApiVirtualTariffConsumptionRouteHandler)
  .openapi(getApiVirtualTariffsForPropertyIdRoute, getApiVirtualTariffsForPropertyIdRouteHandler)
  .openapi(
    getApiVirtualTariffsStatusForPropertyIdRoute,
    getApiVirtualTariffsStatusForPropertyIdRouteHandler,
  )
  .openapi(postApiFolderAssignRoute, postApiFolderAssignRouteHandler)
  .openapi(deleteApiFolderSettingsIdRoute, deleteApiFolderSettingsIdRouteHandler)
  .openapi(getApiFolderSettingsIdRoute, getApiFolderSettingsIdRouteHandler)
  .openapi(postApiFolderSettingsIdRoute, postApiFolderSettingsIdRouteHandler)
  .openapi(deleteApiFolderUserAssignRoute, deleteApiFolderUserAssignRouteHandler)
  .openapi(postApiFolderUserAssignRoute, postApiFolderUserAssignRouteHandler)
  .openapi(getApiOauthAuthorizeRoute, getApiOauthAuthorizeRouteHandler)
  .openapi(postApiOauthAuthorizeRoute, postApiOauthAuthorizeRouteHandler)
  .openapi(getApiPicoRoute, getApiPicoRouteHandler)
  .openapi(getApiPicoChargingIdRoute, getApiPicoChargingIdRouteHandler)
  .openapi(getApiPicoHistoryIdRoute, getApiPicoHistoryIdRouteHandler)
  .openapi(getApiPicoLoadmanagementgroupRoute, getApiPicoLoadmanagementgroupRouteHandler)
  .openapi(
    postApiPicoLoadmanagementgroupCurrentSerialRoute,
    postApiPicoLoadmanagementgroupCurrentSerialRouteHandler,
  )
  .openapi(getApiPicoLoadmanagementgroupIdRoute, getApiPicoLoadmanagementgroupIdRouteHandler)
  .openapi(getApiPicoSettingsIdRoute, getApiPicoSettingsIdRouteHandler)
  .openapi(postApiPicoTryenablecablelockIdRoute, postApiPicoTryenablecablelockIdRouteHandler)

export default app
