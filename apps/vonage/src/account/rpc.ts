import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountGetBalance(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['get-balance'].$get(args, options))
}

export async function postAccountRegisterSender(
  args: InferRequestType<(typeof client.account)['register-sender']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['register-sender'].$post(args, options))
}

export async function postAccountSettings(
  args: InferRequestType<typeof client.account.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.settings.$post(args, options))
}

export async function postAccountTopUp(
  args: InferRequestType<(typeof client.account)['top-up']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['top-up'].$post(args, options))
}

export async function getAccountsApiKeySecrets(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':api_key'].secrets.$get(args, options))
}

export async function postAccountsApiKeySecrets(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':api_key'].secrets.$post(args, options))
}

export async function getAccountsApiKeySecretsSecretId(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':api_key'].secrets[':secret_id'].$get(args, options))
}

export async function deleteAccountsApiKeySecretsSecretId(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':api_key'].secrets[':secret_id'].$delete(args, options),
  )
}
