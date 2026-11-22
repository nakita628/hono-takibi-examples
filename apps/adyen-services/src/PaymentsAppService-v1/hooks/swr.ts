import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenKey() {
  return ['merchants', '/merchants/:merchantId/generatePaymentsAppBoardingToken', 'POST'] as const
}

export function usePostMerchantsMerchantIdGeneratePaymentsAppBoardingToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenKey()
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
            (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].generatePaymentsAppBoardingToken.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdPaymentsAppsKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/paymentsApps', args] as const
}

export function useGetMerchantsMerchantIdPaymentsApps<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
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
        ? getGetMerchantsMerchantIdPaymentsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].paymentsApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdPaymentsApps<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
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
        ? getGetMerchantsMerchantIdPaymentsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.merchants[':merchantId'].paymentsApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentsApps/:installationId/revoke',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeKey()
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
            (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].paymentsApps[':installationId'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenKey() {
  return [
    'merchants',
    '/merchants/:merchantId/stores/:storeId/generatePaymentsAppBoardingToken',
    'POST',
  ] as const
}

export function usePostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenKey()
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
            (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantId'].stores[':storeId'].generatePaymentsAppBoardingToken.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantIdStoresStoreIdPaymentsAppsKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:storeId/paymentsApps', args] as const
}

export function useGetMerchantsMerchantIdStoresStoreIdPaymentsApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMerchantsMerchantIdStoresStoreIdPaymentsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].stores[':storeId'].paymentsApps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantIdStoresStoreIdPaymentsApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMerchantsMerchantIdStoresStoreIdPaymentsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantId'].stores[':storeId'].paymentsApps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
