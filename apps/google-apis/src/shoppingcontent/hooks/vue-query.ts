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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAccountstatusesKey() {
  return ['accountstatuses'] as const
}

export function getAccounttaxKey() {
  return ['accounttax'] as const
}

export function getDatafeedsKey() {
  return ['datafeeds'] as const
}

export function getDatafeedstatusesKey() {
  return ['datafeedstatuses'] as const
}

export function getLiasettingsKey() {
  return ['liasettings'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getPosKey() {
  return ['pos'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProductstatusesKey() {
  return ['productstatuses'] as const
}

export function getShippingsettingsKey() {
  return ['shippingsettings'] as const
}

export function getMerchantIdKey() {
  return ['{merchantId}'] as const
}

export function getAccountsAuthinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.authinfo.$get>>,
) {
  return ['accounts', '/accounts/authinfo', toValue(args)] as const
}

export function getAccountsAuthinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.authinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAuthinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.authinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.authinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>
            >
          >,
          ReturnType<typeof getAccountsAuthinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAuthinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAuthinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.authinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsBatchMutationKey() {
  return ['accounts', '/accounts/batch', 'POST'] as const
}

export function getPostAccountsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.batch.$post>) {
      return parseResponse(client.accounts.batch.$post(args, options))
    },
  })
}

export function usePostAccountsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.batch.$post>,
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
  const mutationDefaults = getPostAccountsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountstatusesBatchMutationKey() {
  return ['accountstatuses', '/accountstatuses/batch', 'POST'] as const
}

export function getPostAccountstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountstatuses.batch.$post>) {
      return parseResponse(client.accountstatuses.batch.$post(args, options))
    },
  })
}

export function usePostAccountstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accountstatuses.batch.$post>,
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
  const mutationDefaults = getPostAccountstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccounttaxBatchMutationKey() {
  return ['accounttax', '/accounttax/batch', 'POST'] as const
}

export function getPostAccounttaxBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounttax.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccounttaxBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounttax.batch.$post>) {
      return parseResponse(client.accounttax.batch.$post(args, options))
    },
  })
}

export function usePostAccounttaxBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounttax.batch.$post>,
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
  const mutationDefaults = getPostAccounttaxBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatafeedsBatchMutationKey() {
  return ['datafeeds', '/datafeeds/batch', 'POST'] as const
}

export function getPostDatafeedsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.datafeeds.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatafeedsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datafeeds.batch.$post>) {
      return parseResponse(client.datafeeds.batch.$post(args, options))
    },
  })
}

export function usePostDatafeedsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.datafeeds.batch.$post>,
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
  const mutationDefaults = getPostDatafeedsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatafeedstatusesBatchMutationKey() {
  return ['datafeedstatuses', '/datafeedstatuses/batch', 'POST'] as const
}

export function getPostDatafeedstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.datafeedstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatafeedstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datafeedstatuses.batch.$post>) {
      return parseResponse(client.datafeedstatuses.batch.$post(args, options))
    },
  })
}

export function usePostDatafeedstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.datafeedstatuses.batch.$post>,
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
  const mutationDefaults = getPostDatafeedstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiasettingsBatchMutationKey() {
  return ['liasettings', '/liasettings/batch', 'POST'] as const
}

export function getPostLiasettingsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.liasettings.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiasettingsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.liasettings.batch.$post>) {
      return parseResponse(client.liasettings.batch.$post(args, options))
    },
  })
}

export function usePostLiasettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.liasettings.batch.$post>,
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
  const mutationDefaults = getPostLiasettingsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getLiasettingsPosdataprovidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.liasettings.posdataproviders.$get>>,
) {
  return ['liasettings', '/liasettings/posdataproviders', toValue(args)] as const
}

export function getLiasettingsPosdataprovidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.liasettings.posdataproviders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiasettingsPosdataprovidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.liasettings.posdataproviders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiasettingsPosdataproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.liasettings.posdataproviders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>
              >
            >
          >,
          ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiasettingsPosdataprovidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.liasettings.posdataproviders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersBatchMutationKey() {
  return ['orders', '/orders/batch', 'POST'] as const
}

export function getPostOrdersBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.batch.$post>) {
      return parseResponse(client.orders.batch.$post(args, options))
    },
  })
}

export function usePostOrdersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.orders.batch.$post>,
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
  const mutationDefaults = getPostOrdersBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPosBatchMutationKey() {
  return ['pos', '/pos/batch', 'POST'] as const
}

export function getPostPosBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.pos.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.batch.$post>) {
      return parseResponse(client.pos.batch.$post(args, options))
    },
  })
}

export function usePostPosBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.batch.$post>,
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
  const mutationDefaults = getPostPosBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProductsBatchMutationKey() {
  return ['products', '/products/batch', 'POST'] as const
}

export function getPostProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.products.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.batch.$post>) {
      return parseResponse(client.products.batch.$post(args, options))
    },
  })
}

export function usePostProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.products.batch.$post>,
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
  const mutationDefaults = getPostProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostProductstatusesBatchMutationKey() {
  return ['productstatuses', '/productstatuses/batch', 'POST'] as const
}

export function getPostProductstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.productstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.productstatuses.batch.$post>) {
      return parseResponse(client.productstatuses.batch.$post(args, options))
    },
  })
}

export function usePostProductstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.productstatuses.batch.$post>,
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
  const mutationDefaults = getPostProductstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostShippingsettingsBatchMutationKey() {
  return ['shippingsettings', '/shippingsettings/batch', 'POST'] as const
}

export function getPostShippingsettingsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shippingsettings.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShippingsettingsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shippingsettings.batch.$post>) {
      return parseResponse(client.shippingsettings.batch.$post(args, options))
    },
  })
}

export function usePostShippingsettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shippingsettings.batch.$post>,
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
  const mutationDefaults = getPostShippingsettingsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>>,
) {
  return [':merchantId', '/:merchantId/accounts', toValue(args)] as const
}

export function getMerchantIdAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdAccountsMutationKey() {
  return [':merchantId', '/:merchantId/accounts', 'POST'] as const
}

export function getPostMerchantIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>) {
      return parseResponse(client[':merchantId'].accounts.$post(args, options))
    },
  })
}

export function usePostMerchantIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>,
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
  const mutationDefaults = getPostMerchantIdAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId', toValue(args)] as const
}

export function getMerchantIdAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccountsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMerchantIdAccountsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'PUT'] as const
}

export function getPutMerchantIdAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
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
  const mutationDefaults = getPutMerchantIdAccountsAccountIdMutationOptions<
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

export function getDeleteMerchantIdAccountsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteMerchantIdAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdAccountsAccountId<
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
                  ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
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
  const mutationDefaults = getDeleteMerchantIdAccountsAccountIdMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdClaimwebsiteMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/claimwebsite', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdClaimwebsiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdClaimwebsiteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].claimwebsite.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdAccountsAccountIdClaimwebsite<
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
                    (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
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
  const mutationDefaults = getPostMerchantIdAccountsAccountIdClaimwebsiteMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdLinkMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/link', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].link.$post(args, options))
    },
  })
}

export function usePostMerchantIdAccountsAccountIdLink<
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
                    (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
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
  const mutationDefaults = getPostMerchantIdAccountsAccountIdLinkMutationOptions<
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

export function getMerchantIdAccountstatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/accountstatuses', toValue(args)] as const
}

export function getMerchantIdAccountstatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccountstatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accountstatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccountstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccountstatusesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountstatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccountstatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accountstatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdAccountstatusesAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/accountstatuses/:accountId', toValue(args)] as const
}

export function getMerchantIdAccountstatusesAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccountstatusesAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accountstatuses[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccountstatusesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
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
                    (typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']
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
                    (typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccountstatusesAccountIdQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountstatusesAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccountstatusesAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accountstatuses[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdAccounttaxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>>,
) {
  return [':merchantId', '/:merchantId/accounttax', toValue(args)] as const
}

export function getMerchantIdAccounttaxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccounttaxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accounttax.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccounttax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccounttaxQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccounttaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccounttaxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accounttax.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdAccounttaxAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/accounttax/:accountId', toValue(args)] as const
}

export function getMerchantIdAccounttaxAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdAccounttaxAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].accounttax[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdAccounttaxAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdAccounttaxAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].accounttax[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMerchantIdAccounttaxAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounttax/:accountId', 'PUT'] as const
}

export function getPutMerchantIdAccounttaxAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdAccounttaxAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].accounttax[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdAccounttaxAccountId<
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
                  ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
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
  const mutationDefaults = getPutMerchantIdAccounttaxAccountIdMutationOptions<
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

export function getMerchantIdDatafeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>>,
) {
  return [':merchantId', '/:merchantId/datafeeds', toValue(args)] as const
}

export function getMerchantIdDatafeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdDatafeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].datafeeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdDatafeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdDatafeedsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdDatafeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].datafeeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdDatafeedsMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds', 'POST'] as const
}

export function getPostMerchantIdDatafeedsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdDatafeedsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>) {
      return parseResponse(client[':merchantId'].datafeeds.$post(args, options))
    },
  })
}

export function usePostMerchantIdDatafeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>,
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
  const mutationDefaults = getPostMerchantIdDatafeedsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdDatafeedsDatafeedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', toValue(args)] as const
}

export function getMerchantIdDatafeedsDatafeedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdDatafeedsDatafeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].datafeeds[':datafeedId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdDatafeedsDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdDatafeedsDatafeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].datafeeds[':datafeedId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMerchantIdDatafeedsDatafeedIdMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'PUT'] as const
}

export function getPutMerchantIdDatafeedsDatafeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdDatafeedsDatafeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdDatafeedsDatafeedId<
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
                  ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
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
  const mutationDefaults = getPutMerchantIdDatafeedsDatafeedIdMutationOptions<
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

export function getDeleteMerchantIdDatafeedsDatafeedIdMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'DELETE'] as const
}

export function getDeleteMerchantIdDatafeedsDatafeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdDatafeedsDatafeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdDatafeedsDatafeedId<
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
                  ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
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
  const mutationDefaults = getDeleteMerchantIdDatafeedsDatafeedIdMutationOptions<
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

export function getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId/fetchNow', 'POST'] as const
}

export function getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].datafeeds[':datafeedId'].fetchNow.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdDatafeedsDatafeedIdFetchNow<
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
                    (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
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
  const mutationDefaults = getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationOptions<
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

export function getMerchantIdDatafeedstatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses', toValue(args)] as const
}

export function getMerchantIdDatafeedstatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdDatafeedstatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdDatafeedstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdDatafeedstatusesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedstatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdDatafeedstatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].datafeedstatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses/:datafeedId', toValue(args)] as const
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdDatafeedstatusesDatafeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses[':datafeedId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdDatafeedstatusesDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
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
                    (typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']
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
                    (typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdDatafeedstatusesDatafeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].datafeedstatuses[':datafeedId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdLiasettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>>,
) {
  return [':merchantId', '/:merchantId/liasettings', toValue(args)] as const
}

export function getMerchantIdLiasettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdLiasettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].liasettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdLiasettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdLiasettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdLiasettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].liasettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdLiasettingsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId', toValue(args)] as const
}

export function getMerchantIdLiasettingsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdLiasettingsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdLiasettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdLiasettingsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].liasettings[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMerchantIdLiasettingsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId', 'PUT'] as const
}

export function getPutMerchantIdLiasettingsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdLiasettingsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].liasettings[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdLiasettingsAccountId<
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
                  ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
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
  const mutationDefaults = getPutMerchantIdLiasettingsAccountIdMutationOptions<
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

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
    >
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/accessiblegmbaccounts',
    toValue(args),
  ] as const
}

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey>
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
              (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/requestgmbaccess', 'POST'] as const
}

export function getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].requestgmbaccess.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdRequestgmbaccess<
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
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
  const mutationDefaults = getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/requestinventoryverification/:country',
    'POST',
  ] as const
}

export function getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].requestinventoryverification[
          ':country'
        ].$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountry<
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
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
    getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/setinventoryverificationcontact',
    'POST',
  ] as const
}

export function getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].setinventoryverificationcontact.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdSetinventoryverificationcontact<
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
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
    getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/setposdataprovider', 'POST'] as const
}

export function getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].setposdataprovider.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdSetposdataprovider<
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
                    (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
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
  const mutationDefaults = getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationOptions<
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

export function getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createChargeInvoice', 'POST'] as const
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderinvoices[':orderId'].createChargeInvoice.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateChargeInvoice<
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
                    (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationOptions<
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

export function getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createRefundInvoice', 'POST'] as const
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderinvoices[':orderId'].createRefundInvoice.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateRefundInvoice<
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
                    (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationOptions<
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

export function getMerchantIdOrderreportsDisbursementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/orderreports/disbursements', toValue(args)] as const
}

export function getMerchantIdOrderreportsDisbursementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrderreportsDisbursementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrderreportsDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
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
                    (typeof client)[':merchantId']['orderreports']['disbursements']['$get']
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
                    (typeof client)[':merchantId']['orderreports']['disbursements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrderreportsDisbursementsQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreportsDisbursementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrderreportsDisbursementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orderreports.disbursements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
    >
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/orderreports/disbursements/:disbursementId/transactions',
    toValue(args),
  ] as const
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
                    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
                    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey
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
              (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdOrderreturnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>>,
) {
  return [':merchantId', '/:merchantId/orderreturns', toValue(args)] as const
}

export function getMerchantIdOrderreturnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrderreturnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orderreturns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrderreturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrderreturnsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreturnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrderreturnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orderreturns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdOrderreturnsReturnIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/orderreturns/:returnId', toValue(args)] as const
}

export function getMerchantIdOrderreturnsReturnIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrderreturnsReturnIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrderreturnsReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrderreturnsReturnIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orderreturns[':returnId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orders']['$get']>>,
) {
  return [':merchantId', '/:merchantId/orders', toValue(args)] as const
}

export function getMerchantIdOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/orders/:orderId', toValue(args)] as const
}

export function getMerchantIdOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrdersOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdOrdersOrderIdAcknowledgeMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/acknowledge', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].acknowledge.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdAcknowledge<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdAcknowledgeMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdCancelMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancel', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].cancel.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdCancel<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>,
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdCancelLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancelLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdCancelLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdCancelLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].cancelLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdCancelLineItem<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/inStoreRefundLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].inStoreRefundLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdInStoreRefundLineItem<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdRefundMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/refund', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].refund.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdRefund<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']>,
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdRefundMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/rejectReturnLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].rejectReturnLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdRejectReturnLineItem<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdReturnLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/returnLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdReturnLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdReturnLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].returnLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdReturnLineItem<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdReturnLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/returnRefundLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].returnRefundLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdReturnRefundLineItem<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/setLineItemMetadata', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].setLineItemMetadata.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdSetLineItemMetadata<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdShipLineItemsMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/shipLineItems', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdShipLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdShipLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].shipLineItems.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdShipLineItems<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdShipLineItemsMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdTestreturnMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/testreturn', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdTestreturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdTestreturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].testreturn.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdTestreturn<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdTestreturnMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/orders/:orderId/updateLineItemShippingDetails',
    'POST',
  ] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateLineItemShippingDetails.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateLineItemShippingDetails<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
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
    getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateMerchantOrderId', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateMerchantOrderId.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateMerchantOrderId<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateShipmentMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateShipment', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateShipmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateShipmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateShipment.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateShipment<
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
                    (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateShipmentMutationOptions<
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

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
    >
  >,
) {
  return [':merchantId', '/:merchantId/ordersbymerchantid/:merchantOrderId', toValue(args)] as const
}

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdOrdersbymerchantidMerchantOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
                    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
                    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey>
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
              (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdPosTargetMerchantIdInventoryMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/inventory', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].inventory.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdInventory<
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdInventoryMutationOptions<
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

export function getPostMerchantIdPosTargetMerchantIdSaleMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/sale', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdSaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdSaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].pos[':targetMerchantId'].sale.$post(args, options))
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdSale<
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdSaleMutationOptions<
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

export function getMerchantIdPosTargetMerchantIdStoreQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', toValue(args)] as const
}

export function getMerchantIdPosTargetMerchantIdStoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdPosTargetMerchantIdStoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdPosTargetMerchantIdStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdPosTargetMerchantIdStoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].store.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdPosTargetMerchantIdStoreMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdStore<
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdStoreMutationOptions<
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

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
    >
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/pos/:targetMerchantId/store/:storeCode',
    toValue(args),
  ] as const
}

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdPosTargetMerchantIdStoreStoreCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey>
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
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', 'DELETE'] as const
}

export function getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdPosTargetMerchantIdStoreStoreCode<
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
                    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationOptions<
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

export function getMerchantIdProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['products']['$get']>>,
) {
  return [':merchantId', '/:merchantId/products', toValue(args)] as const
}

export function getMerchantIdProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['products']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':merchantId']['products']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdProductsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdProductsMutationKey() {
  return [':merchantId', '/:merchantId/products', 'POST'] as const
}

export function getPostMerchantIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdProductsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['products']['$post']>) {
      return parseResponse(client[':merchantId'].products.$post(args, options))
    },
  })
}

export function usePostMerchantIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['products']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['products']['$post']>,
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
  const mutationDefaults = getPostMerchantIdProductsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdProductsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/products/:productId', toValue(args)] as const
}

export function getMerchantIdProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdProductsProductIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMerchantIdProductsProductIdMutationKey() {
  return [':merchantId', '/:merchantId/products/:productId', 'DELETE'] as const
}

export function getDeleteMerchantIdProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdProductsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].products[':productId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdProductsProductId<
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
                  ReturnType<(typeof client)[':merchantId']['products'][':productId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
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
  const mutationDefaults = getDeleteMerchantIdProductsProductIdMutationOptions<
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

export function getMerchantIdProductstatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/productstatuses', toValue(args)] as const
}

export function getMerchantIdProductstatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdProductstatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].productstatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdProductstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdProductstatusesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductstatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdProductstatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].productstatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdProductstatusesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId', toValue(args)] as const
}

export function getMerchantIdProductstatusesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdProductstatusesProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].productstatuses[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdProductstatusesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
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
                    (typeof client)[':merchantId']['productstatuses'][':productId']['$get']
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
                    (typeof client)[':merchantId']['productstatuses'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdProductstatusesProductIdQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductstatusesProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdProductstatusesProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].productstatuses[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdShippingsettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/shippingsettings', toValue(args)] as const
}

export function getMerchantIdShippingsettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdShippingsettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].shippingsettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdShippingsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdShippingsettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdShippingsettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdShippingsettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].shippingsettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdShippingsettingsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', toValue(args)] as const
}

export function getMerchantIdShippingsettingsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdShippingsettingsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].shippingsettings[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdShippingsettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
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
                    (typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']
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
                    (typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdShippingsettingsAccountIdQueryKey>
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
            ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdShippingsettingsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdShippingsettingsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].shippingsettings[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMerchantIdShippingsettingsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', 'PUT'] as const
}

export function getPutMerchantIdShippingsettingsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdShippingsettingsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']
      >,
    ) {
      return parseResponse(client[':merchantId'].shippingsettings[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdShippingsettingsAccountId<
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
                    (typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']
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
  const mutationDefaults = getPutMerchantIdShippingsettingsAccountIdMutationOptions<
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

export function getMerchantIdSupportedCarriersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/supportedCarriers', toValue(args)] as const
}

export function getMerchantIdSupportedCarriersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdSupportedCarriersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].supportedCarriers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdSupportedCarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdSupportedCarriersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedCarriersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdSupportedCarriersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].supportedCarriers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdSupportedHolidaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/supportedHolidays', toValue(args)] as const
}

export function getMerchantIdSupportedHolidaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdSupportedHolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].supportedHolidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdSupportedHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantIdSupportedHolidaysQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedHolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdSupportedHolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].supportedHolidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantIdSupportedPickupServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/supportedPickupServices', toValue(args)] as const
}

export function getMerchantIdSupportedPickupServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdSupportedPickupServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].supportedPickupServices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdSupportedPickupServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>
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
                  ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdSupportedPickupServicesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedPickupServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdSupportedPickupServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].supportedPickupServices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMerchantIdTestordersMutationKey() {
  return [':merchantId', '/:merchantId/testorders', 'POST'] as const
}

export function getPostMerchantIdTestordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['testorders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].testorders.$post(args, options))
    },
  })
}

export function usePostMerchantIdTestorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':merchantId']['testorders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
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
  const mutationDefaults = getPostMerchantIdTestordersMutationOptions<TError, TOnMutateResult>(
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

export function getPostMerchantIdTestordersOrderIdAdvanceMutationKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/advance', 'POST'] as const
}

export function getPostMerchantIdTestordersOrderIdAdvanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersOrderIdAdvanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].testorders[':orderId'].advance.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdTestordersOrderIdAdvance<
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
                    (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
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
  const mutationDefaults = getPostMerchantIdTestordersOrderIdAdvanceMutationOptions<
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

export function getPostMerchantIdTestordersOrderIdCancelByCustomerMutationKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/cancelByCustomer', 'POST'] as const
}

export function getPostMerchantIdTestordersOrderIdCancelByCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersOrderIdCancelByCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].testorders[':orderId'].cancelByCustomer.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdTestordersOrderIdCancelByCustomer<
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
                    (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
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
  const mutationDefaults = getPostMerchantIdTestordersOrderIdCancelByCustomerMutationOptions<
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

export function getMerchantIdTestordertemplatesTemplateNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
  >,
) {
  return [':merchantId', '/:merchantId/testordertemplates/:templateName', toValue(args)] as const
}

export function getMerchantIdTestordertemplatesTemplateNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantIdTestordertemplatesTemplateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':merchantId'].testordertemplates[':templateName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantIdTestordertemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
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
                    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
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
                    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantIdTestordertemplatesTemplateNameQueryKey>
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
              (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdTestordertemplatesTemplateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantIdTestordertemplatesTemplateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':merchantId'].testordertemplates[':templateName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
