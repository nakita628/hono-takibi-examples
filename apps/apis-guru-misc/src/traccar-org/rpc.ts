import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAttributesComputed(
  args: InferRequestType<typeof client.attributes.computed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.computed.$get(args, options))
}

export async function postAttributesComputed(
  args: InferRequestType<typeof client.attributes.computed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.computed.$post(args, options))
}

export async function putAttributesComputedId(
  args: InferRequestType<(typeof client.attributes.computed)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.computed[':id'].$put(args, options))
}

export async function deleteAttributesComputedId(
  args: InferRequestType<(typeof client.attributes.computed)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attributes.computed[':id'].$delete(args, options))
}

export async function getCalendars(
  args: InferRequestType<typeof client.calendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.$get(args, options))
}

export async function postCalendars(
  args: InferRequestType<typeof client.calendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.$post(args, options))
}

export async function putCalendarsId(
  args: InferRequestType<(typeof client.calendars)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':id'].$put(args, options))
}

export async function deleteCalendarsId(
  args: InferRequestType<(typeof client.calendars)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars[':id'].$delete(args, options))
}

export async function getCommands(
  args: InferRequestType<typeof client.commands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.$get(args, options))
}

export async function postCommands(
  args: InferRequestType<typeof client.commands.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.$post(args, options))
}

export async function getCommandsSend(
  args: InferRequestType<typeof client.commands.send.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.send.$get(args, options))
}

export async function postCommandsSend(
  args: InferRequestType<typeof client.commands.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.send.$post(args, options))
}

export async function getCommandsTypes(
  args: InferRequestType<typeof client.commands.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.types.$get(args, options))
}

export async function putCommandsId(
  args: InferRequestType<(typeof client.commands)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands[':id'].$put(args, options))
}

export async function deleteCommandsId(
  args: InferRequestType<(typeof client.commands)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands[':id'].$delete(args, options))
}

export async function getDevices(
  args: InferRequestType<typeof client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$get(args, options))
}

export async function postDevices(
  args: InferRequestType<typeof client.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$post(args, options))
}

export async function putDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$put(args, options))
}

export async function deleteDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$delete(args, options))
}

export async function putDevicesIdAccumulators(
  args: InferRequestType<(typeof client.devices)[':id']['accumulators']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].accumulators.$put(args, options))
}

export async function getDrivers(
  args: InferRequestType<typeof client.drivers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drivers.$get(args, options))
}

export async function postDrivers(
  args: InferRequestType<typeof client.drivers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drivers.$post(args, options))
}

export async function putDriversId(
  args: InferRequestType<(typeof client.drivers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drivers[':id'].$put(args, options))
}

export async function deleteDriversId(
  args: InferRequestType<(typeof client.drivers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drivers[':id'].$delete(args, options))
}

export async function getEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$get(args, options))
}

export async function getGeofences(
  args: InferRequestType<typeof client.geofences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.$get(args, options))
}

export async function postGeofences(
  args: InferRequestType<typeof client.geofences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences.$post(args, options))
}

export async function putGeofencesId(
  args: InferRequestType<(typeof client.geofences)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences[':id'].$put(args, options))
}

export async function deleteGeofencesId(
  args: InferRequestType<(typeof client.geofences)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geofences[':id'].$delete(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function putGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$put(args, options))
}

export async function deleteGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$delete(args, options))
}

export async function getMaintenance(
  args: InferRequestType<typeof client.maintenance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.$get(args, options))
}

export async function postMaintenance(
  args: InferRequestType<typeof client.maintenance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.$post(args, options))
}

export async function putMaintenanceId(
  args: InferRequestType<(typeof client.maintenance)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance[':id'].$put(args, options))
}

export async function deleteMaintenanceId(
  args: InferRequestType<(typeof client.maintenance)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance[':id'].$delete(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function postNotifications(
  args: InferRequestType<typeof client.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$post(args, options))
}

export async function postNotificationsTest(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.test.$post(undefined, options))
}

export async function getNotificationsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.types.$get(undefined, options))
}

export async function putNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$put(args, options))
}

export async function deleteNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$delete(args, options))
}

export async function postPermissions(
  args: InferRequestType<typeof client.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$post(args, options))
}

export async function deletePermissions(
  args: InferRequestType<typeof client.permissions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$delete(args, options))
}

export async function getPositions(
  args: InferRequestType<typeof client.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.positions.$get(args, options))
}

export async function getReportsEvents(
  args: InferRequestType<typeof client.reports.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.events.$get(args, options))
}

export async function getReportsRoute(
  args: InferRequestType<typeof client.reports.route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.route.$get(args, options))
}

export async function getReportsStops(
  args: InferRequestType<typeof client.reports.stops.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.stops.$get(args, options))
}

export async function getReportsSummary(
  args: InferRequestType<typeof client.reports.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.summary.$get(args, options))
}

export async function getReportsTrips(
  args: InferRequestType<typeof client.reports.trips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.trips.$get(args, options))
}

export async function getServer(options?: ClientRequestOptions) {
  return await parseResponse(client.server.$get(undefined, options))
}

export async function putServer(
  args: InferRequestType<typeof client.server.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.server.$put(args, options))
}

export async function getSession(
  args: InferRequestType<typeof client.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.$get(args, options))
}

export async function postSession(
  args: InferRequestType<typeof client.session.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.$post(args, options))
}

export async function deleteSession(options?: ClientRequestOptions) {
  return await parseResponse(client.session.$delete(undefined, options))
}

export async function getStatistics(
  args: InferRequestType<typeof client.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function putUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$put(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}
