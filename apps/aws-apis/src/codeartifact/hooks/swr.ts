import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionKey() {
  return [
    'v1',
    '/v1/repository/external-connection#domain&repository&external-connection',
    'POST',
  ] as const
}

export function usePostV1RepositoryExternalConnectionDomainRepositoryExternalConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionKey()
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
            (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.repository['external-connection#domain&repository&external-connection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionKey() {
  return [
    'v1',
    '/v1/repository/external-connection#domain&repository&external-connection',
    'DELETE',
  ] as const
}

export function useDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionKey()
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
            (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.repository['external-connection#domain&repository&external-connection'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageKey() {
  return [
    'v1',
    '/v1/package/versions/copy#domain&source-repository&destination-repository&format&package',
    'POST',
  ] as const
}

export function usePostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageKey()
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
            (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.versions[
            'copy#domain&source-repository&destination-repository&format&package'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainDomainKey(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domain#domain', keyArgs] as const
}

export function useGetV1DomainDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainDomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['domain#domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainDomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['domain#domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainDomainKey() {
  return ['v1', '/v1/domain#domain', 'POST'] as const
}

export function usePostV1DomainDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['domain#domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['domain#domain']['$post']> },
      ) => parseResponse(client.v1['domain#domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DomainDomainKey() {
  return ['v1', '/v1/domain#domain', 'DELETE'] as const
}

export function useDeleteV1DomainDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['domain#domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['domain#domain']['$delete']> },
      ) => parseResponse(client.v1['domain#domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RepositoryDomainRepositoryKey(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository#domain&repository', keyArgs] as const
}

export function useGetV1RepositoryDomainRepository<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RepositoryDomainRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['repository#domain&repository'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RepositoryDomainRepository<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RepositoryDomainRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['repository#domain&repository'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RepositoryDomainRepositoryKey() {
  return ['v1', '/v1/repository#domain&repository', 'PUT'] as const
}

export function usePutV1RepositoryDomainRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RepositoryDomainRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']> },
      ) => parseResponse(client.v1['repository#domain&repository'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RepositoryDomainRepositoryKey() {
  return ['v1', '/v1/repository#domain&repository', 'POST'] as const
}

export function usePostV1RepositoryDomainRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RepositoryDomainRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']> },
      ) => parseResponse(client.v1['repository#domain&repository'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RepositoryDomainRepositoryKey() {
  return ['v1', '/v1/repository#domain&repository', 'DELETE'] as const
}

export function useDeleteV1RepositoryDomainRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RepositoryDomainRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']> },
      ) => parseResponse(client.v1['repository#domain&repository'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainPermissionsPolicyDomainKey(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domain/permissions/policy#domain', keyArgs] as const
}

export function useGetV1DomainPermissionsPolicyDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainPermissionsPolicyDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domain.permissions['policy#domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainPermissionsPolicyDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainPermissionsPolicyDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domain.permissions['policy#domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DomainPermissionsPolicyDomainKey() {
  return ['v1', '/v1/domain/permissions/policy#domain', 'DELETE'] as const
}

export function useDeleteV1DomainPermissionsPolicyDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainPermissionsPolicyDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>
        },
      ) => parseResponse(client.v1.domain.permissions['policy#domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PackageDomainRepositoryFormatPackageKey(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/package#domain&repository&format&package', keyArgs] as const
}

export function useGetV1PackageDomainRepositoryFormatPackage<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
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
        ? getGetV1PackageDomainRepositoryFormatPackageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['package#domain&repository&format&package'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PackageDomainRepositoryFormatPackage<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
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
        ? getGetV1PackageDomainRepositoryFormatPackageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['package#domain&repository&format&package'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PackageDomainRepositoryFormatPackageKey() {
  return ['v1', '/v1/package#domain&repository&format&package', 'POST'] as const
}

export function usePostV1PackageDomainRepositoryFormatPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageDomainRepositoryFormatPackageKey()
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
            (typeof client.v1)['package#domain&repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['package#domain&repository&format&package'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PackageDomainRepositoryFormatPackageKey() {
  return ['v1', '/v1/package#domain&repository&format&package', 'DELETE'] as const
}

export function useDeleteV1PackageDomainRepositoryFormatPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PackageDomainRepositoryFormatPackageKey()
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
            (typeof client.v1)['package#domain&repository&format&package']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['package#domain&repository&format&package'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageKey() {
  return ['v1', '/v1/package/versions/delete#domain&repository&format&package', 'POST'] as const
}

export function usePostV1PackageVersionsDeleteDomainRepositoryFormatPackage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageKey()
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
            (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.versions['delete#domain&repository&format&package'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryKey() {
  return ['v1', '/v1/repository/permissions/policies#domain&repository', 'DELETE'] as const
}

export function useDeleteV1RepositoryPermissionsPoliciesDomainRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryKey()
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
            (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.repository.permissions['policies#domain&repository'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PackageVersionDomainRepositoryFormatPackageVersionKey(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/package/version#domain&repository&format&package&version', keyArgs] as const
}

export function useGetV1PackageVersionDomainRepositoryFormatPackageVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
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
        ? getGetV1PackageVersionDomainRepositoryFormatPackageVersionKey(args)
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
                (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
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
          client.v1.package['version#domain&repository&format&package&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PackageVersionDomainRepositoryFormatPackageVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
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
        ? getGetV1PackageVersionDomainRepositoryFormatPackageVersionKey(args)
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
                (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
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
          client.v1.package['version#domain&repository&format&package&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageKey() {
  return ['v1', '/v1/package/versions/dispose#domain&repository&format&package', 'POST'] as const
}

export function usePostV1PackageVersionsDisposeDomainRepositoryFormatPackage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageKey()
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
            (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.versions['dispose#domain&repository&format&package'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthorizationTokenDomainKey() {
  return ['v1', '/v1/authorization-token#domain', 'POST'] as const
}

export function usePostV1AuthorizationTokenDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['authorization-token#domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthorizationTokenDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']> },
      ) => parseResponse(client.v1['authorization-token#domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetKey(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/package/version/asset#domain&repository&format&package&version&asset',
    keyArgs,
  ] as const
}

export function useGetV1PackageVersionAssetDomainRepositoryFormatPackageVersionAsset<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
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
        ? getGetV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetKey(args)
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
                (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
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
          client.v1.package.version['asset#domain&repository&format&package&version&asset'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PackageVersionAssetDomainRepositoryFormatPackageVersionAsset<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
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
        ? getGetV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetKey(args)
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
                (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
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
          client.v1.package.version['asset#domain&repository&format&package&version&asset'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PackageVersionReadmeDomainRepositoryFormatPackageVersionKey(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/package/version/readme#domain&repository&format&package&version',
    keyArgs,
  ] as const
}

export function useGetV1PackageVersionReadmeDomainRepositoryFormatPackageVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
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
        ? getGetV1PackageVersionReadmeDomainRepositoryFormatPackageVersionKey(args)
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
                (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
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
          client.v1.package.version['readme#domain&repository&format&package&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PackageVersionReadmeDomainRepositoryFormatPackageVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
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
        ? getGetV1PackageVersionReadmeDomainRepositoryFormatPackageVersionKey(args)
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
                (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
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
          client.v1.package.version['readme#domain&repository&format&package&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RepositoryEndpointDomainRepositoryFormatKey(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository/endpoint#domain&repository&format', keyArgs] as const
}

export function useGetV1RepositoryEndpointDomainRepositoryFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
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
        ? getGetV1RepositoryEndpointDomainRepositoryFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.repository['endpoint#domain&repository&format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RepositoryEndpointDomainRepositoryFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
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
        ? getGetV1RepositoryEndpointDomainRepositoryFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.repository['endpoint#domain&repository&format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RepositoryPermissionsPolicyDomainRepositoryKey(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository/permissions/policy#domain&repository', keyArgs] as const
}

export function useGetV1RepositoryPermissionsPolicyDomainRepository<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
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
        ? getGetV1RepositoryPermissionsPolicyDomainRepositoryKey(args)
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
                (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
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
          client.v1.repository.permissions['policy#domain&repository'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RepositoryPermissionsPolicyDomainRepository<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
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
        ? getGetV1RepositoryPermissionsPolicyDomainRepositoryKey(args)
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
                (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
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
          client.v1.repository.permissions['policy#domain&repository'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1RepositoryPermissionsPolicyDomainRepositoryKey() {
  return ['v1', '/v1/repository/permissions/policy#domain&repository', 'PUT'] as const
}

export function usePutV1RepositoryPermissionsPolicyDomainRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.repository.permissions)['policy#domain&repository']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.repository.permissions)['policy#domain&repository']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RepositoryPermissionsPolicyDomainRepositoryKey()
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
            (typeof client.v1.repository.permissions)['policy#domain&repository']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.repository.permissions['policy#domain&repository'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsKey() {
  return ['v1', '/v1/domains', 'POST'] as const
}

export function usePostV1Domains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.domains.$post> }) =>
        parseResponse(client.v1.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionKey() {
  return [
    'v1',
    '/v1/package/version/assets#domain&repository&format&package&version',
    'POST',
  ] as const
}

export function usePostV1PackageVersionAssetsDomainRepositoryFormatPackageVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionKey()
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
            (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.version['assets#domain&repository&format&package&version'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionKey() {
  return [
    'v1',
    '/v1/package/version/dependencies#domain&repository&format&package&version',
    'POST',
  ] as const
}

export function usePostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionKey()
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
            (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.version['dependencies#domain&repository&format&package&version'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionsDomainRepositoryFormatPackageKey() {
  return ['v1', '/v1/package/versions#domain&repository&format&package', 'POST'] as const
}

export function usePostV1PackageVersionsDomainRepositoryFormatPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageVersionsDomainRepositoryFormatPackageKey()
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
            (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package['versions#domain&repository&format&package'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackagesDomainRepositoryKey() {
  return ['v1', '/v1/packages#domain&repository', 'POST'] as const
}

export function usePostV1PackagesDomainRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['packages#domain&repository']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackagesDomainRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']> },
      ) => parseResponse(client.v1['packages#domain&repository'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RepositoriesKey() {
  return ['v1', '/v1/repositories', 'POST'] as const
}

export function usePostV1Repositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.repositories.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.repositories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.repositories.$post> }) =>
        parseResponse(client.v1.repositories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainRepositoriesDomainKey() {
  return ['v1', '/v1/domain/repositories#domain', 'POST'] as const
}

export function usePostV1DomainRepositoriesDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domain)['repositories#domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainRepositoriesDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']> },
      ) => parseResponse(client.v1.domain['repositories#domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagsResourceArnKey() {
  return ['v1', '/v1/tags#resourceArn', 'POST'] as const
}

export function usePostV1TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']> },
      ) => parseResponse(client.v1['tags#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Key() {
  return [
    'v1',
    '/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256',
    'POST',
  ] as const
}

export function usePostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Key()
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
            (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.version[
            'publish#domain&repository&format&package&version&asset&x-amz-content-sha256'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1DomainPermissionsPolicyKey() {
  return ['v1', '/v1/domain/permissions/policy', 'PUT'] as const
}

export function usePutV1DomainPermissionsPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain.permissions.policy.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain.permissions.policy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DomainPermissionsPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain.permissions.policy.$put> },
      ) => parseResponse(client.v1.domain.permissions.policy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagResourceArnKey() {
  return ['v1', '/v1/tag#resourceArn', 'POST'] as const
}

export function usePostV1TagResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['tag#resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']> },
      ) => parseResponse(client.v1['tag#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UntagResourceArnKey() {
  return ['v1', '/v1/untag#resourceArn', 'POST'] as const
}

export function usePostV1UntagResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['untag#resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UntagResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']> },
      ) => parseResponse(client.v1['untag#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageKey() {
  return [
    'v1',
    '/v1/package/versions/update_status#domain&repository&format&package',
    'POST',
  ] as const
}

export function usePostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageKey()
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
            (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.package.versions['update_status#domain&repository&format&package'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
