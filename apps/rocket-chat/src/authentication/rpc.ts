import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1Login(
  args: InferRequestType<typeof client.api.v1.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.$post(args, options))
}

export async function postApiV1Logout(
  args: InferRequestType<typeof client.api.v1.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.logout.$post(args, options))
}

export async function postApiV1LoginCodeRedeem(
  args: InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['loginCode.redeem'].$post(args, options))
}

export async function getApiV1Me(
  args: InferRequestType<typeof client.api.v1.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.me.$get(args, options))
}

export async function postApiV1Users2faEnableEmail(
  args: InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.2fa.enableEmail'].$post(args, options))
}

export async function postApiV1Users2faSendEmailCode(
  args: InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.2fa.sendEmailCode'].$post(args, options))
}

export async function postApiV1Users2faDisableEmail(
  args: InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.2fa.disableEmail'].$post(args, options))
}

export async function postApiV1UsersEnableTotp(
  args: InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.enableTotp'].$post(args, options))
}

export async function postApiV1UsersValidateTotp(
  args: InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.validateTotp'].$post(args, options))
}

export async function postApiV1UsersDisableTotp(
  args: InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.disableTotp'].$post(args, options))
}

export async function postApiV1UsersRegenerateTotpCodes(
  args: InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.regenerateTotpCodes'].$post(args, options))
}

export async function getApiV1UsersTotpCodesRemaining(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['users.totpCodesRemaining'].$get(args, options))
}

export async function postApiV1TwoFactorChallengesSendEmailCode(
  args: InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['twoFactorChallenges.sendEmailCode'].$post(args, options),
  )
}

export async function postApiV1TwoFactorChallengesVerifyChallenge(
  args: InferRequestType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['twoFactorChallenges.verifyChallenge'].$post(args, options),
  )
}
