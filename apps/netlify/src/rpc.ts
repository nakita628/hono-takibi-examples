import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function postSites(
  args: InferRequestType<typeof client.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$post(args, options))
}

export async function getSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].$get(args, options))
}

export async function deleteSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':site_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].$delete(args, options))
}

export async function patchSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':site_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].$patch(args, options))
}

export async function getSitesSiteIdSsl(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].ssl.$get(args, options))
}

export async function postSitesSiteIdSsl(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].ssl.$post(args, options))
}

export async function getSitesSiteIdSslCertificates(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].ssl.certificates.$get(args, options))
}

export async function getAccountsAccountIdEnv(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env.$get(args, options))
}

export async function postAccountsAccountIdEnv(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env.$post(args, options))
}

export async function getApiV1SitesSiteIdEnv(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sites[':site_id'].env.$get(args, options))
}

export async function getAccountsAccountIdEnvKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env[':key'].$get(args, options))
}

export async function putAccountsAccountIdEnvKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env[':key'].$put(args, options))
}

export async function deleteAccountsAccountIdEnvKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env[':key'].$delete(args, options))
}

export async function patchAccountsAccountIdEnvKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].env[':key'].$patch(args, options))
}

export async function deleteAccountsAccountIdEnvKeyValueId(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':account_id'].env[':key'].value[':id'].$delete(args, options),
  )
}

export async function getSitesSiteIdFunctions(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].functions.$get(args, options))
}

export async function getSitesSiteIdForms(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].forms.$get(args, options))
}

export async function deleteSitesSiteIdFormsFormId(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].forms[':form_id'].$delete(args, options))
}

export async function getSitesSiteIdSubmissions(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].submissions.$get(args, options))
}

export async function getSitesSiteIdFiles(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].files.$get(args, options))
}

export async function getSitesSiteIdAssets(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].assets.$get(args, options))
}

export async function postSitesSiteIdAssets(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].assets.$post(args, options))
}

export async function getSitesSiteIdAssetsAssetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].assets[':asset_id'].$get(args, options))
}

export async function putSitesSiteIdAssetsAssetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].assets[':asset_id'].$put(args, options))
}

export async function deleteSitesSiteIdAssetsAssetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].assets[':asset_id'].$delete(args, options))
}

export async function getSitesSiteIdAssetsAssetIdPublicSignature(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].assets[':asset_id'].public_signature.$get(args, options),
  )
}

export async function getSitesSiteIdFilesFilePath(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].files[':file_path'].$get(args, options))
}

export async function postPurge(
  args: InferRequestType<typeof client.purge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purge.$post(args, options))
}

export async function getSitesSiteIdSnippets(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].snippets.$get(args, options))
}

export async function postSitesSiteIdSnippets(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].snippets.$post(args, options))
}

export async function getSitesSiteIdSnippetsSnippetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$get(args, options))
}

export async function putSitesSiteIdSnippetsSnippetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$put(args, options))
}

export async function deleteSitesSiteIdSnippetsSnippetId(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].snippets[':snippet_id'].$delete(args, options),
  )
}

export async function getSitesSiteIdMetadata(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].metadata.$get(args, options))
}

export async function putSitesSiteIdMetadata(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].metadata.$put(args, options))
}

export async function getSitesSiteIdBuildHooks(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].build_hooks.$get(args, options))
}

export async function postSitesSiteIdBuildHooks(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].build_hooks.$post(args, options))
}

export async function getSitesSiteIdBuildHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].build_hooks[':id'].$get(args, options))
}

export async function putSitesSiteIdBuildHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].build_hooks[':id'].$put(args, options))
}

export async function deleteSitesSiteIdBuildHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].build_hooks[':id'].$delete(args, options))
}

export async function getSitesSiteIdDeploys(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].deploys.$get(args, options))
}

export async function postSitesSiteIdDeploys(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].deploys.$post(args, options))
}

export async function getSitesSiteIdDeploysDeployId(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$get(args, options))
}

export async function putSitesSiteIdDeploysDeployId(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$put(args, options))
}

export async function deleteSitesSiteIdDeploysDeployId(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$delete(args, options))
}

export async function postDeploysDeployIdCancel(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].cancel.$post(args, options))
}

export async function postSitesSiteIdDeploysDeployIdRestore(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].deploys[':deploy_id'].restore.$post(args, options),
  )
}

export async function getSitesSiteIdBuilds(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].builds.$get(args, options))
}

export async function postSitesSiteIdBuilds(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].builds.$post(args, options))
}

export async function getSitesSiteIdDeployedBranches(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id']['deployed-branches'].$get(args, options))
}

export async function putSitesSiteIdUnlinkRepo(
  args: InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].unlink_repo.$put(args, options))
}

export async function putSitesSiteIdEnable(
  args: InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].enable.$put(args, options))
}

export async function putSitesSiteIdDisable(
  args: InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].disable.$put(args, options))
}

export async function getBuildsBuildId(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builds[':build_id'].$get(args, options))
}

export async function postBuildsBuildIdLog(
  args: InferRequestType<(typeof client.builds)[':build_id']['log']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builds[':build_id'].log.$post(args, options))
}

export async function postBuildsBuildIdStart(
  args: InferRequestType<(typeof client.builds)[':build_id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builds[':build_id'].start.$post(args, options))
}

export async function getAccountIdBuildsStatus(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_id'].builds.status.$get(args, options))
}

export async function getSitesSiteIdDns(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dns.$get(args, options))
}

export async function putSitesSiteIdDns(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dns.$put(args, options))
}

export async function putSitesSiteIdRollback(
  args: InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].rollback.$put(args, options))
}

export async function getDeploysDeployId(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].$get(args, options))
}

export async function deleteDeploysDeployId(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].$delete(args, options))
}

export async function postDeploysDeployIdLock(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].lock.$post(args, options))
}

export async function postDeploysDeployIdUnlock(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].unlock.$post(args, options))
}

export async function putDeploysDeployIdFilesPath(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].files[':path'].$put(args, options))
}

export async function putDeploysDeployIdFunctionsName(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].functions[':name'].$put(args, options))
}

export async function putDeploysDeployIdServerCodeSha(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploys[':deploy_id'].server[':code_sha'].$put(args, options))
}

export async function putDeploysDeployIdEdgeFunctionsCodeSha(
  args: InferRequestType<
    (typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploys[':deploy_id'].edge_functions[':code_sha'].$put(args, options),
  )
}

export async function getFormsFormIdSubmissions(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forms[':form_id'].submissions.$get(args, options))
}

export async function getHooks(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks.$get(args, options))
}

export async function postHooks(
  args: InferRequestType<typeof client.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks.$post(args, options))
}

export async function getHooksHookId(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks[':hook_id'].$get(args, options))
}

export async function putHooksHookId(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks[':hook_id'].$put(args, options))
}

export async function deleteHooksHookId(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks[':hook_id'].$delete(args, options))
}

export async function postHooksHookIdEnable(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks[':hook_id'].enable.$post(args, options))
}

export async function getHooksTypes(
  args: InferRequestType<typeof client.hooks.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks.types.$get(args, options))
}

export async function postOauthTickets(
  args: InferRequestType<typeof client.oauth.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.tickets.$post(args, options))
}

export async function getOauthTicketsTicketId(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.tickets[':ticket_id'].$get(args, options))
}

export async function postOauthTicketsTicketIdExchange(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.tickets[':ticket_id'].exchange.$post(args, options))
}

export async function getDeployKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.deploy_keys.$get(undefined, options))
}

export async function postDeployKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.deploy_keys.$post(undefined, options))
}

export async function getDeployKeysKeyId(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy_keys[':key_id'].$get(args, options))
}

export async function deleteDeployKeysKeyId(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy_keys[':key_id'].$delete(args, options))
}

export async function getAccountSlugSites(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].sites.$get(args, options))
}

export async function postAccountSlugSites(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].sites.$post(args, options))
}

export async function getAccountSlugMembers(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].members.$get(args, options))
}

export async function postAccountSlugMembers(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].members.$post(args, options))
}

export async function getAccountSlugMembersMemberId(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].members[':member_id'].$get(args, options))
}

export async function putAccountSlugMembersMemberId(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].members[':member_id'].$put(args, options))
}

export async function deleteAccountSlugMembersMemberId(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':account_slug'].members[':member_id'].$delete(args, options))
}

export async function getBillingPaymentMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.billing.payment_methods.$get(undefined, options))
}

export async function getAccountsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.accounts.types.$get(undefined, options))
}

export async function getAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.accounts.$get(undefined, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$get(args, options))
}

export async function putAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$put(args, options))
}

export async function deleteAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$delete(args, options))
}

export async function getAccountsAccountIdAudit(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].audit.$get(args, options))
}

export async function getAgentRunners(
  args: InferRequestType<typeof client.agent_runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners.$get(args, options))
}

export async function postAgentRunners(
  args: InferRequestType<typeof client.agent_runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners.$post(args, options))
}

export async function postSitesSiteIdAgentRunners(
  args: InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].agent_runners.$post(args, options))
}

export async function getAgentRunnersAgentRunnerId(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].$get(args, options))
}

export async function deleteAgentRunnersAgentRunnerId(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].$delete(args, options))
}

export async function patchAgentRunnersAgentRunnerId(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].$patch(args, options))
}

export async function postAgentRunnersAgentRunnerIdStop(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].stop.$post(args, options))
}

export async function getAgentRunnersAgentRunnerIdDiff(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].diff.$get(args, options))
}

export async function postAgentRunnersAgentRunnerIdArchive(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].archive.$post(args, options))
}

export async function getAgentRunnersAgentRunnerIdSessions(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].sessions.$get(args, options))
}

export async function postAgentRunnersAgentRunnerIdSessions(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_runners[':agent_runner_id'].sessions.$post(args, options))
}

export async function getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStop(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].stop.$post(
      args,
      options,
    ),
  )
}

export async function postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswers(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].answers.$post(
      args,
      options,
    ),
  )
}

export async function getSubmissionsSubmissionId(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions[':submission_id'].$get(args, options))
}

export async function deleteSubmissionsSubmissionId(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions[':submission_id'].$delete(args, options))
}

export async function getSitesSiteIdServiceInstances(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id']['service-instances'].$get(args, options))
}

export async function postSitesSiteIdServicesAddonInstances(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].services[':addon'].instances.$post(args, options),
  )
}

export async function getSitesSiteIdServicesAddonInstancesInstanceId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(args, options),
  )
}

export async function putSitesSiteIdServicesAddonInstancesInstanceId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].services[':addon'].instances[':instance_id'].$put(args, options),
  )
}

export async function deleteSitesSiteIdServicesAddonInstancesInstanceId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].services[':addon'].instances[':instance_id'].$delete(args, options),
  )
}

export async function getSitesSiteIdIdentityIdentityIdUsersUserId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(args, options),
  )
}

export async function postSitesSiteIdIdentityIdentityIdUsersLookup(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].identity[':identity_id'].users.lookup.$post(args, options),
  )
}

export async function getServicesIndex(
  args: InferRequestType<typeof client.services.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.index.$get(args, options))
}

export async function getServicesAddonName(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':addonName'].$get(args, options))
}

export async function getServicesAddonNameManifest(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':addonName'].manifest.$get(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function getSitesSiteIdTrafficSplits(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].traffic_splits.$get(args, options))
}

export async function postSitesSiteIdTrafficSplits(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].traffic_splits.$post(args, options))
}

export async function getSitesSiteIdTrafficSplitsSplitTestId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].traffic_splits[':split_test_id'].$get(args, options),
  )
}

export async function putSitesSiteIdTrafficSplitsSplitTestId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].traffic_splits[':split_test_id'].$put(args, options),
  )
}

export async function postSitesSiteIdTrafficSplitsSplitTestIdPublish(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].traffic_splits[':split_test_id'].publish.$post(args, options),
  )
}

export async function postSitesSiteIdTrafficSplitsSplitTestIdUnpublish(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].traffic_splits[':split_test_id'].unpublish.$post(args, options),
  )
}

export async function getDnsZones(
  args: InferRequestType<typeof client.dns_zones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones.$get(args, options))
}

export async function postDnsZones(
  args: InferRequestType<typeof client.dns_zones.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones.$post(args, options))
}

export async function getDnsZonesZoneId(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones[':zone_id'].$get(args, options))
}

export async function deleteDnsZonesZoneId(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones[':zone_id'].$delete(args, options))
}

export async function putDnsZonesZoneIdTransfer(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones[':zone_id'].transfer.$put(args, options))
}

export async function getDnsZonesZoneIdDnsRecords(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones[':zone_id'].dns_records.$get(args, options))
}

export async function postDnsZonesZoneIdDnsRecords(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns_zones[':zone_id'].dns_records.$post(args, options))
}

export async function getDnsZonesZoneIdDnsRecordsDnsRecordId(
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(args, options),
  )
}

export async function deleteDnsZonesZoneIdDnsRecordsDnsRecordId(
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$delete(args, options),
  )
}

export async function getSitesSiteIdDevServers(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_servers.$get(args, options))
}

export async function postSitesSiteIdDevServers(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_servers.$post(args, options))
}

export async function deleteSitesSiteIdDevServers(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_servers.$delete(args, options))
}

export async function getSitesSiteIdDevServersDevServerId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].dev_servers[':dev_server_id'].$get(args, options),
  )
}

export async function postSitesSiteIdDevServersDevServerIdState(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].dev_servers[':dev_server_id'].state.$post(args, options),
  )
}

export async function getSitesSiteIdDevServerHooks(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_server_hooks.$get(args, options))
}

export async function postSitesSiteIdDevServerHooks(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_server_hooks.$post(args, options))
}

export async function getSitesSiteIdDevServerHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$get(args, options))
}

export async function putSitesSiteIdDevServerHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$put(args, options))
}

export async function deleteSitesSiteIdDevServerHooksId(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].dev_server_hooks[':id'].$delete(args, options),
  )
}

export async function getAiGatewayProviders(options?: ClientRequestOptions) {
  return await parseResponse(client['ai-gateway'].providers.$get(undefined, options))
}

export async function getSitesSiteIdAiGatewayToken(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id']['ai-gateway'].token.$get(args, options))
}

export async function getAccountsAccountIdAiGatewayToken(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id']['ai-gateway'].token.$get(args, options))
}

export async function getSitesSiteIdDatabase(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.$get(args, options))
}

export async function postSitesSiteIdDatabase(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.$post(args, options))
}

export async function deleteSitesSiteIdDatabase(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.$delete(args, options))
}

export async function postSitesSiteIdDatabaseBranch(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.branch.$post(args, options))
}

export async function getSitesSiteIdDatabaseBranches(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.branches.$get(args, options))
}

export async function getSitesSiteIdDatabaseBranchBranchId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.branch[':branch_id'].$get(args, options),
  )
}

export async function deleteSitesSiteIdDatabaseBranchBranchId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.branch[':branch_id'].$delete(args, options),
  )
}

export async function postSitesSiteIdDatabaseBranchBranchIdReset(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.branch[':branch_id'].reset.$post(args, options),
  )
}

export async function putSitesSiteIdDatabaseBranchBranchIdComputeSettings(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.branch[':branch_id'].compute.settings.$put(args, options),
  )
}

export async function getSitesSiteIdDatabaseComputeSettings(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.compute.settings.$get(args, options))
}

export async function putSitesSiteIdDatabaseComputeSettings(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.compute.settings.$put(args, options))
}

export async function deleteSitesSiteIdDatabaseComputeSettings(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.compute.settings.$delete(args, options),
  )
}

export async function getSitesSiteIdDatabaseMigrations(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.migrations.$get(args, options))
}

export async function getSitesSiteIdDatabaseMigrationsName(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.migrations[':name'].$get(args, options),
  )
}

export async function postSitesSiteIdDatabaseMigrationsDeployId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.migrations[':deploy_id'].$post(args, options),
  )
}

export async function postSitesSiteIdDatabaseSnapshot(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.snapshot.$post(args, options))
}

export async function getSitesSiteIdDatabaseSnapshots(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].database.snapshots.$get(args, options))
}

export async function deleteSitesSiteIdDatabaseSnapshotSnapshotId(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.snapshot[':snapshot_id'].$delete(args, options),
  )
}

export async function postSitesSiteIdDatabaseSnapshotSnapshotIdRestore(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].database.snapshot[':snapshot_id'].restore.$post(args, options),
  )
}
