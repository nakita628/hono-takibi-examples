import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOpenapi(options?: ClientRequestOptions) {
  return await parseResponse(client.openapi.$get(undefined, options))
}

export async function getApplicationAppIdEnvironment(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.application[':appId'].environment.$get(args, options))
}

export async function putApplicationAppIdEnvironment(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.application[':appId'].environment.$put(args, options))
}

export async function postAuthorize(options?: ClientRequestOptions) {
  return await parseResponse(client.authorize.$post(undefined, options))
}

export async function getEventsEventSocket(options?: ClientRequestOptions) {
  return await parseResponse(client.events['event-socket'].$get(undefined, options))
}

export async function getGithub(options?: ClientRequestOptions) {
  return await parseResponse(client.github.$get(undefined, options))
}

export async function getGithubApplications(options?: ClientRequestOptions) {
  return await parseResponse(client.github.applications.$get(undefined, options))
}

export async function getGithubCallback(
  args: InferRequestType<typeof client.github.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.callback.$get(args, options))
}

export async function getGithubEmails(options?: ClientRequestOptions) {
  return await parseResponse(client.github.emails.$get(undefined, options))
}

export async function getGithubKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.github.keys.$get(undefined, options))
}

export async function getGithubLink(
  args: InferRequestType<typeof client.github.link.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.link.$get(args, options))
}

export async function deleteGithubLink(options?: ClientRequestOptions) {
  return await parseResponse(client.github.link.$delete(undefined, options))
}

export async function getGithubLogin(
  args: InferRequestType<typeof client.github.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.login.$get(args, options))
}

export async function postGithubRedeploy(
  args: InferRequestType<typeof client.github.redeploy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.redeploy.$post(args, options))
}

export async function getGithubSignup(
  args: InferRequestType<typeof client.github.signup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.signup.$get(args, options))
}

export async function postGithubSignup(
  args: InferRequestType<typeof client.github.signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github.signup.$post(args, options))
}

export async function getGithubUsername(options?: ClientRequestOptions) {
  return await parseResponse(client.github.username.$get(undefined, options))
}

export async function getLogsSocketAppId(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['logs-socket'][':appId'].$get(args, options))
}

export async function getLogsDrains(options?: ClientRequestOptions) {
  return await parseResponse(client.logs.drains.$get(undefined, options))
}

export async function putLogsDrainsDrainId(
  args: InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.drains[':drainId'].$put(args, options))
}

export async function getLogsLogsChunkedAppId(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs['logs-chunked'][':appId'].$get(args, options))
}

export async function getLogsLogsSocketAppId(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs['logs-socket'][':appId'].$get(args, options))
}

export async function getLogsAppId(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].$get(args, options))
}

export async function getLogsAppIdDrains(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].drains.$get(args, options))
}

export async function postLogsAppIdDrains(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].drains.$post(args, options))
}

export async function getLogsAppIdDrainsIdOrUrl(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].drains[':idOrUrl'].$get(args, options))
}

export async function deleteLogsAppIdDrainsIdOrUrl(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
}

export async function getLogsAppIdSse(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':appId'].sse.$get(args, options))
}

export async function getNewsfeedsBlog(options?: ClientRequestOptions) {
  return await parseResponse(client.newsfeeds.blog.$get(undefined, options))
}

export async function getNewsfeedsEngineering(options?: ClientRequestOptions) {
  return await parseResponse(client.newsfeeds.engineering.$get(undefined, options))
}

export async function getNotificationsEmailhooksOwnerId(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.emailhooks[':ownerId'].$get(args, options))
}

export async function postNotificationsEmailhooksOwnerId(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.emailhooks[':ownerId'].$post(args, options))
}

export async function putNotificationsEmailhooksOwnerIdId(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.emailhooks[':ownerId'][':id'].$put(args, options))
}

export async function deleteNotificationsEmailhooksOwnerIdId(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.emailhooks[':ownerId'][':id'].$delete(args, options),
  )
}

export async function getNotificationsInfoEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.info.events.$get(undefined, options))
}

export async function getNotificationsInfoWebhookformats(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.info.webhookformats.$get(undefined, options))
}

export async function getNotificationsWebhooksOwnerId(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.webhooks[':ownerId'].$get(args, options))
}

export async function postNotificationsWebhooksOwnerId(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.webhooks[':ownerId'].$post(args, options))
}

export async function putNotificationsWebhooksOwnerIdId(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.webhooks[':ownerId'][':id'].$put(args, options))
}

export async function deleteNotificationsWebhooksOwnerIdId(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.webhooks[':ownerId'][':id'].$delete(args, options),
  )
}

export async function postOauthAccessToken(
  args: InferRequestType<typeof client.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token.$post(args, options))
}

export async function postOauthAccessTokenQuery(
  args: InferRequestType<typeof client.oauth.access_token_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token_query.$post(args, options))
}

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function postOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$post(args, options))
}

export async function postOauthRequestToken(
  args: InferRequestType<typeof client.oauth.request_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.request_token.$post(args, options))
}

export async function postOauthRequestTokenQuery(
  args: InferRequestType<typeof client.oauth.request_token_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.request_token_query.$post(args, options))
}

export async function getOauthRights(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.rights.$get(undefined, options))
}

export async function getOpenapiType2(
  args: InferRequestType<(typeof client)['openapi.:type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['openapi.:type'].$get(args, options))
}

export async function getOrganisations(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations.$get(args, options))
}

export async function postOrganisations(
  args: InferRequestType<typeof client.organisations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations.$post(args, options))
}

export async function getOrganisationsId(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].$get(args, options))
}

export async function putOrganisationsId(
  args: InferRequestType<(typeof client.organisations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].$put(args, options))
}

export async function deleteOrganisationsId(
  args: InferRequestType<(typeof client.organisations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].$delete(args, options))
}

export async function getOrganisationsIdAddonproviders(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addonproviders.$get(args, options))
}

export async function postOrganisationsIdAddonproviders(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addonproviders.$post(args, options))
}

export async function getOrganisationsIdAddonprovidersProviderId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].$get(args, options),
  )
}

export async function putOrganisationsIdAddonprovidersProviderId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].$put(args, options),
  )
}

export async function deleteOrganisationsIdAddonprovidersProviderId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].$delete(args, options),
  )
}

export async function getOrganisationsIdAddonprovidersProviderIdFeatures(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].features.$get(args, options),
  )
}

export async function postOrganisationsIdAddonprovidersProviderIdFeatures(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].features.$post(args, options),
  )
}

export async function deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].features[':featureId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganisationsIdAddonprovidersProviderIdPlans(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans.$get(args, options),
  )
}

export async function postOrganisationsIdAddonprovidersProviderIdPlans(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans.$post(args, options),
  )
}

export async function getOrganisationsIdAddonprovidersProviderIdPlansPlanId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(args, options),
  )
}

export async function putOrganisationsIdAddonprovidersProviderIdPlansPlanId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$put(args, options),
  )
}

export async function deleteOrganisationsIdAddonprovidersProviderIdPlansPlanId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$delete(
      args,
      options,
    ),
  )
}

export async function putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
      ':featureName'
    ].$put(args, options),
  )
}

export async function deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
      ':featureName'
    ].$delete(args, options),
  )
}

export async function getOrganisationsIdAddonprovidersProviderIdSso(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].sso.$get(args, options),
  )
}

export async function getOrganisationsIdAddonprovidersProviderIdTags(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].tags.$get(args, options),
  )
}

export async function postOrganisationsIdAddonprovidersProviderIdTesters(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addonproviders[':providerId'].testers.$post(args, options),
  )
}

export async function getOrganisationsIdAddons(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons.$get(args, options))
}

export async function postOrganisationsIdAddons(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons.$post(args, options))
}

export async function postOrganisationsIdAddonsPreorders(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons.preorders.$post(args, options))
}

export async function getOrganisationsIdAddonsAddonId(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons[':addonId'].$get(args, options))
}

export async function putOrganisationsIdAddonsAddonId(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons[':addonId'].$put(args, options))
}

export async function deleteOrganisationsIdAddonsAddonId(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons[':addonId'].$delete(args, options))
}

export async function getOrganisationsIdAddonsAddonIdApplications(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].applications.$get(args, options),
  )
}

export async function getOrganisationsIdAddonsAddonIdEnv(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons[':addonId'].env.$get(args, options))
}

export async function getOrganisationsIdAddonsAddonIdInstances(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].instances.$get(args, options),
  )
}

export async function getOrganisationsIdAddonsAddonIdInstancesInstanceId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(args, options),
  )
}

export async function getOrganisationsIdAddonsAddonIdMigrations(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].migrations.$get(args, options),
  )
}

export async function postOrganisationsIdAddonsAddonIdMigrations(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].migrations.$post(args, options),
  )
}

export async function getOrganisationsIdAddonsAddonIdMigrationsMigrationId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(args, options),
  )
}

export async function getOrganisationsIdAddonsAddonIdSso(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].addons[':addonId'].sso.$get(args, options))
}

export async function getOrganisationsIdAddonsAddonIdTags(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].tags.$get(args, options),
  )
}

export async function putOrganisationsIdAddonsAddonIdTagsTag(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].tags[':tag'].$put(args, options),
  )
}

export async function deleteOrganisationsIdAddonsAddonIdTagsTag(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].addons[':addonId'].tags[':tag'].$delete(args, options),
  )
}

export async function getOrganisationsIdApplications(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].applications.$get(args, options))
}

export async function postOrganisationsIdApplications(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].applications.$post(args, options))
}

export async function getOrganisationsIdApplicationsAppId(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].applications[':appId'].$get(args, options))
}

export async function putOrganisationsIdApplicationsAppId(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].applications[':appId'].$put(args, options))
}

export async function deleteOrganisationsIdApplicationsAppId(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].$delete(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdAddons(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].addons.$get(args, options),
  )
}

export async function postOrganisationsIdApplicationsAppIdAddons(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].addons.$post(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdAddonsEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].addons.env.$get(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdAddonsAddonId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].addons[':addonId'].$delete(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdBranch(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].branch.$put(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdBranches(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].branches.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdBuildflavor(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].buildflavor.$put(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdDependencies(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].dependencies.$get(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdDependenciesEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].dependencies.env.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdDependenciesDependencyId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdDependenciesDependencyId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganisationsIdApplicationsAppIdDependents(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].dependents.$get(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdDeployments(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].deployments.$get(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].deployments[
      ':deploymentId'
    ].instances.$delete(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].env.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].env.$put(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdEnvEnvName(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].env[':envName'].$put(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdEnvEnvName(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].env[':envName'].$delete(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdExposedEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].exposed_env.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdExposedEnv(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].exposed_env.$put(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdInstances(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].instances.$get(args, options),
  )
}

export async function postOrganisationsIdApplicationsAppIdInstances(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].instances.$post(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdInstances(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].instances.$delete(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdInstancesInstanceId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdTags(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].tags.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdTagsTag(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].tags[':tag'].$put(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdTagsTag(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].tags[':tag'].$delete(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdVhosts(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts.$get(args, options),
  )
}

export async function getOrganisationsIdApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts.favourite.$put(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts.favourite.$delete(args, options),
  )
}

export async function putOrganisationsIdApplicationsAppIdVhostsDomain(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts[':domain'].$put(args, options),
  )
}

export async function deleteOrganisationsIdApplicationsAppIdVhostsDomain(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].applications[':appId'].vhosts[':domain'].$delete(args, options),
  )
}

export async function putOrganisationsIdAvatar(
  args: InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].avatar.$put(args, options))
}

export async function getOrganisationsIdConsumers(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumers.$get(args, options))
}

export async function postOrganisationsIdConsumers(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumers.$post(args, options))
}

export async function getOrganisationsIdConsumersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumers[':key'].$get(args, options))
}

export async function putOrganisationsIdConsumersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumers[':key'].$put(args, options))
}

export async function deleteOrganisationsIdConsumersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumers[':key'].$delete(args, options))
}

export async function getOrganisationsIdConsumersKeySecret(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].consumers[':key'].secret.$get(args, options),
  )
}

export async function getOrganisationsIdConsumptions(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].consumptions.$get(args, options))
}

export async function getOrganisationsIdCredits(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].credits.$get(args, options))
}

export async function getOrganisationsIdDeployments(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].deployments.$get(args, options))
}

export async function getOrganisationsIdInstances(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].instances.$get(args, options))
}

export async function getOrganisationsIdMembers(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].members.$get(args, options))
}

export async function postOrganisationsIdMembers(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].members.$post(args, options))
}

export async function putOrganisationsIdMembersUserId(
  args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].members[':userId'].$put(args, options))
}

export async function deleteOrganisationsIdMembersUserId(
  args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].members[':userId'].$delete(args, options))
}

export async function getOrganisationsIdPaymentInfo(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id']['payment-info'].$get(args, options))
}

export async function getOrganisationsIdPaymentsBillings(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.billings.$get(args, options))
}

export async function postOrganisationsIdPaymentsBillings(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.billings.$post(args, options))
}

export async function getOrganisationsIdPaymentsBillingsUnpaid(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.billings.unpaid.$get(args, options),
  )
}

export async function getOrganisationsIdPaymentsBillingsBid(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.billings[':bid'].$get(args, options),
  )
}

export async function putOrganisationsIdPaymentsBillingsBid(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.billings[':bid'].$put(args, options),
  )
}

export async function deleteOrganisationsIdPaymentsBillingsBid(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.billings[':bid'].$delete(args, options),
  )
}

export async function getOrganisationsIdPaymentsBillingsBidPdf(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.billings[':bid.pdf'].$get(args, options),
  )
}

export async function getOrganisationsIdPaymentsFullpricePrice(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.fullprice[':price'].$get(args, options),
  )
}

export async function getOrganisationsIdPaymentsMethods(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.methods.$get(args, options))
}

export async function postOrganisationsIdPaymentsMethods(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.methods.$post(args, options))
}

export async function getOrganisationsIdPaymentsMethodsDefault(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.methods.default.$get(args, options),
  )
}

export async function putOrganisationsIdPaymentsMethodsDefault(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.methods.default.$put(args, options),
  )
}

export async function deleteOrganisationsIdPaymentsMethodsMId(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.methods[':mId'].$delete(args, options),
  )
}

export async function getOrganisationsIdPaymentsMonthlyinvoice(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.monthlyinvoice.$get(args, options),
  )
}

export async function putOrganisationsIdPaymentsMonthlyinvoiceMaxcredit(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':id'].payments.monthlyinvoice.maxcredit.$put(args, options),
  )
}

export async function getOrganisationsIdPaymentsRecurring(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.recurring.$get(args, options))
}

export async function deleteOrganisationsIdPaymentsRecurring(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':id'].payments.recurring.$delete(args, options))
}

export async function getPasswordForgotten(options?: ClientRequestOptions) {
  return await parseResponse(client.password_forgotten.$get(undefined, options))
}

export async function postPasswordForgotten(
  args: InferRequestType<typeof client.password_forgotten.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_forgotten.$post(args, options))
}

export async function getPasswordForgottenKey(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_forgotten[':key'].$get(args, options))
}

export async function postPasswordForgottenKey(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_forgotten[':key'].$post(args, options))
}

export async function getPaymentsAssetsPayButtonTokenButtonPng(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments.assets.pay_button[':token']['button.png'].$get(args, options),
  )
}

export async function getPaymentsCouponsName(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.coupons[':name'].$get(args, options))
}

export async function getPaymentsProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.payments.providers.$get(undefined, options))
}

export async function getPaymentsTokensStripe(options?: ClientRequestOptions) {
  return await parseResponse(client.payments.tokens.stripe.$get(undefined, options))
}

export async function postPaymentsBidEndStripe(
  args: InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':bid'].end.stripe.$post(args, options))
}

export async function getProductsAddonproviders(options?: ClientRequestOptions) {
  return await parseResponse(client.products.addonproviders.$get(undefined, options))
}

export async function getProductsAddonprovidersProviderId(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.addonproviders[':provider_id'].$get(args, options))
}

export async function getProductsAddonprovidersProviderIdVersions(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.products.addonproviders[':provider_id'].versions.$get(args, options),
  )
}

export async function getProductsCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.products.countries.$get(undefined, options))
}

export async function getProductsCountrycodes(options?: ClientRequestOptions) {
  return await parseResponse(client.products.countrycodes.$get(undefined, options))
}

export async function getProductsInstances(
  args: InferRequestType<typeof client.products.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.instances.$get(args, options))
}

export async function getProductsInstancesTypeVersion(
  args: InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.instances[':type-:version'].$get(args, options))
}

export async function getProductsMfaKinds(options?: ClientRequestOptions) {
  return await parseResponse(client.products.mfa_kinds.$get(undefined, options))
}

export async function getProductsPackages(
  args: InferRequestType<typeof client.products.packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.packages.$get(args, options))
}

export async function getProductsPrices(options?: ClientRequestOptions) {
  return await parseResponse(client.products.prices.$get(undefined, options))
}

export async function getProductsZones(options?: ClientRequestOptions) {
  return await parseResponse(client.products.zones.$get(undefined, options))
}

export async function getSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.self.$get(undefined, options))
}

export async function putSelf(
  args: InferRequestType<typeof client.self.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.$put(args, options))
}

export async function deleteSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.self.$delete(undefined, options))
}

export async function getSelfAddons(options?: ClientRequestOptions) {
  return await parseResponse(client.self.addons.$get(undefined, options))
}

export async function postSelfAddons(
  args: InferRequestType<typeof client.self.addons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons.$post(args, options))
}

export async function postSelfAddonsPreorders(
  args: InferRequestType<typeof client.self.addons.preorders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons.preorders.$post(args, options))
}

export async function getSelfAddonsAddonId(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].$get(args, options))
}

export async function putSelfAddonsAddonId(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].$put(args, options))
}

export async function deleteSelfAddonsAddonId(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].$delete(args, options))
}

export async function getSelfAddonsAddonIdApplications(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].applications.$get(args, options))
}

export async function getSelfAddonsAddonIdEnv(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].env.$get(args, options))
}

export async function putSelfAddonsAddonIdPlan(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].plan.$put(args, options))
}

export async function getSelfAddonsAddonIdSso(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].sso.$get(args, options))
}

export async function getSelfAddonsAddonIdTags(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].tags.$get(args, options))
}

export async function putSelfAddonsAddonIdTagsTag(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].tags[':tag'].$put(args, options))
}

export async function deleteSelfAddonsAddonIdTagsTag(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.addons[':addonId'].tags[':tag'].$delete(args, options))
}

export async function getSelfApplications(options?: ClientRequestOptions) {
  return await parseResponse(client.self.applications.$get(undefined, options))
}

export async function postSelfApplications(
  args: InferRequestType<typeof client.self.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications.$post(args, options))
}

export async function getSelfApplicationsAppId(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].$get(args, options))
}

export async function putSelfApplicationsAppId(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].$put(args, options))
}

export async function deleteSelfApplicationsAppId(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].$delete(args, options))
}

export async function getSelfApplicationsAppIdAddons(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].addons.$get(args, options))
}

export async function postSelfApplicationsAppIdAddons(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].addons.$post(args, options))
}

export async function getSelfApplicationsAppIdAddonsEnv(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].addons.env.$get(args, options))
}

export async function deleteSelfApplicationsAppIdAddonsAddonId(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].addons[':addonId'].$delete(args, options),
  )
}

export async function putSelfApplicationsAppIdBranch(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].branch.$put(args, options))
}

export async function getSelfApplicationsAppIdBranches(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].branches.$get(args, options))
}

export async function putSelfApplicationsAppIdBuildflavor(
  args: InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].buildflavor.$put(args, options))
}

export async function getSelfApplicationsAppIdDependencies(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].dependencies.$get(args, options))
}

export async function getSelfApplicationsAppIdDependenciesEnv(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].dependencies.env.$get(args, options),
  )
}

export async function putSelfApplicationsAppIdDependenciesDependencyId(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].dependencies[':dependencyId'].$put(args, options),
  )
}

export async function deleteSelfApplicationsAppIdDependenciesDependencyId(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].dependencies[':dependencyId'].$delete(args, options),
  )
}

export async function getSelfApplicationsAppIdDependents(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].dependents.$get(args, options))
}

export async function getSelfApplicationsAppIdDeployments(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].deployments.$get(args, options))
}

export async function getSelfApplicationsAppIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].deployments[':deploymentId'].$get(args, options),
  )
}

export async function deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].deployments[':deploymentId'].instances.$delete(
      args,
      options,
    ),
  )
}

export async function getSelfApplicationsAppIdEnv(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].env.$get(args, options))
}

export async function putSelfApplicationsAppIdEnv(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].env.$put(args, options))
}

export async function putSelfApplicationsAppIdEnvEnvName(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].env[':envName'].$put(args, options))
}

export async function deleteSelfApplicationsAppIdEnvEnvName(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].env[':envName'].$delete(args, options),
  )
}

export async function getSelfApplicationsAppIdExposedEnv(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].exposed_env.$get(args, options))
}

export async function putSelfApplicationsAppIdExposedEnv(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].exposed_env.$put(args, options))
}

export async function getSelfApplicationsAppIdInstances(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].instances.$get(args, options))
}

export async function postSelfApplicationsAppIdInstances(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].instances.$post(args, options))
}

export async function deleteSelfApplicationsAppIdInstances(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].instances.$delete(args, options))
}

export async function getSelfApplicationsAppIdInstancesInstanceId(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].instances[':instanceId'].$get(args, options),
  )
}

export async function getSelfApplicationsAppIdTags(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].tags.$get(args, options))
}

export async function putSelfApplicationsAppIdTagsTag(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].tags[':tag'].$put(args, options))
}

export async function deleteSelfApplicationsAppIdTagsTag(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].tags[':tag'].$delete(args, options))
}

export async function getSelfApplicationsAppIdVhosts(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.applications[':appId'].vhosts.$get(args, options))
}

export async function getSelfApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].vhosts.favourite.$get(args, options),
  )
}

export async function putSelfApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].vhosts.favourite.$put(args, options),
  )
}

export async function deleteSelfApplicationsAppIdVhostsFavourite(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].vhosts.favourite.$delete(args, options),
  )
}

export async function putSelfApplicationsAppIdVhostsDomain(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].vhosts[':domain'].$put(args, options),
  )
}

export async function deleteSelfApplicationsAppIdVhostsDomain(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.self.applications[':appId'].vhosts[':domain'].$delete(args, options),
  )
}

export async function putSelfAvatar(
  args: InferRequestType<typeof client.self.avatar.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.avatar.$put(args, options))
}

export async function putSelfChangePassword(options?: ClientRequestOptions) {
  return await parseResponse(client.self.change_password.$put(undefined, options))
}

export async function getSelfCliTokens(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.cli_tokens.$get(args, options))
}

export async function getSelfConfirmationEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.self.confirmation_email.$get(undefined, options))
}

export async function getSelfConsumers(options?: ClientRequestOptions) {
  return await parseResponse(client.self.consumers.$get(undefined, options))
}

export async function postSelfConsumers(
  args: InferRequestType<typeof client.self.consumers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumers.$post(args, options))
}

export async function getSelfConsumersKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumers[':key'].$get(args, options))
}

export async function putSelfConsumersKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumers[':key'].$put(args, options))
}

export async function deleteSelfConsumersKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumers[':key'].$delete(args, options))
}

export async function getSelfConsumersKeySecret(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumers[':key'].secret.$get(args, options))
}

export async function getSelfConsumptions(
  args: InferRequestType<typeof client.self.consumptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.consumptions.$get(args, options))
}

export async function getSelfCredits(options?: ClientRequestOptions) {
  return await parseResponse(client.self.credits.$get(undefined, options))
}

export async function getSelfEmails(options?: ClientRequestOptions) {
  return await parseResponse(client.self.emails.$get(undefined, options))
}

export async function putSelfEmailsEmail(
  args: InferRequestType<(typeof client.self.emails)[':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.emails[':email'].$put(args, options))
}

export async function deleteSelfEmailsEmail(
  args: InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.emails[':email'].$delete(args, options))
}

export async function getSelfId(options?: ClientRequestOptions) {
  return await parseResponse(client.self.id.$get(undefined, options))
}

export async function getSelfInstances(options?: ClientRequestOptions) {
  return await parseResponse(client.self.instances.$get(undefined, options))
}

export async function getSelfKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.self.keys.$get(undefined, options))
}

export async function putSelfKeysKey(
  args: InferRequestType<(typeof client.self.keys)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.keys[':key'].$put(args, options))
}

export async function deleteSelfKeysKey(
  args: InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.keys[':key'].$delete(args, options))
}

export async function putSelfMfaKind(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.mfa[':kind'].$put(args, options))
}

export async function postSelfMfaKind(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.mfa[':kind'].$post(args, options))
}

export async function deleteSelfMfaKind(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.mfa[':kind'].$delete(args, options))
}

export async function getSelfMfaKindBackupcodes(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.mfa[':kind'].backupcodes.$get(args, options))
}

export async function postSelfMfaKindConfirmation(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.mfa[':kind'].confirmation.$post(args, options))
}

export async function getSelfPaymentInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.self['payment-info'].$get(undefined, options))
}

export async function getSelfPaymentsBillings(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.billings.$get(undefined, options))
}

export async function postSelfPaymentsBillings(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.billings.$post(undefined, options))
}

export async function getSelfPaymentsBillingsBid(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.billings[':bid'].$get(args, options))
}

export async function putSelfPaymentsBillingsBid(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.billings[':bid'].$put(args, options))
}

export async function deleteSelfPaymentsBillingsBid(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.billings[':bid'].$delete(args, options))
}

export async function getSelfPaymentsBillingsBidPdf(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.billings[':bid.pdf'].$get(args, options))
}

export async function getSelfPaymentsFullpricePrice(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.fullprice[':price'].$get(args, options))
}

export async function getSelfPaymentsMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.methods.$get(undefined, options))
}

export async function postSelfPaymentsMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.methods.$post(undefined, options))
}

export async function getSelfPaymentsMethodsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.methods.default.$get(undefined, options))
}

export async function putSelfPaymentsMethodsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.methods.default.$put(undefined, options))
}

export async function deleteSelfPaymentsMethodsMId(
  args: InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.payments.methods[':mId'].$delete(args, options))
}

export async function getSelfPaymentsMonthlyinvoice(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.monthlyinvoice.$get(undefined, options))
}

export async function putSelfPaymentsMonthlyinvoiceMaxcredit(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.monthlyinvoice.maxcredit.$put(undefined, options))
}

export async function getSelfPaymentsRecurring(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.recurring.$get(undefined, options))
}

export async function deleteSelfPaymentsRecurring(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.recurring.$delete(undefined, options))
}

export async function getSelfPaymentsTokensStripe(options?: ClientRequestOptions) {
  return await parseResponse(client.self.payments.tokens.stripe.$get(undefined, options))
}

export async function getSelfTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.self.tokens.$get(undefined, options))
}

export async function deleteSelfTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.self.tokens.$delete(undefined, options))
}

export async function deleteSelfTokensToken(
  args: InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.tokens[':token'].$delete(args, options))
}

export async function getSelfValidateEmail(
  args: InferRequestType<typeof client.self.validate_email.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self.validate_email.$get(args, options))
}

export async function getSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.summary.$get(undefined, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function getUsersIdApplications(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].applications.$get(args, options))
}

export async function getUsersUserIdGitInfo(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId']['git-info'].$get(args, options))
}

export async function postV2ProvidersAddonMatomoResources(
  args: InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.providers['addon-matomo'].resources.$post(args, options))
}

export async function deleteV2ProvidersAddonMatomoResourcesMatomoId(
  args: InferRequestType<
    (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.providers['addon-matomo'].resources[':matomoId'].$delete(args, options),
  )
}

export async function getV3LogsAppId(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId'].$get(args, options))
}

export async function getV3LogsAppIdDrains(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId'].drains.$get(args, options))
}

export async function postV3LogsAppIdDrains(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId'].drains.$post(args, options))
}

export async function getV3LogsAppIdDrainsIdOrUrl(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$get(args, options))
}

export async function deleteV3LogsAppIdDrainsIdOrUrl(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
}

export async function getV3LogsAppIdLogsChunked(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId']['logs-chunked'].$get(args, options))
}

export async function getV3LogsAppIdLogsSocket(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':appId']['logs-socket'].$get(args, options))
}

export async function getV4AddonProvidersAddonMatomoAddonsMatomoId(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(args, options),
  )
}

export async function getV4AddonProvidersAddonMatomoTokenValidate(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4['addon-providers']['addon-matomo'].token.validate.$get(args, options),
  )
}

export async function getV4AddonProvidersConfigProviderAddonsConfigurationProviderId(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
      args,
      options,
    ),
  )
}

export async function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$get(
      args,
      options,
    ),
  )
}

export async function putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$put(
      args,
      options,
    ),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroups(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(args, options),
  )
}

export async function postV4NetworkgroupsOrganisationsOwnerIdNetworkgroups(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups.$post(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeers(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
      'external-peers'
    ].$post(args, options),
  )
}

export async function deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
      'external-peers'
    ][':peerId'].$delete(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members.$get(
      args,
      options,
    ),
  )
}

export async function postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[
      ':networkGroupId'
    ].members.$post(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
      ':memberId'
    ].$get(args, options),
  )
}

export async function deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
      ':memberId'
    ].$delete(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers.$get(
      args,
      options,
    ),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
      ':peerId'
    ].$get(args, options),
  )
}

export async function deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
      ':peerId'
    ].$delete(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
      ':peerId'
    ].wireguard.configuration.$get(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
      ':peerId'
    ].wireguard.configuration.stream.$get(args, options),
  )
}

export async function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].stream.$get(
      args,
      options,
    ),
  )
}

export async function postVendorAddons(options?: ClientRequestOptions) {
  return await parseResponse(client.vendor.addons.$post(undefined, options))
}

export async function getVendorAppsAddonIdLogscollector(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps[':addonId'].logscollector.$get(args, options))
}

export async function getVendorApps(
  args: InferRequestType<typeof client.vendor.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps.$get(args, options))
}

export async function getVendorAppsAddonId(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps[':addonId'].$get(args, options))
}

export async function putVendorAppsAddonId(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps[':addonId'].$put(args, options))
}

export async function postVendorAppsAddonIdConsumptions(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps[':addonId'].consumptions.$post(args, options))
}

export async function putVendorAppsAddonIdMigrationCallback(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendor.apps[':addonId'].migration_callback.$put(args, options))
}
