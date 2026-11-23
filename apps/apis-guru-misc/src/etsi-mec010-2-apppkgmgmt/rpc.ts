import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppPackages(
  args: InferRequestType<typeof client.app_packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages.$get(args, options))
}

export async function postAppPackages(
  args: InferRequestType<typeof client.app_packages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages.$post(args, options))
}

export async function getAppPackagesAppPkgId(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].$get(args, options))
}

export async function deleteAppPackagesAppPkgId(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].$delete(args, options))
}

export async function patchAppPackagesAppPkgId(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].$patch(args, options))
}

export async function getAppPackagesAppPkgIdAppd(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].appd.$get(args, options))
}

export async function getAppPackagesAppPkgIdPackageContent(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].package_content.$get(args, options))
}

export async function putAppPackagesAppPkgIdPackageContent(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app_packages[':appPkgId'].package_content.$put(args, options))
}

export async function getOnboardedAppPackagesAppDIdAppd(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.onboarded_app_packages[':appDId'].appd.$get(args, options))
}

export async function getOnboardedAppPackagesAppDIdPackageContent(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.onboarded_app_packages[':appDId'].package_content.$get(args, options),
  )
}

export async function putOnboardedAppPackagesAppDIdPackageContent(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.onboarded_app_packages[':appDId'].package_content.$put(args, options),
  )
}

export async function getSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client.subscriptions.$get(undefined, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$get(args, options))
}

export async function deleteSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$delete(args, options))
}

export async function postUserDefinedNotification(
  args: InferRequestType<typeof client.user_defined_notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_defined_notification.$post(args, options))
}
