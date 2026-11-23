import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProjectNameKey() {
  return ['{projectName}'] as const
}

export function getGetProjectNameZonesZonePoolsKey(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
) {
  return [':projectName', '/:projectName/zones/:zone/pools', args] as const
}

export function useGetProjectNameZonesZonePools<TError = unknown>(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
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
        ? getGetProjectNameZonesZonePoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':projectName'].zones[':zone'].pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectNameZonesZonePools<TError = unknown>(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
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
        ? getGetProjectNameZonesZonePoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':projectName'].zones[':zone'].pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsKey() {
  return [':projectName', '/:projectName/zones/:zone/pools', 'POST'] as const
}

export function usePostProjectNameZonesZonePools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectNameZonesZonePoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>
        },
      ) => parseResponse(client[':projectName'].zones[':zone'].pools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectNameZonesZonePoolsPoolNameKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName', args] as const
}

export function useGetProjectNameZonesZonePoolsPoolName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectNameZonesZonePoolsPoolName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsPoolNameKey() {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName', 'POST'] as const
}

export function usePostProjectNameZonesZonePoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectNameZonesZonePoolsPoolNameKey()
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
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectNameZonesZonePoolsPoolNameReplicasKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName/replicas', args] as const
}

export function useGetProjectNameZonesZonePoolsPoolNameReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameReplicasKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectNameZonesZonePoolsPoolNameReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameReplicasKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectNameZonesZonePoolsPoolNameReplicasReplicaNameKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
) {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName',
    args,
  ] as const
}

export function useGetProjectNameZonesZonePoolsPoolNameReplicasReplicaName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameReplicasReplicaNameKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
        ? getGetProjectNameZonesZonePoolsPoolNameReplicasReplicaNameKey(args)
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
                (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName',
    'POST',
  ] as const
}

export function usePostProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameKey()
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
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName/restart',
    'POST',
  ] as const
}

export function usePostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartKey()
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
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas[
            ':replicaName'
          ].restart.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsPoolNameResizeKey() {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName/resize', 'POST'] as const
}

export function usePostProjectNameZonesZonePoolsPoolNameResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectNameZonesZonePoolsPoolNameResizeKey()
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
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].resize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/updateTemplate',
    'POST',
  ] as const
}

export function usePostProjectNameZonesZonePoolsPoolNameUpdateTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateKey()
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
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].updateTemplate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
