import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAndroidenterpriseV1Enterprises(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidenterprise.v1.enterprises.$get(args, options))
}

export async function postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSet(
  args: InferRequestType<
    typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesCompleteSignup(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises.completeSignup.$post(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnroll(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidenterprise.v1.enterprises.enroll.$post(args, options))
}

export async function postAndroidenterpriseV1EnterprisesPullNotificationSet(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises.pullNotificationSet.$post(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesSignupUrl(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidenterprise.v1.enterprises.signupUrl.$post(args, options))
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseId(
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdAccount(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].account.$put(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentToken(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].createEnrollmentToken.$post(
      args,
      options,
    ),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebToken(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].createWebToken.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicenses(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[':groupLicenseId'].$get(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsers(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
      ':groupLicenseId'
    ].users.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdProducts(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchema(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[
      ':productId'
    ].appRestrictionsSchema.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApprove(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].approve.$post(
      args,
      options,
    ),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrl(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[
      ':productId'
    ].generateApprovalUrl.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettings(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[
      ':productId'
    ].managedConfigurationsSettings.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissions(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[
      ':productId'
    ].permissions.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapprove(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].unapprove.$post(
      args,
      options,
    ),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotification(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].sendTestPushNotification.$post(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccount(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$post(
      args,
      options,
    ),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys[':keyId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$put(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$get(
      args,
      options,
    ),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
      ':pageId'
    ].clusters.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
      ':pageId'
    ].clusters.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].clusters[
      ':clusterId'
    ].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].clusters[
      ':clusterId'
    ].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].clusters[
      ':clusterId'
    ].$delete(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdUnenroll(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].unenroll.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsers(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdUsers(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$delete(
      args,
      options,
    ),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationToken(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].authenticationToken.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].availableProductSet.$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].availableProductSet.$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccess(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].deviceAccess.$delete(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevices(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].$put(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUpload(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].forceReportUpload.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstalls(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].installs.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].installs[':installId'].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].installs[':installId'].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].installs[':installId'].$delete(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDevice(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].managedConfigurationsForDevice.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$delete(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].state.$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
      ':deviceId'
    ].state.$put(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlements(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements.$get(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
      ':entitlementId'
    ].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
      ':entitlementId'
    ].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
      ':entitlementId'
    ].$delete(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUser(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].managedConfigurationsForUser.$get(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(args, options),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].managedConfigurationsForUser[':managedConfigurationForUserId'].$put(args, options),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].users[
      ':userId'
    ].managedConfigurationsForUser[':managedConfigurationForUserId'].$delete(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdWebApps(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(args, options),
  )
}

export async function postAndroidenterpriseV1EnterprisesEnterpriseIdWebApps(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$post(args, options),
  )
}

export async function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(
      args,
      options,
    ),
  )
}

export async function putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAndroidenterpriseV1PermissionsPermissionId(
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidenterprise.v1.permissions[':permissionId'].$get(args, options),
  )
}
