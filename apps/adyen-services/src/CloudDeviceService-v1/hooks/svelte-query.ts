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

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getMerchantsMerchantAccountConnectedDevicesQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
) {
  return ['merchants', '/merchants/:merchantAccount/connectedDevices', args] as const
}

export function getMerchantsMerchantAccountConnectedDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantAccountConnectedDevicesQueryKey>
  >({
    queryKey: getMerchantsMerchantAccountConnectedDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantAccount'].connectedDevices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantsMerchantAccountConnectedDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantAccountConnectedDevicesQueryKey>
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
      ...getMerchantsMerchantAccountConnectedDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdAsyncMutationKey() {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/async', 'POST'] as const
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantAccountDevicesDeviceIdAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantAccount'].devices[':deviceId'].async.$post(args, options),
      )
    },
  })
}

export function createPostMerchantsMerchantAccountDevicesDeviceIdAsync<
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
                  (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
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
    const mutationDefaults = getPostMerchantsMerchantAccountDevicesDeviceIdAsyncMutationOptions<
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

export function getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/status', args] as const
}

export function getMerchantsMerchantAccountDevicesDeviceIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey>
  >({
    queryKey: getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMerchantsMerchantAccountDevicesDeviceIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey>
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
      ...getMerchantsMerchantAccountDevicesDeviceIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdSyncMutationKey() {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/sync', 'POST'] as const
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantAccountDevicesDeviceIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantAccount'].devices[':deviceId'].sync.$post(args, options),
      )
    },
  })
}

export function createPostMerchantsMerchantAccountDevicesDeviceIdSync<
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
                  (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
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
    const mutationDefaults = getPostMerchantsMerchantAccountDevicesDeviceIdSyncMutationOptions<
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
