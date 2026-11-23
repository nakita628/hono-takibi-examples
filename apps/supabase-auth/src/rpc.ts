import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function postLogout(
  args: InferRequestType<typeof client.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logout.$post(args, options))
}

export async function getVerify(
  args: InferRequestType<typeof client.verify.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify.$get(args, options))
}

export async function postVerify(
  args: InferRequestType<typeof client.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify.$post(args, options))
}

export async function getAuthorize(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorize.$get(args, options))
}

export async function postSignup(
  args: InferRequestType<typeof client.signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signup.$post(args, options))
}

export async function postRecover(
  args: InferRequestType<typeof client.recover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recover.$post(args, options))
}

export async function postResend(
  args: InferRequestType<typeof client.resend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resend.$post(args, options))
}

export async function postMagiclink(
  args: InferRequestType<typeof client.magiclink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magiclink.$post(args, options))
}

export async function postOtp(
  args: InferRequestType<typeof client.otp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otp.$post(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getUserIdentitiesAuthorize(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.identities.authorize.$get(args, options))
}

export async function deleteUserIdentitiesIdentityId(
  args: InferRequestType<(typeof client.user.identities)[':identityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.identities[':identityId'].$delete(args, options))
}

export async function getUserOauthGrants(options?: ClientRequestOptions) {
  return await parseResponse(client.user.oauth.grants.$get(undefined, options))
}

export async function deleteUserOauthGrants(
  args: InferRequestType<typeof client.user.oauth.grants.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.oauth.grants.$delete(args, options))
}

export async function postReauthenticate(options?: ClientRequestOptions) {
  return await parseResponse(client.reauthenticate.$post(undefined, options))
}

export async function postFactors(
  args: InferRequestType<typeof client.factors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors.$post(args, options))
}

export async function postFactorsFactorIdChallenge(
  args: InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors[':factorId'].challenge.$post(args, options))
}

export async function postFactorsFactorIdVerify(
  args: InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors[':factorId'].verify.$post(args, options))
}

export async function deleteFactorsFactorId(
  args: InferRequestType<(typeof client.factors)[':factorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors[':factorId'].$delete(args, options))
}

export async function getFactorsRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.factors['recovery-codes'].$get(undefined, options))
}

export async function postFactorsRecoveryCodes(
  args: InferRequestType<(typeof client.factors)['recovery-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors['recovery-codes'].$post(args, options))
}

export async function deleteFactorsRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.factors['recovery-codes'].$delete(undefined, options))
}

export async function postFactorsRecoveryCodesVerify(
  args: InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors['recovery-codes'].verify.$post(args, options))
}

export async function postFactorsRecoveryCodesRegenerate(options?: ClientRequestOptions) {
  return await parseResponse(client.factors['recovery-codes'].regenerate.$post(undefined, options))
}

export async function getCallback(options?: ClientRequestOptions) {
  return await parseResponse(client.callback.$get(undefined, options))
}

export async function postCallback(options?: ClientRequestOptions) {
  return await parseResponse(client.callback.$post(undefined, options))
}

export async function postSso(
  args: InferRequestType<typeof client.sso.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.$post(args, options))
}

export async function getSamlMetadata(
  args: InferRequestType<typeof client.saml.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml.metadata.$get(args, options))
}

export async function postSamlAcs(
  args: InferRequestType<typeof client.saml.acs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml.acs.$post(args, options))
}

export async function postInvite(
  args: InferRequestType<typeof client.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invite.$post(args, options))
}

export async function postAdminGenerateLink(
  args: InferRequestType<typeof client.admin.generate_link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.generate_link.$post(args, options))
}

export async function getAdminAudit(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.audit.$get(args, options))
}

export async function getAdminUsers(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$get(args, options))
}

export async function getAdminUsersUserId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].$get(args, options))
}

export async function putAdminUsersUserId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].$put(args, options))
}

export async function deleteAdminUsersUserId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].$delete(args, options))
}

export async function getAdminUsersUserIdFactors(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].factors.$get(args, options))
}

export async function putAdminUsersUserIdFactorsFactorId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].factors[':factorId'].$put(args, options))
}

export async function deleteAdminUsersUserIdFactorsFactorId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.users[':userId'].factors[':factorId'].$delete(args, options),
  )
}

export async function getAdminSsoProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.sso.providers.$get(undefined, options))
}

export async function postAdminSsoProviders(
  args: InferRequestType<typeof client.admin.sso.providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sso.providers.$post(args, options))
}

export async function getAdminSsoProvidersSsoProviderId(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sso.providers[':ssoProviderId'].$get(args, options))
}

export async function putAdminSsoProvidersSsoProviderId(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sso.providers[':ssoProviderId'].$put(args, options))
}

export async function deleteAdminSsoProvidersSsoProviderId(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sso.providers[':ssoProviderId'].$delete(args, options))
}

export async function getAdminOauthClients(
  args: InferRequestType<typeof client.admin.oauth.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth.clients.$get(args, options))
}

export async function postAdminOauthClients(
  args: InferRequestType<typeof client.admin.oauth.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth.clients.$post(args, options))
}

export async function getAdminOauthClientsClientId(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth.clients[':client_id'].$get(args, options))
}

export async function putAdminOauthClientsClientId(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth.clients[':client_id'].$put(args, options))
}

export async function deleteAdminOauthClientsClientId(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.oauth.clients[':client_id'].$delete(args, options))
}

export async function postAdminOauthClientsClientIdRegenerateSecret(
  args: InferRequestType<
    (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.oauth.clients[':client_id'].regenerate_secret.$post(args, options),
  )
}

export async function getAdminCustomProviders(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['custom-providers'].$get(args, options))
}

export async function postAdminCustomProviders(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['custom-providers'].$post(args, options))
}

export async function getAdminCustomProvidersIdentifier(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['custom-providers'][':identifier'].$get(args, options))
}

export async function putAdminCustomProvidersIdentifier(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['custom-providers'][':identifier'].$put(args, options))
}

export async function deleteAdminCustomProvidersIdentifier(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['custom-providers'][':identifier'].$delete(args, options))
}

export async function postOauthClientsRegister(
  args: InferRequestType<typeof client.oauth.clients.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients.register.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function getOauthAuthorizationsAuthorizationId(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorizations[':authorization_id'].$get(args, options))
}

export async function postOauthAuthorizationsAuthorizationIdConsent(
  args: InferRequestType<
    (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth.authorizations[':authorization_id'].consent.$post(args, options),
  )
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.$get(undefined, options))
}
