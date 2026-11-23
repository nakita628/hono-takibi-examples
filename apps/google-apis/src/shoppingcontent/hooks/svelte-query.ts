import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
) {
  return ['accounts', '/accounts/authinfo', args] as const
}

export function getAccountsAuthinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.authinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAuthinfoQueryKey>
  >({
    queryKey: getAccountsAuthinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.authinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAuthinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAuthinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAccountsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accountstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountstatusesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccounttaxBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounttax.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccounttaxBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDatafeedsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datafeeds.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatafeedsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDatafeedstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.datafeedstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatafeedstatusesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLiasettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.liasettings.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiasettingsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiasettingsPosdataprovidersQueryKey(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
) {
  return ['liasettings', '/liasettings/posdataproviders', args] as const
}

export function getLiasettingsPosdataprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
  >({
    queryKey: getLiasettingsPosdataprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.liasettings.posdataproviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiasettingsPosdataproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiasettingsPosdataprovidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrdersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.orders.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPosBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPosBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.products.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProductstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.productstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductstatusesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostShippingsettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shippingsettings.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostShippingsettingsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdAccountsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts', args] as const
}

export function getMerchantIdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMerchantIdAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMerchantIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId', args] as const
}

export function getMerchantIdAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMerchantIdAccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMerchantIdAccountsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMerchantIdAccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMerchantIdAccountsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdAccountsAccountIdClaimwebsite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdAccountsAccountIdClaimwebsiteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdAccountsAccountIdLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdAccountsAccountIdLinkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdAccountstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses', args] as const
}

export function getMerchantIdAccountstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccountstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accountstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccountstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdAccountstatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdAccountstatusesAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses/:accountId', args] as const
}

export function getMerchantIdAccountstatusesAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccountstatusesAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accountstatuses[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccountstatusesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdAccountstatusesAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdAccounttaxQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax', args] as const
}

export function getMerchantIdAccounttaxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccounttaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounttax.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccounttax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdAccounttaxQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdAccounttaxAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax/:accountId', args] as const
}

export function getMerchantIdAccounttaxAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdAccounttaxAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounttax[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdAccounttaxAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdAccounttaxAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMerchantIdAccounttaxAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMerchantIdAccounttaxAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdDatafeedsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds', args] as const
}

export function getMerchantIdDatafeedsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdDatafeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeeds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdDatafeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMerchantIdDatafeedsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMerchantIdDatafeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdDatafeedsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdDatafeedsDatafeedIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', args] as const
}

export function getMerchantIdDatafeedsDatafeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdDatafeedsDatafeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeeds[':datafeedId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdDatafeedsDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdDatafeedsDatafeedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMerchantIdDatafeedsDatafeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMerchantIdDatafeedsDatafeedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMerchantIdDatafeedsDatafeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMerchantIdDatafeedsDatafeedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdDatafeedsDatafeedIdFetchNow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdDatafeedstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses', args] as const
}

export function getMerchantIdDatafeedstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdDatafeedstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdDatafeedstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdDatafeedstatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses/:datafeedId', args] as const
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryOptions<
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
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdDatafeedstatusesDatafeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses[':datafeedId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdDatafeedstatusesDatafeedId<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdDatafeedstatusesDatafeedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdLiasettingsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings', args] as const
}

export function getMerchantIdLiasettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdLiasettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdLiasettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdLiasettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdLiasettingsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId', args] as const
}

export function getMerchantIdLiasettingsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdLiasettingsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdLiasettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdLiasettingsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMerchantIdLiasettingsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMerchantIdLiasettingsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId/accessiblegmbaccounts', args] as const
}

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostMerchantIdLiasettingsAccountIdRequestgmbaccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdLiasettingsAccountIdSetposdataprovider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdOrderreportsDisbursementsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreports/disbursements', args] as const
}

export function getMerchantIdOrderreportsDisbursementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrderreportsDisbursementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdOrderreportsDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrderreportsDisbursementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/orderreports/disbursements/:disbursementId/transactions',
    args,
  ] as const
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdOrderreturnsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns', args] as const
}

export function getMerchantIdOrderreturnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrderreturnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreturns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdOrderreturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrderreturnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdOrderreturnsReturnIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns/:returnId', args] as const
}

export function getMerchantIdOrderreturnsReturnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrderreturnsReturnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdOrderreturnsReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrderreturnsReturnIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdOrdersQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders', args] as const
}

export function getMerchantIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersQueryKey>
  >({
    queryKey: getMerchantIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMerchantIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMerchantIdOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMerchantIdOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders/:orderId', args] as const
}

export function getMerchantIdOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdAcknowledgeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdCancelLineItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelLineItemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdInStoreRefundLineItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdRefundMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdRejectReturnLineItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdReturnLineItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdReturnLineItemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdReturnRefundLineItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdSetLineItemMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdShipLineItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdShipLineItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdTestreturn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdTestreturnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdUpdateMerchantOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdOrdersOrderIdUpdateShipment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateShipmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/ordersbymerchantid/:merchantOrderId', args] as const
}

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdOrdersbymerchantidMerchantOrderId<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostMerchantIdPosTargetMerchantIdInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdPosTargetMerchantIdInventoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdPosTargetMerchantIdSale<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdPosTargetMerchantIdSaleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdPosTargetMerchantIdStoreQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', args] as const
}

export function getMerchantIdPosTargetMerchantIdStoreQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdPosTargetMerchantIdStoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdPosTargetMerchantIdStore<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdPosTargetMerchantIdStoreQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMerchantIdPosTargetMerchantIdStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdPosTargetMerchantIdStoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', args] as const
}

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdPosTargetMerchantIdStoreStoreCode<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteMerchantIdPosTargetMerchantIdStoreStoreCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdProductsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
) {
  return [':merchantId', '/:merchantId/products', args] as const
}

export function getMerchantIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMerchantIdProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMerchantIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdProductsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdProductsProductIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/products/:productId', args] as const
}

export function getMerchantIdProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdProductsProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteMerchantIdProductsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMerchantIdProductsProductIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdProductstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses', args] as const
}

export function getMerchantIdProductstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdProductstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdProductstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdProductstatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdProductstatusesProductIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId', args] as const
}

export function getMerchantIdProductstatusesProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdProductstatusesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productstatuses[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdProductstatusesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdProductstatusesProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdShippingsettingsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings', args] as const
}

export function getMerchantIdShippingsettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdShippingsettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].shippingsettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdShippingsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdShippingsettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdShippingsettingsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', args] as const
}

export function getMerchantIdShippingsettingsAccountIdQueryOptions<
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
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdShippingsettingsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].shippingsettings[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdShippingsettingsAccountId<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdShippingsettingsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutMerchantIdShippingsettingsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMerchantIdShippingsettingsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdSupportedCarriersQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedCarriers', args] as const
}

export function getMerchantIdSupportedCarriersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdSupportedCarriersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedCarriers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdSupportedCarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdSupportedCarriersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdSupportedHolidaysQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedHolidays', args] as const
}

export function getMerchantIdSupportedHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdSupportedHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedHolidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdSupportedHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdSupportedHolidaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMerchantIdSupportedPickupServicesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedPickupServices', args] as const
}

export function getMerchantIdSupportedPickupServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdSupportedPickupServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedPickupServices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdSupportedPickupServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdSupportedPickupServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMerchantIdTestorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdTestordersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdTestordersOrderIdAdvance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdTestordersOrderIdAdvanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMerchantIdTestordersOrderIdCancelByCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMerchantIdTestordersOrderIdCancelByCustomerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMerchantIdTestordertemplatesTemplateNameQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/testordertemplates/:templateName', args] as const
}

export function getMerchantIdTestordertemplatesTemplateNameQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMerchantIdTestordertemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].testordertemplates[':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantIdTestordertemplatesTemplateName<
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
  args: () => InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMerchantIdTestordertemplatesTemplateNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
