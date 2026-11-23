import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentKey() {
  return ['agent'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getContactKey() {
  return ['contact'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDataflowEndpointGroupKey() {
  return ['dataflowEndpointGroup'] as const
}

export function getEphemeridesKey() {
  return ['ephemerides'] as const
}

export function getEphemerisKey() {
  return ['ephemeris'] as const
}

export function getGroundstationKey() {
  return ['groundstation'] as const
}

export function getMinuteUsageKey() {
  return ['minute-usage'] as const
}

export function getMissionprofileKey() {
  return ['missionprofile'] as const
}

export function getSatelliteKey() {
  return ['satellite'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetContactContactIdKey(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/:contactId', keyArgs] as const
}

export function useGetContactContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
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
        ? getGetContactContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
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
        ? getGetContactContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contact[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactContactIdKey() {
  return ['contact', '/contact/:contactId', 'DELETE'] as const
}

export function useDeleteContactContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)[':contactId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)[':contactId']['$delete']> },
      ) => parseResponse(client.contact[':contactId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostConfigKey() {
  return ['config', '/config', 'POST'] as const
}

export function usePostConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.$post> }) =>
        parseResponse(client.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataflowEndpointGroupKey(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', keyArgs] as const
}

export function useGetDataflowEndpointGroup<TError = unknown>(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
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
        ? getGetDataflowEndpointGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataflowEndpointGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataflowEndpointGroup<TError = unknown>(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
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
        ? getGetDataflowEndpointGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataflowEndpointGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataflowEndpointGroupKey() {
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', 'POST'] as const
}

export function usePostDataflowEndpointGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dataflowEndpointGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataflowEndpointGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dataflowEndpointGroup.$post> },
      ) => parseResponse(client.dataflowEndpointGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEphemerisKey() {
  return ['ephemeris', '/ephemeris', 'POST'] as const
}

export function usePostEphemeris<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemeris.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ephemeris.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEphemerisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ephemeris.$post> }) =>
        parseResponse(client.ephemeris.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMissionprofileKey(args: InferRequestType<typeof client.missionprofile.$get>) {
  const { header: _, ...keyArgs } = args
  return ['missionprofile', '/missionprofile', keyArgs] as const
}

export function useGetMissionprofile<TError = unknown>(
  args: InferRequestType<typeof client.missionprofile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMissionprofileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.missionprofile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMissionprofile<TError = unknown>(
  args: InferRequestType<typeof client.missionprofile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMissionprofileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.missionprofile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMissionprofileKey() {
  return ['missionprofile', '/missionprofile', 'POST'] as const
}

export function usePostMissionprofile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.missionprofile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMissionprofileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.missionprofile.$post> }) =>
        parseResponse(client.missionprofile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigConfigTypeConfigIdKey(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config/:configType/:configId', keyArgs] as const
}

export function useGetConfigConfigTypeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
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
        ? getGetConfigConfigTypeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.config[':configType'][':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigConfigTypeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
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
        ? getGetConfigConfigTypeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.config[':configType'][':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConfigConfigTypeConfigIdKey() {
  return ['config', '/config/:configType/:configId', 'PUT'] as const
}

export function usePutConfigConfigTypeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigConfigTypeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.config)[':configType'][':configId']['$put']> },
      ) => parseResponse(client.config[':configType'][':configId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConfigConfigTypeConfigIdKey() {
  return ['config', '/config/:configType/:configId', 'DELETE'] as const
}

export function useDeleteConfigConfigTypeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConfigConfigTypeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']> },
      ) => parseResponse(client.config[':configType'][':configId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataflowEndpointGroupDataflowEndpointGroupIdKey(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    keyArgs,
  ] as const
}

export function useGetDataflowEndpointGroupDataflowEndpointGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
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
        ? getGetDataflowEndpointGroupDataflowEndpointGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataflowEndpointGroupDataflowEndpointGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
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
        ? getGetDataflowEndpointGroupDataflowEndpointGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDataflowEndpointGroupDataflowEndpointGroupIdKey() {
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    'DELETE',
  ] as const
}

export function useDeleteDataflowEndpointGroupDataflowEndpointGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataflowEndpointGroupDataflowEndpointGroupIdKey()
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
            (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEphemerisEphemerisIdKey(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ephemeris', '/ephemeris/:ephemerisId', keyArgs] as const
}

export function useGetEphemerisEphemerisId<TError = unknown>(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
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
        ? getGetEphemerisEphemerisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ephemeris[':ephemerisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEphemerisEphemerisId<TError = unknown>(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
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
        ? getGetEphemerisEphemerisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ephemeris[':ephemerisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEphemerisEphemerisIdKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'PUT'] as const
}

export function usePutEphemerisEphemerisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEphemerisEphemerisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']> },
      ) => parseResponse(client.ephemeris[':ephemerisId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEphemerisEphemerisIdKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'DELETE'] as const
}

export function useDeleteEphemerisEphemerisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEphemerisEphemerisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']> },
      ) => parseResponse(client.ephemeris[':ephemerisId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMissionprofileMissionProfileIdKey(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['missionprofile', '/missionprofile/:missionProfileId', keyArgs] as const
}

export function useGetMissionprofileMissionProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
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
        ? getGetMissionprofileMissionProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.missionprofile[':missionProfileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMissionprofileMissionProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
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
        ? getGetMissionprofileMissionProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.missionprofile[':missionProfileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMissionprofileMissionProfileIdKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'PUT'] as const
}

export function usePutMissionprofileMissionProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMissionprofileMissionProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']> },
      ) => parseResponse(client.missionprofile[':missionProfileId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMissionprofileMissionProfileIdKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'DELETE'] as const
}

export function useDeleteMissionprofileMissionProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMissionprofileMissionProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>
        },
      ) => parseResponse(client.missionprofile[':missionProfileId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentAgentIdConfigurationKey(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent', '/agent/:agentId/configuration', keyArgs] as const
}

export function useGetAgentAgentIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
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
        ? getGetAgentAgentIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':agentId'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentAgentIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
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
        ? getGetAgentAgentIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':agentId'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMinuteUsageKey() {
  return ['minute-usage', '/minute-usage', 'POST'] as const
}

export function usePostMinuteUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['minute-usage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['minute-usage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMinuteUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['minute-usage']['$post']> },
      ) => parseResponse(client['minute-usage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSatelliteSatelliteIdKey(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['satellite', '/satellite/:satelliteId', keyArgs] as const
}

export function useGetSatelliteSatelliteId<TError = unknown>(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
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
        ? getGetSatelliteSatelliteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.satellite[':satelliteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSatelliteSatelliteId<TError = unknown>(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
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
        ? getGetSatelliteSatelliteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.satellite[':satelliteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEphemeridesKey() {
  return ['ephemerides', '/ephemerides', 'POST'] as const
}

export function usePostEphemerides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemerides.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ephemerides.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEphemeridesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ephemerides.$post> }) =>
        parseResponse(client.ephemerides.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroundstationKey(args: InferRequestType<typeof client.groundstation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['groundstation', '/groundstation', keyArgs] as const
}

export function useGetGroundstation<TError = unknown>(
  args: InferRequestType<typeof client.groundstation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroundstationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groundstation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroundstation<TError = unknown>(
  args: InferRequestType<typeof client.groundstation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroundstationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groundstation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSatelliteKey(args: InferRequestType<typeof client.satellite.$get>) {
  const { header: _, ...keyArgs } = args
  return ['satellite', '/satellite', keyArgs] as const
}

export function useGetSatellite<TError = unknown>(
  args: InferRequestType<typeof client.satellite.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSatelliteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.satellite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSatellite<TError = unknown>(
  args: InferRequestType<typeof client.satellite.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSatelliteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.satellite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentKey() {
  return ['agent', '/agent', 'POST'] as const
}

export function usePostAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.agent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agent.$post> }) =>
        parseResponse(client.agent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactKey() {
  return ['contact', '/contact', 'POST'] as const
}

export function usePostContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.$post> }) =>
        parseResponse(client.contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAgentAgentIdKey() {
  return ['agent', '/agent/:agentId', 'PUT'] as const
}

export function usePutAgentAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':agentId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent)[':agentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAgentAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agent)[':agentId']['$put']> },
      ) => parseResponse(client.agent[':agentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
