import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCaCertificatesKey() {
  return ['ca_certificates'] as const
}

export function getCacheKey() {
  return ['cache'] as const
}

export function getCertificatesKey() {
  return ['certificates'] as const
}

export function getClusteringKey() {
  return ['clustering'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getConsumersKey() {
  return ['consumers'] as const
}

export function getDebugKey() {
  return ['debug'] as const
}

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getFilterChainsKey() {
  return ['filter-chains'] as const
}

export function getKeySetsKey() {
  return ['key-sets'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSnisKey() {
  return ['snis'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTimersKey() {
  return ['timers'] as const
}

export function getUpstreamsKey() {
  return ['upstreams'] as const
}

export function getVaultsKey() {
  return ['vaults'] as const
}

export function getEndpointKey() {
  return ['{endpoint}'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaCertificatesKey(
  args: InferRequestType<typeof client.ca_certificates.$get>,
) {
  return ['ca_certificates', '/ca_certificates', args] as const
}

export function useGetCaCertificates<TError = unknown>(
  args: InferRequestType<typeof client.ca_certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ca_certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaCertificates<TError = unknown>(
  args: InferRequestType<typeof client.ca_certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ca_certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCaCertificatesKey() {
  return ['ca_certificates', '/ca_certificates', 'POST'] as const
}

export function usePostCaCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ca_certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCaCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ca_certificates.$post> }) =>
        parseResponse(client.ca_certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCaCertificatesCaCertificateIdKey(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
) {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', args] as const
}

export function useGetCaCertificatesCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
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
        ? getGetCaCertificatesCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ca_certificates[':ca_certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaCertificatesCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
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
        ? getGetCaCertificatesCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ca_certificates[':ca_certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCaCertificatesCaCertificateIdKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'PUT'] as const
}

export function usePutCaCertificatesCaCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCaCertificatesCaCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']> },
      ) => parseResponse(client.ca_certificates[':ca_certificate_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCaCertificatesCaCertificateIdKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'DELETE'] as const
}

export function useDeleteCaCertificatesCaCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCaCertificatesCaCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>
        },
      ) => parseResponse(client.ca_certificates[':ca_certificate_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCaCertificatesCaCertificateIdKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'PATCH'] as const
}

export function usePatchCaCertificatesCaCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCaCertificatesCaCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>
        },
      ) => parseResponse(client.ca_certificates[':ca_certificate_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesKey(args: InferRequestType<typeof client.certificates.$get>) {
  return ['certificates', '/certificates', args] as const
}

export function useGetCertificates<TError = unknown>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificates<TError = unknown>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCertificatesKey() {
  return ['certificates', '/certificates', 'POST'] as const
}

export function usePostCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.certificates.$post> }) =>
        parseResponse(client.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesCertificateIdKey(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
) {
  return ['certificates', '/certificates/:certificate_id', args] as const
}

export function useGetCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
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
        ? getGetCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates[':certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
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
        ? getGetCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates[':certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCertificatesCertificateIdKey() {
  return ['certificates', '/certificates/:certificate_id', 'PUT'] as const
}

export function usePutCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCertificatesCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.certificates)[':certificate_id']['$put']> },
      ) => parseResponse(client.certificates[':certificate_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCertificatesCertificateIdKey() {
  return ['certificates', '/certificates/:certificate_id', 'DELETE'] as const
}

export function useDeleteCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCertificatesCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']> },
      ) => parseResponse(client.certificates[':certificate_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCertificatesCertificateIdKey() {
  return ['certificates', '/certificates/:certificate_id', 'PATCH'] as const
}

export function usePatchCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCertificatesCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']> },
      ) => parseResponse(client.certificates[':certificate_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesCertificateNameOrIdSnisKey(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
) {
  return ['certificates', '/certificates/:certificate_name_or_id/snis', args] as const
}

export function useGetCertificatesCertificateNameOrIdSnis<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
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
        ? getGetCertificatesCertificateNameOrIdSnisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.certificates[':certificate_name_or_id'].snis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesCertificateNameOrIdSnis<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
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
        ? getGetCertificatesCertificateNameOrIdSnisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.certificates[':certificate_name_or_id'].snis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCertificatesCertificateNameOrIdSnisKey() {
  return ['certificates', '/certificates/:certificate_name_or_id/snis', 'POST'] as const
}

export function usePostCertificatesCertificateNameOrIdSnis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCertificatesCertificateNameOrIdSnisKey()
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
            (typeof client.certificates)[':certificate_name_or_id']['snis']['$post']
          >
        },
      ) =>
        parseResponse(
          client.certificates[':certificate_name_or_id'].snis.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesCertificateIdSnisSniNameOrIdKey(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
) {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', args] as const
}

export function useGetCertificatesCertificateIdSnisSniNameOrId<TError = unknown>(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
        ? getGetCertificatesCertificateIdSnisSniNameOrIdKey(args)
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
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesCertificateIdSnisSniNameOrId<TError = unknown>(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
        ? getGetCertificatesCertificateIdSnisSniNameOrIdKey(args)
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
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCertificatesCertificateIdSnisSniNameOrIdKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'PUT'] as const
}

export function usePutCertificatesCertificateIdSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCertificatesCertificateIdSnisSniNameOrIdKey()
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
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCertificatesCertificateIdSnisSniNameOrIdKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'DELETE'] as const
}

export function useDeleteCertificatesCertificateIdSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCertificatesCertificateIdSnisSniNameOrIdKey()
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
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCertificatesCertificateIdSnisSniNameOrIdKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'PATCH'] as const
}

export function usePatchCertificatesCertificateIdSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCertificatesCertificateIdSnisSniNameOrIdKey()
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
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersKey(args: InferRequestType<typeof client.consumers.$get>) {
  return ['consumers', '/consumers', args] as const
}

export function useGetConsumers<TError = unknown>(
  args: InferRequestType<typeof client.consumers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConsumersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumers<TError = unknown>(
  args: InferRequestType<typeof client.consumers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConsumersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConsumersKey() {
  return ['consumers', '/consumers', 'POST'] as const
}

export function usePostConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.consumers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.consumers.$post> }) =>
        parseResponse(client.consumers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersConsumerUsernameOrIdKey(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
) {
  return ['consumers', '/consumers/:consumer_username_or_id', args] as const
}

export function useGetConsumersConsumerUsernameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
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
        ? getGetConsumersConsumerUsernameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumers[':consumer_username_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersConsumerUsernameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
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
        ? getGetConsumersConsumerUsernameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.consumers[':consumer_username_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConsumersConsumerUsernameOrIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'PUT'] as const
}

export function usePutConsumersConsumerUsernameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumersConsumerUsernameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']> },
      ) => parseResponse(client.consumers[':consumer_username_or_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConsumersConsumerUsernameOrIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'DELETE'] as const
}

export function useDeleteConsumersConsumerUsernameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumersConsumerUsernameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>
        },
      ) => parseResponse(client.consumers[':consumer_username_or_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConsumersConsumerUsernameOrIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'PATCH'] as const
}

export function usePatchConsumersConsumerUsernameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConsumersConsumerUsernameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>
        },
      ) => parseResponse(client.consumers[':consumer_username_or_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersConsumerUsernameOrIdPluginsKey(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
) {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins', args] as const
}

export function useGetConsumersConsumerUsernameOrIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
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
        ? getGetConsumersConsumerUsernameOrIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersConsumerUsernameOrIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
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
        ? getGetConsumersConsumerUsernameOrIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConsumersConsumerUsernameOrIdPluginsKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins', 'POST'] as const
}

export function usePostConsumersConsumerUsernameOrIdPlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersConsumerUsernameOrIdPluginsKey()
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
            (typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersConsumerUsernameOrIdPluginsPluginIdKey(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', args] as const
}

export function useGetConsumersConsumerUsernameOrIdPluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
        ? getGetConsumersConsumerUsernameOrIdPluginsPluginIdKey(args)
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
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersConsumerUsernameOrIdPluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
        ? getGetConsumersConsumerUsernameOrIdPluginsPluginIdKey(args)
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
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutConsumersConsumerUsernameOrIdPluginsPluginIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'PUT'] as const
}

export function usePutConsumersConsumerUsernameOrIdPluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumersConsumerUsernameOrIdPluginsPluginIdKey()
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
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'DELETE'] as const
}

export function useDeleteConsumersConsumerUsernameOrIdPluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdKey()
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
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchConsumersConsumerUsernameOrIdPluginsPluginIdKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'PATCH'] as const
}

export function usePatchConsumersConsumerUsernameOrIdPluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConsumersConsumerUsernameOrIdPluginsPluginIdKey()
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
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKeySetsKey(args: InferRequestType<(typeof client)['key-sets']['$get']>) {
  return ['key-sets', '/key-sets', args] as const
}

export function useGetKeySets<TError = unknown>(
  args: InferRequestType<(typeof client)['key-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeySetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeySets<TError = unknown>(
  args: InferRequestType<(typeof client)['key-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeySetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeySetsKey() {
  return ['key-sets', '/key-sets', 'POST'] as const
}

export function usePostKeySets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeySetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['key-sets']['$post']> }) =>
        parseResponse(client['key-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeySetsKeySetIdOrNameKey(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
) {
  return ['key-sets', '/key-sets/:key-set_id_or_name', args] as const
}

export function useGetKeySetsKeySetIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
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
        ? getGetKeySetsKeySetIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['key-sets'][':key-set_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeySetsKeySetIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
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
        ? getGetKeySetsKeySetIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['key-sets'][':key-set_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKeySetsKeySetIdOrNameKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'PUT'] as const
}

export function usePutKeySetsKeySetIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKeySetsKeySetIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']> },
      ) => parseResponse(client['key-sets'][':key-set_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeySetsKeySetIdOrNameKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'DELETE'] as const
}

export function useDeleteKeySetsKeySetIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeySetsKeySetIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']> },
      ) => parseResponse(client['key-sets'][':key-set_id_or_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchKeySetsKeySetIdOrNameKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'PATCH'] as const
}

export function usePatchKeySetsKeySetIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKeySetsKeySetIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']> },
      ) => parseResponse(client['key-sets'][':key-set_id_or_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function useGetKeys<TError = unknown>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKeys<TError = unknown>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostKeysKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function usePostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.keys.$post> }) =>
        parseResponse(client.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyIdOrNameKey(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
) {
  return ['keys', '/keys/:key_id_or_name', args] as const
}

export function useGetKeysKeyIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
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
        ? getGetKeysKeyIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
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
        ? getGetKeysKeyIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKeysKeyIdOrNameKey() {
  return ['keys', '/keys/:key_id_or_name', 'PUT'] as const
}

export function usePutKeysKeyIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKeysKeyIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']> },
      ) => parseResponse(client.keys[':key_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeysKeyIdOrNameKey() {
  return ['keys', '/keys/:key_id_or_name', 'DELETE'] as const
}

export function useDeleteKeysKeyIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysKeyIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']> },
      ) => parseResponse(client.keys[':key_id_or_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchKeysKeyIdOrNameKey() {
  return ['keys', '/keys/:key_id_or_name', 'PATCH'] as const
}

export function usePatchKeysKeyIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKeysKeyIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']> },
      ) => parseResponse(client.keys[':key_id_or_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsKey(args: InferRequestType<typeof client.plugins.$get>) {
  return ['plugins', '/plugins', args] as const
}

export function useGetPlugins<TError = unknown>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plugins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlugins<TError = unknown>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plugins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPluginsKey() {
  return ['plugins', '/plugins', 'POST'] as const
}

export function usePostPlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.plugins.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.plugins.$post> }) =>
        parseResponse(client.plugins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsPluginIdKey(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
) {
  return ['plugins', '/plugins/:plugin_id', args] as const
}

export function useGetPluginsPluginId<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
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
        ? getGetPluginsPluginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':plugin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsPluginId<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
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
        ? getGetPluginsPluginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':plugin_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPluginsPluginIdKey() {
  return ['plugins', '/plugins/:plugin_id', 'PUT'] as const
}

export function usePutPluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPluginsPluginIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plugins)[':plugin_id']['$put']> },
      ) => parseResponse(client.plugins[':plugin_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePluginsPluginIdKey() {
  return ['plugins', '/plugins/:plugin_id', 'DELETE'] as const
}

export function useDeletePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePluginsPluginIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']> },
      ) => parseResponse(client.plugins[':plugin_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPluginsPluginIdKey() {
  return ['plugins', '/plugins/:plugin_id', 'PATCH'] as const
}

export function usePatchPluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPluginsPluginIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']> },
      ) => parseResponse(client.plugins[':plugin_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesKey(args: InferRequestType<typeof client.routes.$get>) {
  return ['routes', '/routes', args] as const
}

export function useGetRoutes<TError = unknown>(
  args: InferRequestType<typeof client.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.routes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoutes<TError = unknown>(
  args: InferRequestType<typeof client.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.routes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRoutesKey() {
  return ['routes', '/routes', 'POST'] as const
}

export function usePostRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.routes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.routes.$post> }) =>
        parseResponse(client.routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesRouteIdOrNameKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name', args] as const
}

export function useGetRoutesRouteIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
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
        ? getGetRoutesRouteIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes[':route_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesRouteIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
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
        ? getGetRoutesRouteIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routes[':route_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRoutesRouteIdOrNameKey() {
  return ['routes', '/routes/:route_id_or_name', 'PUT'] as const
}

export function usePutRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoutesRouteIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']> },
      ) => parseResponse(client.routes[':route_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRoutesRouteIdOrNameKey() {
  return ['routes', '/routes/:route_id_or_name', 'DELETE'] as const
}

export function useDeleteRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoutesRouteIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']> },
      ) => parseResponse(client.routes[':route_id_or_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoutesRouteIdOrNameKey() {
  return ['routes', '/routes/:route_id_or_name', 'PATCH'] as const
}

export function usePatchRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoutesRouteIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']> },
      ) => parseResponse(client.routes[':route_id_or_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesRouteIdOrNamePluginsKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name/plugins', args] as const
}

export function useGetRoutesRouteIdOrNamePlugins<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
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
        ? getGetRoutesRouteIdOrNamePluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.routes[':route_id_or_name'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesRouteIdOrNamePlugins<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
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
        ? getGetRoutesRouteIdOrNamePluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.routes[':route_id_or_name'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoutesRouteIdOrNamePluginsKey() {
  return ['routes', '/routes/:route_id_or_name/plugins', 'POST'] as const
}

export function usePostRoutesRouteIdOrNamePlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesRouteIdOrNamePluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>
        },
      ) => parseResponse(client.routes[':route_id_or_name'].plugins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesRouteIdOrNamePluginsPluginIdKey(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', args] as const
}

export function useGetRoutesRouteIdOrNamePluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
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
        ? getGetRoutesRouteIdOrNamePluginsPluginIdKey(args)
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
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
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
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesRouteIdOrNamePluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
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
        ? getGetRoutesRouteIdOrNamePluginsPluginIdKey(args)
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
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
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
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRoutesRouteIdOrNamePluginsPluginIdKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'PUT'] as const
}

export function usePutRoutesRouteIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoutesRouteIdOrNamePluginsPluginIdKey()
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
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRoutesRouteIdOrNamePluginsPluginIdKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'DELETE'] as const
}

export function useDeleteRoutesRouteIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoutesRouteIdOrNamePluginsPluginIdKey()
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
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRoutesRouteIdOrNamePluginsPluginIdKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'PATCH'] as const
}

export function usePatchRoutesRouteIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoutesRouteIdOrNamePluginsPluginIdKey()
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
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function useGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostServicesKey() {
  return ['services', '/services', 'POST'] as const
}

export function usePostServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.services.$post> }) =>
        parseResponse(client.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNameKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
) {
  return ['services', '/services/:service_id_or_name', args] as const
}

export function useGetServicesServiceIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
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
        ? getGetServicesServiceIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':service_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
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
        ? getGetServicesServiceIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':service_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdOrNameKey() {
  return ['services', '/services/:service_id_or_name', 'PUT'] as const
}

export function usePutServicesServiceIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':service_id_or_name']['$put']> },
      ) => parseResponse(client.services[':service_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdOrNameKey() {
  return ['services', '/services/:service_id_or_name', 'DELETE'] as const
}

export function useDeleteServicesServiceIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']> },
      ) => parseResponse(client.services[':service_id_or_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchServicesServiceIdOrNameKey() {
  return ['services', '/services/:service_id_or_name', 'PATCH'] as const
}

export function usePatchServicesServiceIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServicesServiceIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']> },
      ) => parseResponse(client.services[':service_id_or_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNamePluginsKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
) {
  return ['services', '/services/:service_id_or_nameplugins', args] as const
}

export function useGetServicesServiceIdOrNamePlugins<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
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
        ? getGetServicesServiceIdOrNamePluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':service_id_or_nameplugins'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrNamePlugins<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
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
        ? getGetServicesServiceIdOrNamePluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':service_id_or_nameplugins'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdOrNamePluginsKey() {
  return ['services', '/services/:service_id_or_nameplugins', 'POST'] as const
}

export function usePostServicesServiceIdOrNamePlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdOrNamePluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>
        },
      ) => parseResponse(client.services[':service_id_or_nameplugins'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNamePluginsPluginIdKey(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', args] as const
}

export function useGetServicesServiceIdOrNamePluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
        ? getGetServicesServiceIdOrNamePluginsPluginIdKey(args)
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
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
          client.services[':service_id_or_name'].plugins[':plugin_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrNamePluginsPluginId<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
        ? getGetServicesServiceIdOrNamePluginsPluginIdKey(args)
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
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
          client.services[':service_id_or_name'].plugins[':plugin_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdOrNamePluginsPluginIdKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'PUT'] as const
}

export function usePutServicesServiceIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdOrNamePluginsPluginIdKey()
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
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].plugins[':plugin_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdOrNamePluginsPluginIdKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'DELETE'] as const
}

export function useDeleteServicesServiceIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdOrNamePluginsPluginIdKey()
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
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].plugins[':plugin_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchServicesServiceIdOrNamePluginsPluginIdKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'PATCH'] as const
}

export function usePatchServicesServiceIdOrNamePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServicesServiceIdOrNamePluginsPluginIdKey()
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
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].plugins[':plugin_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNameRoutesKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
) {
  return ['services', '/services/:service_id_or_name/routes', args] as const
}

export function useGetServicesServiceIdOrNameRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
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
        ? getGetServicesServiceIdOrNameRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':service_id_or_name'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrNameRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
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
        ? getGetServicesServiceIdOrNameRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':service_id_or_name'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdOrNameRoutesKey() {
  return ['services', '/services/:service_id_or_name/routes', 'POST'] as const
}

export function usePostServicesServiceIdOrNameRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdOrNameRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>
        },
      ) => parseResponse(client.services[':service_id_or_name'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNameRoutesRouteIdOrNameKey(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
) {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', args] as const
}

export function useGetServicesServiceIdOrNameRoutesRouteIdOrName<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
        ? getGetServicesServiceIdOrNameRoutesRouteIdOrNameKey(args)
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
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrNameRoutesRouteIdOrName<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
        ? getGetServicesServiceIdOrNameRoutesRouteIdOrNameKey(args)
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
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdOrNameRoutesRouteIdOrNameKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'PUT'] as const
}

export function usePutServicesServiceIdOrNameRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdOrNameRoutesRouteIdOrNameKey()
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
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'DELETE'] as const
}

export function useDeleteServicesServiceIdOrNameRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameKey()
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
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchServicesServiceIdOrNameRoutesRouteIdOrNameKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'PATCH'] as const
}

export function usePatchServicesServiceIdOrNameRoutesRouteIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServicesServiceIdOrNameRoutesRouteIdOrNameKey()
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
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnisKey(args: InferRequestType<typeof client.snis.$get>) {
  return ['snis', '/snis', args] as const
}

export function useGetSnis<TError = unknown>(
  args: InferRequestType<typeof client.snis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.snis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSnis<TError = unknown>(
  args: InferRequestType<typeof client.snis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.snis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSnisKey() {
  return ['snis', '/snis', 'POST'] as const
}

export function usePostSnis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snis.$post> }) =>
        parseResponse(client.snis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnisSniNameOrIdKey(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
) {
  return ['snis', '/snis/:sni_name_or_id', args] as const
}

export function useGetSnisSniNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
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
        ? getGetSnisSniNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snis[':sni_name_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnisSniNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
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
        ? getGetSnisSniNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snis[':sni_name_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSnisSniNameOrIdKey() {
  return ['snis', '/snis/:sni_name_or_id', 'PUT'] as const
}

export function usePutSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSnisSniNameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']> },
      ) => parseResponse(client.snis[':sni_name_or_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSnisSniNameOrIdKey() {
  return ['snis', '/snis/:sni_name_or_id', 'DELETE'] as const
}

export function useDeleteSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnisSniNameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']> },
      ) => parseResponse(client.snis[':sni_name_or_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSnisSniNameOrIdKey() {
  return ['snis', '/snis/:sni_name_or_id', 'PATCH'] as const
}

export function usePatchSnisSniNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSnisSniNameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']> },
      ) => parseResponse(client.snis[':sni_name_or_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUpstreamsKey(args: InferRequestType<typeof client.upstreams.$get>) {
  return ['upstreams', '/upstreams', args] as const
}

export function useGetUpstreams<TError = unknown>(
  args: InferRequestType<typeof client.upstreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUpstreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.upstreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUpstreams<TError = unknown>(
  args: InferRequestType<typeof client.upstreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUpstreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.upstreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUpstreamsKey() {
  return ['upstreams', '/upstreams', 'POST'] as const
}

export function usePostUpstreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.upstreams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpstreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.upstreams.$post> }) =>
        parseResponse(client.upstreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUpstreamsUpstreamIdOrNameKey(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name', args] as const
}

export function useGetUpstreamsUpstreamIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
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
        ? getGetUpstreamsUpstreamIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.upstreams[':upstream_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUpstreamsUpstreamIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
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
        ? getGetUpstreamsUpstreamIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.upstreams[':upstream_id_or_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUpstreamsUpstreamIdOrNameKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'PUT'] as const
}

export function usePutUpstreamsUpstreamIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUpstreamsUpstreamIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']> },
      ) => parseResponse(client.upstreams[':upstream_id_or_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUpstreamsUpstreamIdOrNameKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'DELETE'] as const
}

export function useDeleteUpstreamsUpstreamIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUpstreamsUpstreamIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']> },
      ) => parseResponse(client.upstreams[':upstream_id_or_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUpstreamsUpstreamIdOrNameKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'PATCH'] as const
}

export function usePatchUpstreamsUpstreamIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUpstreamsUpstreamIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']> },
      ) => parseResponse(client.upstreams[':upstream_id_or_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUpstreamsUpstreamIdOrNameTargetsKey(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name/targets', args] as const
}

export function useGetUpstreamsUpstreamIdOrNameTargets<TError = unknown>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
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
        ? getGetUpstreamsUpstreamIdOrNameTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.upstreams[':upstream_id_or_name'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUpstreamsUpstreamIdOrNameTargets<TError = unknown>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
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
        ? getGetUpstreamsUpstreamIdOrNameTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.upstreams[':upstream_id_or_name'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUpstreamsUpstreamIdOrNameTargetsKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name/targets', 'POST'] as const
}

export function usePostUpstreamsUpstreamIdOrNameTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpstreamsUpstreamIdOrNameTargetsKey()
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
            (typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']
          >
        },
      ) =>
        parseResponse(client.upstreams[':upstream_id_or_name'].targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
) {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    args,
  ] as const
}

export function useGetUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<TError = unknown>(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
        ? getGetUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey(args)
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
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<TError = unknown>(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
        ? getGetUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey(args)
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
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'PUT',
  ] as const
}

export function usePutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey()
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
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
          >
        },
      ) =>
        parseResponse(
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'DELETE',
  ] as const
}

export function useDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey()
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
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'PATCH',
  ] as const
}

export function usePatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetKey()
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
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function useGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVaults<TError = unknown>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vaults.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVaultsKey() {
  return ['vaults', '/vaults', 'POST'] as const
}

export function usePostVaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vaults.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vaults.$post> }) =>
        parseResponse(client.vaults.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultsVaultIdOrPrefixKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id_or_prefix', args] as const
}

export function useGetVaultsVaultIdOrPrefix<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
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
        ? getGetVaultsVaultIdOrPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id_or_prefix'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultsVaultIdOrPrefix<TError = unknown>(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
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
        ? getGetVaultsVaultIdOrPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vaults[':vault_id_or_prefix'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVaultsVaultIdOrPrefixKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'PUT'] as const
}

export function usePutVaultsVaultIdOrPrefix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVaultsVaultIdOrPrefixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']> },
      ) => parseResponse(client.vaults[':vault_id_or_prefix'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultsVaultIdOrPrefixKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'DELETE'] as const
}

export function useDeleteVaultsVaultIdOrPrefix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultsVaultIdOrPrefixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']> },
      ) => parseResponse(client.vaults[':vault_id_or_prefix'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVaultsVaultIdOrPrefixKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'PATCH'] as const
}

export function usePatchVaultsVaultIdOrPrefix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVaultsVaultIdOrPrefixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']> },
      ) => parseResponse(client.vaults[':vault_id_or_prefix'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsKey() {
  return ['endpoints', '/endpoints'] as const
}

export function useGetEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsEndpointKey() {
  return [':endpoint', '/:endpoint', 'OPTIONS'] as const
}

export function useOptionsEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$options']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':endpoint']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':endpoint']['$options']> },
      ) => parseResponse(client[':endpoint'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadEndpointKey() {
  return [':endpoint', '/:endpoint', 'HEAD'] as const
}

export function useHeadEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$head']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':endpoint']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':endpoint']['$head']> }) =>
        parseResponse(client[':endpoint'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasEntityKey(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
) {
  return ['schemas', '/schemas/:entity', args] as const
}

export function useGetSchemasEntity<TError = unknown>(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSchemasEntityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasEntity<TError = unknown>(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSchemasEntityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchemasEntityValidateKey() {
  return ['schemas', '/schemas/:entity/validate', 'POST'] as const
}

export function usePostSchemasEntityValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schemas)[':entity']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemasEntityValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']> },
      ) => parseResponse(client.schemas[':entity'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasFiltersFilterNameKey(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
) {
  return ['schemas', '/schemas/filters/:filter_name', args] as const
}

export function useGetSchemasFiltersFilterName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
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
        ? getGetSchemasFiltersFilterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.filters[':filter_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasFiltersFilterName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
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
        ? getGetSchemasFiltersFilterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.filters[':filter_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchemasPluginsPluginNameKey(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
) {
  return ['schemas', '/schemas/plugins/:plugin_name', args] as const
}

export function useGetSchemasPluginsPluginName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
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
        ? getGetSchemasPluginsPluginNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.plugins[':plugin_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasPluginsPluginName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
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
        ? getGetSchemasPluginsPluginNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.plugins[':plugin_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchemasPluginsValidateKey() {
  return ['schemas', '/schemas/plugins/validate', 'POST'] as const
}

export function usePostSchemasPluginsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.plugins.validate.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemasPluginsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.schemas.plugins.validate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimersKey() {
  return ['timers', '/timers'] as const
}

export function useGetTimers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusDnsKey() {
  return ['status', '/status/dns'] as const
}

export function useGetStatusDns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusDnsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.dns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusDns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusDnsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.dns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsKey() {
  return ['tags', '/tags'] as const
}

export function useGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsKey(args: InferRequestType<(typeof client.tags)[':tags']['$get']>) {
  return ['tags', '/tags/:tags', args] as const
}

export function useGetTagsTags<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTags<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDebugClusterControlPlanesNodesLogLevelLogLevelKey() {
  return ['debug', '/debug/cluster/control-planes-nodes/log-level/:log_level', 'PUT'] as const
}

export function usePutDebugClusterControlPlanesNodesLogLevelLogLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDebugClusterControlPlanesNodesLogLevelLogLevelKey()
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
            (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
          >
        },
      ) =>
        parseResponse(
          client.debug.cluster['control-planes-nodes']['log-level'][':log_level'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDebugClusterLogLevelLogLevelKey() {
  return ['debug', '/debug/cluster/log-level/:log_level', 'PUT'] as const
}

export function usePutDebugClusterLogLevelLogLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDebugClusterLogLevelLogLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>
        },
      ) => parseResponse(client.debug.cluster['log-level'][':log_level'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDebugNodeLogLevelKey() {
  return ['debug', '/debug/node/log-level'] as const
}

export function useGetDebugNodeLogLevel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugNodeLogLevelKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.node['log-level'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugNodeLogLevel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugNodeLogLevelKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.node['log-level'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDebugNodeLogLevelLogLevelKey() {
  return ['debug', '/debug/node/log-level/:log_level', 'PUT'] as const
}

export function usePutDebugNodeLogLevelLogLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.debug.node)['log-level'][':log_level']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDebugNodeLogLevelLogLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']> },
      ) => parseResponse(client.debug.node['log-level'][':log_level'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasVaultsVaultNameKey(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
) {
  return ['schemas', '/schemas/vaults/:vault_name', args] as const
}

export function useGetSchemasVaultsVaultName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
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
        ? getGetSchemasVaultsVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.vaults[':vault_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasVaultsVaultName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
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
        ? getGetSchemasVaultsVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.vaults[':vault_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchemasVaultsVaultNameKey() {
  return ['schemas', '/schemas/vaults/:vault_name', 'POST'] as const
}

export function usePostSchemasVaultsVaultName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemasVaultsVaultNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']> },
      ) => parseResponse(client.schemas.vaults[':vault_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilterChainsKey() {
  return ['filter-chains', '/filter-chains'] as const
}

export function useGetFilterChains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilterChainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['filter-chains'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilterChains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilterChainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['filter-chains'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilterChainsKey() {
  return ['filter-chains', '/filter-chains', 'POST'] as const
}

export function usePostFilterChains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['filter-chains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilterChainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['filter-chains']['$post']> },
      ) => parseResponse(client['filter-chains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesRouteIdOrNameFilterChainsKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name/filter-chains', args] as const
}

export function useGetRoutesRouteIdOrNameFilterChains<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
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
        ? getGetRoutesRouteIdOrNameFilterChainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routes[':route_id_or_name']['filter-chains'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesRouteIdOrNameFilterChains<TError = unknown>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
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
        ? getGetRoutesRouteIdOrNameFilterChainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routes[':route_id_or_name']['filter-chains'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRoutesRouteIdOrNameFilterChainsKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains', 'POST'] as const
}

export function usePostRoutesRouteIdOrNameFilterChains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesRouteIdOrNameFilterChainsKey()
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
            (typeof client.routes)[':route_id_or_name']['filter-chains']['$post']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name']['filter-chains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRoutesRouteIdOrNameFilterChainsKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains', 'PATCH'] as const
}

export function usePatchRoutesRouteIdOrNameFilterChains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoutesRouteIdOrNameFilterChainsKey()
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
            (typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name']['filter-chains'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdOrNameFilterChainsKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
) {
  return ['services', '/services/:service_id_or_name/filter-chains', args] as const
}

export function useGetServicesServiceIdOrNameFilterChains<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
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
        ? getGetServicesServiceIdOrNameFilterChainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':service_id_or_name']['filter-chains'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOrNameFilterChains<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
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
        ? getGetServicesServiceIdOrNameFilterChainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':service_id_or_name']['filter-chains'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdOrNameFilterChainsKey() {
  return ['services', '/services/:service_id_or_name/filter-chains', 'POST'] as const
}

export function usePostServicesServiceIdOrNameFilterChains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdOrNameFilterChainsKey()
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
            (typeof client.services)[':service_id_or_name']['filter-chains']['$post']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name']['filter-chains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilterChainsFilterChainIdKey(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
) {
  return ['filter-chains', '/filter-chains/:filter_chain_id', args] as const
}

export function useGetFilterChainsFilterChainId<TError = unknown>(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
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
        ? getGetFilterChainsFilterChainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['filter-chains'][':filter_chain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilterChainsFilterChainId<TError = unknown>(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
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
        ? getGetFilterChainsFilterChainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['filter-chains'][':filter_chain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilterChainsFilterChainIdKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'PUT'] as const
}

export function usePutFilterChainsFilterChainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilterChainsFilterChainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']> },
      ) => parseResponse(client['filter-chains'][':filter_chain_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilterChainsFilterChainIdKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'DELETE'] as const
}

export function useDeleteFilterChainsFilterChainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilterChainsFilterChainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>
        },
      ) => parseResponse(client['filter-chains'][':filter_chain_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFilterChainsFilterChainIdKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'PATCH'] as const
}

export function usePatchFilterChainsFilterChainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilterChainsFilterChainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>
        },
      ) => parseResponse(client['filter-chains'][':filter_chain_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesRouteIdOrNameFilterChainsFilterChainIdKey(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
) {
  return ['routes', '/routes/:route_id_or_name/filter-chains/:filter_chain_id', args] as const
}

export function useGetRoutesRouteIdOrNameFilterChainsFilterChainId<TError = unknown>(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
        ? getGetRoutesRouteIdOrNameFilterChainsFilterChainIdKey(args)
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
                (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
          client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesRouteIdOrNameFilterChainsFilterChainId<TError = unknown>(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
        ? getGetRoutesRouteIdOrNameFilterChainsFilterChainIdKey(args)
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
                (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
          client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRoutesRouteIdOrNameFilterChainsFilterChainIdKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains/:filter_chain_id', 'PUT'] as const
}

export function usePutRoutesRouteIdOrNameFilterChainsFilterChainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoutesRouteIdOrNameFilterChainsFilterChainIdKey()
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
            (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRoutesRouteIdOrNameFilterChainIdKey() {
  return ['routes', '/routes/:route_id_or_name/:filter_chain_id', 'DELETE'] as const
}

export function useDeleteRoutesRouteIdOrNameFilterChainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoutesRouteIdOrNameFilterChainIdKey()
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
            (typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.routes[':route_id_or_name'][':filter_chain_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdKey() {
  return [
    'services',
    '/services/:service_id_or_name/filter-chains/:filter_chain_id',
    'DELETE',
  ] as const
}

export function useDeleteServicesServiceIdOrNameFilterChainsFilterChainId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdKey()
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
            (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':service_id_or_name']['filter-chains'][':filter_chain_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClusteringDataPlanesKey() {
  return ['clustering', '/clustering/data-planes'] as const
}

export function useGetClusteringDataPlanes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
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
        ? getGetClusteringDataPlanesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clustering['data-planes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusteringDataPlanes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
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
        ? getGetClusteringDataPlanesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clustering['data-planes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClusteringStatusKey() {
  return ['clustering', '/clustering/status'] as const
}

export function useGetClusteringStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusteringStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clustering.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusteringStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusteringStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clustering.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCacheKeyKey(args: InferRequestType<(typeof client.cache)[':key']['$get']>) {
  return ['cache', '/cache/:key', args] as const
}

export function useGetCacheKey<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacheKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCacheKey<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacheKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCacheKeyKey() {
  return ['cache', '/cache/:key', 'DELETE'] as const
}

export function useDeleteCacheKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cache)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCacheKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cache)[':key']['$delete']> },
      ) => parseResponse(client.cache[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCacheKey() {
  return ['cache', '/cache', 'DELETE'] as const
}

export function useDeleteCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cache.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigKey() {
  return ['config', '/config'] as const
}

export function useGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
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
