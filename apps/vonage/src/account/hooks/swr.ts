import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getGetAccountGetBalanceKey(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
) {
  return ['account', '/account/get-balance', args] as const
}

export function useGetAccountGetBalance<TError = unknown>(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGetBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['get-balance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGetBalance<TError = unknown>(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountGetBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['get-balance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountRegisterSenderKey() {
  return ['account', '/account/register-sender', 'POST'] as const
}

export function usePostAccountRegisterSender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['register-sender']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['register-sender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRegisterSenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['register-sender']['$post']> },
      ) => parseResponse(client.account['register-sender'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSettingsKey() {
  return ['account', '/account/settings', 'POST'] as const
}

export function usePostAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.settings.$post> }) =>
        parseResponse(client.account.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountTopUpKey() {
  return ['account', '/account/top-up', 'POST'] as const
}

export function usePostAccountTopUp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['top-up']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['top-up']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTopUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['top-up']['$post']> },
      ) => parseResponse(client.account['top-up'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsApiKeySecretsKey(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
) {
  return ['accounts', '/accounts/:api_key/secrets', args] as const
}

export function useGetAccountsApiKeySecrets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsApiKeySecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':api_key'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsApiKeySecrets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsApiKeySecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':api_key'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsApiKeySecretsKey() {
  return ['accounts', '/accounts/:api_key/secrets', 'POST'] as const
}

export function usePostAccountsApiKeySecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsApiKeySecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']> },
      ) => parseResponse(client.accounts[':api_key'].secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsApiKeySecretsSecretIdKey(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
) {
  return ['accounts', '/accounts/:api_key/secrets/:secret_id', args] as const
}

export function useGetAccountsApiKeySecretsSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsApiKeySecretsSecretIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':api_key'].secrets[':secret_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsApiKeySecretsSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsApiKeySecretsSecretIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':api_key'].secrets[':secret_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsApiKeySecretsSecretIdKey() {
  return ['accounts', '/accounts/:api_key/secrets/:secret_id', 'DELETE'] as const
}

export function useDeleteAccountsApiKeySecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsApiKeySecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':api_key'].secrets[':secret_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
