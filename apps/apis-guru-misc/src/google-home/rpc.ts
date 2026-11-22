import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNOTICEHtmlGz(options?: ClientRequestOptions) {
  return await parseResponse(client['NOTICE.html.gz'].$get(undefined, options))
}

export async function postAssistantA11yMode(
  args: InferRequestType<typeof client.assistant.a11y_mode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.a11y_mode.$post(args, options))
}

export async function getAssistantAlarms(options?: ClientRequestOptions) {
  return await parseResponse(client.assistant.alarms.$get(undefined, options))
}

export async function postAssistantAlarmsDelete(
  args: InferRequestType<typeof client.assistant.alarms.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.alarms.delete.$post(args, options))
}

export async function postAssistantAlarmsVolume(
  args: InferRequestType<typeof client.assistant.alarms.volume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.alarms.volume.$post(args, options))
}

export async function postAssistantCheckReadyStatus(
  args: InferRequestType<typeof client.assistant.check_ready_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.check_ready_status.$post(args, options))
}

export async function postAssistantNotifications(
  args: InferRequestType<typeof client.assistant.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.notifications.$post(args, options))
}

export async function postAssistantSetNightModeParams(
  args: InferRequestType<typeof client.assistant.set_night_mode_params.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.set_night_mode_params.$post(args, options))
}

export async function postBluetoothBond(
  args: InferRequestType<typeof client.bluetooth.bond.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bluetooth.bond.$post(args, options))
}

export async function postBluetoothConnect(
  args: InferRequestType<typeof client.bluetooth.connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bluetooth.connect.$post(args, options))
}

export async function postBluetoothDiscovery(
  args: InferRequestType<typeof client.bluetooth.discovery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bluetooth.discovery.$post(args, options))
}

export async function getBluetoothGetBonded(options?: ClientRequestOptions) {
  return await parseResponse(client.bluetooth.get_bonded.$get(undefined, options))
}

export async function postBluetoothScan(
  args: InferRequestType<typeof client.bluetooth.scan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bluetooth.scan.$post(args, options))
}

export async function getBluetoothScanResults(options?: ClientRequestOptions) {
  return await parseResponse(client.bluetooth.scan_results.$get(undefined, options))
}

export async function getBluetoothStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.bluetooth.status.$get(undefined, options))
}

export async function getConfiguredNetworks(options?: ClientRequestOptions) {
  return await parseResponse(client.configured_networks.$get(undefined, options))
}

export async function postConnectWifi(
  args: InferRequestType<typeof client.connect_wifi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect_wifi.$post(args, options))
}

export async function getEurekaInfo(
  args: InferRequestType<typeof client.eureka_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eureka_info.$get(args, options))
}

export async function postForgetWifi(
  args: InferRequestType<typeof client.forget_wifi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forget_wifi.$post(args, options))
}

export async function postGetAppDeviceId(
  args: InferRequestType<typeof client.get_app_device_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_app_device_id.$post(args, options))
}

export async function getIconPng(options?: ClientRequestOptions) {
  return await parseResponse(client['icon.png'].$get(undefined, options))
}

export async function getOffer(options?: ClientRequestOptions) {
  return await parseResponse(client.offer.$get(undefined, options))
}

export async function postReboot(
  args: InferRequestType<typeof client.reboot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reboot.$post(args, options))
}

export async function getScanResults(options?: ClientRequestOptions) {
  return await parseResponse(client.scan_results.$get(undefined, options))
}

export async function postScanWifi(options?: ClientRequestOptions) {
  return await parseResponse(client.scan_wifi.$post(undefined, options))
}

export async function postSetEurekaInfo(
  args: InferRequestType<typeof client.set_eureka_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.set_eureka_info.$post(args, options))
}

export async function getSupportedLocales(options?: ClientRequestOptions) {
  return await parseResponse(client.supported_locales.$get(undefined, options))
}

export async function getSupportedTimezones(options?: ClientRequestOptions) {
  return await parseResponse(client.supported_timezones.$get(undefined, options))
}

export async function postTestInternetDownloadSpeed(
  args: InferRequestType<typeof client.test_internet_download_speed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.test_internet_download_speed.$post(args, options))
}

export async function postUserEqSetEqualizer(
  args: InferRequestType<typeof client.user_eq.set_equalizer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_eq.set_equalizer.$post(args, options))
}
