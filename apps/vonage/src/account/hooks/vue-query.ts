import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['get-balance']['$get']>>,
) {
  return ['account', '/account/get-balance', toValue(args)] as const
}

export function getAccountGetBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['get-balance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGetBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['get-balance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountGetBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['get-balance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountGetBalanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['get-balance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGetBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGetBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['get-balance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountRegisterSender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountRegisterSenderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.settings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountTopUp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.account)['top-up']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['top-up']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountTopUpMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsApiKeySecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>>,
) {
  return ['accounts', '/accounts/:api_key/secrets', toValue(args)] as const
}

export function getAccountsApiKeySecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsApiKeySecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':api_key'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsApiKeySecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':api_key']['secrets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsApiKeySecretsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsApiKeySecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':api_key'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsApiKeySecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsApiKeySecretsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsApiKeySecretsSecretIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
  >,
) {
  return ['accounts', '/accounts/:api_key/secrets/:secret_id', toValue(args)] as const
}

export function getAccountsApiKeySecretsSecretIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsApiKeySecretsSecretIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':api_key'].secrets[':secret_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsApiKeySecretsSecretId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':api_key']['secrets'][':secret_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsApiKeySecretsSecretIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsApiKeySecretsSecretIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':api_key'].secrets[':secret_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountsApiKeySecretsSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.accounts)[':api_key']['secrets'][':secret_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsApiKeySecretsSecretIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
