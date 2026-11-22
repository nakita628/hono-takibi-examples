import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTailnetTailnetDevices(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].devices.$get(args, options))
}

export async function deleteTailnetTailnet(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].$delete(args, options))
}

export async function patchTailnetTailnetDeviceAttributes(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['device-attributes']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['device-attributes'].$patch(args, options))
}

export async function getDeviceDeviceId(
  args: InferRequestType<(typeof client.device)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].$get(args, options))
}

export async function deleteDeviceDeviceId(
  args: InferRequestType<(typeof client.device)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].$delete(args, options))
}

export async function postDeviceDeviceIdExpire(
  args: InferRequestType<(typeof client.device)[':deviceId']['expire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].expire.$post(args, options))
}

export async function getDeviceDeviceIdRoutes(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].routes.$get(args, options))
}

export async function postDeviceDeviceIdRoutes(
  args: InferRequestType<(typeof client.device)[':deviceId']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].routes.$post(args, options))
}

export async function postDeviceDeviceIdAuthorized(
  args: InferRequestType<(typeof client.device)[':deviceId']['authorized']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].authorized.$post(args, options))
}

export async function postDeviceDeviceIdName(
  args: InferRequestType<(typeof client.device)[':deviceId']['name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].name.$post(args, options))
}

export async function postDeviceDeviceIdTags(
  args: InferRequestType<(typeof client.device)[':deviceId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].tags.$post(args, options))
}

export async function postDeviceDeviceIdKey(
  args: InferRequestType<(typeof client.device)[':deviceId']['key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].key.$post(args, options))
}

export async function postDeviceDeviceIdIp(
  args: InferRequestType<(typeof client.device)[':deviceId']['ip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].ip.$post(args, options))
}

export async function getDeviceDeviceIdAttributes(
  args: InferRequestType<(typeof client.device)[':deviceId']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId'].attributes.$get(args, options))
}

export async function postDeviceDeviceIdAttributesAttributeKey(
  args: InferRequestType<
    (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.device[':deviceId'].attributes[':attributeKey'].$post(args, options),
  )
}

export async function deleteDeviceDeviceIdAttributesAttributeKey(
  args: InferRequestType<
    (typeof client.device)[':deviceId']['attributes'][':attributeKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.device[':deviceId'].attributes[':attributeKey'].$delete(args, options),
  )
}

export async function getDeviceDeviceIdDeviceInvites(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId']['device-invites'].$get(args, options))
}

export async function postDeviceDeviceIdDeviceInvites(
  args: InferRequestType<(typeof client.device)[':deviceId']['device-invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceId']['device-invites'].$post(args, options))
}

export async function getTailnetTailnetUserInvites(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['user-invites'].$get(args, options))
}

export async function postTailnetTailnetUserInvites(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['user-invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['user-invites'].$post(args, options))
}

export async function getUserInvitesUserInviteId(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-invites'][':userInviteId'].$get(args, options))
}

export async function deleteUserInvitesUserInviteId(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-invites'][':userInviteId'].$delete(args, options))
}

export async function postUserInvitesUserInviteIdResend(
  args: InferRequestType<(typeof client)['user-invites'][':userInviteId']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-invites'][':userInviteId'].resend.$post(args, options))
}

export async function getDeviceInvitesDeviceInviteId(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-invites'][':deviceInviteId'].$get(args, options))
}

export async function deleteDeviceInvitesDeviceInviteId(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-invites'][':deviceInviteId'].$delete(args, options))
}

export async function postDeviceInvitesDeviceInviteIdResend(
  args: InferRequestType<(typeof client)['device-invites'][':deviceInviteId']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['device-invites'][':deviceInviteId'].resend.$post(args, options),
  )
}

export async function postDeviceInvitesDashAccept(
  args: InferRequestType<(typeof client)['device-invites']['-']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-invites']['-'].accept.$post(args, options))
}

export async function getTailnetTailnetLoggingConfiguration(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].logging.configuration.$get(args, options))
}

export async function getTailnetTailnetLoggingNetwork(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['logging']['network']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].logging.network.$get(args, options))
}

export async function getTailnetTailnetLoggingLogTypeStreamStatus(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].logging[':logType'].stream.status.$get(args, options),
  )
}

export async function getTailnetTailnetLoggingLogTypeStream(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].logging[':logType'].stream.$get(args, options),
  )
}

export async function putTailnetTailnetLoggingLogTypeStream(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].logging[':logType'].stream.$put(args, options),
  )
}

export async function deleteTailnetTailnetLoggingLogTypeStream(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['logging'][':logType']['stream']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].logging[':logType'].stream.$delete(args, options),
  )
}

export async function postTailnetTailnetAwsExternalId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['aws-external-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['aws-external-id'].$post(args, options))
}

export async function postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicy(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet']['aws-external-id'][':id']['validate-aws-trust-policy'].$post(
      args,
      options,
    ),
  )
}

export async function getTailnetTailnetDnsNameservers(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.nameservers.$get(args, options))
}

export async function postTailnetTailnetDnsNameservers(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['nameservers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.nameservers.$post(args, options))
}

export async function getTailnetTailnetDnsPreferences(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.preferences.$get(args, options))
}

export async function postTailnetTailnetDnsPreferences(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['preferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.preferences.$post(args, options))
}

export async function getTailnetTailnetDnsSearchpaths(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$get(args, options))
}

export async function postTailnetTailnetDnsSearchpaths(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['searchpaths']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.searchpaths.$post(args, options))
}

export async function getTailnetTailnetDnsSplitDns(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$get(args, options))
}

export async function putTailnetTailnetDnsSplitDns(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$put(args, options))
}

export async function patchTailnetTailnetDnsSplitDns(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['split-dns']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns['split-dns'].$patch(args, options))
}

export async function getTailnetTailnetDnsConfiguration(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.configuration.$get(args, options))
}

export async function postTailnetTailnetDnsConfiguration(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['dns']['configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].dns.configuration.$post(args, options))
}

export async function getTailnetTailnetKeys(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].keys.$get(args, options))
}

export async function postTailnetTailnetKeys(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].keys.$post(args, options))
}

export async function getTailnetTailnetKeysKeyId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$get(args, options))
}

export async function putTailnetTailnetKeysKeyId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$put(args, options))
}

export async function deleteTailnetTailnetKeysKeyId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['keys'][':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].keys[':keyId'].$delete(args, options))
}

export async function getTailnetTailnetAcl(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].acl.$get(args, options))
}

export async function postTailnetTailnetAcl(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].acl.$post(args, options))
}

export async function postTailnetTailnetAclPreview(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].acl.preview.$post(args, options))
}

export async function postTailnetTailnetAclValidate(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['acl']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].acl.validate.$post(args, options))
}

export async function getTailnetTailnetPostureIntegrations(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].posture.integrations.$get(args, options))
}

export async function postTailnetTailnetPostureIntegrations(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['posture']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].posture.integrations.$post(args, options))
}

export async function getPostureIntegrationsId(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posture.integrations[':id'].$get(args, options))
}

export async function deletePostureIntegrationsId(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posture.integrations[':id'].$delete(args, options))
}

export async function patchPostureIntegrationsId(
  args: InferRequestType<(typeof client.posture.integrations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posture.integrations[':id'].$patch(args, options))
}

export async function getTailnetTailnetUsers(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].users.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function postUsersUserIdRole(
  args: InferRequestType<(typeof client.users)[':userId']['role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].role.$post(args, options))
}

export async function postUsersUserIdApprove(
  args: InferRequestType<(typeof client.users)[':userId']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].approve.$post(args, options))
}

export async function postUsersUserIdSuspend(
  args: InferRequestType<(typeof client.users)[':userId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].suspend.$post(args, options))
}

export async function postUsersUserIdRestore(
  args: InferRequestType<(typeof client.users)[':userId']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].restore.$post(args, options))
}

export async function postUsersUserIdDelete(
  args: InferRequestType<(typeof client.users)[':userId']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].delete.$post(args, options))
}

export async function getTailnetTailnetContacts(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].contacts.$get(args, options))
}

export async function patchTailnetTailnetContactsContactType(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['contacts'][':contactType']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].contacts[':contactType'].$patch(args, options),
  )
}

export async function postTailnetTailnetContactsContactTypeResendVerificationEmail(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['contacts'][':contactType']['resend-verification-email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].contacts[':contactType']['resend-verification-email'].$post(
      args,
      options,
    ),
  )
}

export async function getTailnetTailnetWebhooks(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].webhooks.$get(args, options))
}

export async function postTailnetTailnetWebhooks(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].webhooks.$post(args, options))
}

export async function getWebhooksEndpointId(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':endpointId'].$get(args, options))
}

export async function deleteWebhooksEndpointId(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':endpointId'].$delete(args, options))
}

export async function patchWebhooksEndpointId(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':endpointId'].$patch(args, options))
}

export async function postWebhooksEndpointIdTest(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':endpointId'].test.$post(args, options))
}

export async function postWebhooksEndpointIdRotate(
  args: InferRequestType<(typeof client.webhooks)[':endpointId']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':endpointId'].rotate.$post(args, options))
}

export async function getTailnetTailnetSettings(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].settings.$get(args, options))
}

export async function patchTailnetTailnetSettings(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].settings.$patch(args, options))
}

export async function getTailnetTailnetServices(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet'].services.$get(args, options))
}

export async function getTailnetTailnetServicesServiceName(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].$get(args, options),
  )
}

export async function putTailnetTailnetServicesServiceName(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['services'][':serviceName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].$put(args, options),
  )
}

export async function deleteTailnetTailnetServicesServiceName(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].$delete(args, options),
  )
}

export async function getTailnetTailnetServicesServiceNameDevices(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].devices.$get(args, options),
  )
}

export async function getTailnetTailnetServicesServiceNameDeviceDeviceIdApproved(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$get(
      args,
      options,
    ),
  )
}

export async function postTailnetTailnetServicesServiceNameDeviceDeviceIdApproved(
  args: InferRequestType<
    (typeof client.tailnet)[':tailnet']['services'][':serviceName']['device'][':deviceId']['approved']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet'].services[':serviceName'].device[':deviceId'].approved.$post(
      args,
      options,
    ),
  )
}

export async function getTailnetTailnetOauthApps(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['oauth-apps'].$get(args, options))
}

export async function postTailnetTailnetOauthApps(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['oauth-apps'].$post(args, options))
}

export async function getTailnetTailnetOauthAppsAppId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$get(args, options))
}

export async function putTailnetTailnetOauthAppsAppId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailnet[':tailnet']['oauth-apps'][':appId'].$put(args, options))
}

export async function deleteTailnetTailnetOauthAppsAppId(
  args: InferRequestType<(typeof client.tailnet)[':tailnet']['oauth-apps'][':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tailnet[':tailnet']['oauth-apps'][':appId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationTailnets(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization'].tailnets.$get(args, options))
}

export async function postOrganizationsOrganizationTailnets(
  args: InferRequestType<(typeof client.organizations)[':organization']['tailnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization'].tailnets.$post(args, options))
}
