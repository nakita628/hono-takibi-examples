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

export function getAboutKey() {
  return ['about'] as const
}

export function getArchitecturesKey() {
  return ['architectures'] as const
}

export function getAttributeKey() {
  return ['attribute'] as const
}

export function getBuildKey() {
  return ['build'] as const
}

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getGroupKey() {
  return ['group'] as const
}

export function getIssueTrackersKey() {
  return ['issue_trackers'] as const
}

export function getPersonKey() {
  return ['person'] as const
}

export function getPublishedKey() {
  return ['published'] as const
}

export function getRequestKey() {
  return ['request'] as const
}

export function getRequestViewCollectionKey() {
  return ['request?view=collection'] as const
}

export function getWorkerKey() {
  return ['worker'] as const
}

export function getWorkerCmdCheckconstraintsKey() {
  return ['worker?cmd=checkconstraints'] as const
}

export function getAboutQueryKey() {
  return ['about', '/about'] as const
}

export function getAboutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >({
    queryKey: getAboutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAboutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAboutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getArchitecturesQueryKey() {
  return ['architectures', '/architectures'] as const
}

export function getArchitecturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchitecturesQueryKey>
  >({
    queryKey: getArchitecturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.architectures.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArchitectures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchitecturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArchitecturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArchitectures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchitecturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArchitecturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getArchitecturesArchitectureNameQueryKey(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
) {
  return ['architectures', '/architectures/:architecture_name', args] as const
}

export function getArchitecturesArchitectureNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchitecturesArchitectureNameQueryKey>
  >({
    queryKey: getArchitecturesArchitectureNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.architectures[':architecture_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useArchitecturesArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArchitecturesArchitectureNameQueryKey>
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
      ...getArchitecturesArchitectureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseArchitecturesArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArchitecturesArchitectureNameQueryKey>
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
      ...getArchitecturesArchitectureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAttributeQueryKey() {
  return ['attribute', '/attribute'] as const
}

export function getAttributeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttributeQueryKey>
  >({
    queryKey: getAttributeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.attribute.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAttribute<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAttributeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAttribute<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAttributeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAttributeNamespaceQueryKey(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
) {
  return ['attribute', '/attribute/:namespace', args] as const
}

export function getAttributeNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceQueryKey>
  >({
    queryKey: getAttributeNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attribute[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAttributeNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAttributeNamespaceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAttributeNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAttributeNamespaceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAttributeNamespaceMutationKey() {
  return ['attribute', '/attribute/:namespace', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.attribute)[':namespace']['$delete']>) {
      return parseResponse(client.attribute[':namespace'].$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attribute)[':namespace']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceMutationOptions<TError, TOnMutateResult>(
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

export function getAttributeNamespaceMetaQueryKey(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
) {
  return ['attribute', '/attribute/:namespace/_meta', args] as const
}

export function getAttributeNamespaceMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceMetaQueryKey>
  >({
    queryKey: getAttributeNamespaceMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attribute[':namespace']._meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAttributeNamespaceMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceMetaQueryKey>
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
      ...getAttributeNamespaceMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAttributeNamespaceMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceMetaQueryKey>
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
      ...getAttributeNamespaceMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'PUT'] as const
}

export function getPutAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$put(args, options))
    },
  })
}

export function usePutAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
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

export function getPostAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'POST'] as const
}

export function getPostAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$post(args, options))
    },
  })
}

export function usePostAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAttributeNamespaceAttributeNameMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceAttributeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceAttributeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
    ) {
      return parseResponse(client.attribute[':namespace'][':attribute_name'].$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespaceAttributeName<
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
                ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceAttributeNameMutationOptions<
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

export function getAttributeNamespaceAttributeNameMetaQueryKey(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
) {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', args] as const
}

export function getAttributeNamespaceAttributeNameMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceAttributeNameMetaQueryKey>
  >({
    queryKey: getAttributeNamespaceAttributeNameMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAttributeNamespaceAttributeNameMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceAttributeNameMetaQueryKey>
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
      ...getAttributeNamespaceAttributeNameMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAttributeNamespaceAttributeNameMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttributeNamespaceAttributeNameMetaQueryKey>
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
      ...getAttributeNamespaceAttributeNameMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'PUT'] as const
}

export function getPutAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$put(args, options),
      )
    },
  })
}

export function usePutAttributeNamespaceAttributeNameMeta<
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
                  (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
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
  const mutationDefaults = getPutAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getPostAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'POST'] as const
}

export function getPostAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$post(args, options),
      )
    },
  })
}

export function usePostAttributeNamespaceAttributeNameMeta<
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
                  (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
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
  const mutationDefaults = getPostAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getDeleteAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$delete(args, options),
      )
    },
  })
}

export function useDeleteAttributeNamespaceAttributeNameMeta<
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
                  (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
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
  const mutationDefaults = getDeleteAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getBuildQueryKey() {
  return ['build', '/build'] as const
}

export function getBuildQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBuildQueryKey>
  >({
    queryKey: getBuildQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.build.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuild<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBuildQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBuildQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBuild<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBuildQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBuildQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBuildProjectNameQueryKey(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
) {
  return ['build', '/build/:project_name', args] as const
}

export function getBuildProjectNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameQueryKey>
  >({
    queryKey: getBuildProjectNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBuildProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBuildProjectNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBuildProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBuildProjectNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBuildProjectNameMutationKey() {
  return ['build', '/build/:project_name', 'POST'] as const
}

export function getPostBuildProjectNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.build)[':project_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildProjectNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.build)[':project_name']['$post']>) {
      return parseResponse(client.build[':project_name'].$post(args, options))
    },
  })
}

export function usePostBuildProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.build)[':project_name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.build)[':project_name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuildProjectNameMutationOptions<TError, TOnMutateResult>(
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

export function getBuildProjectNameResultQueryKey(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
) {
  return ['build', '/build/:project_name/_result', args] as const
}

export function getBuildProjectNameResultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameResultQueryKey>
  >({
    queryKey: getBuildProjectNameResultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name']._result.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBuildProjectNameResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameResultQueryKey>
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
      ...getBuildProjectNameResultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameResultQueryKey>
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
      ...getBuildProjectNameResultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameQueryKey(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
) {
  return ['build', '/build/:project_name/:repository_name', args] as const
}

export function getBuildProjectNameRepositoryNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameQueryKey>
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
      ...getBuildProjectNameRepositoryNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameQueryKey>
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
      ...getBuildProjectNameRepositoryNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameBuildconfigQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
) {
  return ['build', '/build/:project_name/:repository_name/_buildconfig', args] as const
}

export function getBuildProjectNameRepositoryNameBuildconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameBuildconfigQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameBuildconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name']._buildconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameBuildconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameBuildconfigQueryKey>
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
      ...getBuildProjectNameRepositoryNameBuildconfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameBuildconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameBuildconfigQueryKey>
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
      ...getBuildProjectNameRepositoryNameBuildconfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_builddepinfo',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name']._builddepinfo.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_repository',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNameRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNameRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_buildinfo',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._buildinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_history',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_jobstatus',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._jobstatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_log',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey>
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_reason',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._reason.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameReason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameReason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_status',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey>
  >({
    queryKey: getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationKey() {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    'PUT',
  ] as const
}

export function getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
      >,
    ) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
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
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
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
    getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationOptions<
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

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name?view=fileinfo',
    args,
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey
    >
  >({
    queryKey:
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name?view=fileinfo'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey
        >
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
      ...getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConfigurationQueryKey() {
  return ['configuration', '/configuration'] as const
}

export function getConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationQueryKey>
  >({
    queryKey: getConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.configuration.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutConfigurationMutationKey() {
  return ['configuration', '/configuration', 'PUT'] as const
}

export function getPutConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configuration.$put>) {
      return parseResponse(client.configuration.$put(args, options))
    },
  })
}

export function usePutConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.configuration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getDistributionsQueryKey() {
  return ['distributions', '/distributions'] as const
}

export function getDistributionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >({
    queryKey: getDistributionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistributionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistributionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDistributionsMutationKey() {
  return ['distributions', '/distributions', 'POST'] as const
}

export function getPostDistributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.distributions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDistributionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.distributions.$post>) {
      return parseResponse(client.distributions.$post(args, options))
    },
  })
}

export function usePostDistributions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.distributions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDistributionsMutationOptions<TError, TOnMutateResult>(
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

export function getPutDistributionsBulkReplaceMutationKey() {
  return ['distributions', '/distributions/bulk_replace', 'PUT'] as const
}

export function getPutDistributionsBulkReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.bulk_replace.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.distributions.bulk_replace.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDistributionsBulkReplaceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.distributions.bulk_replace.$put>) {
      return parseResponse(client.distributions.bulk_replace.$put(args, options))
    },
  })
}

export function usePutDistributionsBulkReplace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.distributions.bulk_replace.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.distributions.bulk_replace.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDistributionsBulkReplaceMutationOptions<TError, TOnMutateResult>(
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

export function getDistributionsIncludeRemotesQueryKey() {
  return ['distributions', '/distributions/include_remotes'] as const
}

export function getDistributionsIncludeRemotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsIncludeRemotesQueryKey>
  >({
    queryKey: getDistributionsIncludeRemotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions.include_remotes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistributionsIncludeRemotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsIncludeRemotesQueryKey>
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
      ...getDistributionsIncludeRemotesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistributionsIncludeRemotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsIncludeRemotesQueryKey>
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
      ...getDistributionsIncludeRemotesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDistributionsDistributionIdQueryKey(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
) {
  return ['distributions', '/distributions/:distribution_id', args] as const
}

export function getDistributionsDistributionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsDistributionIdQueryKey>
  >({
    queryKey: getDistributionsDistributionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions[':distribution_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistributionsDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsDistributionIdQueryKey>
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
      ...getDistributionsDistributionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistributionsDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsDistributionIdQueryKey>
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
      ...getDistributionsDistributionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDistributionsDistributionIdMutationKey() {
  return ['distributions', '/distributions/:distribution_id', 'PUT'] as const
}

export function getPutDistributionsDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDistributionsDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
    ) {
      return parseResponse(client.distributions[':distribution_id'].$put(args, options))
    },
  })
}

export function usePutDistributionsDistributionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDistributionsDistributionIdMutationOptions<
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

export function getDeleteDistributionsDistributionIdMutationKey() {
  return ['distributions', '/distributions/:distribution_id', 'DELETE'] as const
}

export function getDeleteDistributionsDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDistributionsDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
    ) {
      return parseResponse(client.distributions[':distribution_id'].$delete(args, options))
    },
  })
}

export function useDeleteDistributionsDistributionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDistributionsDistributionIdMutationOptions<
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

export function getGroupQueryKey() {
  return ['group', '/group'] as const
}

export function getGroupQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupQueryKey>
  >({
    queryKey: getGroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupGroupTitleQueryKey(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
) {
  return ['group', '/group/:group_title', args] as const
}

export function getGroupGroupTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupTitleQueryKey>
  >({
    queryKey: getGroupGroupTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':group_title'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupGroupTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupTitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupTitleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupTitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupTitleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'PUT'] as const
}

export function getPutGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$put']>) {
      return parseResponse(client.group[':group_title'].$put(args, options))
    },
  })
}

export function usePutGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':group_title']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'POST'] as const
}

export function getPostGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$post']>) {
      return parseResponse(client.group[':group_title'].$post(args, options))
    },
  })
}

export function usePostGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':group_title']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':group_title']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'DELETE'] as const
}

export function getDeleteGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$delete']>) {
      return parseResponse(client.group[':group_title'].$delete(args, options))
    },
  })
}

export function useDeleteGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':group_title']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':group_title']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
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

export function getIssueTrackersQueryKey() {
  return ['issue_trackers', '/issue_trackers'] as const
}

export function getIssueTrackersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersQueryKey>
  >({
    queryKey: getIssueTrackersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.issue_trackers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIssueTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIssueTrackersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIssueTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIssueTrackersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIssueTrackersMutationKey() {
  return ['issue_trackers', '/issue_trackers', 'POST'] as const
}

export function getPostIssueTrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.issue_trackers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueTrackersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issue_trackers.$post>) {
      return parseResponse(client.issue_trackers.$post(args, options))
    },
  })
}

export function usePostIssueTrackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.issue_trackers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIssueTrackersMutationOptions<TError, TOnMutateResult>(
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

export function getIssueTrackersIssueTrackerNameQueryKey(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
) {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', args] as const
}

export function getIssueTrackersIssueTrackerNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersIssueTrackerNameQueryKey>
  >({
    queryKey: getIssueTrackersIssueTrackerNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issue_trackers[':issue_tracker_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIssueTrackersIssueTrackerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersIssueTrackerNameQueryKey>
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
      ...getIssueTrackersIssueTrackerNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIssueTrackersIssueTrackerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersIssueTrackerNameQueryKey>
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
      ...getIssueTrackersIssueTrackerNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIssueTrackersIssueTrackerNameMutationKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'PUT'] as const
}

export function getPutIssueTrackersIssueTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTrackersIssueTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
    ) {
      return parseResponse(client.issue_trackers[':issue_tracker_name'].$put(args, options))
    },
  })
}

export function usePutIssueTrackersIssueTrackerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIssueTrackersIssueTrackerNameMutationOptions<
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

export function getDeleteIssueTrackersIssueTrackerNameMutationKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'DELETE'] as const
}

export function getDeleteIssueTrackersIssueTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueTrackersIssueTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
    ) {
      return parseResponse(client.issue_trackers[':issue_tracker_name'].$delete(args, options))
    },
  })
}

export function useDeleteIssueTrackersIssueTrackerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIssueTrackersIssueTrackerNameMutationOptions<
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

export function getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
) {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name/issues/:issue_name', args] as const
}

export function getIssueTrackersIssueTrackerNameIssuesIssueNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey>
  >({
    queryKey: getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIssueTrackersIssueTrackerNameIssuesIssueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey>
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
      ...getIssueTrackersIssueTrackerNameIssuesIssueNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIssueTrackersIssueTrackerNameIssuesIssueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey>
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
      ...getIssueTrackersIssueTrackerNameIssuesIssueNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPersonQueryKey(args: InferRequestType<typeof client.person.$get>) {
  return ['person', '/person', args] as const
}

export function getPersonQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.person.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonQueryKey>
  >({
    queryKey: getPersonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePerson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.person.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPersonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePerson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.person.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPersonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPersonMutationKey() {
  return ['person', '/person', 'POST'] as const
}

export function getPostPersonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$post>>>>>,
    TError,
    InferRequestType<typeof client.person.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.person.$post>) {
      return parseResponse(client.person.$post(args, options))
    },
  })
}

export function usePostPerson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$post>>>>>,
        TError,
        InferRequestType<typeof client.person.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPersonRegisterMutationKey() {
  return ['person', '/person/register', 'POST'] as const
}

export function getPostPersonRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.person.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.person.register.$post>) {
      return parseResponse(client.person.register.$post(args, options))
    },
  })
}

export function usePostPersonRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.person.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPersonLoginQueryKey(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
) {
  return ['person', '/person/:login', args] as const
}

export function getPersonLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginQueryKey>
  >({
    queryKey: getPersonLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person[':login'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePersonLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePersonLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPersonLoginMutationKey() {
  return ['person', '/person/:login', 'PUT'] as const
}

export function getPutPersonLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPersonLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['$put']>) {
      return parseResponse(client.person[':login'].$put(args, options))
    },
  })
}

export function usePutPersonLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.person)[':login']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPersonLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPersonLoginMutationKey() {
  return ['person', '/person/:login', 'POST'] as const
}

export function getPostPersonLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['$post']>) {
      return parseResponse(client.person[':login'].$post(args, options))
    },
  })
}

export function usePostPersonLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.person)[':login']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPersonLoginGroupQueryKey(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
) {
  return ['person', '/person/:login/group', args] as const
}

export function getPersonLoginGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginGroupQueryKey>
  >({
    queryKey: getPersonLoginGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person[':login'].group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePersonLoginGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonLoginGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePersonLoginGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonLoginGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPersonLoginTokenQueryKey(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
) {
  return ['person', '/person/:login/token', args] as const
}

export function getPersonLoginTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginTokenQueryKey>
  >({
    queryKey: getPersonLoginTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person[':login'].token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePersonLoginToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonLoginTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePersonLoginToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonLoginTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonLoginTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPersonLoginTokenMutationKey() {
  return ['person', '/person/:login/token', 'POST'] as const
}

export function getPostPersonLoginTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonLoginTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['token']['$post']>) {
      return parseResponse(client.person[':login'].token.$post(args, options))
    },
  })
}

export function usePostPersonLoginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.person)[':login']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonLoginTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePersonLoginTokenIdMutationKey() {
  return ['person', '/person/:login/token/:id', 'DELETE'] as const
}

export function getDeletePersonLoginTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePersonLoginTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
    ) {
      return parseResponse(client.person[':login'].token[':id'].$delete(args, options))
    },
  })
}

export function useDeletePersonLoginTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':login']['token'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePersonLoginTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getPublishedQueryKey() {
  return ['published', '/published'] as const
}

export function getPublishedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublishedQueryKey>
  >({
    queryKey: getPublishedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.published.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublished<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublishedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublished<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublishedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPublishedProjectNameQueryKey(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
) {
  return ['published', '/published/:project_name', args] as const
}

export function getPublishedProjectNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameQueryKey>
  >({
    queryKey: getPublishedProjectNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublishedProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublishedProjectNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublishedProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublishedProjectNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameQueryKey(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
) {
  return ['published', '/published/:project_name/:repository_name', args] as const
}

export function getPublishedProjectNameRepositoryNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameQueryKey>
  >({
    queryKey: getPublishedProjectNameRepositoryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'][':repository_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublishedProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameQueryKey>
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
      ...getPublishedProjectNameRepositoryNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublishedProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameQueryKey>
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
      ...getPublishedProjectNameRepositoryNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameQueryKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name',
    args,
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameQueryKey>
  >({
    queryKey: getPublishedProjectNameRepositoryNameArchitectureNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublishedProjectNameRepositoryNameArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameQueryKey>
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublishedProjectNameRepositoryNameArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameQueryKey>
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename',
    args,
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey>
  >({
    queryKey: getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'][
          ':binary_filename'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublishedProjectNameRepositoryNameArchitectureNameBinaryFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey
        >
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublishedProjectNameRepositoryNameArchitectureNameBinaryFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey
        >
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename?view=ymp',
    args,
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey
    >
  >({
    queryKey:
      getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'][
          ':binary_filename?view=ymp'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey
        >
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey
        >
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
      ...getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameViewStatusQueryKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
) {
  return ['published', '/published/:project_name/:repository_name?view=status', args] as const
}

export function getPublishedProjectNameRepositoryNameViewStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameViewStatusQueryKey>
  >({
    queryKey: getPublishedProjectNameRepositoryNameViewStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.published[':project_name'][':repository_name?view=status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublishedProjectNameRepositoryNameViewStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameViewStatusQueryKey>
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
      ...getPublishedProjectNameRepositoryNameViewStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublishedProjectNameRepositoryNameViewStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishedProjectNameRepositoryNameViewStatusQueryKey>
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
      ...getPublishedProjectNameRepositoryNameViewStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRequestQueryKey() {
  return ['request', '/request'] as const
}

export function getRequestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestQueryKey>
  >({
    queryKey: getRequestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.request.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRequestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRequestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRequestMutationKey() {
  return ['request', '/request', 'POST'] as const
}

export function getPostRequestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
    TError,
    InferRequestType<typeof client.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.request.$post>) {
      return parseResponse(client.request.$post(args, options))
    },
  })
}

export function usePostRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
        TError,
        InferRequestType<typeof client.request.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRequestIdQueryKey(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
) {
  return ['request', '/request/:id', args] as const
}

export function getRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.request)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequestIdQueryKey>
  >({
    queryKey: getRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.request[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequestId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequestIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequestId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequestIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRequestIdMutationKey() {
  return ['request', '/request/:id', 'PUT'] as const
}

export function getPutRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$put']>) {
      return parseResponse(client.request[':id'].$put(args, options))
    },
  })
}

export function usePutRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestIdMutationKey() {
  return ['request', '/request/:id', 'POST'] as const
}

export function getPostRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$post']>) {
      return parseResponse(client.request[':id'].$post(args, options))
    },
  })
}

export function usePostRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRequestIdMutationKey() {
  return ['request', '/request/:id', 'DELETE'] as const
}

export function getDeleteRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$delete']>) {
      return parseResponse(client.request[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestIdCmdDiffMutationKey() {
  return ['request', '/request/:id?cmd=diff', 'POST'] as const
}

export function getPostRequestIdCmdDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id?cmd=diff']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestIdCmdDiffMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>) {
      return parseResponse(client.request[':id?cmd=diff'].$post(args, options))
    },
  })
}

export function usePostRequestIdCmdDiff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.request)[':id?cmd=diff']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestIdCmdDiffMutationOptions<TError, TOnMutateResult>(
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

export function getRequestViewCollectionQueryKey(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
) {
  return ['request?view=collection', '/request?view=collection', args] as const
}

export function getRequestViewCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestViewCollectionQueryKey>
  >({
    queryKey: getRequestViewCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['request?view=collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRequestViewCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestViewCollectionQueryKey>
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
      ...getRequestViewCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRequestViewCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestViewCollectionQueryKey>
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
      ...getRequestViewCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkerStatusQueryKey() {
  return ['worker', '/worker/status'] as const
}

export function getWorkerStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerStatusQueryKey>
  >({
    queryKey: getWorkerStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.worker.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkerStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkerStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkerStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkerStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWorkerArchitectureNameWorkerIdQueryKey(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
) {
  return ['worker', '/worker/:architecture_name:{worker_id}', args] as const
}

export function getWorkerArchitectureNameWorkerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerArchitectureNameWorkerIdQueryKey>
  >({
    queryKey: getWorkerArchitectureNameWorkerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.worker[':architecture_name:{worker_id}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkerArchitectureNameWorkerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerArchitectureNameWorkerIdQueryKey>
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
      ...getWorkerArchitectureNameWorkerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkerArchitectureNameWorkerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkerArchitectureNameWorkerIdQueryKey>
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
      ...getWorkerArchitectureNameWorkerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWorkerCmdCheckconstraintsMutationKey() {
  return ['worker?cmd=checkconstraints', '/worker?cmd=checkconstraints', 'POST'] as const
}

export function getPostWorkerCmdCheckconstraintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['worker?cmd=checkconstraints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkerCmdCheckconstraintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
    ) {
      return parseResponse(client['worker?cmd=checkconstraints'].$post(args, options))
    },
  })
}

export function usePostWorkerCmdCheckconstraints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['worker?cmd=checkconstraints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkerCmdCheckconstraintsMutationOptions<TError, TOnMutateResult>(
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
