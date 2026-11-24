import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogsKey() {
  return ['catalogs'] as const
}

export function getPrincipalRolesKey() {
  return ['principal-roles'] as const
}

export function getPrincipalsKey() {
  return ['principals'] as const
}

export function getCatalogsQueryKey() {
  return ['catalogs', '/catalogs'] as const
}

export function getCatalogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogsQueryKey>
  >({
    queryKey: getCatalogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatalogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatalogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCatalogsMutationKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function getPostCatalogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    InferRequestType<typeof client.catalogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.$post>) {
      return parseResponse(client.catalogs.$post(args, options))
    },
  })
}

export function usePostCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.catalogs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogNameQueryKey(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalogName', args] as const
}

export function getCatalogsCatalogNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogNameQueryKey>
  >({
    queryKey: getCatalogsCatalogNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalogName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogsCatalogName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatalogsCatalogNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatalogsCatalogName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatalogsCatalogNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCatalogsCatalogNameMutationKey() {
  return ['catalogs', '/catalogs/:catalogName', 'PUT'] as const
}

export function getPutCatalogsCatalogNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalogName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCatalogsCatalogNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs)[':catalogName']['$put']>) {
      return parseResponse(client.catalogs[':catalogName'].$put(args, options))
    },
  })
}

export function usePutCatalogsCatalogName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalogName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCatalogsCatalogNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCatalogsCatalogNameMutationKey() {
  return ['catalogs', '/catalogs/:catalogName', 'DELETE'] as const
}

export function getDeleteCatalogsCatalogNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsCatalogNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']>) {
      return parseResponse(client.catalogs[':catalogName'].$delete(args, options))
    },
  })
}

export function useDeleteCatalogsCatalogName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsCatalogNameMutationOptions<TError, TOnMutateResult>(
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

export function getPrincipalsQueryKey() {
  return ['principals', '/principals'] as const
}

export function getPrincipalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrincipalsQueryKey>
  >({
    queryKey: getPrincipalsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.principals.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePrincipals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrincipalsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrincipals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrincipalsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPrincipalsMutationKey() {
  return ['principals', '/principals', 'POST'] as const
}

export function getPostPrincipalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$post>>>>>,
    TError,
    InferRequestType<typeof client.principals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPrincipalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.principals.$post>) {
      return parseResponse(client.principals.$post(args, options))
    },
  })
}

export function usePostPrincipals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.principals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrincipalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPrincipalsPrincipalNameQueryKey(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
) {
  return ['principals', '/principals/:principalName', args] as const
}

export function getPrincipalsPrincipalNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalsPrincipalNameQueryKey>
  >({
    queryKey: getPrincipalsPrincipalNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.principals[':principalName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrincipalsPrincipalName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsPrincipalNameQueryKey>
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
      ...getPrincipalsPrincipalNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrincipalsPrincipalName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsPrincipalNameQueryKey>
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
      ...getPrincipalsPrincipalNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPrincipalsPrincipalNameMutationKey() {
  return ['principals', '/principals/:principalName', 'PUT'] as const
}

export function getPutPrincipalsPrincipalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.principals)[':principalName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrincipalsPrincipalNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.principals)[':principalName']['$put']>) {
      return parseResponse(client.principals[':principalName'].$put(args, options))
    },
  })
}

export function usePutPrincipalsPrincipalName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.principals)[':principalName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.principals)[':principalName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPrincipalsPrincipalNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePrincipalsPrincipalNameMutationKey() {
  return ['principals', '/principals/:principalName', 'DELETE'] as const
}

export function getDeletePrincipalsPrincipalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.principals)[':principalName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrincipalsPrincipalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.principals)[':principalName']['$delete']>,
    ) {
      return parseResponse(client.principals[':principalName'].$delete(args, options))
    },
  })
}

export function useDeletePrincipalsPrincipalName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.principals)[':principalName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.principals)[':principalName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrincipalsPrincipalNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostPrincipalsPrincipalNameRotateMutationKey() {
  return ['principals', '/principals/:principalName/rotate', 'POST'] as const
}

export function getPostPrincipalsPrincipalNameRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrincipalsPrincipalNameRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>,
    ) {
      return parseResponse(client.principals[':principalName'].rotate.$post(args, options))
    },
  })
}

export function usePostPrincipalsPrincipalNameRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.principals)[':principalName']['rotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrincipalsPrincipalNameRotateMutationOptions<
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

export function getPostPrincipalsPrincipalNameResetMutationKey() {
  return ['principals', '/principals/:principalName/reset', 'POST'] as const
}

export function getPostPrincipalsPrincipalNameResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrincipalsPrincipalNameResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>,
    ) {
      return parseResponse(client.principals[':principalName'].reset.$post(args, options))
    },
  })
}

export function usePostPrincipalsPrincipalNameReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.principals)[':principalName']['reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrincipalsPrincipalNameResetMutationOptions<
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

export function getPrincipalsPrincipalNamePrincipalRolesQueryKey(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
) {
  return ['principals', '/principals/:principalName/principal-roles', args] as const
}

export function getPrincipalsPrincipalNamePrincipalRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalsPrincipalNamePrincipalRolesQueryKey>
  >({
    queryKey: getPrincipalsPrincipalNamePrincipalRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.principals[':principalName']['principal-roles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrincipalsPrincipalNamePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsPrincipalNamePrincipalRolesQueryKey>
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
      ...getPrincipalsPrincipalNamePrincipalRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrincipalsPrincipalNamePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalsPrincipalNamePrincipalRolesQueryKey>
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
      ...getPrincipalsPrincipalNamePrincipalRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPrincipalsPrincipalNamePrincipalRolesMutationKey() {
  return ['principals', '/principals/:principalName/principal-roles', 'PUT'] as const
}

export function getPutPrincipalsPrincipalNamePrincipalRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrincipalsPrincipalNamePrincipalRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.principals)[':principalName']['principal-roles']['$put']
      >,
    ) {
      return parseResponse(
        client.principals[':principalName']['principal-roles'].$put(args, options),
      )
    },
  })
}

export function usePutPrincipalsPrincipalNamePrincipalRoles<
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
                ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPrincipalsPrincipalNamePrincipalRolesMutationOptions<
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

export function getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameMutationKey() {
  return [
    'principals',
    '/principals/:principalName/principal-roles/:principalRoleName',
    'DELETE',
  ] as const
}

export function getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
      >,
    ) {
      return parseResponse(
        client.principals[':principalName']['principal-roles'][':principalRoleName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
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
    getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameMutationOptions<
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

export function getPrincipalRolesQueryKey() {
  return ['principal-roles', '/principal-roles'] as const
}

export function getPrincipalRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalRolesQueryKey>
  >({
    queryKey: getPrincipalRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['principal-roles'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrincipalRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrincipalRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPrincipalRolesMutationKey() {
  return ['principal-roles', '/principal-roles', 'POST'] as const
}

export function getPostPrincipalRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['principal-roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrincipalRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['principal-roles']['$post']>) {
      return parseResponse(client['principal-roles'].$post(args, options))
    },
  })
}

export function usePostPrincipalRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['principal-roles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrincipalRolesMutationOptions<TError, TOnMutateResult>(
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

export function getPrincipalRolesPrincipalRoleNameQueryKey(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
) {
  return ['principal-roles', '/principal-roles/:principalRoleName', args] as const
}

export function getPrincipalRolesPrincipalRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalRolesPrincipalRoleNameQueryKey>
  >({
    queryKey: getPrincipalRolesPrincipalRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['principal-roles'][':principalRoleName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrincipalRolesPrincipalRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNameQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrincipalRolesPrincipalRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNameQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPrincipalRolesPrincipalRoleNameMutationKey() {
  return ['principal-roles', '/principal-roles/:principalRoleName', 'PUT'] as const
}

export function getPutPrincipalRolesPrincipalRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrincipalRolesPrincipalRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>,
    ) {
      return parseResponse(client['principal-roles'][':principalRoleName'].$put(args, options))
    },
  })
}

export function usePutPrincipalRolesPrincipalRoleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPrincipalRolesPrincipalRoleNameMutationOptions<
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

export function getDeletePrincipalRolesPrincipalRoleNameMutationKey() {
  return ['principal-roles', '/principal-roles/:principalRoleName', 'DELETE'] as const
}

export function getDeletePrincipalRolesPrincipalRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrincipalRolesPrincipalRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>,
    ) {
      return parseResponse(client['principal-roles'][':principalRoleName'].$delete(args, options))
    },
  })
}

export function useDeletePrincipalRolesPrincipalRoleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrincipalRolesPrincipalRoleNameMutationOptions<
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

export function getPrincipalRolesPrincipalRoleNamePrincipalsQueryKey(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
) {
  return ['principal-roles', '/principal-roles/:principalRoleName/principals', args] as const
}

export function getPrincipalRolesPrincipalRoleNamePrincipalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['principal-roles'][':principalRoleName']['principals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalRolesPrincipalRoleNamePrincipalsQueryKey>
  >({
    queryKey: getPrincipalRolesPrincipalRoleNamePrincipalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['principal-roles'][':principalRoleName'].principals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePrincipalRolesPrincipalRoleNamePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['principal-roles'][':principalRoleName']['principals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNamePrincipalsQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNamePrincipalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrincipalRolesPrincipalRoleNamePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['principal-roles'][':principalRoleName']['principals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNamePrincipalsQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNamePrincipalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryKey(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
) {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName',
    args,
  ] as const
}

export function getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryKey>
  >({
    queryKey: getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function usePrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryKey>
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
      ...getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameMutationKey() {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName',
    'PUT',
  ] as const
}

export function getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
      >,
    ) {
      return parseResponse(
        client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<
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
                  (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
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
    getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameMutationOptions<
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

export function getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameMutationKey() {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName/:catalogRoleName',
    'DELETE',
  ] as const
}

export function getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
      >,
    ) {
      return parseResponse(
        client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][
          ':catalogRoleName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
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
    getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameMutationOptions<
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

export function getCatalogsCatalogNameCatalogRolesQueryKey(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles', args] as const
}

export function getCatalogsCatalogNameCatalogRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogNameCatalogRolesQueryKey>
  >({
    queryKey: getCatalogsCatalogNameCatalogRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogsCatalogNameCatalogRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogsCatalogNameCatalogRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCatalogsCatalogNameCatalogRolesMutationKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles', 'POST'] as const
}

export function getPostCatalogsCatalogNameCatalogRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogNameCatalogRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>,
    ) {
      return parseResponse(client.catalogs[':catalogName']['catalog-roles'].$post(args, options))
    },
  })
}

export function usePostCatalogsCatalogNameCatalogRoles<
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
                ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsCatalogNameCatalogRolesMutationOptions<
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

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', args] as const
}

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryKey>
  >({
    queryKey: getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogsCatalogNameCatalogRolesCatalogRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogsCatalogNameCatalogRolesCatalogRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', 'PUT'] as const
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$put(args, options),
      )
    },
  })
}

export function usePutCatalogsCatalogNameCatalogRolesCatalogRoleName<
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
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
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
  const mutationDefaults = getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationOptions<
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

export function getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', 'DELETE'] as const
}

export function getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCatalogsCatalogNameCatalogRolesCatalogRoleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
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
  const mutationDefaults = getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameMutationOptions<
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

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/principal-roles',
    args,
  ] as const
}

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryKey>
  >({
    queryKey: getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'][
          'principal-roles'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants', args] as const
}

export function getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryKey>
  >({
    queryKey: getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryKey>
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
      ...getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationKey() {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants',
    'PUT',
  ] as const
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
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
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
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
    getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationOptions<
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

export function getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationKey() {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants',
    'POST',
  ] as const
}

export function getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
      >,
    ) {
      return parseResponse(
        client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
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
                  (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
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
    getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsMutationOptions<
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
