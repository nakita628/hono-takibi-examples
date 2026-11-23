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

export function getAccountTypesKey() {
  return ['account_types'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getBanksKey() {
  return ['banks'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCategorizeKey() {
  return ['categorize'] as const
}

export function getCertificateKey() {
  return ['certificate'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getConnectorsKey() {
  return ['connectors'] as const
}

export function getIncidentsKey() {
  return ['incidents'] as const
}

export function getInvoicingKey() {
  return ['invoicing'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMonitoringKey() {
  return ['monitoring'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getPsd2RegistrationsKey() {
  return ['psd2-registrations'] as const
}

export function getPublickeyKey() {
  return ['publickey'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebauthKey() {
  return ['webauth'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_types.$get>>,
) {
  return ['account_types', '/account_types', toValue(args)] as const
}

export function getAccountTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
          >,
          ReturnType<typeof getAccountTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountTypesIdAccountTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>
  >,
) {
  return ['account_types', '/account_types/:id_account_type', toValue(args)] as const
}

export function getAccountTypesIdAccountTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTypesIdAccountTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_types[':id_account_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTypesIdAccountType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountTypesIdAccountTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTypesIdAccountTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTypesIdAccountTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_types[':id_account_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminJwtMutationKey() {
  return ['admin', '/admin/jwt', 'POST'] as const
}

export function getPostAdminJwtMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.jwt.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.jwt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminJwtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.jwt.$post>) {
      return parseResponse(client.admin.jwt.$post(args, options))
    },
  })
}

export function usePostAdminJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.jwt.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.jwt.$post>,
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
  const mutationDefaults = getPostAdminJwtMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthInitMutationKey() {
  return ['auth', '/auth/init', 'POST'] as const
}

export function getPostAuthInitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.init.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.init.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthInitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.init.$post>) {
      return parseResponse(client.auth.init.$post(args, options))
    },
  })
}

export function usePostAuthInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.init.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.init.$post>,
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
  const mutationDefaults = getPostAuthInitMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthJwtMutationKey() {
  return ['auth', '/auth/jwt', 'POST'] as const
}

export function getPostAuthJwtMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.jwt.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.jwt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthJwtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.jwt.$post>) {
      return parseResponse(client.auth.jwt.$post(args, options))
    },
  })
}

export function usePostAuthJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.jwt.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.jwt.$post>,
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
  const mutationDefaults = getPostAuthJwtMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthRenewMutationKey() {
  return ['auth', '/auth/renew', 'POST'] as const
}

export function getPostAuthRenewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.renew.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.renew.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRenewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.renew.$post>) {
      return parseResponse(client.auth.renew.$post(args, options))
    },
  })
}

export function usePostAuthRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.renew.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.renew.$post>,
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
  const mutationDefaults = getPostAuthRenewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function usePostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.token.$post>,
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
  const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function getDeleteAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthTokenAccessMutationKey() {
  return ['auth', '/auth/token/access', 'POST'] as const
}

export function getPostAuthTokenAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.access.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.token.access.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.access.$post>) {
      return parseResponse(client.auth.token.access.$post(args, options))
    },
  })
}

export function usePostAuthTokenAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.access.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.token.access.$post>,
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
  const mutationDefaults = getPostAuthTokenAccessMutationOptions<TError, TOnMutateResult>(
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

export function getAuthTokenCodeQueryKey() {
  return ['auth', '/auth/token/code'] as const
}

export function getAuthTokenCodeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthTokenCodeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.token.code.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthTokenCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>
            >
          >,
          ReturnType<typeof getAuthTokenCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokenCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthTokenCodeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.token.code.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.banks.$get>>,
) {
  return ['banks', '/banks', toValue(args)] as const
}

export function getBanksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.banks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBanks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.banks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
          ReturnType<typeof getBanksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBanksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBanksCategoriesMutationKey() {
  return ['banks', '/banks/categories', 'POST'] as const
}

export function getPostBanksCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.categories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.banks.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBanksCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.banks.categories.$post>) {
      return parseResponse(client.banks.categories.$post(args, options))
    },
  })
}

export function usePostBanksCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.banks.categories.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.banks.categories.$post>,
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
  const mutationDefaults = getPostBanksCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostBanksCategoriesIdCategoryMutationKey() {
  return ['banks', '/banks/categories/:id_category', 'POST'] as const
}

export function getPostBanksCategoriesIdCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBanksCategoriesIdCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
    ) {
      return parseResponse(client.banks.categories[':id_category'].$post(args, options))
    },
  })
}

export function usePostBanksCategoriesIdCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
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
  const mutationDefaults = getPostBanksCategoriesIdCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBanksCategoriesIdCategoryMutationKey() {
  return ['banks', '/banks/categories/:id_category', 'DELETE'] as const
}

export function getDeleteBanksCategoriesIdCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBanksCategoriesIdCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
    ) {
      return parseResponse(client.banks.categories[':id_category'].$delete(args, options))
    },
  })
}

export function useDeleteBanksCategoriesIdCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
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
  const mutationDefaults = getDeleteBanksCategoriesIdCategoryMutationOptions<
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

export function getBanksIdBankQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_bank']['$get']>>,
) {
  return ['banks', '/banks/:id_bank', toValue(args)] as const
}

export function getBanksIdBankQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_bank']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdBankQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_bank'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdBank<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_bank']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>
            >
          >,
          ReturnType<typeof getBanksIdBankQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdBankQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdBankQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_bank'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>
  >,
) {
  return ['banks', '/banks/:id_connector/connections', toValue(args)] as const
}

export function getBanksIdConnectorConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorLogosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>>,
) {
  return ['banks', '/banks/:id_connector/logos', toValue(args)] as const
}

export function getBanksIdConnectorLogosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorLogosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].logos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorLogosQueryKey>
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
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorLogosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].logos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorLogosMainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>
  >,
) {
  return ['banks', '/banks/:id_connector/logos/main', toValue(args)] as const
}

export function getBanksIdConnectorLogosMainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorLogosMainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].logos.main.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorLogosMainQueryKey>
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
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorLogosMainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].logos.main.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorLogosThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
  >,
) {
  return ['banks', '/banks/:id_connector/logos/thumbnail', toValue(args)] as const
}

export function getBanksIdConnectorLogosThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorLogosThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].logos.thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
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
                  ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorLogosThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorLogosThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].logos.thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>
  >,
) {
  return ['banks', '/banks/:id_connector/sources', toValue(args)] as const
}

export function getBanksIdConnectorSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
) {
  return [
    'banks',
    '/banks/:id_connector/sources/:id_connector_source/fields',
    toValue(args),
  ] as const
}

export function getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].sources[':id_connector_source'].fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
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
                  ReturnType<
                    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].sources[':id_connector_source'].fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBanksIdConnectorSourcesIdSourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
  >,
) {
  return ['banks', '/banks/:id_connector/sources/:id_source', toValue(args)] as const
}

export function getBanksIdConnectorSourcesIdSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBanksIdConnectorSourcesIdSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banks[':id_connector'].sources[':id_source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBanksIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.banks)[':id_connector']['sources'][':id_source']['$get']
                  >
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
                  ReturnType<
                    (typeof client.banks)[':id_connector']['sources'][':id_source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBanksIdConnectorSourcesIdSourceQueryKey>
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
          Awaited<
            ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesIdSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBanksIdConnectorSourcesIdSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banks[':id_connector'].sources[':id_source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  return ['categories', '/categories', toValue(args)] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCategoriesKeywordsMutationKey() {
  return ['categories', '/categories/keywords', 'POST'] as const
}

export function getPostCategoriesKeywordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.keywords.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.categories.keywords.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesKeywordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.keywords.$post>) {
      return parseResponse(client.categories.keywords.$post(args, options))
    },
  })
}

export function usePostCategoriesKeywords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.keywords.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.categories.keywords.$post>,
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
  const mutationDefaults = getPostCategoriesKeywordsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCategoriesKeywordsIdKeywordMutationKey() {
  return ['categories', '/categories/keywords/:id_keyword', 'DELETE'] as const
}

export function getDeleteCategoriesKeywordsIdKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories.keywords)[':id_keyword']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoriesKeywordsIdKeywordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
    ) {
      return parseResponse(client.categories.keywords[':id_keyword'].$delete(args, options))
    },
  })
}

export function useDeleteCategoriesKeywordsIdKeyword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories.keywords)[':id_keyword']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
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
  const mutationDefaults = getDeleteCategoriesKeywordsIdKeywordMutationOptions<
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

export function getPostCategorizeMutationKey() {
  return ['categorize', '/categorize', 'POST'] as const
}

export function getPostCategorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categorize.$post>>>>>,
    TError,
    InferRequestType<typeof client.categorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categorize.$post>) {
      return parseResponse(client.categorize.$post(args, options))
    },
  })
}

export function usePostCategorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categorize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.categorize.$post>,
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
  const mutationDefaults = getPostCategorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCertificateTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificate)[':type']['$get']>>,
) {
  return ['certificate', '/certificate/:type', toValue(args)] as const
}

export function getCertificateTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificate)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificateTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificate[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificate)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificateTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificateTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificateTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificate[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
) {
  return ['clients', '/clients', toValue(args)] as const
}

export function getClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          ReturnType<typeof getClientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientsMutationKey() {
  return ['clients', '/clients', 'POST'] as const
}

export function getPostClientsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>>,
    TError,
    InferRequestType<typeof client.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clients.$post>) {
      return parseResponse(client.clients.$post(args, options))
    },
  })
}

export function usePostClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clients.$post>,
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
  const mutationDefaults = getPostClientsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClientsIdClientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id_client']['$get']>>,
) {
  return ['clients', '/clients/:id_client', toValue(args)] as const
}

export function getClientsIdClientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id_client']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsIdClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':id_client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsIdClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id_client']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientsIdClientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsIdClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':id_client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutClientsIdClientMutationKey() {
  return ['clients', '/clients/:id_client', 'PUT'] as const
}

export function getPutClientsIdClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id_client']['$put']>) {
      return parseResponse(client.clients[':id_client'].$put(args, options))
    },
  })
}

export function usePutClientsIdClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':id_client']['$put']>,
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
  const mutationDefaults = getPutClientsIdClientMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClientsIdClientMutationKey() {
  return ['clients', '/clients/:id_client', 'DELETE'] as const
}

export function getDeleteClientsIdClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsIdClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id_client']['$delete']>) {
      return parseResponse(client.clients[':id_client'].$delete(args, options))
    },
  })
}

export function useDeleteClientsIdClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':id_client']['$delete']>,
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
  const mutationDefaults = getDeleteClientsIdClientMutationOptions<TError, TOnMutateResult>(
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

export function getPostClientsIdClientLogoMutationKey() {
  return ['clients', '/clients/:id_client/logo', 'POST'] as const
}

export function getPostClientsIdClientLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsIdClientLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
    ) {
      return parseResponse(client.clients[':id_client'].logo.$post(args, options))
    },
  })
}

export function usePostClientsIdClientLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
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
  const mutationDefaults = getPostClientsIdClientLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClientsIdClientLogoMutationKey() {
  return ['clients', '/clients/:id_client/logo', 'DELETE'] as const
}

export function getDeleteClientsIdClientLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsIdClientLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
    ) {
      return parseResponse(client.clients[':id_client'].logo.$delete(args, options))
    },
  })
}

export function useDeleteClientsIdClientLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
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
  const mutationDefaults = getDeleteClientsIdClientLogoMutationOptions<TError, TOnMutateResult>(
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

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  return ['config', '/config', toValue(args)] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.config.$post(undefined, options))
    },
  })
}

export function usePostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.logs.$get>>,
) {
  return ['config', '/config/logs', toValue(args)] as const
}

export function getConfigLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfigLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
          >,
          ReturnType<typeof getConfigLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  return ['connections', '/connections', toValue(args)] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsIdConnectionLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>
  >,
) {
  return ['connections', '/connections/:id_connection/logs', toValue(args)] as const
}

export function getConnectionsIdConnectionLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsIdConnectionLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':id_connection'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsIdConnectionLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsIdConnectionLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdConnectionLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsIdConnectionLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':id_connection'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsIdConnectionSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>
  >,
) {
  return ['connections', '/connections/:id_connection/sources', toValue(args)] as const
}

export function getConnectionsIdConnectionSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsIdConnectionSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':id_connection'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsIdConnectionSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>
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
                  ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConnectionsIdConnectionSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdConnectionSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsIdConnectionSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':id_connection'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'PUT'] as const
}

export function getPutConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$put(args, options),
      )
    },
  })
}

export function usePutConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
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
  const mutationDefaults = getPutConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getPostConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'POST'] as const
}

export function getPostConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$post(args, options),
      )
    },
  })
}

export function usePostConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
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
  const mutationDefaults = getPostConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getDeleteConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'DELETE'] as const
}

export function getDeleteConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
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
  const mutationDefaults = getDeleteConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connectors.$get>>,
) {
  return ['connectors', '/connectors', toValue(args)] as const
}

export function getConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
          >,
          ReturnType<typeof getConnectorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsMutationKey() {
  return ['connectors', '/connectors', 'PUT'] as const
}

export function getPutConnectorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$put>>>>>,
    TError,
    InferRequestType<typeof client.connectors.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connectors.$put>) {
      return parseResponse(client.connectors.$put(args, options))
    },
  })
}

export function usePutConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.connectors.$put>,
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
  const mutationDefaults = getPutConnectorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConnectorsMutationKey() {
  return ['connectors', '/connectors', 'POST'] as const
}

export function getPostConnectorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$post>>>>>,
    TError,
    InferRequestType<typeof client.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connectors.$post>) {
      return parseResponse(client.connectors.$post(args, options))
    },
  })
}

export function usePostConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connectors.$post>,
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
  const mutationDefaults = getPostConnectorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectorsIdConnectorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connectors)[':id_connector']['$get']>>,
) {
  return ['connectors', '/connectors/:id_connector', toValue(args)] as const
}

export function getConnectorsIdConnectorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connectors)[':id_connector']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connectors)[':id_connector']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorQueryKey>
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
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsIdConnectorMutationKey() {
  return ['connectors', '/connectors/:id_connector', 'PUT'] as const
}

export function getPutConnectorsIdConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connectors)[':id_connector']['$put']>) {
      return parseResponse(client.connectors[':id_connector'].$put(args, options))
    },
  })
}

export function usePutConnectorsIdConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connectors)[':id_connector']['$put']>,
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
  const mutationDefaults = getPutConnectorsIdConnectorMutationOptions<TError, TOnMutateResult>(
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

export function getConnectorsIdConnectorLogosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>
  >,
) {
  return ['connectors', '/connectors/:id_connector/logos', toValue(args)] as const
}

export function getConnectorsIdConnectorLogosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorLogosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].logos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorLogosQueryKey>
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
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorLogosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].logos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsIdConnectorLogosMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos', 'PUT'] as const
}

export function getPutConnectorsIdConnectorLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos.$put(args, options))
    },
  })
}

export function usePutConnectorsIdConnectorLogos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
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
  const mutationDefaults = getPutConnectorsIdConnectorLogosMutationOptions<TError, TOnMutateResult>(
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

export function getPostConnectorsIdConnectorLogosMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos', 'POST'] as const
}

export function getPostConnectorsIdConnectorLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectorsIdConnectorLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos.$post(args, options))
    },
  })
}

export function usePostConnectorsIdConnectorLogos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
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
  const mutationDefaults = getPostConnectorsIdConnectorLogosMutationOptions<
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

export function getConnectorsIdConnectorLogosMainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
  >,
) {
  return ['connectors', '/connectors/:id_connector/logos/main', toValue(args)] as const
}

export function getConnectorsIdConnectorLogosMainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorLogosMainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].logos.main.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
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
                  ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorLogosMainQueryKey>
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
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorLogosMainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].logos.main.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorsIdConnectorLogosThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
  >,
) {
  return ['connectors', '/connectors/:id_connector/logos/thumbnail', toValue(args)] as const
}

export function getConnectorsIdConnectorLogosThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorLogosThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].logos.thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']
                  >
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
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorLogosThumbnailQueryKey>
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
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorLogosThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].logos.thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsIdConnectorLogosIdLogoMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos/:id_logo', 'PUT'] as const
}

export function getPutConnectorsIdConnectorLogosIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorLogosIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']
      >,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos[':id_logo'].$put(args, options))
    },
  })
}

export function usePutConnectorsIdConnectorLogosIdLogo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']
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
  const mutationDefaults = getPutConnectorsIdConnectorLogosIdLogoMutationOptions<
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

export function getDeleteConnectorsIdConnectorLogosIdLogoMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos/:id_logo', 'DELETE'] as const
}

export function getDeleteConnectorsIdConnectorLogosIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectorsIdConnectorLogosIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
      >,
    ) {
      return parseResponse(
        client.connectors[':id_connector'].logos[':id_logo'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConnectorsIdConnectorLogosIdLogo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
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
  const mutationDefaults = getDeleteConnectorsIdConnectorLogosIdLogoMutationOptions<
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

export function getConnectorsIdConnectorSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>
  >,
) {
  return ['connectors', '/connectors/:id_connector/sources', toValue(args)] as const
}

export function getConnectorsIdConnectorSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsIdConnectorSourcesMutationKey() {
  return ['connectors', '/connectors/:id_connector/sources', 'PUT'] as const
}

export function getPutConnectorsIdConnectorSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].sources.$put(args, options))
    },
  })
}

export function usePutConnectorsIdConnectorSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
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
  const mutationDefaults = getPutConnectorsIdConnectorSourcesMutationOptions<
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

export function getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
) {
  return [
    'connectors',
    '/connectors/:id_connector/sources/:id_connector_source/fields',
    toValue(args),
  ] as const
}

export function getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_connector_source'].fields.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConnectorsIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
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
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].sources[':id_connector_source'].fields.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getConnectorsIdConnectorSourcesIdSourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
  >,
) {
  return ['connectors', '/connectors/:id_connector/sources/:id_source', toValue(args)] as const
}

export function getConnectorsIdConnectorSourcesIdSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectorsIdConnectorSourcesIdSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectorsIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
                  >
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
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectorsIdConnectorSourcesIdSourceQueryKey>
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
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesIdSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectorsIdConnectorSourcesIdSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connectors[':id_connector'].sources[':id_source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectorsIdConnectorSourcesIdSourceMutationKey() {
  return ['connectors', '/connectors/:id_connector/sources/:id_source', 'PUT'] as const
}

export function getPutConnectorsIdConnectorSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_source'].$put(args, options),
      )
    },
  })
}

export function usePutConnectorsIdConnectorSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
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
  const mutationDefaults = getPutConnectorsIdConnectorSourcesIdSourceMutationOptions<
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

export function getIncidentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
) {
  return ['incidents', '/incidents', toValue(args)] as const
}

export function getIncidentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIncidentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.incidents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          ReturnType<typeof getIncidentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIncidentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.incidents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvoicingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoicing.$get>>,
) {
  return ['invoicing', '/invoicing', toValue(args)] as const
}

export function getInvoicingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoicing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoicing.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvoicing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoicing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
          >,
          ReturnType<typeof getInvoicingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoicing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMonitoringQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitoring.$get>>,
) {
  return ['monitoring', '/monitoring', toValue(args)] as const
}

export function getMonitoringQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitoring.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitoringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitoring.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMonitoring<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitoring.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
          >,
          ReturnType<typeof getMonitoringQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitoringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitoringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitoring.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
) {
  return ['providers', '/providers', toValue(args)] as const
}

export function getProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          ReturnType<typeof getProvidersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/connections', toValue(args)] as const
}

export function getProvidersIdConnectorConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>
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
                  ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorLogosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/logos', toValue(args)] as const
}

export function getProvidersIdConnectorLogosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorLogosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].logos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorLogosQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorLogosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].logos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorLogosMainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/logos/main', toValue(args)] as const
}

export function getProvidersIdConnectorLogosMainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorLogosMainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].logos.main.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
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
                  ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorLogosMainQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorLogosMainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].logos.main.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorLogosThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/logos/thumbnail', toValue(args)] as const
}

export function getProvidersIdConnectorLogosThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorLogosThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].logos.thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']
                  >
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
                  ReturnType<
                    (typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorLogosThumbnailQueryKey>
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
          Awaited<
            ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorLogosThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].logos.thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/sources', toValue(args)] as const
}

export function getProvidersIdConnectorSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
) {
  return [
    'providers',
    '/providers/:id_connector/sources/:id_connector_source/fields',
    toValue(args),
  ] as const
}

export function getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].sources[':id_connector_source'].fields.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProvidersIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
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
                  ReturnType<
                    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].sources[':id_connector_source'].fields.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdConnectorSourcesIdSourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
  >,
) {
  return ['providers', '/providers/:id_connector/sources/:id_source', toValue(args)] as const
}

export function getProvidersIdConnectorSourcesIdSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdConnectorSourcesIdSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_connector'].sources[':id_source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
                  >
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
                  ReturnType<
                    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProvidersIdConnectorSourcesIdSourceQueryKey>
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
          Awaited<
            ReturnType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesIdSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdConnectorSourcesIdSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_connector'].sources[':id_source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersIdProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':id_provider']['$get']>>,
) {
  return ['providers', '/providers/:id_provider', toValue(args)] as const
}

export function getProvidersIdProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':id_provider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersIdProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':id_provider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersIdProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':id_provider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersIdProviderQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersIdProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':id_provider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPsd2RegistrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['psd2-registrations']['$get']>>,
) {
  return ['psd2-registrations', '/psd2-registrations', toValue(args)] as const
}

export function getPsd2RegistrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['psd2-registrations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPsd2RegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['psd2-registrations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePsd2Registrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['psd2-registrations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPsd2RegistrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPsd2RegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['psd2-registrations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPsd2RegistrationsIdPsd2RegistrationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
  >,
) {
  return ['psd2-registrations', '/psd2-registrations/:id_psd2-registration', toValue(args)] as const
}

export function getPsd2RegistrationsIdPsd2RegistrationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPsd2RegistrationsIdPsd2RegistrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['psd2-registrations'][':id_psd2-registration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePsd2RegistrationsIdPsd2Registration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
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
                  ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPsd2RegistrationsIdPsd2RegistrationQueryKey>
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
          Awaited<
            ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsIdPsd2RegistrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPsd2RegistrationsIdPsd2RegistrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['psd2-registrations'][':id_psd2-registration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPsd2RegistrationsIdPsd2registrationLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
  >,
) {
  return [
    'psd2-registrations',
    '/psd2-registrations/:id_psd2registration/logs',
    toValue(args),
  ] as const
}

export function getPsd2RegistrationsIdPsd2registrationLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPsd2RegistrationsIdPsd2registrationLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['psd2-registrations'][':id_psd2registration'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePsd2RegistrationsIdPsd2registrationLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
                  >
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
                  ReturnType<
                    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPsd2RegistrationsIdPsd2registrationLogsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsIdPsd2registrationLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPsd2RegistrationsIdPsd2registrationLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['psd2-registrations'][':id_psd2registration'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublickeyQueryKey() {
  return ['publickey', '/publickey'] as const
}

export function getPublickeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPublickeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publickey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublickey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
          >,
          ReturnType<typeof getPublickeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublickeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPublickeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.publickey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTestSyncMutationKey() {
  return ['test', '/test/sync', 'POST'] as const
}

export function getPostTestSyncMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sync.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTestSyncMutationKey(),
    async mutationFn() {
      return parseResponse(client.test.sync.$post(undefined, options))
    },
  })
}

export function usePostTestSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sync.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTestSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTestWebhooksMutationKey() {
  return ['test', '/test/webhooks', 'POST'] as const
}

export function getPostTestWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.webhooks.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTestWebhooksMutationKey(),
    async mutationFn() {
      return parseResponse(client.test.webhooks.$post(undefined, options))
    },
  })
}

export function usePostTestWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.webhooks.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTestWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['$get']>>,
) {
  return ['users', '/users/:id_user', toValue(args)] as const
}

export function getUsersIdUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdUserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersIdUserMutationKey() {
  return ['users', '/users/:id_user', 'DELETE'] as const
}

export function getDeleteUsersIdUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['$delete']>) {
      return parseResponse(client.users[':id_user'].$delete(args, options))
    },
  })
}

export function useDeleteUsersIdUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['$delete']>,
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
  const mutationDefaults = getDeleteUsersIdUserMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdUserAccountTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>
  >,
) {
  return ['users', '/users/:id_user/account_types', toValue(args)] as const
}

export function getUsersIdUserAccountTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserAccountTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].account_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserAccountTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserAccountTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserAccountTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].account_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserAccountTypesIdAccountTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
  >,
) {
  return ['users', '/users/:id_user/account_types/:id_account_type', toValue(args)] as const
}

export function getUsersIdUserAccountTypesIdAccountTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserAccountTypesIdAccountTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].account_types[':id_account_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserAccountTypesIdAccountType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserAccountTypesIdAccountTypeQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountTypesIdAccountTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserAccountTypesIdAccountTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].account_types[':id_account_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserAccountsIdAccountCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
    >
  >,
) {
  return ['users', '/users/:id_user/accounts/:id_account/categories', toValue(args)] as const
}

export function getUsersIdUserAccountsIdAccountCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserAccountsIdAccountCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserAccountsIdAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserAccountsIdAccountCategoriesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountsIdAccountCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserAccountsIdAccountCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].accounts[':id_account'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/accounts/:id_account/transactionsclusters',
    toValue(args),
  ] as const
}

export function getUsersIdUserAccountsIdAccountTransactionsclustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserAccountsIdAccountTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].accounts[':id_account'].transactionsclusters.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationKey() {
  return ['users', '/users/:id_user/accounts/:id_account/transactionsclusters', 'POST'] as const
}

export function getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters.$post(args, options),
      )
    },
  })
}

export function usePostUsersIdUserAccountsIdAccountTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
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
  const mutationDefaults = getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationOptions<
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

export function getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters[
          ':id_transactionscluster'
        ].$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters[
          ':id_transactionscluster'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getUsersIdUserAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>>,
) {
  return ['users', '/users/:id_user/alerts', toValue(args)] as const
}

export function getUsersIdUserAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>>,
) {
  return ['users', '/users/:id_user/categories', toValue(args)] as const
}

export function getUsersIdUserCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserCategoriesFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>
  >,
) {
  return ['users', '/users/:id_user/categories/full', toValue(args)] as const
}

export function getUsersIdUserCategoriesFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserCategoriesFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].categories.full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserCategoriesFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserCategoriesFullQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserCategoriesFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserCategoriesFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].categories.full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserCategoriesFullMutationKey() {
  return ['users', '/users/:id_user/categories/full', 'POST'] as const
}

export function getPostUsersIdUserCategoriesFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserCategoriesFullMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].categories.full.$post(args, options))
    },
  })
}

export function usePostUsersIdUserCategoriesFull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id_user']['categories']['full']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
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
  const mutationDefaults = getPostUsersIdUserCategoriesFullMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersIdUserCategoriesFullIdFullMutationKey() {
  return ['users', '/users/:id_user/categories/full/:id_full', 'PUT'] as const
}

export function getPutUsersIdUserCategoriesFullIdFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserCategoriesFullIdFullMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
      >,
    ) {
      return parseResponse(client.users[':id_user'].categories.full[':id_full'].$put(args, options))
    },
  })
}

export function usePutUsersIdUserCategoriesFullIdFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
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
  const mutationDefaults = getPutUsersIdUserCategoriesFullIdFullMutationOptions<
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

export function getDeleteUsersIdUserCategoriesFullIdFullMutationKey() {
  return ['users', '/users/:id_user/categories/full/:id_full', 'DELETE'] as const
}

export function getDeleteUsersIdUserCategoriesFullIdFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserCategoriesFullIdFullMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].categories.full[':id_full'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserCategoriesFullIdFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
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
  const mutationDefaults = getDeleteUsersIdUserCategoriesFullIdFullMutationOptions<
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

export function getUsersIdUserConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['config']['$get']>>,
) {
  return ['users', '/users/:id_user/config', toValue(args)] as const
}

export function getUsersIdUserConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConfigQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserConfigMutationKey() {
  return ['users', '/users/:id_user/config', 'POST'] as const
}

export function getPostUsersIdUserConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['config']['$post']>) {
      return parseResponse(client.users[':id_user'].config.$post(args, options))
    },
  })
}

export function usePostUsersIdUserConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['config']['$post']>,
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
  const mutationDefaults = getPostUsersIdUserConfigMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdUserConfigMutationKey() {
  return ['users', '/users/:id_user/config', 'DELETE'] as const
}

export function getDeleteUsersIdUserConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
    ) {
      return parseResponse(client.users[':id_user'].config.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdUserConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
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
  const mutationDefaults = getDeleteUsersIdUserConfigMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdUserConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>
  >,
) {
  return ['users', '/users/:id_user/connections', toValue(args)] as const
}

export function getUsersIdUserConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserConnectionsMutationKey() {
  return ['users', '/users/:id_user/connections', 'POST'] as const
}

export function getPostUsersIdUserConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].connections.$post(args, options))
    },
  })
}

export function usePostUsersIdUserConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
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
  const mutationDefaults = getPostUsersIdUserConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdUserConnectionsMutationKey() {
  return ['users', '/users/:id_user/connections', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
    ) {
      return parseResponse(client.users[':id_user'].connections.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdUserConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
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
  const mutationDefaults = getDeleteUsersIdUserConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['connections'][':id_connection']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
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
  const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionMutationOptions<
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

export function getPostUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['connections'][':id_connection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$post(args, options),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
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
  const mutationDefaults = getPostUsersIdUserConnectionsIdConnectionMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
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
  const mutationDefaults = getDeleteUsersIdUserConnectionsIdConnectionMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
    >
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', toValue(args)] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConnectionsIdConnectionAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConnectionsIdConnectionAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
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
  const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
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

export function getPostUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$post(args, options),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
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
  const mutationDefaults = getPostUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
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
  const mutationDefaults = getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
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

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionAccountsIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
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
  const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/categories',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/delta',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].delta.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].delta.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/logs',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].logs.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].logs.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/sources',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].sources.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$post(args, options),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
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
  const mutationDefaults =
    getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
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

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].transactions[':id_transaction'].informations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations/:id_information',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations[':id_information'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].transactions[':id_transaction'].informations[':id_information'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations/:id_information',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations[':id_information'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].accounts[
            ':id_account'
          ].transactionsclusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters.$post(args, options),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
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
  const mutationDefaults =
    getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationOptions<
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

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters[':id_transactionscluster'].$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters[':id_transactionscluster'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionInformationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/informations',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionInformationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConnectionsIdConnectionInformationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].informations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionInformations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionInformationsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionInformationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConnectionsIdConnectionInformationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].informations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
    >
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/logs', toValue(args)] as const
}

export function getUsersIdUserConnectionsIdConnectionLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConnectionsIdConnectionLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionLogsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConnectionsIdConnectionLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserConnectionsIdConnectionSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
    >
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/sources', toValue(args)] as const
}

export function getUsersIdUserConnectionsIdConnectionSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserConnectionsIdConnectionSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionSourcesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserConnectionsIdConnectionSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/sources/:id_source', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
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
  const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/sources/:id_source', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
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
  const mutationDefaults = getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/sources/:id_source',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
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

export function getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters',
    toValue(args),
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersIdUserConnectionsIdConnectionTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
                  >
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
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].connections[':id_connection'].transactionsclusters.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostUsersIdUserConnectionsIdConnectionTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
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
  const mutationDefaults =
    getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationOptions<
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

export function getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters[
          ':id_transactionscluster'
        ].$put(args, options),
      )
    },
  })
}

export function usePutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters[
          ':id_transactionscluster'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getUsersIdUserForecastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>>,
) {
  return ['users', '/users/:id_user/forecast', toValue(args)] as const
}

export function getUsersIdUserForecastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserForecastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].forecast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserForecastQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserForecastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserForecastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].forecast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>>,
) {
  return ['users', '/users/:id_user/logs', toValue(args)] as const
}

export function getUsersIdUserLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>>,
) {
  return ['users', '/users/:id_user/profiles', toValue(args)] as const
}

export function getUsersIdUserProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserProfilesMainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>
  >,
) {
  return ['users', '/users/:id_user/profiles/main', toValue(args)] as const
}

export function getUsersIdUserProfilesMainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserProfilesMainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].profiles.main.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserProfilesMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdUserProfilesMainQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserProfilesMainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].profiles.main.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdUserProfilesIdProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
  >,
) {
  return ['users', '/users/:id_user/profiles/:id_profile', toValue(args)] as const
}

export function getUsersIdUserProfilesIdProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserProfilesIdProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].profiles[':id_profile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserProfilesIdProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
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
                  ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserProfilesIdProfileQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesIdProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserProfilesIdProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].profiles[':id_profile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserTokenMutationKey() {
  return ['users', '/users/:id_user/token', 'POST'] as const
}

export function getPostUsersIdUserTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['token']['$post']>) {
      return parseResponse(client.users[':id_user'].token.$post(args, options))
    },
  })
}

export function usePostUsersIdUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id_user']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['token']['$post']>,
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
  const mutationDefaults = getPostUsersIdUserTokenMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdUserTransactionsclustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>
  >,
) {
  return ['users', '/users/:id_user/transactionsclusters', toValue(args)] as const
}

export function getUsersIdUserTransactionsclustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdUserTransactionsclustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdUserTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>
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
                  ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdUserTransactionsclustersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserTransactionsclustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdUserTransactionsclustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id_user'].transactionsclusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdUserTransactionsclustersMutationKey() {
  return ['users', '/users/:id_user/transactionsclusters', 'POST'] as const
}

export function getPostUsersIdUserTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].transactionsclusters.$post(args, options))
    },
  })
}

export function usePostUsersIdUserTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
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
  const mutationDefaults = getPostUsersIdUserTransactionsclustersMutationOptions<
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

export function getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey() {
  return ['users', '/users/:id_user/transactionsclusters/:id_transactionscluster', 'PUT'] as const
}

export function getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUsersIdUserTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
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
  const mutationDefaults =
    getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersIdUserTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
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
  const mutationDefaults =
    getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
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

export function getWebauthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauth.$get>>,
) {
  return ['webauth', '/webauth', toValue(args)] as const
}

export function getWebauthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebauthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webauth.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebauth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webauth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>
          >,
          ReturnType<typeof getWebauthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebauthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebauthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webauth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'DELETE'] as const
}

export function getDeleteWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$delete>) {
      return parseResponse(client.webhooks.$delete(args, options))
    },
  })
}

export function useDeleteWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$delete>,
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
  const mutationDefaults = getDeleteWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksAuthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.auth.$get>>,
) {
  return ['webhooks', '/webhooks/auth', toValue(args)] as const
}

export function getWebhooksAuthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.auth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksAuthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.auth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksAuth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.auth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
          >,
          ReturnType<typeof getWebhooksAuthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksAuthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.auth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksAuthMutationKey() {
  return ['webhooks', '/webhooks/auth', 'POST'] as const
}

export function getPostWebhooksAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.auth.$post>) {
      return parseResponse(client.webhooks.auth.$post(args, options))
    },
  })
}

export function usePostWebhooksAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.auth.$post>,
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
  const mutationDefaults = getPostWebhooksAuthMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksAuthMutationKey() {
  return ['webhooks', '/webhooks/auth', 'DELETE'] as const
}

export function getDeleteWebhooksAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.auth.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.auth.$delete>) {
      return parseResponse(client.webhooks.auth.$delete(args, options))
    },
  })
}

export function useDeleteWebhooksAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.auth.$delete>,
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
  const mutationDefaults = getDeleteWebhooksAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'PUT'] as const
}

export function getPutWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$put(args, options))
    },
  })
}

export function usePutWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>,
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
  const mutationDefaults = getPutWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'POST'] as const
}

export function getPostWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$post(args, options))
    },
  })
}

export function usePostWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>,
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
  const mutationDefaults = getPostWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'DELETE'] as const
}

export function getDeleteWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'PUT'] as const
}

export function getPutWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>) {
      return parseResponse(client.webhooks[':id_webhook'].$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'POST'] as const
}

export function getPostWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>) {
      return parseResponse(client.webhooks[':id_webhook'].$post(args, options))
    },
  })
}

export function usePostWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>,
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
  const mutationDefaults = getPostWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>) {
      return parseResponse(client.webhooks[':id_webhook'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdWebhookAddToDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', toValue(args)] as const
}

export function getWebhooksIdWebhookAddToDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdWebhookAddToDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdWebhookAddToData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdWebhookAddToDataQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookAddToDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdWebhookAddToDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id_webhook'].add_to_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksIdWebhookAddToDataMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', 'POST'] as const
}

export function getPostWebhooksIdWebhookAddToDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookAddToDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data.$post(args, options))
    },
  })
}

export function usePostWebhooksIdWebhookAddToData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
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
  const mutationDefaults = getPostWebhooksIdWebhookAddToDataMutationOptions<
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

export function getDeleteWebhooksIdWebhookAddToDataMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookAddToDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookAddToDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data.$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIdWebhookAddToData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdWebhookAddToDataMutationOptions<
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

export function getWebhooksIdWebhookAddToDataKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', toValue(args)] as const
}

export function getWebhooksIdWebhookAddToDataKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdWebhookAddToDataKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdWebhookAddToDataKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
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
                  ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksIdWebhookAddToDataKeyQueryKey>
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
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookAddToDataKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdWebhookAddToDataKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id_webhook'].add_to_data[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksIdWebhookAddToDataKeyMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', 'POST'] as const
}

export function getPostWebhooksIdWebhookAddToDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookAddToDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']
      >,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data[':key'].$post(args, options))
    },
  })
}

export function usePostWebhooksIdWebhookAddToDataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>,
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
  const mutationDefaults = getPostWebhooksIdWebhookAddToDataKeyMutationOptions<
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

export function getDeleteWebhooksIdWebhookAddToDataKeyMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookAddToDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookAddToDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data[':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWebhooksIdWebhookAddToDataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']
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
  const mutationDefaults = getDeleteWebhooksIdWebhookAddToDataKeyMutationOptions<
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

export function getWebhooksIdWebhookLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id_webhook/logs', toValue(args)] as const
}

export function getWebhooksIdWebhookLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdWebhookLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id_webhook'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdWebhookLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdWebhookLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdWebhookLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id_webhook'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
