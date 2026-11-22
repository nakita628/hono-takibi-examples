import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthKey() {
  return ['auth'] as const
}

export function getDataSourcesKey() {
  return ['data-sources'] as const
}

export function getEntitiesKey() {
  return ['entities'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getInfraKey() {
  return ['infra'] as const
}

export function getMicroSegKey() {
  return ['micro-seg'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getPostAuthTokenKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function usePostAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.token.$post> }) =>
        parseResponse(client.auth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthTokenKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function useDeleteAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.token.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesAristaSwitchesKey() {
  return ['data-sources', '/data-sources/arista-switches'] as const
}

export function useGetDataSourcesAristaSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
        >
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
        ? getGetDataSourcesAristaSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['arista-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesAristaSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
        >
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
        ? getGetDataSourcesAristaSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['arista-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesAristaSwitchesKey() {
  return ['data-sources', '/data-sources/arista-switches', 'POST'] as const
}

export function usePostDataSourcesAristaSwitches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesAristaSwitchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']> },
      ) => parseResponse(client['data-sources']['arista-switches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesAristaSwitchesIdKey(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/arista-switches/:id', args] as const
}

export function useGetDataSourcesAristaSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
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
        ? getGetDataSourcesAristaSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['arista-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesAristaSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
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
        ? getGetDataSourcesAristaSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['arista-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesAristaSwitchesIdKey() {
  return ['data-sources', '/data-sources/arista-switches/:id', 'PUT'] as const
}

export function usePutDataSourcesAristaSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesAristaSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['arista-switches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesAristaSwitchesIdKey() {
  return ['data-sources', '/data-sources/arista-switches/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesAristaSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesAristaSwitchesIdKey()
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
            (typeof client)['data-sources']['arista-switches'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client['data-sources']['arista-switches'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesAristaSwitchesIdDisableKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/disable', 'POST'] as const
}

export function usePostDataSourcesAristaSwitchesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesAristaSwitchesIdDisableKey()
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
            (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['arista-switches'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesAristaSwitchesIdEnableKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/enable', 'POST'] as const
}

export function usePostDataSourcesAristaSwitchesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesAristaSwitchesIdEnableKey()
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
            (typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['arista-switches'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesAristaSwitchesIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/arista-switches/:id/snmp-config', args] as const
}

export function useGetDataSourcesAristaSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesAristaSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['arista-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesAristaSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesAristaSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['arista-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesAristaSwitchesIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/arista-switches/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesAristaSwitchesIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesAristaSwitchesIdSnmpConfigKey()
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
            (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['arista-switches'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesBrocadeSwitchesKey() {
  return ['data-sources', '/data-sources/brocade-switches'] as const
}

export function useGetDataSourcesBrocadeSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
        >
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
        ? getGetDataSourcesBrocadeSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['brocade-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesBrocadeSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
        >
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
        ? getGetDataSourcesBrocadeSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['brocade-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesBrocadeSwitchesKey() {
  return ['data-sources', '/data-sources/brocade-switches', 'POST'] as const
}

export function usePostDataSourcesBrocadeSwitches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesBrocadeSwitchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']> },
      ) => parseResponse(client['data-sources']['brocade-switches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesBrocadeSwitchesIdKey(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id', args] as const
}

export function useGetDataSourcesBrocadeSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
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
        ? getGetDataSourcesBrocadeSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['brocade-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesBrocadeSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
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
        ? getGetDataSourcesBrocadeSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['brocade-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesBrocadeSwitchesIdKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id', 'PUT'] as const
}

export function usePutDataSourcesBrocadeSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesBrocadeSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>
        },
      ) =>
        parseResponse(client['data-sources']['brocade-switches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesBrocadeSwitchesIdKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesBrocadeSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesBrocadeSwitchesIdKey()
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
            (typeof client)['data-sources']['brocade-switches'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['brocade-switches'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesBrocadeSwitchesIdDisableKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/disable', 'POST'] as const
}

export function usePostDataSourcesBrocadeSwitchesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesBrocadeSwitchesIdDisableKey()
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
            (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['brocade-switches'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesBrocadeSwitchesIdEnableKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/enable', 'POST'] as const
}

export function usePostDataSourcesBrocadeSwitchesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesBrocadeSwitchesIdEnableKey()
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
            (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['brocade-switches'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesBrocadeSwitchesIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/brocade-switches/:id/snmp-config', args] as const
}

export function useGetDataSourcesBrocadeSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesBrocadeSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesBrocadeSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesBrocadeSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesBrocadeSwitchesIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/brocade-switches/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesBrocadeSwitchesIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesBrocadeSwitchesIdSnmpConfigKey()
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
            (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['brocade-switches'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesCheckpointFirewallsKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls'] as const
}

export function useGetDataSourcesCheckpointFirewalls<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
        >
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
        ? getGetDataSourcesCheckpointFirewallsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesCheckpointFirewalls<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
        >
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
        ? getGetDataSourcesCheckpointFirewallsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesCheckpointFirewallsKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls', 'POST'] as const
}

export function usePostDataSourcesCheckpointFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCheckpointFirewallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>
        },
      ) => parseResponse(client['data-sources']['checkpoint-firewalls'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesCheckpointFirewallsIdKey(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', args] as const
}

export function useGetDataSourcesCheckpointFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
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
        ? getGetDataSourcesCheckpointFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesCheckpointFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
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
        ? getGetDataSourcesCheckpointFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesCheckpointFirewallsIdKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', 'PUT'] as const
}

export function usePutDataSourcesCheckpointFirewallsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesCheckpointFirewallsIdKey()
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
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesCheckpointFirewallsIdKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesCheckpointFirewallsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesCheckpointFirewallsIdKey()
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
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesCheckpointFirewallsIdDisableKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id/disable', 'POST'] as const
}

export function usePostDataSourcesCheckpointFirewallsIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCheckpointFirewallsIdDisableKey()
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
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesCheckpointFirewallsIdEnableKey() {
  return ['data-sources', '/data-sources/checkpoint-firewalls/:id/enable', 'POST'] as const
}

export function usePostDataSourcesCheckpointFirewallsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCheckpointFirewallsIdEnableKey()
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
            (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['checkpoint-firewalls'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesCiscoSwitchesKey() {
  return ['data-sources', '/data-sources/cisco-switches'] as const
}

export function useGetDataSourcesCiscoSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
        >
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
        ? getGetDataSourcesCiscoSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['cisco-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesCiscoSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
        >
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
        ? getGetDataSourcesCiscoSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['cisco-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesCiscoSwitchesKey() {
  return ['data-sources', '/data-sources/cisco-switches', 'POST'] as const
}

export function usePostDataSourcesCiscoSwitches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCiscoSwitchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']> },
      ) => parseResponse(client['data-sources']['cisco-switches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesCiscoSwitchesIdKey(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id', args] as const
}

export function useGetDataSourcesCiscoSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
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
        ? getGetDataSourcesCiscoSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['cisco-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesCiscoSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
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
        ? getGetDataSourcesCiscoSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['cisco-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesCiscoSwitchesIdKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id', 'PUT'] as const
}

export function usePutDataSourcesCiscoSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesCiscoSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['cisco-switches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesCiscoSwitchesIdKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesCiscoSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesCiscoSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>
        },
      ) =>
        parseResponse(client['data-sources']['cisco-switches'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesCiscoSwitchesIdDisableKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/disable', 'POST'] as const
}

export function usePostDataSourcesCiscoSwitchesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCiscoSwitchesIdDisableKey()
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
            (typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['cisco-switches'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesCiscoSwitchesIdEnableKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/enable', 'POST'] as const
}

export function usePostDataSourcesCiscoSwitchesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesCiscoSwitchesIdEnableKey()
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
            (typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['cisco-switches'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesCiscoSwitchesIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/cisco-switches/:id/snmp-config', args] as const
}

export function useGetDataSourcesCiscoSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesCiscoSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesCiscoSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesCiscoSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesCiscoSwitchesIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/cisco-switches/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesCiscoSwitchesIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesCiscoSwitchesIdSnmpConfigKey()
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
            (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['cisco-switches'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesDellSwitchesKey() {
  return ['data-sources', '/data-sources/dell-switches'] as const
}

export function useGetDataSourcesDellSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
        >
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
        ? getGetDataSourcesDellSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['dell-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesDellSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
        >
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
        ? getGetDataSourcesDellSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['dell-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesDellSwitchesKey() {
  return ['data-sources', '/data-sources/dell-switches', 'POST'] as const
}

export function usePostDataSourcesDellSwitches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesDellSwitchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']> },
      ) => parseResponse(client['data-sources']['dell-switches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesDellSwitchesIdKey(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/dell-switches/:id', args] as const
}

export function useGetDataSourcesDellSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
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
        ? getGetDataSourcesDellSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['dell-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesDellSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
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
        ? getGetDataSourcesDellSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['dell-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesDellSwitchesIdKey() {
  return ['data-sources', '/data-sources/dell-switches/:id', 'PUT'] as const
}

export function usePutDataSourcesDellSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesDellSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['dell-switches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesDellSwitchesIdKey() {
  return ['data-sources', '/data-sources/dell-switches/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesDellSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesDellSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>
        },
      ) =>
        parseResponse(client['data-sources']['dell-switches'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesDellSwitchesIdDisableKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/disable', 'POST'] as const
}

export function usePostDataSourcesDellSwitchesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesDellSwitchesIdDisableKey()
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
            (typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['dell-switches'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesDellSwitchesIdEnableKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/enable', 'POST'] as const
}

export function usePostDataSourcesDellSwitchesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesDellSwitchesIdEnableKey()
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
            (typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['dell-switches'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesDellSwitchesIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/dell-switches/:id/snmp-config', args] as const
}

export function useGetDataSourcesDellSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesDellSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['dell-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesDellSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesDellSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['dell-switches'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesDellSwitchesIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/dell-switches/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesDellSwitchesIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesDellSwitchesIdSnmpConfigKey()
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
            (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['dell-switches'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesHpovManagersKey() {
  return ['data-sources', '/data-sources/hpov-managers'] as const
}

export function useGetDataSourcesHpovManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
        >
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
        ? getGetDataSourcesHpovManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpov-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesHpovManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
        >
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
        ? getGetDataSourcesHpovManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpov-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesHpovManagersKey() {
  return ['data-sources', '/data-sources/hpov-managers', 'POST'] as const
}

export function usePostDataSourcesHpovManagers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpovManagersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']> },
      ) => parseResponse(client['data-sources']['hpov-managers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesHpovManagersIdKey(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/hpov-managers/:id', args] as const
}

export function useGetDataSourcesHpovManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
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
        ? getGetDataSourcesHpovManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpov-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesHpovManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
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
        ? getGetDataSourcesHpovManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpov-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesHpovManagersIdKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id', 'PUT'] as const
}

export function usePutDataSourcesHpovManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesHpovManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['hpov-managers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesHpovManagersIdKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesHpovManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesHpovManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>
        },
      ) =>
        parseResponse(client['data-sources']['hpov-managers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesHpovManagersIdDisableKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id/disable', 'POST'] as const
}

export function usePostDataSourcesHpovManagersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpovManagersIdDisableKey()
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
            (typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['hpov-managers'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesHpovManagersIdEnableKey() {
  return ['data-sources', '/data-sources/hpov-managers/:id/enable', 'POST'] as const
}

export function usePostDataSourcesHpovManagersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpovManagersIdEnableKey()
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
            (typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['hpov-managers'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesHpvcManagersKey() {
  return ['data-sources', '/data-sources/hpvc-managers'] as const
}

export function useGetDataSourcesHpvcManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
        >
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
        ? getGetDataSourcesHpvcManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpvc-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesHpvcManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
        >
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
        ? getGetDataSourcesHpvcManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpvc-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesHpvcManagersKey() {
  return ['data-sources', '/data-sources/hpvc-managers', 'POST'] as const
}

export function usePostDataSourcesHpvcManagers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpvcManagersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']> },
      ) => parseResponse(client['data-sources']['hpvc-managers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesHpvcManagersIdKey(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/hpvc-managers/:id', args] as const
}

export function useGetDataSourcesHpvcManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
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
        ? getGetDataSourcesHpvcManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpvc-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesHpvcManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
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
        ? getGetDataSourcesHpvcManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['hpvc-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesHpvcManagersIdKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id', 'PUT'] as const
}

export function usePutDataSourcesHpvcManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesHpvcManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['hpvc-managers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesHpvcManagersIdKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesHpvcManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesHpvcManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>
        },
      ) =>
        parseResponse(client['data-sources']['hpvc-managers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesHpvcManagersIdDisableKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id/disable', 'POST'] as const
}

export function usePostDataSourcesHpvcManagersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpvcManagersIdDisableKey()
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
            (typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['hpvc-managers'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesHpvcManagersIdEnableKey() {
  return ['data-sources', '/data-sources/hpvc-managers/:id/enable', 'POST'] as const
}

export function usePostDataSourcesHpvcManagersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesHpvcManagersIdEnableKey()
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
            (typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['hpvc-managers'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesJuniperSwitchesKey() {
  return ['data-sources', '/data-sources/juniper-switches'] as const
}

export function useGetDataSourcesJuniperSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
        >
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
        ? getGetDataSourcesJuniperSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['juniper-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesJuniperSwitches<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
        >
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
        ? getGetDataSourcesJuniperSwitchesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['juniper-switches'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesJuniperSwitchesKey() {
  return ['data-sources', '/data-sources/juniper-switches', 'POST'] as const
}

export function usePostDataSourcesJuniperSwitches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesJuniperSwitchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']> },
      ) => parseResponse(client['data-sources']['juniper-switches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesJuniperSwitchesIdKey(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id', args] as const
}

export function useGetDataSourcesJuniperSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
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
        ? getGetDataSourcesJuniperSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['juniper-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesJuniperSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
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
        ? getGetDataSourcesJuniperSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['juniper-switches'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesJuniperSwitchesIdKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id', 'PUT'] as const
}

export function usePutDataSourcesJuniperSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesJuniperSwitchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>
        },
      ) =>
        parseResponse(client['data-sources']['juniper-switches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesJuniperSwitchesIdKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesJuniperSwitchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesJuniperSwitchesIdKey()
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
            (typeof client)['data-sources']['juniper-switches'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['juniper-switches'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesJuniperSwitchesIdDisableKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/disable', 'POST'] as const
}

export function usePostDataSourcesJuniperSwitchesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesJuniperSwitchesIdDisableKey()
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
            (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['juniper-switches'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesJuniperSwitchesIdEnableKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/enable', 'POST'] as const
}

export function usePostDataSourcesJuniperSwitchesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesJuniperSwitchesIdEnableKey()
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
            (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['juniper-switches'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesJuniperSwitchesIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/juniper-switches/:id/snmp-config', args] as const
}

export function useGetDataSourcesJuniperSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesJuniperSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesJuniperSwitchesIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesJuniperSwitchesIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
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
          client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesJuniperSwitchesIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/juniper-switches/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesJuniperSwitchesIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesJuniperSwitchesIdSnmpConfigKey()
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
            (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['juniper-switches'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesNsxvManagersKey() {
  return ['data-sources', '/data-sources/nsxv-managers'] as const
}

export function useGetDataSourcesNsxvManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
        >
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
        ? getGetDataSourcesNsxvManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['nsxv-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesNsxvManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
        >
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
        ? getGetDataSourcesNsxvManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['nsxv-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesNsxvManagersKey() {
  return ['data-sources', '/data-sources/nsxv-managers', 'POST'] as const
}

export function usePostDataSourcesNsxvManagers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesNsxvManagersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']> },
      ) => parseResponse(client['data-sources']['nsxv-managers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesNsxvManagersIdKey(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/nsxv-managers/:id', args] as const
}

export function useGetDataSourcesNsxvManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
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
        ? getGetDataSourcesNsxvManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['nsxv-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesNsxvManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
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
        ? getGetDataSourcesNsxvManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['nsxv-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesNsxvManagersIdKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id', 'PUT'] as const
}

export function usePutDataSourcesNsxvManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesNsxvManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['nsxv-managers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesNsxvManagersIdKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesNsxvManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesNsxvManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>
        },
      ) =>
        parseResponse(client['data-sources']['nsxv-managers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesNsxvManagersIdControllerClusterKey(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
) {
  return ['data-sources', '/data-sources/nsxv-managers/:id/controller-cluster', args] as const
}

export function useGetDataSourcesNsxvManagersIdControllerCluster<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
        ? getGetDataSourcesNsxvManagersIdControllerClusterKey(args)
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
                (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
          client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesNsxvManagersIdControllerCluster<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
        ? getGetDataSourcesNsxvManagersIdControllerClusterKey(args)
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
                (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
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
          client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesNsxvManagersIdControllerClusterKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/controller-cluster', 'PUT'] as const
}

export function usePutDataSourcesNsxvManagersIdControllerCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesNsxvManagersIdControllerClusterKey()
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
            (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesNsxvManagersIdDisableKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/disable', 'POST'] as const
}

export function usePostDataSourcesNsxvManagersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesNsxvManagersIdDisableKey()
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
            (typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['nsxv-managers'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesNsxvManagersIdEnableKey() {
  return ['data-sources', '/data-sources/nsxv-managers/:id/enable', 'POST'] as const
}

export function usePostDataSourcesNsxvManagersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesNsxvManagersIdEnableKey()
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
            (typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['nsxv-managers'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesPanoramaFirewallsKey() {
  return ['data-sources', '/data-sources/panorama-firewalls'] as const
}

export function useGetDataSourcesPanoramaFirewalls<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
        >
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
        ? getGetDataSourcesPanoramaFirewallsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['panorama-firewalls'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesPanoramaFirewalls<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
        >
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
        ? getGetDataSourcesPanoramaFirewallsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['panorama-firewalls'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesPanoramaFirewallsKey() {
  return ['data-sources', '/data-sources/panorama-firewalls', 'POST'] as const
}

export function usePostDataSourcesPanoramaFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesPanoramaFirewallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>
        },
      ) => parseResponse(client['data-sources']['panorama-firewalls'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesPanoramaFirewallsIdKey(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', args] as const
}

export function useGetDataSourcesPanoramaFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
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
        ? getGetDataSourcesPanoramaFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesPanoramaFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
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
        ? getGetDataSourcesPanoramaFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesPanoramaFirewallsIdKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', 'PUT'] as const
}

export function usePutDataSourcesPanoramaFirewallsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesPanoramaFirewallsIdKey()
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
            (typeof client)['data-sources']['panorama-firewalls'][':id']['$put']
          >
        },
      ) =>
        parseResponse(client['data-sources']['panorama-firewalls'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesPanoramaFirewallsIdKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesPanoramaFirewallsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesPanoramaFirewallsIdKey()
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
            (typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesPanoramaFirewallsIdDisableKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id/disable', 'POST'] as const
}

export function usePostDataSourcesPanoramaFirewallsIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesPanoramaFirewallsIdDisableKey()
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
            (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesPanoramaFirewallsIdEnableKey() {
  return ['data-sources', '/data-sources/panorama-firewalls/:id/enable', 'POST'] as const
}

export function usePostDataSourcesPanoramaFirewallsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesPanoramaFirewallsIdEnableKey()
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
            (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['panorama-firewalls'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesUcsManagersKey() {
  return ['data-sources', '/data-sources/ucs-managers'] as const
}

export function useGetDataSourcesUcsManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
        >
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
        ? getGetDataSourcesUcsManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['ucs-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesUcsManagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
        >
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
        ? getGetDataSourcesUcsManagersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['ucs-managers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesUcsManagersKey() {
  return ['data-sources', '/data-sources/ucs-managers', 'POST'] as const
}

export function usePostDataSourcesUcsManagers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesUcsManagersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']> },
      ) => parseResponse(client['data-sources']['ucs-managers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesUcsManagersIdKey(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id', args] as const
}

export function useGetDataSourcesUcsManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
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
        ? getGetDataSourcesUcsManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['ucs-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesUcsManagersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
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
        ? getGetDataSourcesUcsManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-sources']['ucs-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesUcsManagersIdKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id', 'PUT'] as const
}

export function usePutDataSourcesUcsManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesUcsManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>
        },
      ) => parseResponse(client['data-sources']['ucs-managers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesUcsManagersIdKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesUcsManagersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesUcsManagersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>
        },
      ) => parseResponse(client['data-sources']['ucs-managers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesUcsManagersIdDisableKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/disable', 'POST'] as const
}

export function usePostDataSourcesUcsManagersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesUcsManagersIdDisableKey()
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
            (typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['ucs-managers'][':id'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesUcsManagersIdEnableKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/enable', 'POST'] as const
}

export function usePostDataSourcesUcsManagersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesUcsManagersIdEnableKey()
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
            (typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['ucs-managers'][':id'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesUcsManagersIdSnmpConfigKey(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
) {
  return ['data-sources', '/data-sources/ucs-managers/:id/snmp-config', args] as const
}

export function useGetDataSourcesUcsManagersIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesUcsManagersIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
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
          client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesUcsManagersIdSnmpConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
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
        ? getGetDataSourcesUcsManagersIdSnmpConfigKey(args)
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
                (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
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
          client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesUcsManagersIdSnmpConfigKey() {
  return ['data-sources', '/data-sources/ucs-managers/:id/snmp-config', 'PUT'] as const
}

export function usePutDataSourcesUcsManagersIdSnmpConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesUcsManagersIdSnmpConfigKey()
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
            (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-sources']['ucs-managers'][':id']['snmp-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesVcentersKey() {
  return ['data-sources', '/data-sources/vcenters'] as const
}

export function useGetDataSourcesVcenters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
        >
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
        ? getGetDataSourcesVcentersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-sources'].vcenters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesVcenters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
        >
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
        ? getGetDataSourcesVcentersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-sources'].vcenters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataSourcesVcentersKey() {
  return ['data-sources', '/data-sources/vcenters', 'POST'] as const
}

export function usePostDataSourcesVcenters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['vcenters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesVcentersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['data-sources']['vcenters']['$post']> },
      ) => parseResponse(client['data-sources'].vcenters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataSourcesVcentersIdKey(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
) {
  return ['data-sources', '/data-sources/vcenters/:id', args] as const
}

export function useGetDataSourcesVcentersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
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
        ? getGetDataSourcesVcentersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-sources'].vcenters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourcesVcentersId<TError = unknown>(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
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
        ? getGetDataSourcesVcentersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-sources'].vcenters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataSourcesVcentersIdKey() {
  return ['data-sources', '/data-sources/vcenters/:id', 'PUT'] as const
}

export function usePutDataSourcesVcentersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataSourcesVcentersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']> },
      ) => parseResponse(client['data-sources'].vcenters[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataSourcesVcentersIdKey() {
  return ['data-sources', '/data-sources/vcenters/:id', 'DELETE'] as const
}

export function useDeleteDataSourcesVcentersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataSourcesVcentersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']> },
      ) => parseResponse(client['data-sources'].vcenters[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesVcentersIdDisableKey() {
  return ['data-sources', '/data-sources/vcenters/:id/disable', 'POST'] as const
}

export function usePostDataSourcesVcentersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesVcentersIdDisableKey()
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
            (typeof client)['data-sources']['vcenters'][':id']['disable']['$post']
          >
        },
      ) => parseResponse(client['data-sources'].vcenters[':id'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataSourcesVcentersIdEnableKey() {
  return ['data-sources', '/data-sources/vcenters/:id/enable', 'POST'] as const
}

export function usePostDataSourcesVcentersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataSourcesVcentersIdEnableKey()
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
            (typeof client)['data-sources']['vcenters'][':id']['enable']['$post']
          >
        },
      ) => parseResponse(client['data-sources'].vcenters[':id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesClustersKey(
  args: InferRequestType<typeof client.entities.clusters.$get>,
) {
  return ['entities', '/entities/clusters', args] as const
}

export function useGetEntitiesClusters<TError = unknown>(
  args: InferRequestType<typeof client.entities.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
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
        ? getGetEntitiesClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesClusters<TError = unknown>(
  args: InferRequestType<typeof client.entities.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
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
        ? getGetEntitiesClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesClustersIdKey(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
) {
  return ['entities', '/entities/clusters/:id', args] as const
}

export function useGetEntitiesClustersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
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
        ? getGetEntitiesClustersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.clusters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesClustersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
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
        ? getGetEntitiesClustersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.clusters)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.clusters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDatastoresKey(
  args: InferRequestType<typeof client.entities.datastores.$get>,
) {
  return ['entities', '/entities/datastores', args] as const
}

export function useGetEntitiesDatastores<TError = unknown>(
  args: InferRequestType<typeof client.entities.datastores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
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
        ? getGetEntitiesDatastoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.datastores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDatastores<TError = unknown>(
  args: InferRequestType<typeof client.entities.datastores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
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
        ? getGetEntitiesDatastoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entities.datastores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.datastores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDatastoresIdKey(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
) {
  return ['entities', '/entities/datastores/:id', args] as const
}

export function useGetEntitiesDatastoresId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
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
        ? getGetEntitiesDatastoresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.datastores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDatastoresId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
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
        ? getGetEntitiesDatastoresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.datastores)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.datastores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDistributedVirtualPortgroupsKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-portgroups', args] as const
}

export function useGetEntitiesDistributedVirtualPortgroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
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
        ? getGetEntitiesDistributedVirtualPortgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['distributed-virtual-portgroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDistributedVirtualPortgroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
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
        ? getGetEntitiesDistributedVirtualPortgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['distributed-virtual-portgroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDistributedVirtualPortgroupsIdKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-portgroups/:id', args] as const
}

export function useGetEntitiesDistributedVirtualPortgroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
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
        ? getGetEntitiesDistributedVirtualPortgroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['distributed-virtual-portgroups'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDistributedVirtualPortgroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
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
        ? getGetEntitiesDistributedVirtualPortgroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['distributed-virtual-portgroups'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDistributedVirtualSwitchesKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-switches', args] as const
}

export function useGetEntitiesDistributedVirtualSwitches<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
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
        ? getGetEntitiesDistributedVirtualSwitchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['distributed-virtual-switches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDistributedVirtualSwitches<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
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
        ? getGetEntitiesDistributedVirtualSwitchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['distributed-virtual-switches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['distributed-virtual-switches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesDistributedVirtualSwitchesIdKey(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
) {
  return ['entities', '/entities/distributed-virtual-switches/:id', args] as const
}

export function useGetEntitiesDistributedVirtualSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
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
        ? getGetEntitiesDistributedVirtualSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['distributed-virtual-switches'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesDistributedVirtualSwitchesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
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
        ? getGetEntitiesDistributedVirtualSwitchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['distributed-virtual-switches'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFirewallRulesKey(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
) {
  return ['entities', '/entities/firewall-rules', args] as const
}

export function useGetEntitiesFirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
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
        ? getGetEntitiesFirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['firewall-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFirewallRules<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
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
        ? getGetEntitiesFirewallRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['firewall-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFirewallRulesIdKey(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
) {
  return ['entities', '/entities/firewall-rules/:id', args] as const
}

export function useGetEntitiesFirewallRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
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
        ? getGetEntitiesFirewallRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['firewall-rules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFirewallRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
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
        ? getGetEntitiesFirewallRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['firewall-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['firewall-rules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFirewallsKey(
  args: InferRequestType<typeof client.entities.firewalls.$get>,
) {
  return ['entities', '/entities/firewalls', args] as const
}

export function useGetEntitiesFirewalls<TError = unknown>(
  args: InferRequestType<typeof client.entities.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
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
        ? getGetEntitiesFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFirewalls<TError = unknown>(
  args: InferRequestType<typeof client.entities.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
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
        ? getGetEntitiesFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.firewalls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFirewallsIdKey(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
) {
  return ['entities', '/entities/firewalls/:id', args] as const
}

export function useGetEntitiesFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
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
        ? getGetEntitiesFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.firewalls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFirewallsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
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
        ? getGetEntitiesFirewallsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.firewalls)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.firewalls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFlowsKey(args: InferRequestType<typeof client.entities.flows.$get>) {
  return ['entities', '/entities/flows', args] as const
}

export function useGetEntitiesFlows<TError = unknown>(
  args: InferRequestType<typeof client.entities.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesFlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFlows<TError = unknown>(
  args: InferRequestType<typeof client.entities.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesFlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.flows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFlowsIdKey(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
) {
  return ['entities', '/entities/flows/:id', args] as const
}

export function useGetEntitiesFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
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
        ? getGetEntitiesFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
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
        ? getGetEntitiesFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.flows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFoldersKey(
  args: InferRequestType<typeof client.entities.folders.$get>,
) {
  return ['entities', '/entities/folders', args] as const
}

export function useGetEntitiesFolders<TError = unknown>(
  args: InferRequestType<typeof client.entities.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
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
        ? getGetEntitiesFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFolders<TError = unknown>(
  args: InferRequestType<typeof client.entities.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
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
        ? getGetEntitiesFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesFoldersIdKey(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
) {
  return ['entities', '/entities/folders/:id', args] as const
}

export function useGetEntitiesFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
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
        ? getGetEntitiesFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
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
        ? getGetEntitiesFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.folders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesHostsKey(args: InferRequestType<typeof client.entities.hosts.$get>) {
  return ['entities', '/entities/hosts', args] as const
}

export function useGetEntitiesHosts<TError = unknown>(
  args: InferRequestType<typeof client.entities.hosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesHostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.hosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesHosts<TError = unknown>(
  args: InferRequestType<typeof client.entities.hosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesHostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.hosts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.hosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesHostsIdKey(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
) {
  return ['entities', '/entities/hosts/:id', args] as const
}

export function useGetEntitiesHostsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
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
        ? getGetEntitiesHostsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.hosts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesHostsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
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
        ? getGetEntitiesHostsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.hosts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.hosts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesIpSetsKey(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
) {
  return ['entities', '/entities/ip-sets', args] as const
}

export function useGetEntitiesIpSets<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntitiesIpSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['ip-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesIpSets<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntitiesIpSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['ip-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['ip-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesIpSetsIdKey(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
) {
  return ['entities', '/entities/ip-sets/:id', args] as const
}

export function useGetEntitiesIpSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
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
        ? getGetEntitiesIpSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['ip-sets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesIpSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
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
        ? getGetEntitiesIpSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['ip-sets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['ip-sets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesLayer2NetworksKey(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
) {
  return ['entities', '/entities/layer2-networks', args] as const
}

export function useGetEntitiesLayer2Networks<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
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
        ? getGetEntitiesLayer2NetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['layer2-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesLayer2Networks<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
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
        ? getGetEntitiesLayer2NetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['layer2-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesLayer2NetworksIdKey(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
) {
  return ['entities', '/entities/layer2-networks/:id', args] as const
}

export function useGetEntitiesLayer2NetworksId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
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
        ? getGetEntitiesLayer2NetworksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['layer2-networks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesLayer2NetworksId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
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
        ? getGetEntitiesLayer2NetworksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['layer2-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['layer2-networks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEntitiesNamesKey() {
  return ['entities', '/entities/names', 'POST'] as const
}

export function usePostEntitiesNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.names.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.entities.names.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitiesNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.entities.names.$post> }) =>
        parseResponse(client.entities.names.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesNamesIdKey(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
) {
  return ['entities', '/entities/names/:id', args] as const
}

export function useGetEntitiesNamesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
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
        ? getGetEntitiesNamesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.names[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesNamesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
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
        ? getGetEntitiesNamesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.names)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.names[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesNsxManagersKey(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
) {
  return ['entities', '/entities/nsx-managers', args] as const
}

export function useGetEntitiesNsxManagers<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
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
        ? getGetEntitiesNsxManagersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['nsx-managers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesNsxManagers<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
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
        ? getGetEntitiesNsxManagersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['nsx-managers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesNsxManagersIdKey(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
) {
  return ['entities', '/entities/nsx-managers/:id', args] as const
}

export function useGetEntitiesNsxManagersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
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
        ? getGetEntitiesNsxManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['nsx-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesNsxManagersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
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
        ? getGetEntitiesNsxManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['nsx-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['nsx-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesProblemsKey(
  args: InferRequestType<typeof client.entities.problems.$get>,
) {
  return ['entities', '/entities/problems', args] as const
}

export function useGetEntitiesProblems<TError = unknown>(
  args: InferRequestType<typeof client.entities.problems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
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
        ? getGetEntitiesProblemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.problems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesProblems<TError = unknown>(
  args: InferRequestType<typeof client.entities.problems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
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
        ? getGetEntitiesProblemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.problems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.problems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesProblemsIdKey(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
) {
  return ['entities', '/entities/problems/:id', args] as const
}

export function useGetEntitiesProblemsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
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
        ? getGetEntitiesProblemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.problems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesProblemsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
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
        ? getGetEntitiesProblemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.problems)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.problems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesSecurityGroupsKey(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
) {
  return ['entities', '/entities/security-groups', args] as const
}

export function useGetEntitiesSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
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
        ? getGetEntitiesSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
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
        ? getGetEntitiesSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesSecurityGroupsIdKey(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
) {
  return ['entities', '/entities/security-groups/:id', args] as const
}

export function useGetEntitiesSecurityGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
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
        ? getGetEntitiesSecurityGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['security-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesSecurityGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
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
        ? getGetEntitiesSecurityGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['security-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesSecurityTagsKey(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
) {
  return ['entities', '/entities/security-tags', args] as const
}

export function useGetEntitiesSecurityTags<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
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
        ? getGetEntitiesSecurityTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesSecurityTags<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
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
        ? getGetEntitiesSecurityTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesSecurityTagsIdKey(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
) {
  return ['entities', '/entities/security-tags/:id', args] as const
}

export function useGetEntitiesSecurityTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
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
        ? getGetEntitiesSecurityTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesSecurityTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
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
        ? getGetEntitiesSecurityTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['security-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['security-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesServiceGroupsKey(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
) {
  return ['entities', '/entities/service-groups', args] as const
}

export function useGetEntitiesServiceGroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
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
        ? getGetEntitiesServiceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['service-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesServiceGroups<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
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
        ? getGetEntitiesServiceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['service-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesServiceGroupsIdKey(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
) {
  return ['entities', '/entities/service-groups/:id', args] as const
}

export function useGetEntitiesServiceGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
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
        ? getGetEntitiesServiceGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['service-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesServiceGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
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
        ? getGetEntitiesServiceGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['service-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['service-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesServicesKey(
  args: InferRequestType<typeof client.entities.services.$get>,
) {
  return ['entities', '/entities/services', args] as const
}

export function useGetEntitiesServices<TError = unknown>(
  args: InferRequestType<typeof client.entities.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
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
        ? getGetEntitiesServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesServices<TError = unknown>(
  args: InferRequestType<typeof client.entities.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
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
        ? getGetEntitiesServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesServicesIdKey(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
) {
  return ['entities', '/entities/services/:id', args] as const
}

export function useGetEntitiesServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
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
        ? getGetEntitiesServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
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
        ? getGetEntitiesServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVcDatacentersKey(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
) {
  return ['entities', '/entities/vc-datacenters', args] as const
}

export function useGetEntitiesVcDatacenters<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
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
        ? getGetEntitiesVcDatacentersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vc-datacenters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVcDatacenters<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
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
        ? getGetEntitiesVcDatacentersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vc-datacenters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVcDatacentersIdKey(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
) {
  return ['entities', '/entities/vc-datacenters/:id', args] as const
}

export function useGetEntitiesVcDatacentersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
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
        ? getGetEntitiesVcDatacentersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vc-datacenters'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVcDatacentersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
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
        ? getGetEntitiesVcDatacentersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vc-datacenters'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vc-datacenters'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVcenterManagersKey(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
) {
  return ['entities', '/entities/vcenter-managers', args] as const
}

export function useGetEntitiesVcenterManagers<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
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
        ? getGetEntitiesVcenterManagersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vcenter-managers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVcenterManagers<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
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
        ? getGetEntitiesVcenterManagersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['vcenter-managers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVcenterManagersIdKey(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
) {
  return ['entities', '/entities/vcenter-managers/:id', args] as const
}

export function useGetEntitiesVcenterManagersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
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
        ? getGetEntitiesVcenterManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['vcenter-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVcenterManagersId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
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
        ? getGetEntitiesVcenterManagersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['vcenter-managers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.entities['vcenter-managers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVmknicsKey(
  args: InferRequestType<typeof client.entities.vmknics.$get>,
) {
  return ['entities', '/entities/vmknics', args] as const
}

export function useGetEntitiesVmknics<TError = unknown>(
  args: InferRequestType<typeof client.entities.vmknics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
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
        ? getGetEntitiesVmknicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vmknics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVmknics<TError = unknown>(
  args: InferRequestType<typeof client.entities.vmknics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
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
        ? getGetEntitiesVmknicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vmknics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vmknics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVmknicsIdKey(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
) {
  return ['entities', '/entities/vmknics/:id', args] as const
}

export function useGetEntitiesVmknicsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
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
        ? getGetEntitiesVmknicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vmknics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVmknicsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
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
        ? getGetEntitiesVmknicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vmknics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vmknics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVmsKey(args: InferRequestType<typeof client.entities.vms.$get>) {
  return ['entities', '/entities/vms', args] as const
}

export function useGetEntitiesVms<TError = unknown>(
  args: InferRequestType<typeof client.entities.vms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesVmsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVms<TError = unknown>(
  args: InferRequestType<typeof client.entities.vms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesVmsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVmsIdKey(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
) {
  return ['entities', '/entities/vms/:id', args] as const
}

export function useGetEntitiesVmsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntitiesVmsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVmsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntitiesVmsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVnicsKey(args: InferRequestType<typeof client.entities.vnics.$get>) {
  return ['entities', '/entities/vnics', args] as const
}

export function useGetEntitiesVnics<TError = unknown>(
  args: InferRequestType<typeof client.entities.vnics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesVnicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vnics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVnics<TError = unknown>(
  args: InferRequestType<typeof client.entities.vnics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesVnicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.vnics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vnics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesVnicsIdKey(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
) {
  return ['entities', '/entities/vnics/:id', args] as const
}

export function useGetEntitiesVnicsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
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
        ? getGetEntitiesVnicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vnics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesVnicsId<TError = unknown>(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
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
        ? getGetEntitiesVnicsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities.vnics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities.vnics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsApplicationsKey(
  args: InferRequestType<typeof client.groups.applications.$get>,
) {
  return ['groups', '/groups/applications', args] as const
}

export function useGetGroupsApplications<TError = unknown>(
  args: InferRequestType<typeof client.groups.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
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
        ? getGetGroupsApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsApplications<TError = unknown>(
  args: InferRequestType<typeof client.groups.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
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
        ? getGetGroupsApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsApplicationsKey() {
  return ['groups', '/groups/applications', 'POST'] as const
}

export function usePostGroupsApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.applications.$post> }) =>
        parseResponse(client.groups.applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsApplicationsIdKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
) {
  return ['groups', '/groups/applications/:id', args] as const
}

export function useGetGroupsApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
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
        ? getGetGroupsApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
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
        ? getGetGroupsApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsApplicationsIdKey() {
  return ['groups', '/groups/applications/:id', 'DELETE'] as const
}

export function useDeleteGroupsApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups.applications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups.applications)[':id']['$delete']> },
      ) => parseResponse(client.groups.applications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsApplicationsIdTiersKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
) {
  return ['groups', '/groups/applications/:id/tiers', args] as const
}

export function useGetGroupsApplicationsIdTiers<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
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
        ? getGetGroupsApplicationsIdTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications[':id'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsApplicationsIdTiers<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
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
        ? getGetGroupsApplicationsIdTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.applications[':id'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsApplicationsIdTiersKey() {
  return ['groups', '/groups/applications/:id/tiers', 'POST'] as const
}

export function usePostGroupsApplicationsIdTiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.applications)[':id']['tiers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsApplicationsIdTiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']> },
      ) => parseResponse(client.groups.applications[':id'].tiers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsApplicationsIdTiersTierIdKey(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
) {
  return ['groups', '/groups/applications/:id/tiers/:tier-id', args] as const
}

export function useGetGroupsApplicationsIdTiersTierId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
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
        ? getGetGroupsApplicationsIdTiersTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.groups.applications[':id'].tiers[':tier-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsApplicationsIdTiersTierId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
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
        ? getGetGroupsApplicationsIdTiersTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.groups.applications[':id'].tiers[':tier-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsApplicationsIdTiersTierIdKey() {
  return ['groups', '/groups/applications/:id/tiers/:tier-id', 'DELETE'] as const
}

export function useDeleteGroupsApplicationsIdTiersTierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsApplicationsIdTiersTierIdKey()
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
            (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups.applications[':id'].tiers[':tier-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsTiersTierIdKey(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['groups', '/groups/tiers/:tier-id', keyArgs] as const
}

export function useGetGroupsTiersTierId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
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
        ? getGetGroupsTiersTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.tiers[':tier-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsTiersTierId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
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
        ? getGetGroupsTiersTierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.tiers)[':tier-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.tiers[':tier-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoVersionKey() {
  return ['info', '/info/version'] as const
}

export function useGetInfoVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfraNodesKey() {
  return ['infra', '/infra/nodes'] as const
}

export function useGetInfraNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfraNodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.infra.nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfraNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfraNodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.infra.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.infra.nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfraNodesIdKey(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
) {
  return ['infra', '/infra/nodes/:id', args] as const
}

export function useGetInfraNodesId<TError = unknown>(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfraNodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.infra.nodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfraNodesId<TError = unknown>(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfraNodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.infra.nodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.infra.nodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMicroSegRecommendedRulesKey() {
  return ['micro-seg', '/micro-seg/recommended-rules', 'POST'] as const
}

export function usePostMicroSegRecommendedRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['micro-seg']['recommended-rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMicroSegRecommendedRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']> },
      ) => parseResponse(client['micro-seg']['recommended-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMicroSegRecommendedRulesNsxKey() {
  return ['micro-seg', '/micro-seg/recommended-rules/nsx', 'POST'] as const
}

export function usePostMicroSegRecommendedRulesNsx<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMicroSegRecommendedRulesNsxKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>
        },
      ) => parseResponse(client['micro-seg']['recommended-rules'].nsx.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchKey() {
  return ['search', '/search', 'POST'] as const
}

export function usePostSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.$post> }) =>
        parseResponse(client.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
