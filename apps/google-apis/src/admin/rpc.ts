import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminDirectoryV1CustomerCustomerIdDevicesChromeos(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOu(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos.moveDevicesToOu.$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$put(
      args,
      options,
    ),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$patch(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].commands[
      ':commandId'
    ].$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommand(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[
      ':deviceId:issueCommand'
    ].$post(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdAction(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.chromeos[':resourceId'].action.$post(
      args,
      options,
    ),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatus(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices['chromeos:batchChangeStatus'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdDevicesMobile(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.mobile.$get(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$delete(
      args,
      options,
    ),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdAction(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].action.$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdOrgunits(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdOrgunits(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$get(args, options),
  )
}

export async function putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$put(args, options),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$patch(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdSchemas(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerIdSchemas(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$get(args, options),
  )
}

export async function putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$put(args, options),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$delete(args, options),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$patch(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerDomainaliases(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domainaliases.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerDomainaliases(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domainaliases.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerDomains(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domains.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerDomains(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domains.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerDomainsDomainName(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domains[':domainName'].$get(args, options),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerDomainsDomainName(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].domains[':domainName'].$delete(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesBuildings(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerResourcesBuildings(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$patch(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesCalendars(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerResourcesCalendars(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars[':calendarResourceId'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars[':calendarResourceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars[
      ':calendarResourceId'
    ].$delete(args, options),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.calendars[
      ':calendarResourceId'
    ].$patch(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesFeatures(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerResourcesFeatures(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$patch(
      args,
      options,
    ),
  )
}

export async function postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRename(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].resources.features[':oldName'].rename.$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerRoleassignments(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roleassignments.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerRoleassignments(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roleassignments.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roleassignments[':roleAssignmentId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roleassignments[':roleAssignmentId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1CustomerCustomerRoles(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles.$get(args, options),
  )
}

export async function postAdminDirectoryV1CustomerCustomerRoles(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles.$post(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerRolesALLPrivileges(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles.ALL.privileges.$get(args, options),
  )
}

export async function getAdminDirectoryV1CustomerCustomerRolesRoleId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles[':roleId'].$get(args, options),
  )
}

export async function putAdminDirectoryV1CustomerCustomerRolesRoleId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles[':roleId'].$put(args, options),
  )
}

export async function deleteAdminDirectoryV1CustomerCustomerRolesRoleId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles[':roleId'].$delete(args, options),
  )
}

export async function patchAdminDirectoryV1CustomerCustomerRolesRoleId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customer[':customer'].roles[':roleId'].$patch(args, options),
  )
}

export async function getAdminDirectoryV1CustomersCustomerKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customers[':customerKey'].$get(args, options),
  )
}

export async function putAdminDirectoryV1CustomersCustomerKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customers[':customerKey'].$put(args, options),
  )
}

export async function patchAdminDirectoryV1CustomersCustomerKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.customers[':customerKey'].$patch(args, options),
  )
}

export async function getAdminDirectoryV1Groups(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups.$get(args, options))
}

export async function postAdminDirectoryV1Groups(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups.$post(args, options))
}

export async function getAdminDirectoryV1GroupsGroupKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups[':groupKey'].$get(args, options))
}

export async function putAdminDirectoryV1GroupsGroupKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups[':groupKey'].$put(args, options))
}

export async function deleteAdminDirectoryV1GroupsGroupKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups[':groupKey'].$delete(args, options))
}

export async function patchAdminDirectoryV1GroupsGroupKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.groups[':groupKey'].$patch(args, options))
}

export async function getAdminDirectoryV1GroupsGroupKeyAliases(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].aliases.$get(args, options),
  )
}

export async function postAdminDirectoryV1GroupsGroupKeyAliases(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].aliases.$post(args, options),
  )
}

export async function deleteAdminDirectoryV1GroupsGroupKeyAliasesAlias(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].aliases[':alias'].$delete(args, options),
  )
}

export async function getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].hasMember[':memberKey'].$get(args, options),
  )
}

export async function getAdminDirectoryV1GroupsGroupKeyMembers(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members.$get(args, options),
  )
}

export async function postAdminDirectoryV1GroupsGroupKeyMembers(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members.$post(args, options),
  )
}

export async function getAdminDirectoryV1GroupsGroupKeyMembersMemberKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$get(args, options),
  )
}

export async function putAdminDirectoryV1GroupsGroupKeyMembersMemberKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$put(args, options),
  )
}

export async function deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$delete(args, options),
  )
}

export async function patchAdminDirectoryV1GroupsGroupKeyMembersMemberKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$patch(args, options),
  )
}

export async function getAdminDirectoryV1Users(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users.$get(args, options))
}

export async function postAdminDirectoryV1Users(
  args: InferRequestType<typeof client.admin.directory.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users.$post(args, options))
}

export async function postAdminDirectoryV1UsersWatch(
  args: InferRequestType<typeof client.admin.directory.v1.users.watch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users.watch.$post(args, options))
}

export async function getAdminDirectoryV1UsersUserKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].$get(args, options))
}

export async function putAdminDirectoryV1UsersUserKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].$put(args, options))
}

export async function deleteAdminDirectoryV1UsersUserKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].$delete(args, options))
}

export async function patchAdminDirectoryV1UsersUserKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].$patch(args, options))
}

export async function getAdminDirectoryV1UsersUserKeyAliases(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].aliases.$get(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyAliases(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].aliases.$post(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyAliasesWatch(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].aliases.watch.$post(args, options),
  )
}

export async function deleteAdminDirectoryV1UsersUserKeyAliasesAlias(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].aliases[':alias'].$delete(args, options),
  )
}

export async function getAdminDirectoryV1UsersUserKeyAsps(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].asps.$get(args, options))
}

export async function getAdminDirectoryV1UsersUserKeyAspsCodeId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].asps[':codeId'].$get(args, options),
  )
}

export async function deleteAdminDirectoryV1UsersUserKeyAspsCodeId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].asps[':codeId'].$delete(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyMakeAdmin(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].makeAdmin.$post(args, options),
  )
}

export async function getAdminDirectoryV1UsersUserKeyPhotosThumbnail(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].photos.thumbnail.$get(args, options),
  )
}

export async function putAdminDirectoryV1UsersUserKeyPhotosThumbnail(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].photos.thumbnail.$put(args, options),
  )
}

export async function deleteAdminDirectoryV1UsersUserKeyPhotosThumbnail(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].photos.thumbnail.$delete(args, options),
  )
}

export async function patchAdminDirectoryV1UsersUserKeyPhotosThumbnail(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].photos.thumbnail.$patch(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeySignOut(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].signOut.$post(args, options),
  )
}

export async function getAdminDirectoryV1UsersUserKeyTokens(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1.users[':userKey'].tokens.$get(args, options))
}

export async function getAdminDirectoryV1UsersUserKeyTokensClientId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$get(args, options),
  )
}

export async function deleteAdminDirectoryV1UsersUserKeyTokensClientId(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$delete(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOff(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].twoStepVerification.turnOff.$post(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyUndelete(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].undelete.$post(args, options),
  )
}

export async function getAdminDirectoryV1UsersUserKeyVerificationCodes(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].verificationCodes.$get(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyVerificationCodesGenerate(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].verificationCodes.generate.$post(args, options),
  )
}

export async function postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidate(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1.users[':userKey'].verificationCodes.invalidate.$post(args, options),
  )
}

export async function getAdminDirectoryV1Name(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1[':name'].$get(args, options))
}

export async function deleteAdminDirectoryV1Name(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1[':name'].$delete(args, options))
}

export async function patchAdminDirectoryV1Name(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory.v1[':name'].$patch(args, options))
}

export async function getAdminDirectoryV1ParentChromePrintServers(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome.printServers.$get(args, options),
  )
}

export async function postAdminDirectoryV1ParentChromePrintServers(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome.printServers.$post(args, options),
  )
}

export async function postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServers(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome['printServers:batchCreatePrintServers'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServers(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome['printServers:batchDeletePrintServers'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1ParentChromePrinters(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome.printers.$get(args, options),
  )
}

export async function postAdminDirectoryV1ParentChromePrinters(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome.printers.$post(args, options),
  )
}

export async function postAdminDirectoryV1ParentChromePrintersBatchCreatePrinters(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome['printers:batchCreatePrinters'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminDirectoryV1ParentChromePrintersBatchDeletePrinters(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome['printers:batchDeletePrinters'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminDirectoryV1ParentChromePrintersListPrinterModels(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.directory.v1[':parent'].chrome['printers:listPrinterModels'].$get(args, options),
  )
}

export async function postAdminDirectoryV1ChannelsStop(
  args: InferRequestType<typeof client.admin.directory_v1.channels.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.directory_v1.channels.stop.$post(args, options))
}
