import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAccountGetBalanceQueryKey(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
) {
  return ['account', '/account/get-balance', args] as const
}

export function getAccountGetBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['get-balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGetBalanceQueryKey>
  >({
    queryKey: getAccountGetBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['get-balance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountGetBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)['get-balance']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGetBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountGetBalanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountRegisterSenderMutationKey() {
  return ['account', '/account/register-sender', 'POST'] as const
}

export function getPostAccountRegisterSenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['register-sender']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['register-sender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRegisterSenderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['register-sender']['$post']>) {
      return parseResponse(client.account['register-sender'].$post(args, options))
    },
  })
}

export function injectPostAccountRegisterSender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['register-sender']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['register-sender']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountRegisterSenderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAccountSettingsMutationKey() {
  return ['account', '/account/settings', 'POST'] as const
}

export function getPostAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.settings.$post>) {
      return parseResponse(client.account.settings.$post(args, options))
    },
  })
}

export function injectPostAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAccountTopUpMutationKey() {
  return ['account', '/account/top-up', 'POST'] as const
}

export function getPostAccountTopUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['top-up']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['top-up']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTopUpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['top-up']['$post']>) {
      return parseResponse(client.account['top-up'].$post(args, options))
    },
  })
}

export function injectPostAccountTopUp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.account)['top-up']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['top-up']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountTopUpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsApiKeySecretsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
) {
  return ['accounts', '/accounts/:api_key/secrets', args] as const
}

export function getAccountsApiKeySecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsApiKeySecretsQueryKey>
  >({
    queryKey: getAccountsApiKeySecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':api_key'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsApiKeySecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsApiKeySecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsApiKeySecretsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccountsApiKeySecretsMutationKey() {
  return ['accounts', '/accounts/:api_key/secrets', 'POST'] as const
}

export function getPostAccountsApiKeySecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsApiKeySecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']>,
    ) {
      return parseResponse(client.accounts[':api_key'].secrets.$post(args, options))
    },
  })
}

export function injectPostAccountsApiKeySecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsApiKeySecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsApiKeySecretsSecretIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
) {
  return ['accounts', '/accounts/:api_key/secrets/:secret_id', args] as const
}

export function getAccountsApiKeySecretsSecretIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsApiKeySecretsSecretIdQueryKey>
  >({
    queryKey: getAccountsApiKeySecretsSecretIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':api_key'].secrets[':secret_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsApiKeySecretsSecretId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsApiKeySecretsSecretIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsApiKeySecretsSecretIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountsApiKeySecretsSecretIdMutationKey() {
  return ['accounts', '/accounts/:api_key/secrets/:secret_id', 'DELETE'] as const
}

export function getDeleteAccountsApiKeySecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsApiKeySecretsSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']
      >,
    ) {
      return parseResponse(client.accounts[':api_key'].secrets[':secret_id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountsApiKeySecretsSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsApiKeySecretsSecretIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
