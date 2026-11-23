import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationKey() {
  return [
    'v1',
    '/v1/repository/external-connection#domain&repository&external-connection',
    'POST',
  ] as const
}

export function getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.repository['external-connection#domain&repository&external-connection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1RepositoryExternalConnectionDomainRepositoryExternalConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationKey() {
  return [
    'v1',
    '/v1/repository/external-connection#domain&repository&external-connection',
    'DELETE',
  ] as const
}

export function getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.repository['external-connection#domain&repository&external-connection'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageMutationKey() {
  return [
    'v1',
    '/v1/package/versions/copy#domain&source-repository&destination-repository&format&package',
    'POST',
  ] as const
}

export function getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.versions[
          'copy#domain&source-repository&destination-repository&format&package'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DomainDomainQueryKey(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domain#domain', keyArgs] as const
}

export function getV1DomainDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainDomainQueryKey>
  >({
    queryKey: getV1DomainDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['domain#domain'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1DomainDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DomainDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1DomainDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DomainDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1DomainDomainMutationKey() {
  return ['v1', '/v1/domain#domain', 'POST'] as const
}

export function getPostV1DomainDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['domain#domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['domain#domain']['$post']>) {
      return parseResponse(client.v1['domain#domain'].$post(args, options))
    },
  })
}

export function usePostV1DomainDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['domain#domain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainDomainMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1DomainDomainMutationKey() {
  return ['v1', '/v1/domain#domain', 'DELETE'] as const
}

export function getDeleteV1DomainDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['domain#domain']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['domain#domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['domain#domain']['$delete']>) {
      return parseResponse(client.v1['domain#domain'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['domain#domain']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['domain#domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainDomainMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1RepositoryDomainRepositoryQueryKey(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository#domain&repository', keyArgs] as const
}

export function getV1RepositoryDomainRepositoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RepositoryDomainRepositoryQueryKey>
  >({
    queryKey: getV1RepositoryDomainRepositoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['repository#domain&repository'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1RepositoryDomainRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RepositoryDomainRepositoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1RepositoryDomainRepositoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1RepositoryDomainRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RepositoryDomainRepositoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1RepositoryDomainRepositoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1RepositoryDomainRepositoryMutationKey() {
  return ['v1', '/v1/repository#domain&repository', 'PUT'] as const
}

export function getPutV1RepositoryDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RepositoryDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']>,
    ) {
      return parseResponse(client.v1['repository#domain&repository'].$put(args, options))
    },
  })
}

export function usePutV1RepositoryDomainRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1RepositoryDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1RepositoryDomainRepositoryMutationKey() {
  return ['v1', '/v1/repository#domain&repository', 'POST'] as const
}

export function getPostV1RepositoryDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RepositoryDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']>,
    ) {
      return parseResponse(client.v1['repository#domain&repository'].$post(args, options))
    },
  })
}

export function usePostV1RepositoryDomainRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RepositoryDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1RepositoryDomainRepositoryMutationKey() {
  return ['v1', '/v1/repository#domain&repository', 'DELETE'] as const
}

export function getDeleteV1RepositoryDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RepositoryDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']>,
    ) {
      return parseResponse(client.v1['repository#domain&repository'].$delete(args, options))
    },
  })
}

export function useDeleteV1RepositoryDomainRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['repository#domain&repository']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RepositoryDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DomainPermissionsPolicyDomainQueryKey(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/domain/permissions/policy#domain', keyArgs] as const
}

export function getV1DomainPermissionsPolicyDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainPermissionsPolicyDomainQueryKey>
  >({
    queryKey: getV1DomainPermissionsPolicyDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domain.permissions['policy#domain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DomainPermissionsPolicyDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainPermissionsPolicyDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1DomainPermissionsPolicyDomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DomainPermissionsPolicyDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainPermissionsPolicyDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1DomainPermissionsPolicyDomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1DomainPermissionsPolicyDomainMutationKey() {
  return ['v1', '/v1/domain/permissions/policy#domain', 'DELETE'] as const
}

export function getDeleteV1DomainPermissionsPolicyDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainPermissionsPolicyDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>,
    ) {
      return parseResponse(client.v1.domain.permissions['policy#domain'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainPermissionsPolicyDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainPermissionsPolicyDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PackageDomainRepositoryFormatPackageQueryKey(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/package#domain&repository&format&package', keyArgs] as const
}

export function getV1PackageDomainRepositoryFormatPackageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PackageDomainRepositoryFormatPackageQueryKey>
  >({
    queryKey: getV1PackageDomainRepositoryFormatPackageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['package#domain&repository&format&package'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PackageDomainRepositoryFormatPackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PackageDomainRepositoryFormatPackageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1PackageDomainRepositoryFormatPackageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PackageDomainRepositoryFormatPackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['package#domain&repository&format&package']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PackageDomainRepositoryFormatPackageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1PackageDomainRepositoryFormatPackageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1PackageDomainRepositoryFormatPackageMutationKey() {
  return ['v1', '/v1/package#domain&repository&format&package', 'POST'] as const
}

export function getPostV1PackageDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['package#domain&repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['package#domain&repository&format&package'].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PackageDomainRepositoryFormatPackageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PackageDomainRepositoryFormatPackageMutationKey() {
  return ['v1', '/v1/package#domain&repository&format&package', 'DELETE'] as const
}

export function getDeleteV1PackageDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PackageDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['package#domain&repository&format&package']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['package#domain&repository&format&package'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PackageDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['package#domain&repository&format&package']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PackageDomainRepositoryFormatPackageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageMutationKey() {
  return ['v1', '/v1/package/versions/delete#domain&repository&format&package', 'POST'] as const
}

export function getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.versions['delete#domain&repository&format&package'].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageVersionsDeleteDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionsDeleteDomainRepositoryFormatPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryMutationKey() {
  return ['v1', '/v1/repository/permissions/policies#domain&repository', 'DELETE'] as const
}

export function getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.repository.permissions['policies#domain&repository'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1RepositoryPermissionsPoliciesDomainRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RepositoryPermissionsPoliciesDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PackageVersionDomainRepositoryFormatPackageVersionQueryKey(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/package/version#domain&repository&format&package&version', keyArgs] as const
}

export function getV1PackageVersionDomainRepositoryFormatPackageVersionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1PackageVersionDomainRepositoryFormatPackageVersionQueryKey>
  >({
    queryKey: getV1PackageVersionDomainRepositoryFormatPackageVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.package['version#domain&repository&format&package&version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PackageVersionDomainRepositoryFormatPackageVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionDomainRepositoryFormatPackageVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1PackageVersionDomainRepositoryFormatPackageVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PackageVersionDomainRepositoryFormatPackageVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionDomainRepositoryFormatPackageVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1PackageVersionDomainRepositoryFormatPackageVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageMutationKey() {
  return ['v1', '/v1/package/versions/dispose#domain&repository&format&package', 'POST'] as const
}

export function getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.versions['dispose#domain&repository&format&package'].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageVersionsDisposeDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionsDisposeDomainRepositoryFormatPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AuthorizationTokenDomainMutationKey() {
  return ['v1', '/v1/authorization-token#domain', 'POST'] as const
}

export function getPostV1AuthorizationTokenDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['authorization-token#domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthorizationTokenDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']>,
    ) {
      return parseResponse(client.v1['authorization-token#domain'].$post(args, options))
    },
  })
}

export function usePostV1AuthorizationTokenDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['authorization-token#domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AuthorizationTokenDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryKey(
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

export function getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryKey>
  >({
    queryKey: getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.package.version['asset#domain&repository&format&package&version&asset'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1PackageVersionAssetDomainRepositoryFormatPackageVersionAsset<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PackageVersionAssetDomainRepositoryFormatPackageVersionAsset<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryKey(
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

export function getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryKey>
  >({
    queryKey: getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.package.version['readme#domain&repository&format&package&version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PackageVersionReadmeDomainRepositoryFormatPackageVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PackageVersionReadmeDomainRepositoryFormatPackageVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1RepositoryEndpointDomainRepositoryFormatQueryKey(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository/endpoint#domain&repository&format', keyArgs] as const
}

export function getV1RepositoryEndpointDomainRepositoryFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RepositoryEndpointDomainRepositoryFormatQueryKey>
  >({
    queryKey: getV1RepositoryEndpointDomainRepositoryFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.repository['endpoint#domain&repository&format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1RepositoryEndpointDomainRepositoryFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RepositoryEndpointDomainRepositoryFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1RepositoryEndpointDomainRepositoryFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1RepositoryEndpointDomainRepositoryFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository)['endpoint#domain&repository&format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RepositoryEndpointDomainRepositoryFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1RepositoryEndpointDomainRepositoryFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1RepositoryPermissionsPolicyDomainRepositoryQueryKey(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/repository/permissions/policy#domain&repository', keyArgs] as const
}

export function getV1RepositoryPermissionsPolicyDomainRepositoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository.permissions)['policy#domain&repository']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1RepositoryPermissionsPolicyDomainRepositoryQueryKey>
  >({
    queryKey: getV1RepositoryPermissionsPolicyDomainRepositoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.repository.permissions['policy#domain&repository'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1RepositoryPermissionsPolicyDomainRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository.permissions)['policy#domain&repository']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1RepositoryPermissionsPolicyDomainRepositoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1RepositoryPermissionsPolicyDomainRepositoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1RepositoryPermissionsPolicyDomainRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.repository.permissions)['policy#domain&repository']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1RepositoryPermissionsPolicyDomainRepositoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1RepositoryPermissionsPolicyDomainRepositoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1RepositoryPermissionsPolicyDomainRepositoryMutationKey() {
  return ['v1', '/v1/repository/permissions/policy#domain&repository', 'PUT'] as const
}

export function getPutV1RepositoryPermissionsPolicyDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.repository.permissions)['policy#domain&repository']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RepositoryPermissionsPolicyDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.repository.permissions)['policy#domain&repository']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.repository.permissions['policy#domain&repository'].$put(args, options),
      )
    },
  })
}

export function usePutV1RepositoryPermissionsPolicyDomainRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.repository.permissions)['policy#domain&repository']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1RepositoryPermissionsPolicyDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1DomainsMutationKey() {
  return ['v1', '/v1/domains', 'POST'] as const
}

export function getPostV1DomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.$post>) {
      return parseResponse(client.v1.domains.$post(args, options))
    },
  })
}

export function usePostV1Domains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionMutationKey() {
  return [
    'v1',
    '/v1/package/version/assets#domain&repository&format&package&version',
    'POST',
  ] as const
}

export function getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.version['assets#domain&repository&format&package&version'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PackageVersionAssetsDomainRepositoryFormatPackageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionAssetsDomainRepositoryFormatPackageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionMutationKey() {
  return [
    'v1',
    '/v1/package/version/dependencies#domain&repository&format&package&version',
    'POST',
  ] as const
}

export function getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.version['dependencies#domain&repository&format&package&version'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionsDomainRepositoryFormatPackageMutationKey() {
  return ['v1', '/v1/package/versions#domain&repository&format&package', 'POST'] as const
}

export function getPostV1PackageVersionsDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageVersionsDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package['versions#domain&repository&format&package'].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageVersionsDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PackageVersionsDomainRepositoryFormatPackageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackagesDomainRepositoryMutationKey() {
  return ['v1', '/v1/packages#domain&repository', 'POST'] as const
}

export function getPostV1PackagesDomainRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['packages#domain&repository']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackagesDomainRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']>,
    ) {
      return parseResponse(client.v1['packages#domain&repository'].$post(args, options))
    },
  })
}

export function usePostV1PackagesDomainRepository<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['packages#domain&repository']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PackagesDomainRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1RepositoriesMutationKey() {
  return ['v1', '/v1/repositories', 'POST'] as const
}

export function getPostV1RepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.repositories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.repositories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RepositoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.repositories.$post>) {
      return parseResponse(client.v1.repositories.$post(args, options))
    },
  })
}

export function usePostV1Repositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.repositories.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.repositories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RepositoriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1DomainRepositoriesDomainMutationKey() {
  return ['v1', '/v1/domain/repositories#domain', 'POST'] as const
}

export function getPostV1DomainRepositoriesDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domain)['repositories#domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainRepositoriesDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']>,
    ) {
      return parseResponse(client.v1.domain['repositories#domain'].$post(args, options))
    },
  })
}

export function usePostV1DomainRepositoriesDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain)['repositories#domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainRepositoriesDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags#resourceArn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']>) {
      return parseResponse(client.v1['tags#resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['tags#resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256MutationKey() {
  return [
    'v1',
    '/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256',
    'POST',
  ] as const
}

export function getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.version[
          'publish#domain&repository&format&package&version&asset&x-amz-content-sha256'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1DomainPermissionsPolicyMutationKey() {
  return ['v1', '/v1/domain/permissions/policy', 'PUT'] as const
}

export function getPutV1DomainPermissionsPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain.permissions.policy.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domain.permissions.policy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DomainPermissionsPolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain.permissions.policy.$put>) {
      return parseResponse(client.v1.domain.permissions.policy.$put(args, options))
    },
  })
}

export function usePutV1DomainPermissionsPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain.permissions.policy.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.domain.permissions.policy.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DomainPermissionsPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1TagResourceArnMutationKey() {
  return ['v1', '/v1/tag#resourceArn', 'POST'] as const
}

export function getPostV1TagResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['tag#resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']>) {
      return parseResponse(client.v1['tag#resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1TagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['tag#resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TagResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1UntagResourceArnMutationKey() {
  return ['v1', '/v1/untag#resourceArn', 'POST'] as const
}

export function getPostV1UntagResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['untag#resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UntagResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']>) {
      return parseResponse(client.v1['untag#resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1UntagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['untag#resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UntagResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageMutationKey() {
  return [
    'v1',
    '/v1/package/versions/update_status#domain&repository&format&package',
    'POST',
  ] as const
}

export function getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.package.versions['update_status#domain&repository&format&package'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
