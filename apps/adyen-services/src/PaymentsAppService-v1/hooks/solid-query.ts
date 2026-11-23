import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenMutationKey() {
  return ['merchants', '/merchants/:merchantId/generatePaymentsAppBoardingToken', 'POST'] as const
}

export function getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].generatePaymentsAppBoardingToken.$post(args, options),
      )
    },
  })
}

export function createPostMerchantsMerchantIdGeneratePaymentsAppBoardingToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
          >,
          TOnMutateResult
        >
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
      getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenMutationOptions<
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

export function getMerchantsMerchantIdPaymentsAppsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/paymentsApps', args] as const
}

export function getMerchantsMerchantIdPaymentsAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdPaymentsAppsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdPaymentsAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].paymentsApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantsMerchantIdPaymentsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMerchantsMerchantIdPaymentsAppsQueryKey>
        >
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
      ...getMerchantsMerchantIdPaymentsAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentsApps/:installationId/revoke',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].paymentsApps[':installationId'].revoke.$post(args, options),
      )
    },
  })
}

export function createPostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
          >,
          TOnMutateResult
        >
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
      getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeMutationOptions<
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

export function getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/stores/:storeId/generatePaymentsAppBoardingToken',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':storeId'].generatePaymentsAppBoardingToken.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
          >,
          TOnMutateResult
        >
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
      getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenMutationOptions<
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

export function getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:storeId/paymentsApps', args] as const
}

export function getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':storeId'].paymentsApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantsMerchantIdStoresStoreIdPaymentsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryKey>
        >
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
      ...getMerchantsMerchantIdStoresStoreIdPaymentsAppsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
