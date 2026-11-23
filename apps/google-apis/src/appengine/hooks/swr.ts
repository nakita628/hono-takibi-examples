import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getPostV1betaAppsKey() {
  return ['v1beta', '/v1beta/apps', 'POST'] as const
}

export function usePostV1betaApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1beta.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1beta.apps.$post> }) =>
        parseResponse(client.v1beta.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId', args] as const
}

export function useGetV1betaAppsAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1betaAppsAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1betaAppsAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId', 'PATCH'] as const
}

export function usePatchV1betaAppsAppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaAppsAppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']> },
      ) => parseResponse(client.v1beta.apps[':appsId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdAuthorizedCertificatesKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedCertificates', args] as const
}

export function useGetV1betaAppsAppsIdAuthorizedCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
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
        ? getGetV1betaAppsAppsIdAuthorizedCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdAuthorizedCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
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
        ? getGetV1betaAppsAppsIdAuthorizedCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdAuthorizedCertificatesKey() {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedCertificates', 'POST'] as const
}

export function usePostV1betaAppsAppsIdAuthorizedCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdAuthorizedCertificatesKey()
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
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    args,
  ] as const
}

export function useGetV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
        ? getGetV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
          client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
        ? getGetV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
          client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    'DELETE',
  ] as const
}

export function useDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    'PATCH',
  ] as const
}

export function usePatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdAuthorizedDomainsKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedDomains', args] as const
}

export function useGetV1betaAppsAppsIdAuthorizedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
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
        ? getGetV1betaAppsAppsIdAuthorizedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.apps[':appsId'].authorizedDomains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdAuthorizedDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
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
        ? getGetV1betaAppsAppsIdAuthorizedDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.apps[':appsId'].authorizedDomains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdDomainMappingsKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings', args] as const
}

export function useGetV1betaAppsAppsIdDomainMappings<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
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
        ? getGetV1betaAppsAppsIdDomainMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.apps[':appsId'].domainMappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdDomainMappings<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
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
        ? getGetV1betaAppsAppsIdDomainMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.apps[':appsId'].domainMappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdDomainMappingsKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings', 'POST'] as const
}

export function usePostV1betaAppsAppsIdDomainMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdDomainMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>
        },
      ) => parseResponse(client.v1beta.apps[':appsId'].domainMappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', args] as const
}

export function useGetV1betaAppsAppsIdDomainMappingsDomainMappingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
        ? getGetV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
          client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdDomainMappingsDomainMappingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
        ? getGetV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
          client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', 'DELETE'] as const
}

export function useDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', 'PATCH'] as const
}

export function usePatchV1betaAppsAppsIdDomainMappingsDomainMappingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdFirewallIngressRulesKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules', args] as const
}

export function useGetV1betaAppsAppsIdFirewallIngressRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
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
        ? getGetV1betaAppsAppsIdFirewallIngressRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdFirewallIngressRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
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
        ? getGetV1betaAppsAppsIdFirewallIngressRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdFirewallIngressRulesKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules', 'POST'] as const
}

export function usePostV1betaAppsAppsIdFirewallIngressRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdFirewallIngressRulesKey()
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
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', args] as const
}

export function useGetV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
        ? getGetV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
          client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
        ? getGetV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
          client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', 'DELETE'] as const
}

export function useDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', 'PATCH'] as const
}

export function usePatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules:batchUpdate', 'POST'] as const
}

export function usePostV1betaAppsAppsIdFirewallIngressRulesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateKey()
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
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].firewall['ingressRules:batchUpdate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdLocationsKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations', args] as const
}

export function useGetV1betaAppsAppsIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
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
        ? getGetV1betaAppsAppsIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
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
        ? getGetV1betaAppsAppsIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdLocationsLocationsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations/:locationsId', args] as const
}

export function useGetV1betaAppsAppsIdLocationsLocationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
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
        ? getGetV1betaAppsAppsIdLocationsLocationsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
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
          client.v1beta.apps[':appsId'].locations[':locationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdLocationsLocationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
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
        ? getGetV1betaAppsAppsIdLocationsLocationsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
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
          client.v1beta.apps[':appsId'].locations[':locationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdOperationsKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations', args] as const
}

export function useGetV1betaAppsAppsIdOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
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
        ? getGetV1betaAppsAppsIdOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
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
        ? getGetV1betaAppsAppsIdOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdOperationsOperationsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations/:operationsId', args] as const
}

export function useGetV1betaAppsAppsIdOperationsOperationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
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
        ? getGetV1betaAppsAppsIdOperationsOperationsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
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
          client.v1beta.apps[':appsId'].operations[':operationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdOperationsOperationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
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
        ? getGetV1betaAppsAppsIdOperationsOperationsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
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
          client.v1beta.apps[':appsId'].operations[':operationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services', args] as const
}

export function useGetV1betaAppsAppsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
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
        ? getGetV1betaAppsAppsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
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
        ? getGetV1betaAppsAppsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.apps[':appsId'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesServicesIdKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', args] as const
}

export function useGetV1betaAppsAppsIdServicesServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
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
        ? getGetV1betaAppsAppsIdServicesServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServicesServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
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
        ? getGetV1betaAppsAppsIdServicesServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', 'DELETE'] as const
}

export function useDeleteV1betaAppsAppsIdServicesServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaAppsAppsIdServicesServicesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdServicesServicesIdKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', 'PATCH'] as const
}

export function usePatchV1betaAppsAppsIdServicesServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaAppsAppsIdServicesServicesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesServicesIdVersionsKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions', args] as const
}

export function useGetV1betaAppsAppsIdServicesServicesIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServicesServicesIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions', 'POST'] as const
}

export function usePostV1betaAppsAppsIdServicesServicesIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdServicesServicesIdVersionsKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId', args] as const
}

export function useGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId',
    'DELETE',
  ] as const
}

export function useDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId',
    'PATCH',
  ] as const
}

export function usePatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances',
    args,
  ] as const
}

export function useGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstances<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[
            ':versionsId'
          ].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstances<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[
            ':versionsId'
          ].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId',
    args,
  ] as const
}

export function useGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
            ':instancesId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
        ? getGetV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdKey(args)
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
                (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
            ':instancesId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId',
    'DELETE',
  ] as const
}

export function useDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
            ':instancesId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId:debug',
    'POST',
  ] as const
}

export function usePostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugKey()
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
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
            ':instancesId:debug'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaAppsAppsIdRepairKey() {
  return ['v1beta', '/v1beta/apps/:appsId:repair', 'POST'] as const
}

export function usePostV1betaAppsAppsIdRepair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAppsAppsIdRepairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']> },
      ) => parseResponse(client.v1beta.apps[':appsId:repair'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaProjectsProjectsIdLocationsKey(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations', args] as const
}

export function useGetV1betaProjectsProjectsIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
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
        ? getGetV1betaProjectsProjectsIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.projects[':projectsId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProjectsProjectsIdLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
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
        ? getGetV1betaProjectsProjectsIdLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta.projects[':projectsId'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaProjectsProjectsIdLocationsLocationsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations/:locationsId', args] as const
}

export function useGetV1betaProjectsProjectsIdLocationsLocationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProjectsProjectsIdLocationsLocationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsKey() {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications',
    'POST',
  ] as const
}

export function usePostV1betaProjectsProjectsIdLocationsLocationsIdApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsKey()
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
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].applications.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId',
    args,
  ] as const
}

export function useGetV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
            ':applicationsId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
            ':applicationsId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairKey() {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId:repair',
    'POST',
  ] as const
}

export function usePostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairKey()
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
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
            ':applicationsId:repair'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations/:locationsId/operations', args] as const
}

export function useGetV1betaProjectsProjectsIdLocationsLocationsIdOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProjectsProjectsIdLocationsLocationsIdOperations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/operations/:operationsId',
    args,
  ] as const
}

export function useGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
            ':operationsId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
        ? getGetV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdKey(args)
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
                (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
            ':operationsId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
