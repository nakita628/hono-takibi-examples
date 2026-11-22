import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProjectProjectAiGatewayKeys(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].keys.$get(args, options))
}

export async function postProjectProjectAiGatewayKeys(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].keys.$post(args, options))
}

export async function getProjectProjectAiGatewayKeysKeyId(
  args: InferRequestType<
    (typeof client.project)[':project']['ai-gateway']['keys'][':key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['ai-gateway'].keys[':key_id'].$get(args, options),
  )
}

export async function deleteProjectProjectAiGatewayKeysKeyId(
  args: InferRequestType<
    (typeof client.project)[':project']['ai-gateway']['keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['ai-gateway'].keys[':key_id'].$delete(args, options),
  )
}

export async function patchProjectProjectAiGatewayKeysKeyId(
  args: InferRequestType<
    (typeof client.project)[':project']['ai-gateway']['keys'][':key_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['ai-gateway'].keys[':key_id'].$patch(args, options),
  )
}

export async function getProjectProjectAiGatewayKeyOwners(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['key-owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['ai-gateway']['key-owners'].$get(args, options),
  )
}

export async function getProjectProjectAiGatewayModels(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].models.$get(args, options))
}

export async function putOrganizationOrganizationIdAiGatewayBudget(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['ai-gateway']['budget']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['ai-gateway'].budget.$put(args, options),
  )
}

export async function getOrganizationOrganizationIdAiGatewayBudgets(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['ai-gateway']['budgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['ai-gateway'].budgets.$get(args, options),
  )
}

export async function patchOrganizationOrganizationIdAiGatewayKeysBudgets(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['ai-gateway']['keys']['budgets']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['ai-gateway'].keys.budgets.$patch(args, options),
  )
}

export async function getOrganizationOrganizationIdAiGatewayKeys(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['ai-gateway']['keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['ai-gateway'].keys.$get(args, options),
  )
}

export async function putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudget(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['ai-gateway']['owner'][':owner_user_id']['budget']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['ai-gateway'].owner[':owner_user_id'].budget.$put(
      args,
      options,
    ),
  )
}

export async function getProjectProjectAiGatewayBudget(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['budget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].budget.$get(args, options))
}

export async function putProjectProjectAiGatewayBudget(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['budget']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].budget.$put(args, options))
}

export async function getProjectProjectAiGatewayUsage(
  args: InferRequestType<(typeof client.project)[':project']['ai-gateway']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['ai-gateway'].usage.$get(args, options))
}

export async function getAccountAccountIdPaymentMethods(
  args: InferRequestType<(typeof client.account)[':account_id']['payment_methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].payment_methods.$get(args, options))
}

export async function postAccountAccountIdPaymentMethods(
  args: InferRequestType<(typeof client.account)[':account_id']['payment_methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].payment_methods.$post(args, options))
}

export async function getAccountAccountIdAuthentication(
  args: InferRequestType<(typeof client.account)[':account_id']['authentication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].authentication.$get(args, options))
}

export async function postAccountAccountIdAuthentication(
  args: InferRequestType<(typeof client.account)[':account_id']['authentication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].authentication.$post(args, options))
}

export async function getAccountAccountIdAuthenticationAccountAuthenticationMethodId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['authentication'][':account_authentication_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].authentication[':account_authentication_method_id'].$get(
      args,
      options,
    ),
  )
}

export async function putAccountAccountIdAuthenticationAccountAuthenticationMethodId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['authentication'][':account_authentication_method_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].authentication[':account_authentication_method_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAccountAccountIdAuthenticationAccountAuthenticationMethodId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['authentication'][':account_authentication_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].authentication[':account_authentication_method_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountAccountIdBillingGroup(
  args: InferRequestType<(typeof client.account)[':account_id']['billing-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id']['billing-group'].$get(args, options))
}

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function postAccount(
  args: InferRequestType<typeof client.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$post(args, options))
}

export async function getAccountAccountId(
  args: InferRequestType<(typeof client.account)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].$get(args, options))
}

export async function putAccountAccountId(
  args: InferRequestType<(typeof client.account)[':account_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].$put(args, options))
}

export async function deleteAccountAccountId(
  args: InferRequestType<(typeof client.account)[':account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].$delete(args, options))
}

export async function getAccountAccountIdEvents(
  args: InferRequestType<(typeof client.account)[':account_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].events.$get(args, options))
}

export async function putAccountAccountIdParentAccount(
  args: InferRequestType<(typeof client.account)[':account_id']['parent_account']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].parent_account.$put(args, options))
}

export async function deleteAccountAccountIdPaymentMethodCardId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['payment_method'][':card_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].payment_method[':card_id'].$delete(args, options),
  )
}

export async function getAccountAccountIdProjects(
  args: InferRequestType<(typeof client.account)[':account_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].projects.$get(args, options))
}

export async function getAccountAccountIdProjectProjectNameTeams(
  args: InferRequestType<
    (typeof client.account)[':account_id']['project'][':project_name']['teams']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].project[':project_name'].teams.$get(args, options),
  )
}

export async function getAccountAccountIdTeams(
  args: InferRequestType<(typeof client.account)[':account_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].teams.$get(args, options))
}

export async function postAccountAccountIdTeams(
  args: InferRequestType<(typeof client.account)[':account_id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].teams.$post(args, options))
}

export async function getAccountAccountIdTeamTeamId(
  args: InferRequestType<(typeof client.account)[':account_id']['team'][':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].team[':team_id'].$get(args, options))
}

export async function putAccountAccountIdTeamTeamId(
  args: InferRequestType<(typeof client.account)[':account_id']['team'][':team_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].team[':team_id'].$put(args, options))
}

export async function deleteAccountAccountIdTeamTeamId(
  args: InferRequestType<(typeof client.account)[':account_id']['team'][':team_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].team[':team_id'].$delete(args, options))
}

export async function getAccountAccountIdTeamTeamIdInvites(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['invites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].invites.$get(args, options),
  )
}

export async function deleteAccountAccountIdTeamTeamIdInvitesUserEmail(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['invites'][':user_email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].invites[':user_email'].$delete(args, options),
  )
}

export async function postAccountAccountIdInviteInviteVerificationCode(
  args: InferRequestType<
    (typeof client.account)[':account_id']['invite'][':invite_verification_code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].invite[':invite_verification_code'].$post(args, options),
  )
}

export async function deleteAccountAccountIdTeamTeamIdMemberUserId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['member'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].member[':user_id'].$delete(args, options),
  )
}

export async function getAccountAccountIdTeamTeamIdMembers(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].members.$get(args, options),
  )
}

export async function postAccountAccountIdTeamTeamIdMembers(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].members.$post(args, options),
  )
}

export async function putAccountAccountIdTeamTeamIdProjectProject(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['project'][':project']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].project[':project'].$put(args, options),
  )
}

export async function postAccountAccountIdTeamTeamIdProjectProject(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['project'][':project']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].project[':project'].$post(args, options),
  )
}

export async function deleteAccountAccountIdTeamTeamIdProjectProject(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['project'][':project']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].project[':project'].$delete(args, options),
  )
}

export async function getAccountAccountIdTeamTeamIdProjects(
  args: InferRequestType<
    (typeof client.account)[':account_id']['team'][':team_id']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].team[':team_id'].projects.$get(args, options),
  )
}

export async function getAccountAccountIdUserUserIdProjects(
  args: InferRequestType<
    (typeof client.account)[':account_id']['user'][':user_id']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].user[':user_id'].projects.$get(args, options),
  )
}

export async function getAccountAccountIdUserUserIdTeams(
  args: InferRequestType<
    (typeof client.account)[':account_id']['user'][':user_id']['teams']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].user[':user_id'].teams.$get(args, options),
  )
}

export async function postAccountAccountIdUsersSearch(
  args: InferRequestType<(typeof client.account)[':account_id']['users']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].users.search.$post(args, options))
}

export async function getOrganizationOrganizationIdApplicationUsersUserIdAccessTokens(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['access-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id']['access-tokens'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdApplicationUsersUserIdAccessTokens(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['access-tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id']['access-tokens'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefix(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['access-tokens'][':token_prefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id']['access-tokens'][
      ':token_prefix'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdApplicationUsers(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdApplicationUsers(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdApplicationUsersUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdApplicationUsersUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdApplicationUsersUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application-users'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['application-users'][':user_id'].$patch(args, options),
  )
}

export async function getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomains(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['authentication-methods'][':authentication_method_id']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['authentication-methods'][
      ':authentication_method_id'
    ].domains.$get(args, options),
  )
}

export async function putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomains(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['authentication-methods'][':authentication_method_id']['domains']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['authentication-methods'][
      ':authentication_method_id'
    ].domains.$put(args, options),
  )
}

export async function deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['authentication-methods'][':authentication_method_id']['domains'][':domain_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['authentication-methods'][
      ':authentication_method_id'
    ].domains[':domain_id'].$delete(args, options),
  )
}

export async function getBillingGroup(options?: ClientRequestOptions) {
  return await parseResponse(client['billing-group'].$get(undefined, options))
}

export async function postBillingGroup(
  args: InferRequestType<(typeof client)['billing-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-group'].$post(args, options))
}

export async function getBillingGroupBillingGroupIdCredits(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].credits.$get(args, options),
  )
}

export async function postBillingGroupBillingGroupIdCredits(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].credits.$post(args, options),
  )
}

export async function getBillingGroupBillingGroupId(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-group'][':billing_group_id'].$get(args, options))
}

export async function putBillingGroupBillingGroupId(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-group'][':billing_group_id'].$put(args, options))
}

export async function deleteBillingGroupBillingGroupId(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-group'][':billing_group_id'].$delete(args, options))
}

export async function getBillingGroupBillingGroupIdEvents(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].events.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdown(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-group'][':billing_group_id']['fee-breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-group'][':billing_group_id'][
      'fee-breakdown'
    ].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownload(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-group'][':billing_group_id']['fee-breakdown']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-group'][':billing_group_id'][
      'fee-breakdown'
    ].download.$get(args, options),
  )
}

export async function getBillingGroupBillingGroupIdInvoiceInvoiceNumberCsv(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['invoice'][':invoice_number']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].invoice[':invoice_number'].csv.$get(args, options),
  )
}

export async function getBillingGroupBillingGroupIdInvoiceInvoiceNumberDownloadCookie(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['invoice'][':invoice_number'][':download_cookie']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].invoice[':invoice_number'][
      ':download_cookie'
    ].$get(args, options),
  )
}

export async function getBillingGroupBillingGroupIdInvoiceInvoiceNumber(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['invoice'][':invoice_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].invoice[':invoice_number'].$get(args, options),
  )
}

export async function getBillingGroupBillingGroupIdInvoiceInvoiceNumberLines(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['invoice'][':invoice_number']['lines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].invoice[':invoice_number'].lines.$get(
      args,
      options,
    ),
  )
}

export async function getBillingGroupBillingGroupIdInvoice(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].invoice.$get(args, options),
  )
}

export async function postBillingGroupBillingGroupIdProjectAssignProject(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['project-assign'][':project']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id']['project-assign'][':project'].$post(args, options),
  )
}

export async function getBillingGroupBillingGroupIdProjects(
  args: InferRequestType<(typeof client)['billing-group'][':billing_group_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id'].projects.$get(args, options),
  )
}

export async function postBillingGroupBillingGroupIdProjectsAssign(
  args: InferRequestType<
    (typeof client)['billing-group'][':billing_group_id']['projects-assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-group'][':billing_group_id']['projects-assign'].$post(args, options),
  )
}

export async function getInvoicesInvoiceNumber(
  args: InferRequestType<(typeof client.invoices)[':invoice_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice_number'].$get(args, options))
}

export async function getOrganizationOrganizationIdAddresses(
  args: InferRequestType<(typeof client.organization)[':organization_id']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].addresses.$get(args, options))
}

export async function postOrganizationOrganizationIdAddresses(
  args: InferRequestType<(typeof client.organization)[':organization_id']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].addresses.$post(args, options))
}

export async function getOrganizationOrganizationIdAddressAddressId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['address'][':address_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].address[':address_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdAddressAddressId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['address'][':address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].address[':address_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdAddressAddressId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['address'][':address_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].address[':address_id'].$patch(args, options),
  )
}

export async function getClouds(options?: ClientRequestOptions) {
  return await parseResponse(client.clouds.$get(undefined, options))
}

export async function getProjectProjectClouds(
  args: InferRequestType<(typeof client.project)[':project']['clouds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].clouds.$get(args, options))
}

export async function getTenantsTenantPrivatelinkAvailability(
  args: InferRequestType<(typeof client.tenants)[':tenant']['privatelink-availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tenants[':tenant']['privatelink-availability'].$get(args, options),
  )
}

export async function getTenantsTenantStaticIpAvailability(
  args: InferRequestType<(typeof client.tenants)[':tenant']['static-ip-availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tenants[':tenant']['static-ip-availability'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdCustomCloudEnvironments(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].$get(args, options),
  )
}

export async function putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].$put(args, options),
  )
}

export async function deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissions(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].permissions.$get(args, options),
  )
}

export async function putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissions(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].permissions.$put(args, options),
  )
}

export async function postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvision(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['custom-cloud-environments'][':custom_cloud_environment_id']['provision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['custom-cloud-environments'][
      ':custom_cloud_environment_id'
    ].provision.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdDomains(
  args: InferRequestType<(typeof client.organization)[':organization_id']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].domains.$get(args, options))
}

export async function postOrganizationOrganizationIdDomains(
  args: InferRequestType<(typeof client.organization)[':organization_id']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].domains.$post(args, options))
}

export async function deleteOrganizationOrganizationIdDomainsDomainId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['domains'][':domain_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].domains[':domain_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdDomainsDomainId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['domains'][':domain_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].domains[':domain_id'].$patch(args, options),
  )
}

export async function postOrganizationOrganizationIdDomainsDomainIdVerify(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['domains'][':domain_id']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].domains[':domain_id'].verify.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdUserGroups(
  args: InferRequestType<(typeof client.organization)[':organization_id']['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdUserGroups(
  args: InferRequestType<(typeof client.organization)[':organization_id']['user-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdUserGroupsUserGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user-groups'][':user_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'][':user_group_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdUserGroupsUserGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user-groups'][':user_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'][':user_group_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdUserGroupsUserGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user-groups'][':user_group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'][':user_group_id'].$patch(args, options),
  )
}

export async function getOrganizationOrganizationIdUserGroupsUserGroupIdMembers(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user-groups'][':user_group_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'][':user_group_id'].members.$get(
      args,
      options,
    ),
  )
}

export async function patchOrganizationOrganizationIdUserGroupsUserGroupIdMembers(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user-groups'][':user_group_id']['members']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['user-groups'][':user_group_id'].members.$patch(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomConnectors(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-connectors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-connectors'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassName(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-classes'][':plugin_class_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-classes'][
      ':plugin_class_name'
    ].$get(args, options),
  )
}

export async function putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassName(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-classes'][':plugin_class_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-classes'][
      ':plugin_class_name'
    ].$put(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginClasses(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-classes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-classes'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClasses(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['classes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][
      ':plugin_name'
    ].classes.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginName(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginName(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginName(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][
      ':plugin_name'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClasses(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files'][':plugin_file_id']['classes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'][
      ':plugin_file_id'
    ].classes.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginFiles(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdKafkaConnectCustomPluginFiles(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'].$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files'][':plugin_file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'][
      ':plugin_file_id'
    ].$get(args, options),
  )
}

export async function putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files'][':plugin_file_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'][
      ':plugin_file_id'
    ].$put(args, options),
  )
}

export async function deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugin-files'][':plugin_file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugin-files'][
      ':plugin_file_id'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatest(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['files']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][
      ':plugin_name'
    ].files.latest.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFiles(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins'][':plugin_name']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'][
      ':plugin_name'
    ].files.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectCustomPlugins(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['custom-plugins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['custom-plugins'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdKafkaConnectPluginDeployments(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['kafka-connect']['plugin-deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['kafka-connect']['plugin-deployments'].$get(
      args,
      options,
    ),
  )
}

export async function getUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.userinfo.$get(undefined, options))
}

export async function getOrganizationOrganizationIdBillingGroups(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-groups'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdBillingGroups(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-groups'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdBillingGroupBillingGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-group'][':billing_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-group'][':billing_group_id'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationOrganizationIdBillingGroupBillingGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-group'][':billing_group_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-group'][':billing_group_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationOrganizationIdBillingGroupBillingGroupId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-group'][':billing_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-group'][':billing_group_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdInvoiceInvoiceNumberCsv(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invoice'][':invoice_number']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invoice[':invoice_number'].csv.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdInvoiceInvoiceNumber(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invoice'][':invoice_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invoice[':invoice_number'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdInvoiceInvoiceNumberLines(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invoice'][':invoice_number']['lines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invoice[':invoice_number'].lines.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdInvoices(
  args: InferRequestType<(typeof client.organization)[':organization_id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].invoices.$get(args, options))
}

export async function getOrganizationOrganizationIdInvoiceInvoiceNumberPdf(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invoice'][':invoice_number']['pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invoice[':invoice_number'].pdf.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdEmissions(
  args: InferRequestType<(typeof client.organization)[':organization_id']['emissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].emissions.$get(args, options))
}

export async function getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['bank-transfer'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['bank-transfer'][
      ':payment_method_id'
    ].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdPaymentMethodBankTransfers(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['bank-transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['bank-transfers'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdPaymentMethodCreditCards(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['credit-cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['credit-cards'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdPaymentMethodCreditCards(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['credit-cards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['credit-cards'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['credit-card'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['credit-card'][
      ':payment_method_id'
    ].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['credit-card'][':payment_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method']['credit-card'][
      ':payment_method_id'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['custom'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method'].custom[':payment_method_id'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdPaymentMethodCustom(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-method']['custom']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-method'].custom.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdPaymentMethods(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['payment-methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['payment-methods'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdVpcClouds(
  args: InferRequestType<(typeof client.organization)[':organization_id']['vpc-clouds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['vpc-clouds'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdVpcs(
  args: InferRequestType<(typeof client.organization)[':organization_id']['vpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].vpcs.$get(args, options))
}

export async function postOrganizationOrganizationIdVpcs(
  args: InferRequestType<(typeof client.organization)[':organization_id']['vpcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].vpcs.$post(args, options))
}

export async function getOrganizationOrganizationIdVpcOrganizationVpcId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'].$get(args, options),
  )
}

export async function putOrganizationOrganizationIdVpcOrganizationVpcId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'].$put(args, options),
  )
}

export async function deleteOrganizationOrganizationIdVpcOrganizationVpcId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'].$delete(args, options),
  )
}

export async function postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnections(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['peering-connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'][
      'peering-connections'
    ].$post(args, options),
  )
}

export async function deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['peering-connection'][':peering_connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id']['peering-connection'][
      ':peering_connection_id'
    ].$delete(args, options),
  )
}

export async function putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrs(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['peering-connection'][':peering_connection_id']['user-peer-network-cidrs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id']['peering-connection'][
      ':peering_connection_id'
    ]['user-peer-network-cidrs'].$put(args, options),
  )
}

export async function putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrs(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['user-peer-network-cidrs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'][
      'user-peer-network-cidrs'
    ].$put(args, options),
  )
}

export async function getOrganizationOrganizationIdVpcPeeringConnectionTypes(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc-peering-connection-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['vpc-peering-connection-types'].$get(args, options),
  )
}

export async function postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefresh(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['vpc'][':organization_vpc_id']['peering-connections']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].vpc[':organization_vpc_id'][
      'peering-connections'
    ].refresh.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdDiscoveredOrganizations(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['discovered-organizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['discovered-organizations'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdConfigAuthentication(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['config']['authentication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].config.authentication.$get(args, options),
  )
}

export async function patchOrganizationOrganizationIdConfigAuthentication(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['config']['authentication']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].config.authentication.$patch(args, options),
  )
}

export async function postOrganizationOrganizationIdBillingReport(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['billing-report']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['billing-report'].$post(args, options),
  )
}

export async function getOrganizationOrganizationId(
  args: InferRequestType<(typeof client.organization)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].$get(args, options))
}

export async function deleteOrganizationOrganizationId(
  args: InferRequestType<(typeof client.organization)[':organization_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].$delete(args, options))
}

export async function patchOrganizationOrganizationId(
  args: InferRequestType<(typeof client.organization)[':organization_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].$patch(args, options))
}

export async function postOrganizationOrganizationIdEventLogsDownload(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['event-logs']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['event-logs'].download.$post(args, options),
  )
}

export async function postOrganizationOrganizationIdEventLogs(
  args: InferRequestType<(typeof client.organization)[':organization_id']['event-logs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['event-logs'].$post(args, options),
  )
}

export async function getOrganizationOrganizationIdGovernanceAccess(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['governance']['access']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].governance.access.$get(args, options),
  )
}

export async function postOrganizationOrganizationIdGovernanceAccess(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['governance']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].governance.access.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdGovernanceAccessAccessIdCredentials(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['governance']['access'][':access_id']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].governance.access[':access_id'].credentials.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdGovernanceAccessAccessId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['governance']['access'][':access_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].governance.access[':access_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdGovernanceAccessAccessId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['governance']['access'][':access_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].governance.access[':access_id'].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdConfigApiClientIpAllowlist(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['config']['api-client-ip-allowlist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].config['api-client-ip-allowlist'].$get(args, options),
  )
}

export async function putOrganizationOrganizationIdConfigApiClientIpAllowlist(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['config']['api-client-ip-allowlist']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].config['api-client-ip-allowlist'].$put(args, options),
  )
}

export async function getOrganizationOrganizationIdProjects(
  args: InferRequestType<(typeof client.organization)[':organization_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].projects.$get(args, options))
}

export async function postOrganizationOrganizationIdProjects(
  args: InferRequestType<(typeof client.organization)[':organization_id']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].projects.$post(args, options))
}

export async function getOrganizationOrganizationIdProjectProjectId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdProjectProjectId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdProjectProjectId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id'].$patch(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsCounts(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['service'][':service_id']['logs']['counts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id'].service[
      ':service_id'
    ].logs.counts.$post(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogs(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['service'][':service_id']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id'].service[
      ':service_id'
    ].logs.$post(args, options),
  )
}

export async function postOrganizationOrganizationIdInvitationUserEmail(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invitation'][':user_email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invitation[':user_email'].$post(args, options),
  )
}

export async function deleteOrganizationOrganizationIdInvitationUserEmail(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['invitation'][':user_email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invitation[':user_email'].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdInvitation(
  args: InferRequestType<(typeof client.organization)[':organization_id']['invitation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].invitation.$get(args, options))
}

export async function postOrganizationOrganizationIdInvitation(
  args: InferRequestType<(typeof client.organization)[':organization_id']['invitation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].invitation.$post(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectIdEventLogsDownload(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['event-logs']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id']['event-logs'].download.$post(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdProjectProjectIdEventLogs(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project_id']['event-logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project_id']['event-logs'].$post(
      args,
      options,
    ),
  )
}

export async function getOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.$get(undefined, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationOrganizationIdApplicationVcsIntegrations(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application']['vcs-integrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].application['vcs-integrations'].$get(args, options),
  )
}

export async function getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdBranches(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application']['vcs-integrations'][':vcs_integration_id']['repositories'][':remote_repository_id']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].application['vcs-integrations'][
      ':vcs_integration_id'
    ].repositories[':remote_repository_id'].branches.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaContainerManifestFiles(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application']['vcs-integrations'][':vcs_integration_id']['repositories'][':remote_repository_id']['refs'][':commit_sha']['container-manifest-files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].application['vcs-integrations'][
      ':vcs_integration_id'
    ].repositories[':remote_repository_id'].refs[':commit_sha']['container-manifest-files'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaScanContainerManifest(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application']['vcs-integrations'][':vcs_integration_id']['repositories'][':remote_repository_id']['refs'][':commit_sha']['scan-container-manifest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].application['vcs-integrations'][
      ':vcs_integration_id'
    ].repositories[':remote_repository_id'].refs[':commit_sha']['scan-container-manifest'].$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositories(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['application']['vcs-integrations'][':vcs_integration_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].application['vcs-integrations'][
      ':vcs_integration_id'
    ].repositories.$get(args, options),
  )
}

export async function getCard(options?: ClientRequestOptions) {
  return await parseResponse(client.card.$get(undefined, options))
}

export async function postCard(options?: ClientRequestOptions) {
  return await parseResponse(client.card.$post(undefined, options))
}

export async function putCardCardId(
  args: InferRequestType<(typeof client.card)[':card_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card[':card_id'].$put(args, options))
}

export async function deleteCardCardId(
  args: InferRequestType<(typeof client.card)[':card_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card[':card_id'].$delete(args, options))
}

export async function getOrganizationOrganizationIdPermissionsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['permissions'][':resource_type'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].permissions[':resource_type'][':resource_id'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationOrganizationIdPermissionsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['permissions'][':resource_type'][':resource_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].permissions[':resource_type'][':resource_id'].$put(
      args,
      options,
    ),
  )
}

export async function patchOrganizationOrganizationIdPermissionsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['permissions'][':resource_type'][':resource_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].permissions[':resource_type'][':resource_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectProjectVpcPeeringConnectionTypes(
  args: InferRequestType<
    (typeof client.project)[':project']['vpc-peering-connection-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['vpc-peering-connection-types'].$get(args, options),
  )
}

export async function getProjectProjectAlerts(
  args: InferRequestType<(typeof client.project)[':project']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].alerts.$get(args, options))
}

export async function getProject(options?: ClientRequestOptions) {
  return await parseResponse(client.project.$get(undefined, options))
}

export async function postProject(
  args: InferRequestType<typeof client.project.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project.$post(args, options))
}

export async function getProjectProject(
  args: InferRequestType<(typeof client.project)[':project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].$get(args, options))
}

export async function putProjectProject(
  args: InferRequestType<(typeof client.project)[':project']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].$put(args, options))
}

export async function deleteProjectProject(
  args: InferRequestType<(typeof client.project)[':project']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].$delete(args, options))
}

export async function getProjectProjectDownloadSbomFileFormatDownloadCookie(
  args: InferRequestType<
    (typeof client.project)[':project']['download-sbom'][':file_format'][':download_cookie']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['download-sbom'][':file_format'][':download_cookie'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectGenerateSbomDownloadUrlFileFormat(
  args: InferRequestType<
    (typeof client.project)[':project']['generate-sbom-download-url'][':file_format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['generate-sbom-download-url'][':file_format'].$get(args, options),
  )
}

export async function getProjectProjectEvents(
  args: InferRequestType<(typeof client.project)[':project']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].events.$get(args, options))
}

export async function postProjectProjectInvite(
  args: InferRequestType<(typeof client.project)[':project']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].invite.$post(args, options))
}

export async function postProjectProjectInviteInviteVerificationCode(
  args: InferRequestType<
    (typeof client.project)[':project']['invite'][':invite_verification_code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].invite[':invite_verification_code'].$post(args, options),
  )
}

export async function deleteProjectProjectInviteInvitedEmail(
  args: InferRequestType<
    (typeof client.project)[':project']['invite'][':invited_email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].invite[':invited_email'].$delete(args, options),
  )
}

export async function getProjectProjectPrivatelinkAvailability(
  args: InferRequestType<(typeof client.project)[':project']['privatelink-availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['privatelink-availability'].$get(args, options),
  )
}

export async function getProjectProjectServiceTypesServiceTypePlans(
  args: InferRequestType<
    (typeof client.project)[':project']['service-types'][':service_type']['plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['service-types'][':service_type'].plans.$get(args, options),
  )
}

export async function getProjectProjectPricingServiceTypesServiceTypePlansServicePlanCloudsCloud(
  args: InferRequestType<
    (typeof client.project)[':project']['pricing']['service-types'][':service_type']['plans'][':service_plan']['clouds'][':cloud']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].pricing['service-types'][':service_type'].plans[
      ':service_plan'
    ].clouds[':cloud'].$get(args, options),
  )
}

export async function getProjectProjectServiceTypesServiceTypePlansServicePlan(
  args: InferRequestType<
    (typeof client.project)[':project']['service-types'][':service_type']['plans'][':service_plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['service-types'][':service_type'].plans[':service_plan'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceTypesServiceType(
  args: InferRequestType<
    (typeof client.project)[':project']['service-types'][':service_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['service-types'][':service_type'].$get(args, options),
  )
}

export async function getProjectProjectServiceTypes(
  args: InferRequestType<(typeof client.project)[':project']['service-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['service-types'].$get(args, options))
}

export async function getProjectProjectTags(
  args: InferRequestType<(typeof client.project)[':project']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].tags.$get(args, options))
}

export async function putProjectProjectTags(
  args: InferRequestType<(typeof client.project)[':project']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].tags.$put(args, options))
}

export async function patchProjectProjectTags(
  args: InferRequestType<(typeof client.project)[':project']['tags']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].tags.$patch(args, options))
}

export async function getProjectProjectUsers(
  args: InferRequestType<(typeof client.project)[':project']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].users.$get(args, options))
}

export async function putProjectProjectUserUserEmail(
  args: InferRequestType<(typeof client.project)[':project']['user'][':user_email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].user[':user_email'].$put(args, options))
}

export async function deleteProjectProjectUserUserEmail(
  args: InferRequestType<(typeof client.project)[':project']['user'][':user_email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].user[':user_email'].$delete(args, options))
}

export async function getProjectProjectVpcs(
  args: InferRequestType<(typeof client.project)[':project']['vpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].vpcs.$get(args, options))
}

export async function postProjectProjectVpcs(
  args: InferRequestType<(typeof client.project)[':project']['vpcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].vpcs.$post(args, options))
}

export async function getProjectProjectVpcsProjectVpcId(
  args: InferRequestType<(typeof client.project)[':project']['vpcs'][':project_vpc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].vpcs[':project_vpc_id'].$get(args, options))
}

export async function deleteProjectProjectVpcsProjectVpcId(
  args: InferRequestType<(typeof client.project)[':project']['vpcs'][':project_vpc_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id'].$delete(args, options),
  )
}

export async function postProjectProjectVpcsProjectVpcIdPeeringConnections(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['peering-connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['peering-connections'].$post(args, options),
  )
}

export async function deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpc(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['peering-connections']['peer-accounts'][':peer_cloud_account']['peer-vpcs'][':peer_vpc']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['peering-connections']['peer-accounts'][
      ':peer_cloud_account'
    ]['peer-vpcs'][':peer_vpc'].$delete(args, options),
  )
}

export async function putProjectProjectVpcsProjectVpcIdUserPeerNetworkCidrs(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['user-peer-network-cidrs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['user-peer-network-cidrs'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcPeerRegionsPeerRegion(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['peering-connections']['peer-accounts'][':peer_cloud_account']['peer-vpcs'][':peer_vpc']['peer-regions'][':peer_region']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['peering-connections']['peer-accounts'][
      ':peer_cloud_account'
    ]['peer-vpcs'][':peer_vpc']['peer-regions'][':peer_region'].$delete(args, options),
  )
}

export async function deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerResourceGroupsPeerResourceGroupPeerVpcsPeerVpc(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['peering-connections']['peer-accounts'][':peer_cloud_account']['peer-resource-groups'][':peer_resource_group']['peer-vpcs'][':peer_vpc']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['peering-connections']['peer-accounts'][
      ':peer_cloud_account'
    ]['peer-resource-groups'][':peer_resource_group']['peer-vpcs'][':peer_vpc'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectProjectVpcsProjectVpcIdPeeringConnectionsRefresh(
  args: InferRequestType<
    (typeof client.project)[':project']['vpcs'][':project_vpc_id']['peering-connections']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].vpcs[':project_vpc_id']['peering-connections'].refresh.$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectCredits(
  args: InferRequestType<(typeof client.project)[':project']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].credits.$get(args, options))
}

export async function postProjectProjectCredits(
  args: InferRequestType<(typeof client.project)[':project']['credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].credits.$post(args, options))
}

export async function getProjectProjectInvoiceInvoiceNumberDownloadCookie(
  args: InferRequestType<
    (typeof client.project)[':project']['invoice'][':invoice_number'][':download_cookie']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].invoice[':invoice_number'][':download_cookie'].$get(args, options),
  )
}

export async function getProjectProjectInvoice(
  args: InferRequestType<(typeof client.project)[':project']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].invoice.$get(args, options))
}

export async function getProjectProjectKmsCa(
  args: InferRequestType<(typeof client.project)[':project']['kms']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].kms.ca.$get(args, options))
}

export async function postProjectProjectSecretsCmksCmkIdAccessCheck(
  args: InferRequestType<
    (typeof client.project)[':project']['secrets']['cmks'][':cmk_id']['access_check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].secrets.cmks[':cmk_id'].access_check.$post(args, options),
  )
}

export async function getProjectProjectSecretsCmksAccessors(
  args: InferRequestType<
    (typeof client.project)[':project']['secrets']['cmks']['accessors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].secrets.cmks.accessors.$get(args, options))
}

export async function getProjectProjectSecretsCmks(
  args: InferRequestType<(typeof client.project)[':project']['secrets']['cmks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].secrets.cmks.$get(args, options))
}

export async function postProjectProjectSecretsCmks(
  args: InferRequestType<(typeof client.project)[':project']['secrets']['cmks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].secrets.cmks.$post(args, options))
}

export async function getProjectProjectSecretsCmksCmkId(
  args: InferRequestType<(typeof client.project)[':project']['secrets']['cmks'][':cmk_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].secrets.cmks[':cmk_id'].$get(args, options))
}

export async function postProjectProjectSecretsCmksCmkId(
  args: InferRequestType<
    (typeof client.project)[':project']['secrets']['cmks'][':cmk_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].secrets.cmks[':cmk_id'].$post(args, options),
  )
}

export async function deleteProjectProjectSecretsCmksCmkId(
  args: InferRequestType<
    (typeof client.project)[':project']['secrets']['cmks'][':cmk_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].secrets.cmks[':cmk_id'].$delete(args, options),
  )
}

export async function getProjectProjectSecretsCmksCmkIdServiceAssociations(
  args: InferRequestType<
    (typeof client.project)[':project']['secrets']['cmks'][':cmk_id']['service_associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].secrets.cmks[':cmk_id'].service_associations.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameApplicationRedeploy(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['application']['redeploy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].application.redeploy.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseQuery(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.query.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameClickhouseQuery(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.query.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseDb(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['db']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.db.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameClickhouseDb(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['db']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.db.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameClickhouseDbDatabase(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['db'][':database']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.db[':database'].$delete(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNameClickhouseUserUserUuidPassword(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['user'][':user_uuid']['password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.user[':user_uuid'].password.$put(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseQueryStats(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['query']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.query.stats.$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuid(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['role'][':role_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.role[':role_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseRole(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['role']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.role.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseTieredStorageSummary(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['tiered-storage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse['tiered-storage'].summary.$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameClickhouseUser(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.user.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameClickhouseUser(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.user.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameClickhouseUserUserUuid(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['clickhouse']['user'][':user_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].clickhouse.user[':user_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment'][':deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment[':deployment_id'].cancel.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment'][':deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment[':deployment_id'].cancel.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkApplication(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplication(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeployment(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeployment(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersion(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].version.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJarApplication(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkJarApplication(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeployment(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeployment(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersion(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].version.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[':application_id'].$get(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNameFlinkApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[':application_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment[':deployment_id'].$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment'][':deployment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment[':deployment_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['version'][':application_version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].version[':application_version_id'].$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['version'][':application_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].version[':application_version_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJarApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameFlinkJarApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].$put(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment[':deployment_id'].$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment'][':deployment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment[':deployment_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['version'][':application_version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].version[':application_version_id'].$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['version'][':application_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].version[':application_version_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJobJobId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['job'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.job[':job_id'].$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkJob(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['job']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.job.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameFlinkOverview(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.overview.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdStop(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['deployment'][':deployment_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].deployment[':deployment_id'].stop.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdStop(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['jar_application'][':application_id']['deployment'][':deployment_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.jar_application[
      ':application_id'
    ].deployment[':deployment_id'].stop.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionValidate(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['flink']['application'][':application_id']['version']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].flink.application[
      ':application_id'
    ].version.validate.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].acl.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['acl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].acl.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameAclKafkaAclId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['acl'][':kafka_acl_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].acl[':kafka_acl_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameConnectors(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameConnectors(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors.$post(args, options),
  )
}

export async function putProjectProjectServiceServiceNameConnectorsConnectorName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameConnectorsConnectorName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameAvailableConnectors(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['available-connectors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['available-connectors'].$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfiguration(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connector-plugins'][':connector_name']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['connector-plugins'][
      ':connector_name'
    ].configuration.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameConnectorsConnectorNameStatus(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].status.$get(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameConnectorsConnectorNamePause(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].pause.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameConnectorsConnectorNameRestart(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].restart.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestart(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['tasks'][':task_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].tasks[
      ':task_id'
    ].restart.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameConnectorsConnectorNameResume(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].resume.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameConnectorsConnectorNameStop(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connectors'][':connector_name']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connectors[':connector_name'].stop.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameValidateCustomPluginClasses(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['validate-custom-plugin-classes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['validate-custom-plugin-classes'].$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameKafkaAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.acl.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameKafkaAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['acl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.acl.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaAclKafkaAclId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['acl'][':kafka_acl_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.acl[':kafka_acl_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameKafkaAclKafkaAclId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['acl'][':kafka_acl_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.acl[':kafka_acl_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameQuota(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['quota']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].quota.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameQuota(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['quota']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].quota.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameQuota(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['quota']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].quota.$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameQuotaDescribe(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['quota']['describe']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].quota.describe.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopic(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['tiered-storage']['storage-usage']['by-topic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['tiered-storage']['storage-usage'][
      'by-topic'
    ].$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotal(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['tiered-storage']['storage-usage']['total']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['tiered-storage'][
      'storage-usage'
    ].total.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaTieredStorageSummary(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['tiered-storage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['tiered-storage'].summary.$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameTopic(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['topic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].topic.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameTopic(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['topic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].topic.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameTopicTopicName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['topic'][':topic_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].topic[':topic_name'].$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameTopicTopicName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['topic'][':topic_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].topic[':topic_name'].$put(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameTopicTopicName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['topic'][':topic_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].topic[':topic_name'].$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessages(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['rest']['topics'][':topic_name']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.rest.topics[
      ':topic_name'
    ].messages.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduce(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['rest']['topics'][':topic_name']['produce']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.rest.topics[
      ':topic_name'
    ].produce.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaRegistryAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema-registry']['acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['schema-registry'].acl.$get(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameKafkaSchemaRegistryAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema-registry']['acl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['schema-registry'].acl.$post(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema-registry']['acl'][':schema_registry_acl_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka['schema-registry'].acl[
      ':schema_registry_acl_id'
    ].$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['compatibility']['subjects'][':subject_name']['versions'][':version_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.compatibility.subjects[
      ':subject_name'
    ].versions[':version_id'].$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaConfig(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.config.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameKafkaSchemaConfig(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.config.$put(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['schemas']['ids'][':schema_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.schemas.ids[':schema_id'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['config'][':subject_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.config[':subject_name'].$get(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['config'][':subject_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.config[':subject_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].versions[':version_id'].$get(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['versions'][':version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].versions[':version_id'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersions(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].versions.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersions(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].versions.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchema(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects'][':subject_name']['versions'][':version_id']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects[
      ':subject_name'
    ].versions[':version_id'].schema.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameKafkaSchemaSubjects(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['kafka']['schema']['subjects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].kafka.schema.subjects.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameMirrormakerReplicationFlows(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mirrormaker']['replication-flows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mirrormaker['replication-flows'].$get(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameMirrormakerReplicationFlows(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mirrormaker']['replication-flows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mirrormaker['replication-flows'].$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetCluster(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mirrormaker']['replication-flows'][':source_cluster'][':target_cluster']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mirrormaker['replication-flows'][
      ':source_cluster'
    ][':target_cluster'].$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetCluster(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mirrormaker']['replication-flows'][':source_cluster'][':target_cluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mirrormaker['replication-flows'][
      ':source_cluster'
    ][':target_cluster'].$put(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetCluster(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mirrormaker']['replication-flows'][':source_cluster'][':target_cluster']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mirrormaker['replication-flows'][
      ':source_cluster'
    ][':target_cluster'].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdProjectProjectManagedAgentsAgent(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdProjectProjectManagedAgentsAgent(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent.$post(
      args,
      options,
    ),
  )
}

export async function postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSchedule(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].schedule.$post(args, options),
  )
}

export async function patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['schedule'][':schedule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].schedule[':schedule_id'].$patch(args, options),
  )
}

export async function patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].$patch(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegration(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['environment'][':environment']['integration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].environment[
      ':environment'
    ].integration.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalog(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['integration']['catalog']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project'][
      'managed-agents'
    ].integration.catalog.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessage(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['session'][':session_id']['message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].session[':session_id'].message.$get(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessage(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['session'][':session_id']['message']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].session[':session_id'].message.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSession(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].session.$get(args, options),
  )
}

export async function postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSession(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['project'][':project']['managed-agents']['agent'][':agent_id']['session']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].project[':project']['managed-agents'].agent[
      ':agent_id'
    ].session.$post(args, options),
  )
}

export async function postAccountAccountIdMysqlQueryOptimize(
  args: InferRequestType<
    (typeof client.account)[':account_id']['mysql']['query']['optimize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].mysql.query.optimize.$post(args, options),
  )
}

export async function getMysqlDatabaseMetadataQuery(options?: ClientRequestOptions) {
  return await parseResponse(client.mysql['database-metadata-query'].$get(undefined, options))
}

export async function postMysqlQueryMetadataValidate(
  args: InferRequestType<(typeof client.mysql.query)['metadata-validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysql.query['metadata-validate'].$post(args, options))
}

export async function postProjectProjectServiceServiceNameMysqlQueryStats(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['mysql']['query']['stats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].mysql.query.stats.$post(args, options),
  )
}

export async function postMysqlQueryValidate(
  args: InferRequestType<typeof client.mysql.query.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysql.query.validate.$post(args, options))
}

export async function getProjectProjectServiceServiceNameOpensearchAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.acl.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameOpensearchAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['acl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.acl.$put(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchAcl(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['acl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.acl.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchIndexPatternClose(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch'][':index_pattern']['_close']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch[':index_pattern']._close.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameIndexCloseMultiple(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['index']['close_multiple']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].index.close_multiple.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameIndexIndexPattern(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['index'][':index_pattern']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].index[':index_pattern'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameIndex(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].index.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchIndexPatternOpen(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch'][':index_pattern']['_open']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch[':index_pattern']._open.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameIndexOpenMultiple(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['index']['open_multiple']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].index.open_multiple.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSecurity(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['security']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.security.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameOpensearchSecurityAdmin(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['security']['admin']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.security.admin.$put(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchSecurityAdmin(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['security']['admin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch.security.admin.$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ].$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ].$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAll(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name']['_all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[
      ':repository_name'
    ]._all.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerify(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name']['_verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[
      ':repository_name'
    ]._verify.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestore(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['_restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ]._restore.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheck(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['_restore_check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ]._restore_check.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatus(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name'][':snapshot_name']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[':repository_name'][
      ':snapshot_name'
    ]._status.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatus(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot'][':repository_name']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot[
      ':repository_name'
    ]._status.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshot(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch._snapshot.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgress(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['_snapshot']['restoration_in_progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[
      ':service_name'
    ].opensearch._snapshot.restoration_in_progress.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameOpensearchTieredStorageSummary(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['opensearch']['tiered-storage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].opensearch['tiered-storage'].summary.$get(
      args,
      options,
    ),
  )
}

export async function postAccountAccountIdPgQueryOptimize(
  args: InferRequestType<
    (typeof client.account)[':account_id']['pg']['query']['optimize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].pg.query.optimize.$post(args, options))
}

export async function getProjectProjectServiceServiceNamePgAvailableExtensions(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['pg']['available-extensions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].pg['available-extensions'].$get(
      args,
      options,
    ),
  )
}

export async function getPgDatabaseMetadataQuery(options?: ClientRequestOptions) {
  return await parseResponse(client.pg['database-metadata-query'].$get(undefined, options))
}

export async function postPgQueryMetadataValidate(
  args: InferRequestType<(typeof client.pg.query)['metadata-validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pg.query['metadata-validate'].$post(args, options))
}

export async function postProjectProjectServiceServiceNamePgQueryStats(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['pg']['query']['stats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].pg.query.stats.$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameQueryStats(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['query']['stats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].query.stats.$post(args, options),
  )
}

export async function postPgQueryValidate(
  args: InferRequestType<typeof client.pg.query.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pg.query.validate.$post(args, options))
}

export async function postProjectProjectServiceServiceNameConnectionPool(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connection_pool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connection_pool.$post(args, options),
  )
}

export async function putProjectProjectServiceServiceNameConnectionPoolPoolName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connection_pool'][':pool_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connection_pool[':pool_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameConnectionPoolPoolName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['connection_pool'][':pool_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].connection_pool[':pool_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameThanosStorageSummary(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['thanos']['storage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].thanos.storage.summary.$get(args, options),
  )
}

export async function getProjectProjectServiceTypes2(
  args: InferRequestType<(typeof client.project)[':project']['service_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].service_types.$get(args, options))
}

export async function getServiceTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.service_types.$get(undefined, options))
}

export async function getServiceVersions(
  args: InferRequestType<typeof client.service_versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_versions.$get(args, options))
}

export async function getTenantsTenantOsAvailablePlugins(
  args: InferRequestType<(typeof client.tenants)[':tenant']['os-available-plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenants[':tenant']['os-available-plugins'].$get(args, options))
}

export async function getTenantsTenantPgAvailableExtensions(
  args: InferRequestType<(typeof client.tenants)[':tenant']['pg-available-extensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tenants[':tenant']['pg-available-extensions'].$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameLogs(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].logs.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameTags(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].tags.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameTags(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['tags']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].tags.$put(args, options),
  )
}

export async function patchProjectProjectServiceServiceNameTags(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['tags']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].tags.$patch(args, options),
  )
}

export async function getProjectProjectServiceServiceNameAlerts(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].alerts.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameBackupToAnotherRegionReport(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['backup_to_another_region']['report']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].backup_to_another_region.report.$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameBackups(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].backups.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameQueryCancel(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['query']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].query.cancel.$post(args, options),
  )
}

export async function getProjectProjectService(
  args: InferRequestType<(typeof client.project)[':project']['service']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].service.$get(args, options))
}

export async function postProjectProjectService(
  args: InferRequestType<(typeof client.project)[':project']['service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].service.$post(args, options))
}

export async function postProjectProjectServiceServiceNameRotateInternalSecrets(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['rotate-internal-secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['rotate-internal-secrets'].$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameRotateSecretServiceEncryptionKey(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['rotate-secret-service-encryption-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'][
      'rotate-secret-service-encryption-key'
    ].$post(args, options),
  )
}

export async function postProjectProjectServiceServiceNameRotateTokenServiceSecrets(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['rotate-token-service-secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['rotate-token-service-secrets'].$post(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNameDb(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['db']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].db.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameDb(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['db']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].db.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNameDbDbname(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['db'][':dbname']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].db[':dbname'].$delete(args, options),
  )
}

export async function getProjectProjectServiceServiceName(
  args: InferRequestType<(typeof client.project)[':project']['service'][':service_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].$get(args, options),
  )
}

export async function putProjectProjectServiceServiceName(
  args: InferRequestType<(typeof client.project)[':project']['service'][':service_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].$put(args, options),
  )
}

export async function deleteProjectProjectServiceServiceName(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNameEnableWrites(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['enable-writes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['enable-writes'].$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameMigration(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['migration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].migration.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNameMaintenanceStart(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['maintenance']['start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].maintenance.start.$put(args, options),
  )
}

export async function postProjectProjectServiceServiceNameMetrics(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['metrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].metrics.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkAwsConnections(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['aws']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.aws.connections.$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkAws(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['aws']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.aws.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNamePrivatelinkAws(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['aws']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.aws.$put(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkAws(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['aws']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.aws.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNamePrivatelinkAws(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['aws']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.aws.$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdApprove(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['connections'][':privatelink_connection_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.connections[
      ':privatelink_connection_id'
    ].approve.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkAzureConnections(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.connections.$get(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['connections'][':privatelink_connection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.connections[
      ':privatelink_connection_id'
    ].$put(args, options),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkAzure(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.$get(args, options),
  )
}

export async function putProjectProjectServiceServiceNamePrivatelinkAzure(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.$put(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkAzure(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNamePrivatelinkAzure(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkAzureRefresh(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['azure']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.azure.refresh.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsPrivatelinkConnectionIdApprove(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['connections'][':privatelink_connection_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.connections[
      ':privatelink_connection_id'
    ].approve.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkGoogleConnections(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.connections.$get(
      args,
      options,
    ),
  )
}

export async function getProjectProjectServiceServiceNamePrivatelinkGoogle(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkGoogle(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.$post(args, options),
  )
}

export async function deleteProjectProjectServiceServiceNamePrivatelinkGoogle(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.$delete(args, options),
  )
}

export async function postProjectProjectServiceServiceNamePrivatelinkGoogleRefresh(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['privatelink']['google']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].privatelink.google.refresh.$post(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameQueryActivity(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['query']['activity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].query.activity.$post(args, options),
  )
}

export async function putProjectProjectServiceServiceNameQueryStatsReset(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['query']['stats']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].query.stats.reset.$put(args, options),
  )
}

export async function patchProjectProjectServiceServiceNameServiceType(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['service_type']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].service_type.$patch(args, options),
  )
}

export async function postProjectProjectServiceServiceNameTask(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['task']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].task.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameTaskTaskId(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['task'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].task[':task_id'].$get(args, options),
  )
}

export async function postProjectProjectServiceServiceNameUser(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].user.$post(args, options),
  )
}

export async function getProjectProjectServiceServiceNameUserServiceUsername(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['user'][':service_username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].user[':service_username'].$get(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNameUserServiceUsername(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['user'][':service_username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].user[':service_username'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectServiceServiceNameUserServiceUsername(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['user'][':service_username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].user[':service_username'].$delete(
      args,
      options,
    ),
  )
}

export async function putProjectProjectServiceServiceNameUserServiceUsernameCredentialsReset(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['user'][':service_username']['credentials']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].user[
      ':service_username'
    ].credentials.reset.$put(args, options),
  )
}

export async function postProjectProjectIntegration(
  args: InferRequestType<(typeof client.project)[':project']['integration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].integration.$post(args, options))
}

export async function getProjectProjectIntegrationIntegrationId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration'][':integration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration[':integration_id'].$get(args, options),
  )
}

export async function putProjectProjectIntegrationIntegrationId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration'][':integration_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration[':integration_id'].$put(args, options),
  )
}

export async function deleteProjectProjectIntegrationIntegrationId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration'][':integration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration[':integration_id'].$delete(args, options),
  )
}

export async function getProjectProjectIntegrationEndpoint(
  args: InferRequestType<(typeof client.project)[':project']['integration_endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].integration_endpoint.$get(args, options))
}

export async function postProjectProjectIntegrationEndpoint(
  args: InferRequestType<(typeof client.project)[':project']['integration_endpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].integration_endpoint.$post(args, options))
}

export async function getProjectProjectIntegrationEndpointIntegrationEndpointId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration_endpoint'][':integration_endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration_endpoint[':integration_endpoint_id'].$get(args, options),
  )
}

export async function putProjectProjectIntegrationEndpointIntegrationEndpointId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration_endpoint'][':integration_endpoint_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration_endpoint[':integration_endpoint_id'].$put(args, options),
  )
}

export async function deleteProjectProjectIntegrationEndpointIntegrationEndpointId(
  args: InferRequestType<
    (typeof client.project)[':project']['integration_endpoint'][':integration_endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration_endpoint[':integration_endpoint_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectIntegrationEndpointTypes(
  args: InferRequestType<(typeof client.project)[':project']['integration_endpoint_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].integration_endpoint_types.$get(args, options),
  )
}

export async function getProjectProjectServiceServiceNameIntegration(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['integration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name'].integration.$get(args, options),
  )
}

export async function getProjectProjectIntegrationTypes(
  args: InferRequestType<(typeof client.project)[':project']['integration_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project'].integration_types.$get(args, options))
}

export async function postProjectProjectStaticIpsStaticIpAddressIdAssociation(
  args: InferRequestType<
    (typeof client.project)[':project']['static-ips'][':static_ip_address_id']['association']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['static-ips'][':static_ip_address_id'].association.$post(
      args,
      options,
    ),
  )
}

export async function deleteProjectProjectStaticIpsStaticIpAddressIdAssociation(
  args: InferRequestType<
    (typeof client.project)[':project']['static-ips'][':static_ip_address_id']['association']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['static-ips'][':static_ip_address_id'].association.$delete(
      args,
      options,
    ),
  )
}

export async function getProjectProjectStaticIpAvailability(
  args: InferRequestType<(typeof client.project)[':project']['static-ip-availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['static-ip-availability'].$get(args, options),
  )
}

export async function deleteProjectProjectStaticIpsStaticIpAddressId(
  args: InferRequestType<
    (typeof client.project)[':project']['static-ips'][':static_ip_address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['static-ips'][':static_ip_address_id'].$delete(args, options),
  )
}

export async function patchProjectProjectStaticIpsStaticIpAddressId(
  args: InferRequestType<
    (typeof client.project)[':project']['static-ips'][':static_ip_address_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project']['static-ips'][':static_ip_address_id'].$patch(args, options),
  )
}

export async function getProjectProjectStaticIps(
  args: InferRequestType<(typeof client.project)[':project']['static-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['static-ips'].$get(args, options))
}

export async function postProjectProjectStaticIps(
  args: InferRequestType<(typeof client.project)[':project']['static-ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project']['static-ips'].$post(args, options))
}

export async function getOrganizationOrganizationIdUpgradePipelineSteps(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['upgrade-pipeline']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['upgrade-pipeline'].steps.$get(args, options),
  )
}

export async function postOrganizationOrganizationIdUpgradePipelineSteps(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['upgrade-pipeline']['steps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['upgrade-pipeline'].steps.$post(args, options),
  )
}

export async function getOrganizationOrganizationIdUpgradePipelineStepsStepId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['upgrade-pipeline']['steps'][':step_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['upgrade-pipeline'].steps[':step_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationOrganizationIdUpgradePipelineStepsStepId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['upgrade-pipeline']['steps'][':step_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['upgrade-pipeline'].steps[':step_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchOrganizationOrganizationIdUpgradePipelineStepsStepId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['upgrade-pipeline']['steps'][':step_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id']['upgrade-pipeline'].steps[':step_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectProjectServiceServiceNameUpgradeValidation(
  args: InferRequestType<
    (typeof client.project)[':project']['service'][':service_name']['upgrade-validation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project'].service[':service_name']['upgrade-validation'].$post(args, options),
  )
}

export async function getAccessToken(options?: ClientRequestOptions) {
  return await parseResponse(client.access_token.$get(undefined, options))
}

export async function postAccessToken(
  args: InferRequestType<typeof client.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_token.$post(args, options))
}

export async function putAccessTokenTokenPrefix(
  args: InferRequestType<(typeof client.access_token)[':token_prefix']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_token[':token_prefix'].$put(args, options))
}

export async function deleteAccessTokenTokenPrefix(
  args: InferRequestType<(typeof client.access_token)[':token_prefix']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_token[':token_prefix'].$delete(args, options))
}

export async function postMePasswordStrength(
  args: InferRequestType<typeof client.me.password_strength.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.password_strength.$post(args, options))
}

export async function postUserPasswordStrength(
  args: InferRequestType<typeof client.user.password_strength.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.password_strength.$post(args, options))
}

export async function getOrganizationOrganizationIdUserMemberUserIdUserGroups(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['user-groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id']['user-groups'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdUserMemberUserIdPermissions(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].permissions.$get(args, options),
  )
}

export async function getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethods(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['authentication_methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].authentication_methods.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationOrganizationIdUserMemberUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].$get(args, options),
  )
}

export async function deleteOrganizationOrganizationIdUserMemberUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].$delete(args, options),
  )
}

export async function patchOrganizationOrganizationIdUserMemberUserId(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].$patch(args, options),
  )
}

export async function getOrganizationOrganizationIdUser(
  args: InferRequestType<(typeof client.organization)[':organization_id']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':organization_id'].user.$get(args, options))
}

export async function postOrganizationOrganizationIdUserMemberUserIdResetPassword(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['reset_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id'].reset_password.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefix(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['access-token'][':token_prefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id']['access-token'][
      ':token_prefix'
    ].$delete(args, options),
  )
}

export async function getOrganizationOrganizationIdUserMemberUserIdAccessTokens(
  args: InferRequestType<
    (typeof client.organization)[':organization_id']['user'][':member_user_id']['access-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':organization_id'].user[':member_user_id']['access-tokens'].$get(
      args,
      options,
    ),
  )
}

export async function putMe2fa(
  args: InferRequestType<(typeof client.me)['2fa']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['2fa'].$put(args, options))
}

export async function putMe2faOtp(
  args: InferRequestType<(typeof client.me)['2fa']['otp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['2fa'].otp.$put(args, options))
}

export async function deleteUserUserId(
  args: InferRequestType<(typeof client.user)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].$delete(args, options))
}

export async function postMeAccountInvitesAccept(options?: ClientRequestOptions) {
  return await parseResponse(client.me.account.invites.accept.$post(undefined, options))
}

export async function getMeAccountInvites(options?: ClientRequestOptions) {
  return await parseResponse(client.me.account.invites.$get(undefined, options))
}

export async function postMeAccountInvitesReject(options?: ClientRequestOptions) {
  return await parseResponse(client.me.account.invites.reject.$post(undefined, options))
}

export async function postUserauth(
  args: InferRequestType<typeof client.userauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userauth.$post(args, options))
}

export async function postUserauthLoginOptions(
  args: InferRequestType<typeof client.userauth.login_options.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userauth.login_options.$post(args, options))
}

export async function deleteMeAuthenticationMethodsUserAuthenticationMethodId(
  args: InferRequestType<
    (typeof client.me.authentication_methods)[':user_authentication_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.authentication_methods[':user_authentication_method_id'].$delete(args, options),
  )
}

export async function getMeAuthenticationMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.me.authentication_methods.$get(undefined, options))
}

export async function postMeExpireTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.me.expire_tokens.$post(undefined, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function patchMe(
  args: InferRequestType<typeof client.me.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$patch(args, options))
}

export async function postMeLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.me.logout.$post(undefined, options))
}

export async function putMePassword(
  args: InferRequestType<typeof client.me.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.password.$put(args, options))
}

export async function postUserPasswordResetVerificationCode(
  args: InferRequestType<(typeof client.user.password_reset)[':verification_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.password_reset[':verification_code'].$post(args, options))
}

export async function postUserPasswordResetRequest(
  args: InferRequestType<typeof client.user.password_reset_request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.password_reset_request.$post(args, options))
}

export async function postUserVerifyEmailVerificationCode(
  args: InferRequestType<(typeof client.user.verify_email)[':verification_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.verify_email[':verification_code'].$post(args, options))
}

export async function getUserCreditCodeCreditCode(
  args: InferRequestType<(typeof client.user.credit_code)[':credit_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.credit_code[':credit_code'].$get(args, options))
}

export async function getMeReferralValidationReferralCode(
  args: InferRequestType<(typeof client.me.referral.validation)[':referral_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.referral.validation[':referral_code'].$get(args, options))
}
