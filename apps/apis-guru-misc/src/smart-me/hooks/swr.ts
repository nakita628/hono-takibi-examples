import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPutApiAccessTokenKey() {
  return ['api', '/api/AccessToken', 'PUT'] as const
}

export function usePutApiAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.AccessToken.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.AccessToken.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.AccessToken.$put> }) =>
        parseResponse(client.api.AccessToken.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountLoginKey() {
  return ['api', '/api/Account/login'] as const
}

export function useGetApiAccountLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Account.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAccountLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Account.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAccountLoginKey() {
  return ['api', '/api/Account/login', 'POST'] as const
}

export function usePostApiAccountLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Account.login.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAccountLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.Account.login.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiActionsKey() {
  return ['api', '/api/Actions', 'POST'] as const
}

export function usePostApiActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Actions.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.Actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Actions.$post> }) =>
        parseResponse(client.api.Actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiActionsIdKey(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
) {
  return ['api', '/api/Actions/:id', args] as const
}

export function useGetApiActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiActionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiActionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Actions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdditionalDeviceInformationIdKey(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
) {
  return ['api', '/api/AdditionalDeviceInformation/:id', args] as const
}

export function useGetApiAdditionalDeviceInformationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
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
        ? getGetApiAdditionalDeviceInformationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.AdditionalDeviceInformation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdditionalDeviceInformationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
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
        ? getGetApiAdditionalDeviceInformationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.AdditionalDeviceInformation)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.AdditionalDeviceInformation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCustomDeviceKey() {
  return ['api', '/api/CustomDevice'] as const
}

export function useGetApiCustomDevice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomDeviceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.CustomDevice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomDevice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomDeviceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.CustomDevice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCustomDeviceKey() {
  return ['api', '/api/CustomDevice', 'POST'] as const
}

export function usePostApiCustomDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.CustomDevice.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.CustomDevice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCustomDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.CustomDevice.$post> }) =>
        parseResponse(client.api.CustomDevice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCustomDeviceIdKey(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
) {
  return ['api', '/api/CustomDevice/:id', args] as const
}

export function useGetApiCustomDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
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
        ? getGetApiCustomDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.CustomDevice[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.CustomDevice)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
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
        ? getGetApiCustomDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.CustomDevice)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.CustomDevice[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDeviceBySerialKey(
  args: InferRequestType<typeof client.api.DeviceBySerial.$get>,
) {
  return ['api', '/api/DeviceBySerial', args] as const
}

export function useGetApiDeviceBySerial<TError = unknown>(
  args: InferRequestType<typeof client.api.DeviceBySerial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
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
        ? getGetApiDeviceBySerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DeviceBySerial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDeviceBySerial<TError = unknown>(
  args: InferRequestType<typeof client.api.DeviceBySerial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
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
        ? getGetApiDeviceBySerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.DeviceBySerial.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DeviceBySerial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDevicesKey() {
  return ['api', '/api/Devices'] as const
}

export function useGetApiDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDevicesKey() {
  return ['api', '/api/Devices', 'POST'] as const
}

export function usePostApiDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Devices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.Devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Devices.$post> }) =>
        parseResponse(client.api.Devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDevicesIdKey(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
) {
  return ['api', '/api/Devices/:id', args] as const
}

export function useGetApiDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiDevicesIdKey() {
  return ['api', '/api/Devices/:id', 'PUT'] as const
}

export function usePutApiDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Devices)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.Devices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.Devices)[':id']['$put']> },
      ) => parseResponse(client.api.Devices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDevicesByEnergyKey(
  args: InferRequestType<typeof client.api.DevicesByEnergy.$get>,
) {
  return ['api', '/api/DevicesByEnergy', args] as const
}

export function useGetApiDevicesByEnergy<TError = unknown>(
  args: InferRequestType<typeof client.api.DevicesByEnergy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
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
        ? getGetApiDevicesByEnergyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DevicesByEnergy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDevicesByEnergy<TError = unknown>(
  args: InferRequestType<typeof client.api.DevicesByEnergy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
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
        ? getGetApiDevicesByEnergyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesByEnergy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DevicesByEnergy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDevicesBySubTypeKey(
  args: InferRequestType<typeof client.api.DevicesBySubType.$get>,
) {
  return ['api', '/api/DevicesBySubType', args] as const
}

export function useGetApiDevicesBySubType<TError = unknown>(
  args: InferRequestType<typeof client.api.DevicesBySubType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
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
        ? getGetApiDevicesBySubTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DevicesBySubType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDevicesBySubType<TError = unknown>(
  args: InferRequestType<typeof client.api.DevicesBySubType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
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
        ? getGetApiDevicesBySubTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.DevicesBySubType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.DevicesBySubType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFastSendDeviceValuesIdKey(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
) {
  return ['api', '/api/FastSendDeviceValues/:id', args] as const
}

export function useGetApiFastSendDeviceValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
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
        ? getGetApiFastSendDeviceValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FastSendDeviceValues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFastSendDeviceValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
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
        ? getGetApiFastSendDeviceValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.FastSendDeviceValues)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FastSendDeviceValues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderIdKey(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
) {
  return ['api', '/api/Folder/:id', args] as const
}

export function useGetApiFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiFolderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Folder[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Folder)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiFolderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Folder)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Folder[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderMenuKey(args: InferRequestType<typeof client.api.FolderMenu.$get>) {
  return ['api', '/api/FolderMenu', args] as const
}

export function useGetApiFolderMenu<TError = unknown>(
  args: InferRequestType<typeof client.api.FolderMenu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFolderMenuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FolderMenu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderMenu<TError = unknown>(
  args: InferRequestType<typeof client.api.FolderMenu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFolderMenuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FolderMenu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderMenuKey() {
  return ['api', '/api/FolderMenu', 'POST'] as const
}

export function usePostApiFolderMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.FolderMenu.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.FolderMenu.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderMenuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.FolderMenu.$post> }) =>
        parseResponse(client.api.FolderMenu.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiHealthKey() {
  return ['api', '/api/Health'] as const
}

export function useGetApiHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiMBusKey() {
  return ['api', '/api/MBus', 'POST'] as const
}

export function usePostApiMBus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.MBus.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.MBus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMBusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.MBus.$post> }) =>
        parseResponse(client.api.MBus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiMeterFolderInformationKey() {
  return ['api', '/api/MeterFolderInformation', 'POST'] as const
}

export function usePostApiMeterFolderInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.MeterFolderInformation.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.MeterFolderInformation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMeterFolderInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.MeterFolderInformation.$post> },
      ) => parseResponse(client.api.MeterFolderInformation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMeterFolderInformationIdKey(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
) {
  return ['api', '/api/MeterFolderInformation/:id', args] as const
}

export function useGetApiMeterFolderInformationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
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
        ? getGetApiMeterFolderInformationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.MeterFolderInformation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMeterFolderInformationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.MeterFolderInformation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
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
        ? getGetApiMeterFolderInformationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.MeterFolderInformation)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.MeterFolderInformation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMeterValuesIdKey(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
) {
  return ['api', '/api/MeterValues/:id', args] as const
}

export function useGetApiMeterValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
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
        ? getGetApiMeterValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.MeterValues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMeterValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.MeterValues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
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
        ? getGetApiMeterValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.MeterValues)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.MeterValues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRegisterForRealtimeApiKey() {
  return ['api', '/api/RegisterForRealtimeApi'] as const
}

export function useGetApiRegisterForRealtimeApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRegisterForRealtimeApiKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.RegisterForRealtimeApi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRegisterForRealtimeApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRegisterForRealtimeApiKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.RegisterForRealtimeApi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRegisterForRealtimeApiKey() {
  return ['api', '/api/RegisterForRealtimeApi', 'POST'] as const
}

export function usePostApiRegisterForRealtimeApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.RegisterForRealtimeApi.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.RegisterForRealtimeApi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRegisterForRealtimeApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.RegisterForRealtimeApi.$post> },
      ) => parseResponse(client.api.RegisterForRealtimeApi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiRegisterForRealtimeApiIdKey() {
  return ['api', '/api/RegisterForRealtimeApi/:id', 'DELETE'] as const
}

export function useDeleteApiRegisterForRealtimeApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiRegisterForRealtimeApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.RegisterForRealtimeApi)[':id']['$delete']> },
      ) => parseResponse(client.api.RegisterForRealtimeApi[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSmartMeDeviceConfigurationKey() {
  return ['api', '/api/SmartMeDeviceConfiguration', 'POST'] as const
}

export function usePostApiSmartMeDeviceConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.SmartMeDeviceConfiguration.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSmartMeDeviceConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.SmartMeDeviceConfiguration.$post> },
      ) => parseResponse(client.api.SmartMeDeviceConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSmartMeDeviceConfigurationIdKey(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
) {
  return ['api', '/api/SmartMeDeviceConfiguration/:id', args] as const
}

export function useGetApiSmartMeDeviceConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
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
        ? getGetApiSmartMeDeviceConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.SmartMeDeviceConfiguration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSmartMeDeviceConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
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
        ? getGetApiSmartMeDeviceConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.SmartMeDeviceConfiguration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.SmartMeDeviceConfiguration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSubUserKey() {
  return ['api', '/api/SubUser', 'POST'] as const
}

export function usePostApiSubUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SubUser.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.SubUser.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.SubUser.$post> }) =>
        parseResponse(client.api.SubUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSubUserIdKey(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
) {
  return ['api', '/api/SubUser/:id', args] as const
}

export function useGetApiSubUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSubUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.SubUser[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.SubUser)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSubUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.SubUser[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiSubUserIdKey() {
  return ['api', '/api/SubUser/:id', 'DELETE'] as const
}

export function useDeleteApiSubUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.SubUser)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.SubUser)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiSubUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.SubUser)[':id']['$delete']> },
      ) => parseResponse(client.api.SubUser[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserKey() {
  return ['api', '/api/User'] as const
}

export function useGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiUserKey() {
  return ['api', '/api/User', 'DELETE'] as const
}

export function useDeleteApiUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.User.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiValuesIdKey(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
) {
  return ['api', '/api/Values/:id', args] as const
}

export function useGetApiValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiValuesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Values[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiValuesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Values)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiValuesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Values)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Values[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiValuesInPastIdKey(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
) {
  return ['api', '/api/ValuesInPast/:id', args] as const
}

export function useGetApiValuesInPastId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
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
        ? getGetApiValuesInPastIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ValuesInPast[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiValuesInPastId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ValuesInPast)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
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
        ? getGetApiValuesInPastIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ValuesInPast)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ValuesInPast[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiValuesInPastMultipleIdKey(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
) {
  return ['api', '/api/ValuesInPastMultiple/:id', args] as const
}

export function useGetApiValuesInPastMultipleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
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
        ? getGetApiValuesInPastMultipleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ValuesInPastMultiple[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiValuesInPastMultipleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
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
        ? getGetApiValuesInPastMultipleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ValuesInPastMultiple)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ValuesInPastMultiple[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualBillingMeterActiveKey() {
  return ['api', '/api/VirtualBillingMeterActive'] as const
}

export function useGetApiVirtualBillingMeterActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVirtualBillingMeterActiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualBillingMeterActive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualBillingMeterActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVirtualBillingMeterActiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualBillingMeterActive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVirtualBillingMeterActiveKey() {
  return ['api', '/api/VirtualBillingMeterActive', 'POST'] as const
}

export function usePostApiVirtualBillingMeterActive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeterActive.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.VirtualBillingMeterActive.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVirtualBillingMeterActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.VirtualBillingMeterActive.$post> },
      ) => parseResponse(client.api.VirtualBillingMeterActive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVirtualBillingMeterDeactivateKey() {
  return ['api', '/api/VirtualBillingMeterDeactivate', 'POST'] as const
}

export function usePostApiVirtualBillingMeterDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.VirtualBillingMeterDeactivate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVirtualBillingMeterDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.VirtualBillingMeterDeactivate.$post> },
      ) => parseResponse(client.api.VirtualBillingMeterDeactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVirtualBillingMetersKey() {
  return ['api', '/api/VirtualBillingMeters'] as const
}

export function useGetApiVirtualBillingMeters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVirtualBillingMetersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualBillingMeters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualBillingMeters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVirtualBillingMetersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualBillingMeters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualBillingMeters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualMeterCalculateFormulaKey(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
) {
  return ['api', '/api/VirtualMeterCalculateFormula', args] as const
}

export function useGetApiVirtualMeterCalculateFormula<TError = unknown>(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
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
        ? getGetApiVirtualMeterCalculateFormulaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualMeterCalculateFormula.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualMeterCalculateFormula<TError = unknown>(
  args: InferRequestType<typeof client.api.VirtualMeterCalculateFormula.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
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
        ? getGetApiVirtualMeterCalculateFormulaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.VirtualMeterCalculateFormula.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualMeterCalculateFormula.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualTariffKey() {
  return ['api', '/api/VirtualTariff'] as const
}

export function useGetApiVirtualTariff<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVirtualTariffKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariff.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualTariff<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVirtualTariffKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariff.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariff.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualTariffIdKey(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariff/:id', args] as const
}

export function useGetApiVirtualTariffId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
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
        ? getGetApiVirtualTariffIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariff[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualTariffId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariff)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
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
        ? getGetApiVirtualTariffIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariff)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariff[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualTariffConsumptionKey(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
) {
  return ['api', '/api/VirtualTariffConsumption', args] as const
}

export function useGetApiVirtualTariffConsumption<TError = unknown>(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
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
        ? getGetApiVirtualTariffConsumptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariffConsumption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualTariffConsumption<TError = unknown>(
  args: InferRequestType<typeof client.api.VirtualTariffConsumption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
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
        ? getGetApiVirtualTariffConsumptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.VirtualTariffConsumption.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.VirtualTariffConsumption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualTariffsForPropertyIdKey(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariffsForProperty/:id', args] as const
}

export function useGetApiVirtualTariffsForPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
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
        ? getGetApiVirtualTariffsForPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualTariffsForProperty[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualTariffsForPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
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
        ? getGetApiVirtualTariffsForPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsForProperty)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualTariffsForProperty[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualTariffsStatusForPropertyIdKey(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
) {
  return ['api', '/api/VirtualTariffsStatusForProperty/:id', args] as const
}

export function useGetApiVirtualTariffsStatusForPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
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
        ? getGetApiVirtualTariffsStatusForPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualTariffsStatusForProperty[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualTariffsStatusForPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
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
        ? getGetApiVirtualTariffsStatusForPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.VirtualTariffsStatusForProperty)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.VirtualTariffsStatusForProperty[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderAssignKey() {
  return ['api', '/api/folder/assign', 'POST'] as const
}

export function usePostApiFolderAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.assign.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.folder.assign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.folder.assign.$post> }) =>
        parseResponse(client.api.folder.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFolderSettingsIdKey(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
) {
  return ['api', '/api/folder/settings/:id', args] as const
}

export function useGetApiFolderSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
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
        ? getGetApiFolderSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
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
        ? getGetApiFolderSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderSettingsIdKey() {
  return ['api', '/api/folder/settings/:id', 'POST'] as const
}

export function usePostApiFolderSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder.settings)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder.settings)[':id']['$post']> },
      ) => parseResponse(client.api.folder.settings[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiFolderSettingsIdKey() {
  return ['api', '/api/folder/settings/:id', 'DELETE'] as const
}

export function useDeleteApiFolderSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder.settings)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiFolderSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder.settings)[':id']['$delete']> },
      ) => parseResponse(client.api.folder.settings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderUserAssignKey() {
  return ['api', '/api/folder/user/assign', 'POST'] as const
}

export function usePostApiFolderUserAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.user.assign.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.folder.user.assign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderUserAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.folder.user.assign.$post> },
      ) => parseResponse(client.api.folder.user.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiFolderUserAssignKey() {
  return ['api', '/api/folder/user/assign', 'DELETE'] as const
}

export function useDeleteApiFolderUserAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.folder.user.assign.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.folder.user.assign.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiFolderUserAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.folder.user.assign.$delete> },
      ) => parseResponse(client.api.folder.user.assign.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOauthAuthorizeKey(
  args: InferRequestType<typeof client.api.oauth.authorize.$get>,
) {
  return ['api', '/api/oauth/authorize', args] as const
}

export function useGetApiOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.api.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
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
        ? getGetApiOauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.api.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
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
        ? getGetApiOauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOauthAuthorizeKey() {
  return ['api', '/api/oauth/authorize', 'POST'] as const
}

export function usePostApiOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oauth.authorize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.oauth.authorize.$post> }) =>
        parseResponse(client.api.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPicoKey() {
  return ['api', '/api/pico'] as const
}

export function useGetApiPico<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPicoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPico<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPicoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPicoChargingIdKey(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
) {
  return ['api', '/api/pico/charging/:id', args] as const
}

export function useGetApiPicoChargingId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
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
        ? getGetApiPicoChargingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.charging[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPicoChargingId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.charging)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
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
        ? getGetApiPicoChargingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.charging)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.charging[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPicoHistoryIdKey(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
) {
  return ['api', '/api/pico/history/:id', args] as const
}

export function useGetApiPicoHistoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
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
        ? getGetApiPicoHistoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.history[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPicoHistoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.history)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
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
        ? getGetApiPicoHistoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pico.history)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.history[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPicoLoadmanagementgroupKey() {
  return ['api', '/api/pico/loadmanagementgroup'] as const
}

export function useGetApiPicoLoadmanagementgroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPicoLoadmanagementgroupKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.loadmanagementgroup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPicoLoadmanagementgroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPicoLoadmanagementgroupKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pico.loadmanagementgroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.loadmanagementgroup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPicoLoadmanagementgroupCurrentSerialKey() {
  return ['api', '/api/pico/loadmanagementgroup/current/:serial', 'POST'] as const
}

export function usePostApiPicoLoadmanagementgroupCurrentSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPicoLoadmanagementgroupCurrentSerialKey()
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
            (typeof client.api.pico.loadmanagementgroup.current)[':serial']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pico.loadmanagementgroup.current[':serial'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPicoLoadmanagementgroupIdKey(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
) {
  return ['api', '/api/pico/loadmanagementgroup/:id', args] as const
}

export function useGetApiPicoLoadmanagementgroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
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
        ? getGetApiPicoLoadmanagementgroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pico.loadmanagementgroup[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPicoLoadmanagementgroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
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
        ? getGetApiPicoLoadmanagementgroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.loadmanagementgroup)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pico.loadmanagementgroup[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPicoSettingsIdKey(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
) {
  return ['api', '/api/pico/settings/:id', args] as const
}

export function useGetApiPicoSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
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
        ? getGetApiPicoSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPicoSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pico.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
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
        ? getGetApiPicoSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pico.settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pico.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPicoTryenablecablelockIdKey() {
  return ['api', '/api/pico/tryenablecablelock/:id', 'POST'] as const
}

export function usePostApiPicoTryenablecablelockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPicoTryenablecablelockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.pico.tryenablecablelock)[':id']['$post']> },
      ) => parseResponse(client.api.pico.tryenablecablelock[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
