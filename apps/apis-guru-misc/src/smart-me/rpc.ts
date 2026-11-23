import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putApiAccessToken(
  args: InferRequestType<typeof client.api.AccessToken.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.AccessToken.$put(args, options))
}

export async function getApiAccountLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account.login.$get(undefined, options))
}

export async function postApiAccountLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account.login.$post(undefined, options))
}

export async function postApiActions(
  args: InferRequestType<typeof client.api.Actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Actions.$post(args, options))
}

export async function getApiActionsId(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Actions[':id'].$get(args, options))
}

export async function getApiAdditionalDeviceInformationId(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.AdditionalDeviceInformation[':id'].$get(args, options))
}

export async function getApiCustomDevice(options?: ClientRequestOptions) {
  return await parseResponse(client.api.CustomDevice.$get(undefined, options))
}

export async function postApiCustomDevice(
  args: InferRequestType<typeof client.api.CustomDevice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.CustomDevice.$post(args, options))
}

export async function getApiCustomDeviceId(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.CustomDevice[':id'].$get(args, options))
}

export async function getApiDeviceBySerial(
  args: InferRequestType<typeof client.api.DeviceBySerial.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.DeviceBySerial.$get(args, options))
}

export async function getApiDevices(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Devices.$get(undefined, options))
}

export async function postApiDevices(
  args: InferRequestType<typeof client.api.Devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Devices.$post(args, options))
}

export async function getApiDevicesId(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Devices[':id'].$get(args, options))
}

export async function putApiDevicesId(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Devices[':id'].$put(args, options))
}

export async function getApiDevicesByEnergy(
  args: InferRequestType<typeof client.api.DevicesByEnergy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.DevicesByEnergy.$get(args, options))
}

export async function getApiDevicesBySubType(
  args: InferRequestType<typeof client.api.DevicesBySubType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.DevicesBySubType.$get(args, options))
}

export async function getApiFastSendDeviceValuesId(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.FastSendDeviceValues[':id'].$get(args, options))
}

export async function getApiFolderId(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Folder[':id'].$get(args, options))
}

export async function getApiFolderMenu(
  args: InferRequestType<typeof client.api.FolderMenu.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.FolderMenu.$get(args, options))
}

export async function postApiFolderMenu(
  args: InferRequestType<typeof client.api.FolderMenu.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.FolderMenu.$post(args, options))
}

export async function getApiHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Health.$get(undefined, options))
}

export async function postApiMBus(
  args: InferRequestType<typeof client.api.MBus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.MBus.$post(args, options))
}

export async function postApiMeterFolderInformation(
  args: InferRequestType<typeof client.api.MeterFolderInformation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.MeterFolderInformation.$post(args, options))
}

export async function getApiMeterFolderInformationId(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.MeterFolderInformation[':id'].$get(args, options))
}

export async function getApiMeterValuesId(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.MeterValues[':id'].$get(args, options))
}

export async function getApiRegisterForRealtimeApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.RegisterForRealtimeApi.$get(undefined, options))
}

export async function postApiRegisterForRealtimeApi(
  args: InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.RegisterForRealtimeApi.$post(args, options))
}

export async function deleteApiRegisterForRealtimeApiId(
  args: InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.RegisterForRealtimeApi[':id'].$delete(args, options))
}

export async function postApiSmartMeDeviceConfiguration(
  args: InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SmartMeDeviceConfiguration.$post(args, options))
}

export async function getApiSmartMeDeviceConfigurationId(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SmartMeDeviceConfiguration[':id'].$get(args, options))
}

export async function postApiSubUser(
  args: InferRequestType<typeof client.api.SubUser.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SubUser.$post(args, options))
}

export async function getApiSubUserId(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SubUser[':id'].$get(args, options))
}

export async function deleteApiSubUserId(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SubUser[':id'].$delete(args, options))
}

export async function getApiUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.User.$get(undefined, options))
}

export async function deleteApiUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.User.$delete(undefined, options))
}

export async function getApiValuesId(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Values[':id'].$get(args, options))
}

export async function getApiValuesInPastId(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ValuesInPast[':id'].$get(args, options))
}

export async function getApiValuesInPastMultipleId(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ValuesInPastMultiple[':id'].$get(args, options))
}

export async function getApiVirtualBillingMeterActive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.VirtualBillingMeterActive.$get(undefined, options))
}

export async function postApiVirtualBillingMeterActive(
  args: InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualBillingMeterActive.$post(args, options))
}

export async function postApiVirtualBillingMeterDeactivate(
  args: InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualBillingMeterDeactivate.$post(args, options))
}

export async function getApiVirtualBillingMeters(options?: ClientRequestOptions) {
  return await parseResponse(client.api.VirtualBillingMeters.$get(undefined, options))
}

export async function getApiVirtualMeterCalculateFormula(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualMeterCalculateFormula.$get(args, options))
}

export async function getApiVirtualTariff(options?: ClientRequestOptions) {
  return await parseResponse(client.api.VirtualTariff.$get(undefined, options))
}

export async function getApiVirtualTariffId(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualTariff[':id'].$get(args, options))
}

export async function getApiVirtualTariffConsumption(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualTariffConsumption.$get(args, options))
}

export async function getApiVirtualTariffsForPropertyId(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualTariffsForProperty[':id'].$get(args, options))
}

export async function getApiVirtualTariffsStatusForPropertyId(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.VirtualTariffsStatusForProperty[':id'].$get(args, options))
}

export async function postApiFolderAssign(
  args: InferRequestType<typeof client.api.folder.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.assign.$post(args, options))
}

export async function getApiFolderSettingsId(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.settings[':id'].$get(args, options))
}

export async function postApiFolderSettingsId(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.settings[':id'].$post(args, options))
}

export async function deleteApiFolderSettingsId(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.settings[':id'].$delete(args, options))
}

export async function postApiFolderUserAssign(
  args: InferRequestType<typeof client.api.folder.user.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.user.assign.$post(args, options))
}

export async function deleteApiFolderUserAssign(
  args: InferRequestType<typeof client.api.folder.user.assign.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder.user.assign.$delete(args, options))
}

export async function getApiOauthAuthorize(
  args: InferRequestType<typeof client.api.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oauth.authorize.$get(args, options))
}

export async function postApiOauthAuthorize(
  args: InferRequestType<typeof client.api.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oauth.authorize.$post(args, options))
}

export async function getApiPico(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pico.$get(undefined, options))
}

export async function getApiPicoChargingId(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pico.charging[':id'].$get(args, options))
}

export async function getApiPicoHistoryId(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pico.history[':id'].$get(args, options))
}

export async function getApiPicoLoadmanagementgroup(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pico.loadmanagementgroup.$get(undefined, options))
}

export async function postApiPicoLoadmanagementgroupCurrentSerial(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pico.loadmanagementgroup.current[':serial'].$post(args, options),
  )
}

export async function getApiPicoLoadmanagementgroupId(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pico.loadmanagementgroup[':id'].$get(args, options))
}

export async function getApiPicoSettingsId(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pico.settings[':id'].$get(args, options))
}

export async function postApiPicoTryenablecablelockId(
  args: InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pico.tryenablecablelock[':id'].$post(args, options))
}
