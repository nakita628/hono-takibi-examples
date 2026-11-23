import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPublicInterstitial(
  args: InferRequestType<typeof client.public.interstitial.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.interstitial.$get(args, options))
}

export async function getJwks(options?: ClientRequestOptions) {
  return await parseResponse(client.jwks.$get(undefined, options))
}

export async function getClients(
  args: InferRequestType<typeof client.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.$get(args, options))
}

export async function postClientsVerify(
  args: InferRequestType<typeof client.clients.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.verify.$post(args, options))
}

export async function getClientsClientId(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client_id'].$get(args, options))
}

export async function postClientsClientIdRevoke(
  args: InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client_id'].revoke.$post(args, options))
}

export async function postEmailAddresses(
  args: InferRequestType<typeof client.email_addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_addresses.$post(args, options))
}

export async function getEmailAddressesEmailAddressId(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_addresses[':email_address_id'].$get(args, options))
}

export async function deleteEmailAddressesEmailAddressId(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_addresses[':email_address_id'].$delete(args, options))
}

export async function patchEmailAddressesEmailAddressId(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_addresses[':email_address_id'].$patch(args, options))
}

export async function postEmailAddressesEmailAddressIdPrepareVerification(
  args: InferRequestType<
    (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_addresses[':email_address_id'].prepare_verification.$post(args, options),
  )
}

export async function postEmailAddressesEmailAddressIdAttemptVerification(
  args: InferRequestType<
    (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_addresses[':email_address_id'].attempt_verification.$post(args, options),
  )
}

export async function putUsersUserIdEmailAddress(
  args: InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].email_address.$put(args, options))
}

export async function postPhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.$post(args, options))
}

export async function getPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':phone_number_id'].$get(args, options))
}

export async function deletePhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':phone_number_id'].$delete(args, options))
}

export async function patchPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':phone_number_id'].$patch(args, options))
}

export async function postPhoneNumbersPhoneNumberIdPrepareVerification(
  args: InferRequestType<
    (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':phone_number_id'].prepare_verification.$post(args, options),
  )
}

export async function postPhoneNumbersPhoneNumberIdAttemptVerification(
  args: InferRequestType<
    (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':phone_number_id'].attempt_verification.$post(args, options),
  )
}

export async function putUsersUserIdPhoneNumber(
  args: InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].phone_number.$put(args, options))
}

export async function getSessions(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$get(args, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function getSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].$get(args, options))
}

export async function patchSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].$patch(args, options))
}

export async function postSessionsSessionIdRefresh(
  args: InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].refresh.$post(args, options))
}

export async function getSessionsSessionIdReverificationsReverificationId(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sessions[':session_id'].reverifications[':reverification_id'].$get(args, options),
  )
}

export async function postSessionsSessionIdRevoke(
  args: InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].revoke.$post(args, options))
}

export async function postSessionsSessionIdTokens(
  args: InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].tokens.$post(args, options))
}

export async function postSessionsSessionIdTokensTemplateName(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sessions[':session_id'].tokens[':template_name'].$post(args, options),
  )
}

export async function getTemplatesTemplateType(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_type'].$get(args, options))
}

export async function getTemplatesTemplateTypeSlug(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_type'][':slug'].$get(args, options))
}

export async function putTemplatesTemplateTypeSlug(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_type'][':slug'].$put(args, options))
}

export async function postTemplatesTemplateTypeSlugRevert(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_type'][':slug'].revert.$post(args, options),
  )
}

export async function postTemplatesTemplateTypeSlugPreview(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_type'][':slug'].preview.$post(args, options),
  )
}

export async function postTemplatesTemplateTypeSlugToggleDelivery(
  args: InferRequestType<
    (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_type'][':slug'].toggle_delivery.$post(args, options),
  )
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

export async function getUsersCount(
  args: InferRequestType<typeof client.users.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.count.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$patch(args, options))
}

export async function postUsersUserIdBan(
  args: InferRequestType<(typeof client.users)[':user_id']['ban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].ban.$post(args, options))
}

export async function postUsersUserIdUnban(
  args: InferRequestType<(typeof client.users)[':user_id']['unban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].unban.$post(args, options))
}

export async function postUsersBan(
  args: InferRequestType<typeof client.users.ban.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.ban.$post(args, options))
}

export async function postUsersUnban(
  args: InferRequestType<typeof client.users.unban.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.unban.$post(args, options))
}

export async function postUsersUserIdLock(
  args: InferRequestType<(typeof client.users)[':user_id']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].lock.$post(args, options))
}

export async function postUsersUserIdUnlock(
  args: InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].unlock.$post(args, options))
}

export async function postUsersUserIdMerge(
  args: InferRequestType<(typeof client.users)[':user_id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].merge.$post(args, options))
}

export async function postUsersUserIdProfileImage(
  args: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].profile_image.$post(args, options))
}

export async function deleteUsersUserIdProfileImage(
  args: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].profile_image.$delete(args, options))
}

export async function putUsersUserIdMetadata(
  args: InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].metadata.$put(args, options))
}

export async function patchUsersUserIdMetadata(
  args: InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].metadata.$patch(args, options))
}

export async function getUsersUserIdBillingSubscription(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].billing.subscription.$get(args, options))
}

export async function getUsersUserIdBillingCredits(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].billing.credits.$get(args, options))
}

export async function postUsersUserIdBillingCredits(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].billing.credits.$post(args, options))
}

export async function getUsersUserIdOauthAccessTokensProvider(
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].oauth_access_tokens[':provider'].$get(args, options),
  )
}

export async function getUsersUserIdOrganizationMemberships(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].organization_memberships.$get(args, options))
}

export async function getUsersUserIdOrganizationInvitations(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].organization_invitations.$get(args, options))
}

export async function postUsersUserIdRemovePassword(
  args: InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].remove_password.$post(args, options))
}

export async function postUsersUserIdVerifyPassword(
  args: InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].verify_password.$post(args, options))
}

export async function postUsersUserIdVerifyTotp(
  args: InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].verify_totp.$post(args, options))
}

export async function deleteUsersUserIdMfa(
  args: InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].mfa.$delete(args, options))
}

export async function deleteUsersUserIdBackupCode(
  args: InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].backup_code.$delete(args, options))
}

export async function deleteUsersUserIdPasskeysPasskeyIdentificationId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].passkeys[':passkey_identification_id'].$delete(args, options),
  )
}

export async function getUsersUserIdTrustedDevices(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].trusted_devices.$get(args, options))
}

export async function deleteUsersUserIdTrustedDevicesTrustedDeviceId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].trusted_devices[':trusted_device_id'].$delete(args, options),
  )
}

export async function deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].web3_wallets[':web3_wallet_identification_id'].$delete(args, options),
  )
}

export async function deleteUsersUserIdTotp(
  args: InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].totp.$delete(args, options))
}

export async function deleteUsersUserIdExternalAccountsExternalAccountId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].external_accounts[':external_account_id'].$delete(args, options),
  )
}

export async function getInvitations(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$get(args, options))
}

export async function postInvitations(
  args: InferRequestType<typeof client.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$post(args, options))
}

export async function postInvitationsBulk(
  args: InferRequestType<typeof client.invitations.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.bulk.$post(args, options))
}

export async function deleteInvitationsInvitationId(
  args: InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':invitation_id'].$delete(args, options))
}

export async function postInvitationsInvitationIdRevoke(
  args: InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':invitation_id'].revoke.$post(args, options))
}

export async function getOrganizationInvitations(
  args: InferRequestType<typeof client.organization_invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_invitations.$get(args, options))
}

export async function getAllowlistIdentifiers(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlist_identifiers.$get(args, options))
}

export async function postAllowlistIdentifiers(
  args: InferRequestType<typeof client.allowlist_identifiers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlist_identifiers.$post(args, options))
}

export async function deleteAllowlistIdentifiersIdentifierId(
  args: InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlist_identifiers[':identifier_id'].$delete(args, options))
}

export async function getBlocklistIdentifiers(options?: ClientRequestOptions) {
  return await parseResponse(client.blocklist_identifiers.$get(undefined, options))
}

export async function postBlocklistIdentifiers(
  args: InferRequestType<typeof client.blocklist_identifiers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist_identifiers.$post(args, options))
}

export async function deleteBlocklistIdentifiersIdentifierId(
  args: InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist_identifiers[':identifier_id'].$delete(args, options))
}

export async function patchBetaFeaturesInstanceSettings(
  args: InferRequestType<typeof client.beta_features.instance_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta_features.instance_settings.$patch(args, options))
}

export async function putBetaFeaturesDomain(
  args: InferRequestType<typeof client.beta_features.domain.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta_features.domain.$put(args, options))
}

export async function postActorTokens(
  args: InferRequestType<typeof client.actor_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actor_tokens.$post(args, options))
}

export async function postActorTokensActorTokenIdRevoke(
  args: InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actor_tokens[':actor_token_id'].revoke.$post(args, options))
}

export async function getDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.domains.$get(undefined, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function deleteDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$delete(args, options))
}

export async function patchDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$patch(args, options))
}

export async function getInstance(options?: ClientRequestOptions) {
  return await parseResponse(client.instance.$get(undefined, options))
}

export async function patchInstance(
  args: InferRequestType<typeof client.instance.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.$patch(args, options))
}

export async function patchInstanceRestrictions(
  args: InferRequestType<typeof client.instance.restrictions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.restrictions.$patch(args, options))
}

export async function getInstanceProtect(options?: ClientRequestOptions) {
  return await parseResponse(client.instance.protect.$get(undefined, options))
}

export async function patchInstanceProtect(
  args: InferRequestType<typeof client.instance.protect.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.protect.$patch(args, options))
}

export async function getInstanceCommunication(options?: ClientRequestOptions) {
  return await parseResponse(client.instance.communication.$get(undefined, options))
}

export async function patchInstanceCommunication(
  args: InferRequestType<typeof client.instance.communication.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.communication.$patch(args, options))
}

export async function getInstanceOauthApplicationSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.instance.oauth_application_settings.$get(undefined, options))
}

export async function patchInstanceOauthApplicationSettings(
  args: InferRequestType<typeof client.instance.oauth_application_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.oauth_application_settings.$patch(args, options))
}

export async function postInstanceChangeDomain(
  args: InferRequestType<typeof client.instance.change_domain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.change_domain.$post(args, options))
}

export async function getInstanceOrganizationSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.instance.organization_settings.$get(undefined, options))
}

export async function patchInstanceOrganizationSettings(
  args: InferRequestType<typeof client.instance.organization_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.organization_settings.$patch(args, options))
}

export async function postWebhooksSvix(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.svix.$post(undefined, options))
}

export async function deleteWebhooksSvix(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.svix.$delete(undefined, options))
}

export async function postWebhooksSvixUrl(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.svix_url.$post(undefined, options))
}

export async function getJwtTemplates(
  args: InferRequestType<typeof client.jwt_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt_templates.$get(args, options))
}

export async function postJwtTemplates(
  args: InferRequestType<typeof client.jwt_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt_templates.$post(args, options))
}

export async function getJwtTemplatesTemplateId(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt_templates[':template_id'].$get(args, options))
}

export async function deleteJwtTemplatesTemplateId(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt_templates[':template_id'].$delete(args, options))
}

export async function patchJwtTemplatesTemplateId(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jwt_templates[':template_id'].$patch(args, options))
}

export async function getMachines(
  args: InferRequestType<typeof client.machines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines.$get(args, options))
}

export async function postMachines(
  args: InferRequestType<typeof client.machines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines.$post(args, options))
}

export async function getMachinesMachineId(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].$get(args, options))
}

export async function deleteMachinesMachineId(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].$delete(args, options))
}

export async function patchMachinesMachineId(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].$patch(args, options))
}

export async function getMachinesMachineIdSecretKey(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].secret_key.$get(args, options))
}

export async function postMachinesMachineIdSecretKeyRotate(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].secret_key.rotate.$post(args, options))
}

export async function postMachinesMachineIdScopes(
  args: InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.machines[':machine_id'].scopes.$post(args, options))
}

export async function deleteMachinesMachineIdScopesOtherMachineId(
  args: InferRequestType<
    (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.machines[':machine_id'].scopes[':other_machine_id'].$delete(args, options),
  )
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].$get(args, options))
}

export async function deleteOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].$delete(args, options))
}

export async function patchOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].$patch(args, options))
}

export async function putOrganizationsOrganizationIdMetadata(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].metadata.$put(args, options))
}

export async function patchOrganizationsOrganizationIdMetadata(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].metadata.$patch(args, options),
  )
}

export async function putOrganizationsOrganizationIdLogo(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].logo.$put(args, options))
}

export async function deleteOrganizationsOrganizationIdLogo(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].logo.$delete(args, options))
}

export async function getOrganizationsOrganizationIdBillingSubscription(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].billing.subscription.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdBillingCredits(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].billing.credits.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdBillingCredits(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].billing.credits.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdInvitationsBulk(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations.bulk.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdInvitationsPending(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations.pending.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations[':invitation_id'].$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInvitationsInvitationIdRevoke(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].invitations[':invitation_id'].revoke.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationRoles(
  args: InferRequestType<typeof client.organization_roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_roles.$get(args, options))
}

export async function postOrganizationRoles(
  args: InferRequestType<typeof client.organization_roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_roles.$post(args, options))
}

export async function getOrganizationRolesOrganizationRoleId(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_roles[':organization_role_id'].$get(args, options))
}

export async function deleteOrganizationRolesOrganizationRoleId(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_roles[':organization_role_id'].$delete(args, options),
  )
}

export async function patchOrganizationRolesOrganizationRoleId(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_roles[':organization_role_id'].$patch(args, options),
  )
}

export async function postOrganizationRolesOrganizationRoleIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_roles[':organization_role_id'].permissions[':permission_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_roles[':organization_role_id'].permissions[':permission_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdMemberships(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].memberships.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdMemberships(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].memberships.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdMembershipsUserId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].memberships[':user_id'].$delete(args, options),
  )
}

export async function patchOrganizationsOrganizationIdMembershipsUserId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].memberships[':user_id'].$patch(args, options),
  )
}

export async function patchOrganizationsOrganizationIdMembershipsUserIdMetadata(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].memberships[':user_id'].metadata.$patch(args, options),
  )
}

export async function getOrganizationsOrganizationIdDomains(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].domains.$get(args, options))
}

export async function postOrganizationsOrganizationIdDomains(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organization_id'].domains.$post(args, options))
}

export async function deleteOrganizationsOrganizationIdDomainsDomainId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].domains[':domain_id'].$delete(args, options),
  )
}

export async function patchOrganizationsOrganizationIdDomainsDomainId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].domains[':domain_id'].$patch(args, options),
  )
}

export async function postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnership(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].domains[':domain_id'].verify_ownership.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationDomains(
  args: InferRequestType<typeof client.organization_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_domains.$get(args, options))
}

export async function postProxyChecks(
  args: InferRequestType<typeof client.proxy_checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy_checks.$post(args, options))
}

export async function getRedirectUrls(
  args: InferRequestType<typeof client.redirect_urls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redirect_urls.$get(args, options))
}

export async function postRedirectUrls(
  args: InferRequestType<typeof client.redirect_urls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redirect_urls.$post(args, options))
}

export async function getRedirectUrlsId(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redirect_urls[':id'].$get(args, options))
}

export async function deleteRedirectUrlsId(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redirect_urls[':id'].$delete(args, options))
}

export async function postSignInTokens(
  args: InferRequestType<typeof client.sign_in_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_in_tokens.$post(args, options))
}

export async function postSignInTokensSignInTokenIdRevoke(
  args: InferRequestType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_in_tokens[':sign_in_token_id'].revoke.$post(args, options))
}

export async function getSignUpsId(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_ups[':id'].$get(args, options))
}

export async function patchSignUpsId(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_ups[':id'].$patch(args, options))
}

export async function getOauthApplications(
  args: InferRequestType<typeof client.oauth_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_applications.$get(args, options))
}

export async function postOauthApplications(
  args: InferRequestType<typeof client.oauth_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_applications.$post(args, options))
}

export async function getOauthApplicationsOauthApplicationId(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_applications[':oauth_application_id'].$get(args, options))
}

export async function deleteOauthApplicationsOauthApplicationId(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_applications[':oauth_application_id'].$delete(args, options),
  )
}

export async function patchOauthApplicationsOauthApplicationId(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_applications[':oauth_application_id'].$patch(args, options),
  )
}

export async function putOauthApplicationsOauthApplicationIdLogo(
  args: InferRequestType<
    (typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_applications[':oauth_application_id'].logo.$put(args, options),
  )
}

export async function postOauthApplicationsOauthApplicationIdRotateSecret(
  args: InferRequestType<
    (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_applications[':oauth_application_id'].rotate_secret.$post(args, options),
  )
}

export async function postOauthApplicationsOauthApplicationIdRevokeToken(
  args: InferRequestType<
    (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_applications[':oauth_application_id'].revoke_token.$post(args, options),
  )
}

export async function getSamlConnections(
  args: InferRequestType<typeof client.saml_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml_connections.$get(args, options))
}

export async function postSamlConnections(
  args: InferRequestType<typeof client.saml_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml_connections.$post(args, options))
}

export async function getSamlConnectionsSamlConnectionId(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml_connections[':saml_connection_id'].$get(args, options))
}

export async function deleteSamlConnectionsSamlConnectionId(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml_connections[':saml_connection_id'].$delete(args, options))
}

export async function patchSamlConnectionsSamlConnectionId(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml_connections[':saml_connection_id'].$patch(args, options))
}

export async function getEnterpriseConnections(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise_connections.$get(args, options))
}

export async function postEnterpriseConnections(
  args: InferRequestType<typeof client.enterprise_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise_connections.$post(args, options))
}

export async function getEnterpriseConnectionsEnterpriseConnectionId(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise_connections[':enterprise_connection_id'].$get(args, options),
  )
}

export async function deleteEnterpriseConnectionsEnterpriseConnectionId(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise_connections[':enterprise_connection_id'].$delete(args, options),
  )
}

export async function patchEnterpriseConnectionsEnterpriseConnectionId(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise_connections[':enterprise_connection_id'].$patch(args, options),
  )
}

export async function getEnterpriseConnectionsEnterpriseConnectionIdTestRuns(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(args, options),
  )
}

export async function postEnterpriseConnectionsEnterpriseConnectionIdTestRuns(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprise_connections[':enterprise_connection_id'].test_runs.$post(args, options),
  )
}

export async function postTestingTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.testing_tokens.$post(undefined, options))
}

export async function getOrganizationMemberships(
  args: InferRequestType<typeof client.organization_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_memberships.$get(args, options))
}

export async function getWaitlistEntries(
  args: InferRequestType<typeof client.waitlist_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitlist_entries.$get(args, options))
}

export async function postWaitlistEntries(
  args: InferRequestType<typeof client.waitlist_entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitlist_entries.$post(args, options))
}

export async function deleteWaitlistEntriesWaitlistEntryId(
  args: InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitlist_entries[':waitlist_entry_id'].$delete(args, options))
}

export async function postWaitlistEntriesWaitlistEntryIdInvite(
  args: InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.waitlist_entries[':waitlist_entry_id'].invite.$post(args, options),
  )
}

export async function postWaitlistEntriesWaitlistEntryIdReject(
  args: InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.waitlist_entries[':waitlist_entry_id'].reject.$post(args, options),
  )
}

export async function getCommercePlans(
  args: InferRequestType<typeof client.commerce.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commerce.plans.$get(args, options))
}

export async function getCommerceSubscriptionItems(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commerce.subscription_items.$get(args, options))
}

export async function deleteCommerceSubscriptionItemsSubscriptionItemId(
  args: InferRequestType<
    (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce.subscription_items[':subscription_item_id'].$delete(args, options),
  )
}

export async function postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrial(
  args: InferRequestType<
    (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.billing.subscription_items[':subscription_item_id'].extend_free_trial.$post(
      args,
      options,
    ),
  )
}

export async function postBillingSubscriptionItemsSubscriptionItemIdPriceTransition(
  args: InferRequestType<
    (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.billing.subscription_items[':subscription_item_id'].price_transition.$post(
      args,
      options,
    ),
  )
}

export async function postBillingSubscriptionItemsSubscriptionItemIdDiscounts(
  args: InferRequestType<
    (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.billing.subscription_items[':subscription_item_id'].discounts.$post(args, options),
  )
}

export async function deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountId(
  args: InferRequestType<
    (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.billing.subscription_items[':subscription_item_id'].discounts[':discount_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationPermissions(
  args: InferRequestType<typeof client.organization_permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_permissions.$get(args, options))
}

export async function postOrganizationPermissions(
  args: InferRequestType<typeof client.organization_permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_permissions.$post(args, options))
}

export async function getOrganizationPermissionsPermissionId(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_permissions[':permission_id'].$get(args, options))
}

export async function deleteOrganizationPermissionsPermissionId(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_permissions[':permission_id'].$delete(args, options),
  )
}

export async function patchOrganizationPermissionsPermissionId(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_permissions[':permission_id'].$patch(args, options),
  )
}

export async function getRoleSets(
  args: InferRequestType<typeof client.role_sets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets.$get(args, options))
}

export async function postRoleSets(
  args: InferRequestType<typeof client.role_sets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets.$post(args, options))
}

export async function getRoleSetsRoleSetKeyOrId(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets[':role_set_key_or_id'].$get(args, options))
}

export async function patchRoleSetsRoleSetKeyOrId(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets[':role_set_key_or_id'].$patch(args, options))
}

export async function postRoleSetsRoleSetKeyOrIdReplace(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets[':role_set_key_or_id'].replace.$post(args, options))
}

export async function postRoleSetsRoleSetKeyOrIdRoles(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.role_sets[':role_set_key_or_id'].roles.$post(args, options))
}

export async function postRoleSetsRoleSetKeyOrIdRolesReplace(
  args: InferRequestType<
    (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.role_sets[':role_set_key_or_id'].roles.replace.$post(args, options),
  )
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function getLogsSchemas(
  args: InferRequestType<typeof client.logs.schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.schemas.$get(args, options))
}

export async function getLogsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.logs.types.$get(undefined, options))
}

export async function getLogsGroupsGroupIdEvents(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.groups[':group_id'].events.$get(args, options))
}

export async function getLogsEventTimeAndId(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':event_time_and_id'].$get(args, options))
}

export async function postAdminPortalLinkTokens(
  args: InferRequestType<typeof client.admin_portal_link_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin_portal_link_tokens.$post(args, options))
}

export async function postAdminPortalLinkTokensAdminPortalLinkTokenIDRevoke(
  args: InferRequestType<
    (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin_portal_link_tokens[':adminPortalLinkTokenID'].revoke.$post(args, options),
  )
}

export async function getApiKeys(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.$get(args, options))
}

export async function postApiKeys(
  args: InferRequestType<typeof client.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.$post(args, options))
}

export async function getApiKeysApiKeyID(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':apiKeyID'].$get(args, options))
}

export async function deleteApiKeysApiKeyID(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':apiKeyID'].$delete(args, options))
}

export async function patchApiKeysApiKeyID(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':apiKeyID'].$patch(args, options))
}

export async function getApiKeysApiKeyIDSecret(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':apiKeyID'].secret.$get(args, options))
}

export async function postApiKeysApiKeyIDRevoke(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':apiKeyID'].revoke.$post(args, options))
}

export async function postApiKeysVerify(
  args: InferRequestType<typeof client.api_keys.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.verify.$post(args, options))
}

export async function getM2mTokens(
  args: InferRequestType<typeof client.m2m_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.m2m_tokens.$get(args, options))
}

export async function postM2mTokens(
  args: InferRequestType<typeof client.m2m_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.m2m_tokens.$post(args, options))
}

export async function postM2mTokensM2mTokenIdRevoke(
  args: InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.m2m_tokens[':m2m_token_id'].revoke.$post(args, options))
}

export async function postM2mTokensVerify(
  args: InferRequestType<typeof client.m2m_tokens.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.m2m_tokens.verify.$post(args, options))
}

export async function postOauthApplicationsAccessTokensVerify(
  args: InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_applications.access_tokens.verify.$post(args, options))
}
