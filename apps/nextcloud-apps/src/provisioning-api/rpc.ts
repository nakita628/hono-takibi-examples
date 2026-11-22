import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpCloudApps(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.apps.$get(args, options))
}

export async function getOcsV2PhpCloudAppsApp(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$get(args, options))
}

export async function postOcsV2PhpCloudAppsApp(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$post(args, options))
}

export async function deleteOcsV2PhpCloudAppsApp(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$delete(args, options))
}

export async function getOcsV2PhpCloudGroupsGroupIdSubadmins(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.groups[':groupId'].subadmins.$get(args, options),
  )
}

export async function getOcsV2PhpCloudGroups(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups.$get(args, options))
}

export async function postOcsV2PhpCloudGroups(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups.$post(args, options))
}

export async function getOcsV2PhpCloudGroupsGroupId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$get(args, options))
}

export async function putOcsV2PhpCloudGroupsGroupId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$put(args, options))
}

export async function deleteOcsV2PhpCloudGroupsGroupId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$delete(args, options))
}

export async function getOcsV2PhpCloudUsersRecent(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users.recent.$get(args, options))
}

export async function getOcsV2PhpCloudUsersUserIdSubadmins(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].subadmins.$get(args, options),
  )
}

export async function postOcsV2PhpCloudUsersUserIdSubadmins(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].subadmins.$post(args, options),
  )
}

export async function deleteOcsV2PhpCloudUsersUserIdSubadmins(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].subadmins.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsProvisioningApiApiV1ConfigApps(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps.$get(args, options),
  )
}

export async function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsApp(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpCloudGroupsDetails(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.groups.details.$get(args, options))
}

export async function getOcsV2PhpCloudGroupsGroupIdUsers(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.groups[':groupId'].users.$get(args, options),
  )
}

export async function getOcsV2PhpCloudGroupsGroupIdUsersDetails(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.groups[':groupId'].users.details.$get(args, options),
  )
}

export async function getOcsV2PhpCloudUsers(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users.$get(args, options))
}

export async function postOcsV2PhpCloudUsers(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users.$post(args, options))
}

export async function getOcsV2PhpCloudUsersDetails(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users.details.$get(args, options))
}

export async function getOcsV2PhpCloudUsersDisabled(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users.disabled.$get(args, options))
}

export async function postOcsV2PhpCloudUsersSearchByPhone(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users.search['by-phone'].$post(args, options),
  )
}

export async function getOcsV2PhpCloudUsersUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$get(args, options))
}

export async function putOcsV2PhpCloudUsersUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$put(args, options))
}

export async function deleteOcsV2PhpCloudUsersUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$delete(args, options))
}

export async function patchOcsV2PhpCloudUsersUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$patch(args, options))
}

export async function getOcsV2PhpCloudUser(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.user.$get(args, options))
}

export async function getOcsV2PhpCloudUserFields(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.user.fields.$get(args, options))
}

export async function getOcsV2PhpCloudUserFieldsUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.user.fields[':userId'].$get(args, options))
}

export async function getOcsV2PhpCloudUserApps(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.user.apps.$get(args, options))
}

export async function putOcsV2PhpCloudUsersUserIdCollectionName(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'][':collectionName'].$put(args, options),
  )
}

export async function postOcsV2PhpCloudUsersUserIdWipe(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].wipe.$post(args, options))
}

export async function putOcsV2PhpCloudUsersUserIdEnable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].enable.$put(args, options))
}

export async function putOcsV2PhpCloudUsersUserIdDisable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].disable.$put(args, options),
  )
}

export async function getOcsV2PhpCloudUsersUserIdGroups(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.users[':userId'].groups.$get(args, options))
}

export async function postOcsV2PhpCloudUsersUserIdGroups(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].groups.$post(args, options),
  )
}

export async function deleteOcsV2PhpCloudUsersUserIdGroups(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].groups.$delete(args, options),
  )
}

export async function getOcsV2PhpCloudUsersUserIdGroupsDetails(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].groups.details.$get(args, options),
  )
}

export async function getOcsV2PhpCloudUsersUserIdSubadminsDetails(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].subadmins.details.$get(args, options),
  )
}

export async function postOcsV2PhpCloudUsersUserIdWelcome(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].cloud.users[':userId'].welcome.$post(args, options),
  )
}

export async function postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][':configKey'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][':configKey'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$delete(args, options),
  )
}
