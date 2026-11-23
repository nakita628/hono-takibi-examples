import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getGetAppsKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function useGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAppsKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function usePostApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apps.$post> }) =>
        parseResponse(client.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
) {
  return ['apps', '/apps/:app_name', args] as const
}

export function useGetAppsAppName<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppName<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppNameKey() {
  return ['apps', '/apps/:app_name', 'DELETE'] as const
}

export function useDeleteAppsAppName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_name']['$delete']> },
      ) => parseResponse(client.apps[':app_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
) {
  return ['apps', '/apps/:app_name/machines', args] as const
}

export function useGetAppsAppNameMachines<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
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
        ? getGetAppsAppNameMachinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].machines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachines<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
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
        ? getGetAppsAppNameMachinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].machines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesKey() {
  return ['apps', '/apps/:app_name/machines', 'POST'] as const
}

export function usePostAppsAppNameMachines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']> },
      ) => parseResponse(client.apps[':app_name'].machines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id', args] as const
}

export function useGetAppsAppNameMachinesMachineId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
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
        ? getGetAppsAppNameMachinesMachineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':app_name'].machines[':machine_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
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
        ? getGetAppsAppNameMachinesMachineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':app_name'].machines[':machine_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':app_name'].machines[':machine_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppNameMachinesMachineIdKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id', 'DELETE'] as const
}

export function useDeleteAppsAppNameMachinesMachineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppNameMachinesMachineIdKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':app_name'].machines[':machine_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdCordonKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/cordon', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdCordon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdCordonKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].cordon.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdEventsKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/events', args] as const
}

export function useGetAppsAppNameMachinesMachineIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdEventsKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdEventsKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdExecKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/exec', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdExec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdExecKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].exec.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdLeaseKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', args] as const
}

export function useGetAppsAppNameMachinesMachineIdLease<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdLeaseKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].lease.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdLease<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdLeaseKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].lease.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdLeaseKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdLease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdLeaseKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].lease.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppNameMachinesMachineIdLeaseKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', 'DELETE'] as const
}

export function useDeleteAppsAppNameMachinesMachineIdLease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppNameMachinesMachineIdLeaseKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].lease.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdMetadataKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata', args] as const
}

export function useGetAppsAppNameMachinesMachineIdMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdMetadataKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdMetadataKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdMetadataKeyKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata/:key', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdMetadataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdMetadataKeyKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppNameMachinesMachineIdMetadataKeyKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata/:key', 'DELETE'] as const
}

export function useDeleteAppsAppNameMachinesMachineIdMetadataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppNameMachinesMachineIdMetadataKeyKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdPsKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/ps', args] as const
}

export function useGetAppsAppNameMachinesMachineIdPs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
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
        ? getGetAppsAppNameMachinesMachineIdPsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].ps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdPs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
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
        ? getGetAppsAppNameMachinesMachineIdPsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].ps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdRestartKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/restart', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdRestartKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].restart.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdSignalKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/signal', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdSignal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdSignalKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].signal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdStartKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/start', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdStartKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdStopKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/stop', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdStopKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppNameMachinesMachineIdUncordonKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/uncordon', 'POST'] as const
}

export function usePostAppsAppNameMachinesMachineIdUncordon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameMachinesMachineIdUncordonKey()
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
            (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].machines[':machine_id'].uncordon.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdVersionsKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/versions', args] as const
}

export function useGetAppsAppNameMachinesMachineIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdVersionsKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdVersionsKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppNameMachinesMachineIdWaitKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/wait', args] as const
}

export function useGetAppsAppNameMachinesMachineIdWait<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdWaitKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].wait.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameMachinesMachineIdWait<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
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
        ? getGetAppsAppNameMachinesMachineIdWaitKey(args)
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
                (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
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
          client.apps[':app_name'].machines[':machine_id'].wait.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppNameVolumesKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
) {
  return ['apps', '/apps/:app_name/volumes', args] as const
}

export function useGetAppsAppNameVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
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
        ? getGetAppsAppNameVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
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
        ? getGetAppsAppNameVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_name'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameVolumesKey() {
  return ['apps', '/apps/:app_name/volumes', 'POST'] as const
}

export function usePostAppsAppNameVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']> },
      ) => parseResponse(client.apps[':app_name'].volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameVolumesVolumeIdKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id', args] as const
}

export function useGetAppsAppNameVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
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
        ? getGetAppsAppNameVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':app_name'].volumes[':volume_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
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
        ? getGetAppsAppNameVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':app_name'].volumes[':volume_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameVolumesVolumeIdKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id', 'POST'] as const
}

export function usePostAppsAppNameVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>
        },
      ) => parseResponse(client.apps[':app_name'].volumes[':volume_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppNameVolumesVolumeIdKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id', 'DELETE'] as const
}

export function useDeleteAppsAppNameVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppNameVolumesVolumeIdKey()
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
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':app_name'].volumes[':volume_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAppsAppNameVolumesVolumeIdExtendKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id/extend', 'PUT'] as const
}

export function usePutAppsAppNameVolumesVolumeIdExtend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppsAppNameVolumesVolumeIdExtendKey()
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
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].volumes[':volume_id'].extend.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppNameVolumesVolumeIdSnapshotsKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id/snapshots', args] as const
}

export function useGetAppsAppNameVolumesVolumeIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
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
        ? getGetAppsAppNameVolumesVolumeIdSnapshotsKey(args)
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
                (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
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
          client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppNameVolumesVolumeIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
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
        ? getGetAppsAppNameVolumesVolumeIdSnapshotsKey(args)
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
                (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
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
          client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppNameVolumesVolumeIdSnapshotsKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id/snapshots', 'POST'] as const
}

export function usePostAppsAppNameVolumesVolumeIdSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppNameVolumesVolumeIdSnapshotsKey()
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
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_name'].volumes[':volume_id'].snapshots.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
