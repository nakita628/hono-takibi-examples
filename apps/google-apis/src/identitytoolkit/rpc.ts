import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2AccountsMfaEnrollmentFinalize(
  args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['mfaEnrollment:finalize'].$post(args, options))
}

export async function postV2AccountsMfaEnrollmentStart(
  args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['mfaEnrollment:start'].$post(args, options))
}

export async function postV2AccountsMfaEnrollmentWithdraw(
  args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['mfaEnrollment:withdraw'].$post(args, options))
}

export async function postV2AccountsMfaSignInFinalize(
  args: InferRequestType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['mfaSignIn:finalize'].$post(args, options))
}

export async function postV2AccountsMfaSignInStart(
  args: InferRequestType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['mfaSignIn:start'].$post(args, options))
}

export async function postV2AccountsPasskeyEnrollmentFinalize(
  args: InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['passkeyEnrollment:finalize'].$post(args, options))
}

export async function postV2AccountsPasskeyEnrollmentStart(
  args: InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['passkeyEnrollment:start'].$post(args, options))
}

export async function postV2AccountsPasskeySignInFinalize(
  args: InferRequestType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['passkeySignIn:finalize'].$post(args, options))
}

export async function postV2AccountsPasskeySignInStart(
  args: InferRequestType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts['passkeySignIn:start'].$post(args, options))
}

export async function postV2AccountsRevokeToken(
  args: InferRequestType<(typeof client.v2)['accounts:revokeToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['accounts:revokeToken'].$post(args, options))
}

export async function getV2DefaultSupportedIdps(
  args: InferRequestType<typeof client.v2.defaultSupportedIdps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.defaultSupportedIdps.$get(args, options))
}

export async function getV2RecaptchaConfig(
  args: InferRequestType<typeof client.v2.recaptchaConfig.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.recaptchaConfig.$get(args, options))
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2ParentDefaultSupportedIdpConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].defaultSupportedIdpConfigs.$get(args, options))
}

export async function postV2ParentDefaultSupportedIdpConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].defaultSupportedIdpConfigs.$post(args, options))
}

export async function getV2ParentInboundSamlConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].inboundSamlConfigs.$get(args, options))
}

export async function postV2ParentInboundSamlConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].inboundSamlConfigs.$post(args, options))
}

export async function getV2ParentOauthIdpConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].oauthIdpConfigs.$get(args, options))
}

export async function postV2ParentOauthIdpConfigs(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].oauthIdpConfigs.$post(args, options))
}

export async function getV2ParentTenants(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].tenants.$get(args, options))
}

export async function postV2ParentTenants(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].tenants.$post(args, options))
}

export async function postV2ProjectIdentityPlatformInitializeAuth(
  args: InferRequestType<
    (typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':project']['identityPlatform:initializeAuth'].$post(args, options),
  )
}

export async function postV2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:getIamPolicy'].$post(args, options))
}

export async function postV2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
}
