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

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getMerchantsMerchantAccountConnectedDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
  >,
) {
  return ['merchants', '/merchants/:merchantAccount/connectedDevices', toValue(args)] as const
}

export function getMerchantsMerchantAccountConnectedDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantsMerchantAccountConnectedDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.merchants[':merchantAccount'].connectedDevices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantsMerchantAccountConnectedDevices<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
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
                    (typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']
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
                    (typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantsMerchantAccountConnectedDevicesQueryKey>
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
            ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantAccountConnectedDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantsMerchantAccountConnectedDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.merchants[':merchantAccount'].connectedDevices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMerchantsMerchantAccountDevicesDeviceIdAsync<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantAccountDevicesDeviceIdAsyncMutationOptions<
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

export function getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
    >
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantAccount/devices/:deviceId/status',
    toValue(args),
  ] as const
}

export function getMerchantsMerchantAccountDevicesDeviceIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantsMerchantAccountDevicesDeviceIdStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
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
                    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
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
                    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey>
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
              (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantsMerchantAccountDevicesDeviceIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMerchantsMerchantAccountDevicesDeviceIdSync<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantAccountDevicesDeviceIdSyncMutationOptions<
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
