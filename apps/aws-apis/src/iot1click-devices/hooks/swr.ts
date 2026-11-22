import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClaimsKey() {
  return ['claims'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutClaimsClaimCodeKey() {
  return ['claims', '/claims/:claimCode', 'PUT'] as const
}

export function usePutClaimsClaimCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.claims)[':claimCode']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.claims)[':claimCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClaimsClaimCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.claims)[':claimCode']['$put']> },
      ) => parseResponse(client.claims[':claimCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesDeviceIdKey(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId', keyArgs] as const
}

export function useGetDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
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
        ? getGetDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
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
        ? getGetDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDevicesDeviceIdFinalizeClaimKey() {
  return ['devices', '/devices/:deviceId/finalize-claim', 'PUT'] as const
}

export function usePutDevicesDeviceIdFinalizeClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesDeviceIdFinalizeClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>
        },
      ) => parseResponse(client.devices[':deviceId']['finalize-claim'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesDeviceIdMethodsKey(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId/methods', keyArgs] as const
}

export function useGetDevicesDeviceIdMethods<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
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
        ? getGetDevicesDeviceIdMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':deviceId'].methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesDeviceIdMethods<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
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
        ? getGetDevicesDeviceIdMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':deviceId'].methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevicesDeviceIdMethodsKey() {
  return ['devices', '/devices/:deviceId/methods', 'POST'] as const
}

export function usePostDevicesDeviceIdMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicesDeviceIdMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']> },
      ) => parseResponse(client.devices[':deviceId'].methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDevicesDeviceIdInitiateClaimKey() {
  return ['devices', '/devices/:deviceId/initiate-claim', 'PUT'] as const
}

export function usePutDevicesDeviceIdInitiateClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesDeviceIdInitiateClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>
        },
      ) => parseResponse(client.devices[':deviceId']['initiate-claim'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesDeviceIdEventsFromTimeStampToTimeStampKey(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId/events#fromTimeStamp&toTimeStamp', keyArgs] as const
}

export function useGetDevicesDeviceIdEventsFromTimeStampToTimeStamp<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
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
        ? getGetDevicesDeviceIdEventsFromTimeStampToTimeStampKey(args)
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
                (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
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
          client.devices[':deviceId']['events#fromTimeStamp&toTimeStamp'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesDeviceIdEventsFromTimeStampToTimeStamp<TError = unknown>(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
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
        ? getGetDevicesDeviceIdEventsFromTimeStampToTimeStampKey(args)
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
                (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
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
          client.devices[':deviceId']['events#fromTimeStamp&toTimeStamp'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesKey(args: InferRequestType<typeof client.devices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices', keyArgs] as const
}

export function useGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDevicesDeviceIdUnclaimKey() {
  return ['devices', '/devices/:deviceId/unclaim', 'PUT'] as const
}

export function usePutDevicesDeviceIdUnclaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['unclaim']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesDeviceIdUnclaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']> },
      ) => parseResponse(client.devices[':deviceId'].unclaim.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDevicesDeviceIdStateKey() {
  return ['devices', '/devices/:deviceId/state', 'PUT'] as const
}

export function usePutDevicesDeviceIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['state']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDevicesDeviceIdStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']> },
      ) => parseResponse(client.devices[':deviceId'].state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
