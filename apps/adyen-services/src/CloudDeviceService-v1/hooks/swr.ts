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

export function getGetMerchantsMerchantAccountConnectedDevicesKey(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
) {
  return ['merchants', '/merchants/:merchantAccount/connectedDevices', args] as const
}

export function useGetMerchantsMerchantAccountConnectedDevices<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
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
        ? getGetMerchantsMerchantAccountConnectedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantAccount'].connectedDevices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantAccountConnectedDevices<TError = unknown>(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
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
        ? getGetMerchantsMerchantAccountConnectedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.merchants[':merchantAccount'].connectedDevices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdAsyncKey() {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/async', 'POST'] as const
}

export function usePostMerchantsMerchantAccountDevicesDeviceIdAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantAccountDevicesDeviceIdAsyncKey()
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
            (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantAccount'].devices[':deviceId'].async.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantsMerchantAccountDevicesDeviceIdStatusKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/status', args] as const
}

export function useGetMerchantsMerchantAccountDevicesDeviceIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMerchantsMerchantAccountDevicesDeviceIdStatusKey(args)
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
                (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
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
          client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantsMerchantAccountDevicesDeviceIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMerchantsMerchantAccountDevicesDeviceIdStatusKey(args)
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
                (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
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
          client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantsMerchantAccountDevicesDeviceIdSyncKey() {
  return ['merchants', '/merchants/:merchantAccount/devices/:deviceId/sync', 'POST'] as const
}

export function usePostMerchantsMerchantAccountDevicesDeviceIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantsMerchantAccountDevicesDeviceIdSyncKey()
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
            (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.merchants[':merchantAccount'].devices[':deviceId'].sync.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
