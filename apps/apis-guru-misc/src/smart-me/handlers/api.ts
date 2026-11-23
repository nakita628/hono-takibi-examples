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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(putApiAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdditionalDeviceInformationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCustomDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceBySerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDevicesByEnergyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDevicesBySubTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFastSendDeviceValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMBusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMeterFolderInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMeterFolderInformationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMeterValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRegisterForRealtimeApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterForRealtimeApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRegisterForRealtimeApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSmartMeDeviceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSmartMeDeviceConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSubUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiValuesInPastIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiValuesInPastMultipleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualBillingMeterActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualBillingMeterActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualBillingMeterDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualBillingMetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualMeterCalculateFormulaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffConsumptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffsForPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffsStatusForPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFolderUserAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderUserAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoChargingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoHistoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoLoadmanagementgroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPicoLoadmanagementgroupCurrentSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoLoadmanagementgroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPicoTryenablecablelockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
