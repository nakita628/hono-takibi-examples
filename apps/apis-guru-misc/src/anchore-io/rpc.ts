import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountname(
  args: InferRequestType<(typeof client.accounts)[':accountname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].$get(args, options))
}

export async function deleteAccountsAccountname(
  args: InferRequestType<(typeof client.accounts)[':accountname']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].$delete(args, options))
}

export async function putAccountsAccountnameState(
  args: InferRequestType<(typeof client.accounts)[':accountname']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].state.$put(args, options))
}

export async function getAccountsAccountnameUsers(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].users.$get(args, options))
}

export async function postAccountsAccountnameUsers(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].users.$post(args, options))
}

export async function getAccountsAccountnameUsersUsername(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountname'].users[':username'].$get(args, options))
}

export async function deleteAccountsAccountnameUsersUsername(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountname'].users[':username'].$delete(args, options),
  )
}

export async function getAccountsAccountnameUsersUsernameCredentials(
  args: InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountname'].users[':username'].credentials.$get(args, options),
  )
}

export async function postAccountsAccountnameUsersUsernameCredentials(
  args: InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountname'].users[':username'].credentials.$post(args, options),
  )
}

export async function deleteAccountsAccountnameUsersUsernameCredentials(
  args: InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountname'].users[':username'].credentials.$delete(args, options),
  )
}

export async function getArchives(options?: ClientRequestOptions) {
  return await parseResponse(client.archives.$get(undefined, options))
}

export async function getArchivesImages(options?: ClientRequestOptions) {
  return await parseResponse(client.archives.images.$get(undefined, options))
}

export async function postArchivesImages(
  args: InferRequestType<typeof client.archives.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.images.$post(args, options))
}

export async function getArchivesImagesImageDigest(
  args: InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.images[':imageDigest'].$get(args, options))
}

export async function deleteArchivesImagesImageDigest(
  args: InferRequestType<(typeof client.archives.images)[':imageDigest']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.images[':imageDigest'].$delete(args, options))
}

export async function getArchivesRules(
  args: InferRequestType<typeof client.archives.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.rules.$get(args, options))
}

export async function postArchivesRules(
  args: InferRequestType<typeof client.archives.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.rules.$post(args, options))
}

export async function getArchivesRulesRuleId(
  args: InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.rules[':ruleId'].$get(args, options))
}

export async function deleteArchivesRulesRuleId(
  args: InferRequestType<(typeof client.archives.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.rules[':ruleId'].$delete(args, options))
}

export async function getEventTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.event_types.$get(undefined, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function deleteEvents(
  args: InferRequestType<typeof client.events.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$delete(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].$get(args, options))
}

export async function deleteEventsEventId(
  args: InferRequestType<(typeof client.events)[':eventId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].$delete(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getImages(
  args: InferRequestType<typeof client.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$get(args, options))
}

export async function postImages(
  args: InferRequestType<typeof client.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$post(args, options))
}

export async function deleteImages(
  args: InferRequestType<typeof client.images.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$delete(args, options))
}

export async function getImagesByIdImageId(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].$get(args, options))
}

export async function deleteImagesByIdImageId(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].$delete(args, options))
}

export async function getImagesByIdImageIdCheck(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].check.$get(args, options))
}

export async function getImagesByIdImageIdContent(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].content.$get(args, options))
}

export async function getImagesByIdImageIdContentFiles(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].content.files.$get(args, options))
}

export async function getImagesByIdImageIdContentJava(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].content.java.$get(args, options))
}

export async function getImagesByIdImageIdContentCtype(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].content[':ctype'].$get(args, options))
}

export async function getImagesByIdImageIdVuln(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].vuln.$get(args, options))
}

export async function getImagesByIdImageIdVulnVtype(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.by_id[':imageId'].vuln[':vtype'].$get(args, options))
}

export async function getImagesImageDigest(
  args: InferRequestType<(typeof client.images)[':imageDigest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].$get(args, options))
}

export async function deleteImagesImageDigest(
  args: InferRequestType<(typeof client.images)[':imageDigest']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].$delete(args, options))
}

export async function getImagesImageDigestArtifactsFileContentSearch(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.images[':imageDigest'].artifacts.file_content_search.$get(args, options),
  )
}

export async function getImagesImageDigestArtifactsRetrievedFiles(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.images[':imageDigest'].artifacts.retrieved_files.$get(args, options),
  )
}

export async function getImagesImageDigestArtifactsSecretSearch(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.images[':imageDigest'].artifacts.secret_search.$get(args, options),
  )
}

export async function getImagesImageDigestCheck(
  args: InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].check.$get(args, options))
}

export async function getImagesImageDigestContent(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].content.$get(args, options))
}

export async function getImagesImageDigestContentFiles(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].content.files.$get(args, options))
}

export async function getImagesImageDigestContentJava(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].content.java.$get(args, options))
}

export async function getImagesImageDigestContentMalware(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].content.malware.$get(args, options))
}

export async function getImagesImageDigestContentCtype(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].content[':ctype'].$get(args, options))
}

export async function getImagesImageDigestMetadata(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].metadata.$get(args, options))
}

export async function getImagesImageDigestMetadataMtype(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].metadata[':mtype'].$get(args, options))
}

export async function getImagesImageDigestSbomsNative(
  args: InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].sboms.native.$get(args, options))
}

export async function getImagesImageDigestVuln(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].vuln.$get(args, options))
}

export async function getImagesImageDigestVulnVtype(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageDigest'].vuln[':vtype'].$get(args, options))
}

export async function postImportImages(
  args: InferRequestType<typeof client.import.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import.images.$post(args, options))
}

export async function getImportsImages(options?: ClientRequestOptions) {
  return await parseResponse(client.imports.images.$get(undefined, options))
}

export async function postImportsImages(options?: ClientRequestOptions) {
  return await parseResponse(client.imports.images.$post(undefined, options))
}

export async function getImportsImagesOperationId(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].$get(args, options))
}

export async function deleteImportsImagesOperationId(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].$delete(args, options))
}

export async function getImportsImagesOperationIdDockerfile(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].dockerfile.$get(args, options))
}

export async function postImportsImagesOperationIdDockerfile(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].dockerfile.$post(args, options))
}

export async function getImportsImagesOperationIdImageConfig(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.imports.images[':operation_id'].image_config.$get(args, options),
  )
}

export async function postImportsImagesOperationIdImageConfig(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.imports.images[':operation_id'].image_config.$post(args, options),
  )
}

export async function getImportsImagesOperationIdManifest(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].manifest.$get(args, options))
}

export async function postImportsImagesOperationIdManifest(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].manifest.$post(args, options))
}

export async function getImportsImagesOperationIdPackages(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].packages.$get(args, options))
}

export async function postImportsImagesOperationIdPackages(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.images[':operation_id'].packages.$post(args, options))
}

export async function getImportsImagesOperationIdParentManifest(
  args: InferRequestType<
    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.imports.images[':operation_id'].parent_manifest.$get(args, options),
  )
}

export async function postImportsImagesOperationIdParentManifest(
  args: InferRequestType<
    (typeof client.imports.images)[':operation_id']['parent_manifest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.imports.images[':operation_id'].parent_manifest.$post(args, options),
  )
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function getPolicies(
  args: InferRequestType<typeof client.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$get(args, options))
}

export async function postPolicies(
  args: InferRequestType<typeof client.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$post(args, options))
}

export async function getPoliciesPolicyId(
  args: InferRequestType<(typeof client.policies)[':policyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].$get(args, options))
}

export async function putPoliciesPolicyId(
  args: InferRequestType<(typeof client.policies)[':policyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].$put(args, options))
}

export async function deletePoliciesPolicyId(
  args: InferRequestType<(typeof client.policies)[':policyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].$delete(args, options))
}

export async function getQueryImagesByPackage(
  args: InferRequestType<typeof client.query.images.by_package.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.images.by_package.$get(args, options))
}

export async function getQueryImagesByVulnerability(
  args: InferRequestType<typeof client.query.images.by_vulnerability.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.images.by_vulnerability.$get(args, options))
}

export async function getQueryVulnerabilities(
  args: InferRequestType<typeof client.query.vulnerabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.vulnerabilities.$get(args, options))
}

export async function getRegistries(
  args: InferRequestType<typeof client.registries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries.$get(args, options))
}

export async function postRegistries(
  args: InferRequestType<typeof client.registries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries.$post(args, options))
}

export async function getRegistriesRegistry(
  args: InferRequestType<(typeof client.registries)[':registry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':registry'].$get(args, options))
}

export async function putRegistriesRegistry(
  args: InferRequestType<(typeof client.registries)[':registry']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':registry'].$put(args, options))
}

export async function deleteRegistriesRegistry(
  args: InferRequestType<(typeof client.registries)[':registry']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':registry'].$delete(args, options))
}

export async function postRepositories(
  args: InferRequestType<typeof client.repositories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories.$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
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

export async function putSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$put(args, options))
}

export async function deleteSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$delete(args, options))
}

export async function getSummariesImagetags(
  args: InferRequestType<typeof client.summaries.imagetags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.summaries.imagetags.$get(args, options))
}

export async function getSystem(options?: ClientRequestOptions) {
  return await parseResponse(client.system.$get(undefined, options))
}

export async function getSystemErrorCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.system.error_codes.$get(undefined, options))
}

export async function getSystemFeeds(options?: ClientRequestOptions) {
  return await parseResponse(client.system.feeds.$get(undefined, options))
}

export async function postSystemFeeds(
  args: InferRequestType<typeof client.system.feeds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.feeds.$post(args, options))
}

export async function putSystemFeedsFeed(
  args: InferRequestType<(typeof client.system.feeds)[':feed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.feeds[':feed'].$put(args, options))
}

export async function deleteSystemFeedsFeed(
  args: InferRequestType<(typeof client.system.feeds)[':feed']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.feeds[':feed'].$delete(args, options))
}

export async function putSystemFeedsFeedGroup(
  args: InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.feeds[':feed'][':group'].$put(args, options))
}

export async function deleteSystemFeedsFeedGroup(
  args: InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.feeds[':feed'][':group'].$delete(args, options))
}

export async function getSystemPolicySpec(options?: ClientRequestOptions) {
  return await parseResponse(client.system.policy_spec.$get(undefined, options))
}

export async function getSystemServices(options?: ClientRequestOptions) {
  return await parseResponse(client.system.services.$get(undefined, options))
}

export async function getSystemServicesServicename(
  args: InferRequestType<(typeof client.system.services)[':servicename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.services[':servicename'].$get(args, options))
}

export async function getSystemServicesServicenameHostid(
  args: InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.services[':servicename'][':hostid'].$get(args, options))
}

export async function deleteSystemServicesServicenameHostid(
  args: InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.system.services[':servicename'][':hostid'].$delete(args, options),
  )
}

export async function postSystemWebhooksWebhookTypeTest(
  args: InferRequestType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.webhooks[':webhook_type'].test.$post(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function getUserCredentials(options?: ClientRequestOptions) {
  return await parseResponse(client.user.credentials.$get(undefined, options))
}

export async function postUserCredentials(
  args: InferRequestType<typeof client.user.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.credentials.$post(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
