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

export function getCanariesKey() {
  return ['canaries'] as const
}

export function getCanaryKey() {
  return ['canary'] as const
}

export function getGroupKey() {
  return ['group'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getResourceKey() {
  return ['resource'] as const
}

export function getRuntimeVersionsKey() {
  return ['runtime-versions'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPatchGroupGroupIdentifierAssociateMutationKey() {
  return ['group', '/group/:groupIdentifier/associate', 'PATCH'] as const
}

export function getPatchGroupGroupIdentifierAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupGroupIdentifierAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>,
    ) {
      return parseResponse(client.group[':groupIdentifier'].associate.$patch(args, options))
    },
  })
}

export function usePatchGroupGroupIdentifierAssociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupGroupIdentifierAssociateMutationOptions<
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

export function getPostCanaryMutationKey() {
  return ['canary', '/canary', 'POST'] as const
}

export function getPostCanaryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canary.$post>>>>>,
    TError,
    InferRequestType<typeof client.canary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCanaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.canary.$post>) {
      return parseResponse(client.canary.$post(args, options))
    },
  })
}

export function usePostCanary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canary.$post>>>>>,
        TError,
        InferRequestType<typeof client.canary.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanaryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGroupMutationKey() {
  return ['group', '/group', 'POST'] as const
}

export function getPostGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$post>>>>>,
    TError,
    InferRequestType<typeof client.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.group.$post>) {
      return parseResponse(client.group.$post(args, options))
    },
  })
}

export function usePostGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$post>>>>>,
        TError,
        InferRequestType<typeof client.group.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCanaryNameQueryKey(
  args: InferRequestType<(typeof client.canary)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['canary', '/canary/:name', keyArgs] as const
}

export function getCanaryNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.canary)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanaryNameQueryKey>
  >({
    queryKey: getCanaryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.canary[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCanaryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.canary)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanaryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCanaryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCanaryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.canary)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanaryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCanaryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteCanaryNameMutationKey() {
  return ['canary', '/canary/:name', 'DELETE'] as const
}

export function getDeleteCanaryNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canary)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCanaryNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canary)[':name']['$delete']>) {
      return parseResponse(client.canary[':name'].$delete(args, options))
    },
  })
}

export function useDeleteCanaryName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.canary)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCanaryNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCanaryNameMutationKey() {
  return ['canary', '/canary/:name', 'PATCH'] as const
}

export function getPatchCanaryNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canary)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCanaryNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canary)[':name']['$patch']>) {
      return parseResponse(client.canary[':name'].$patch(args, options))
    },
  })
}

export function usePatchCanaryName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.canary)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCanaryNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupGroupIdentifierQueryKey(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['group', '/group/:groupIdentifier', keyArgs] as const
}

export function getGroupGroupIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdentifierQueryKey>
  >({
    queryKey: getGroupGroupIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupIdentifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteGroupGroupIdentifierMutationKey() {
  return ['group', '/group/:groupIdentifier', 'DELETE'] as const
}

export function getDeleteGroupGroupIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupIdentifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupGroupIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':groupIdentifier']['$delete']>) {
      return parseResponse(client.group[':groupIdentifier'].$delete(args, options))
    },
  })
}

export function useDeleteGroupGroupIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupIdentifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupGroupIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getPostCanariesMutationKey() {
  return ['canaries', '/canaries', 'POST'] as const
}

export function getPostCanariesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canaries.$post>>>>>,
    TError,
    InferRequestType<typeof client.canaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCanariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.canaries.$post>) {
      return parseResponse(client.canaries.$post(args, options))
    },
  })
}

export function usePostCanaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canaries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.canaries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanariesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCanariesLastRunMutationKey() {
  return ['canaries', '/canaries/last-run', 'POST'] as const
}

export function getPostCanariesLastRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canaries)['last-run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canaries)['last-run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCanariesLastRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canaries)['last-run']['$post']>) {
      return parseResponse(client.canaries['last-run'].$post(args, options))
    },
  })
}

export function usePostCanariesLastRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.canaries)['last-run']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.canaries)['last-run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanariesLastRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostRuntimeVersionsMutationKey() {
  return ['runtime-versions', '/runtime-versions', 'POST'] as const
}

export function getPostRuntimeVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['runtime-versions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['runtime-versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRuntimeVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['runtime-versions']['$post']>) {
      return parseResponse(client['runtime-versions'].$post(args, options))
    },
  })
}

export function usePostRuntimeVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['runtime-versions']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['runtime-versions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRuntimeVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGroupGroupIdentifierDisassociateMutationKey() {
  return ['group', '/group/:groupIdentifier/disassociate', 'PATCH'] as const
}

export function getPatchGroupGroupIdentifierDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupGroupIdentifierDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>,
    ) {
      return parseResponse(client.group[':groupIdentifier'].disassociate.$patch(args, options))
    },
  })
}

export function usePatchGroupGroupIdentifierDisassociate<
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
                ReturnType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupGroupIdentifierDisassociateMutationOptions<
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

export function getPostCanaryNameRunsMutationKey() {
  return ['canary', '/canary/:name/runs', 'POST'] as const
}

export function getPostCanaryNameRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['runs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canary)[':name']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCanaryNameRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canary)[':name']['runs']['$post']>) {
      return parseResponse(client.canary[':name'].runs.$post(args, options))
    },
  })
}

export function usePostCanaryNameRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.canary)[':name']['runs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.canary)[':name']['runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanaryNameRunsMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourceResourceArnGroupsMutationKey() {
  return ['resource', '/resource/:resourceArn/groups', 'POST'] as const
}

export function getPostResourceResourceArnGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resource)[':resourceArn']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resource)[':resourceArn']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceResourceArnGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resource)[':resourceArn']['groups']['$post']>,
    ) {
      return parseResponse(client.resource[':resourceArn'].groups.$post(args, options))
    },
  })
}

export function usePostResourceResourceArnGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resource)[':resourceArn']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.resource)[':resourceArn']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResourceResourceArnGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupGroupIdentifierResourcesMutationKey() {
  return ['group', '/group/:groupIdentifier/resources', 'POST'] as const
}

export function getPostGroupGroupIdentifierResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupIdentifier']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupIdentifierResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group)[':groupIdentifier']['resources']['$post']>,
    ) {
      return parseResponse(client.group[':groupIdentifier'].resources.$post(args, options))
    },
  })
}

export function usePostGroupGroupIdentifierResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupIdentifier']['resources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupIdentifier']['resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupIdentifierResourcesMutationOptions<
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

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostCanaryNameStartMutationKey() {
  return ['canary', '/canary/:name/start', 'POST'] as const
}

export function getPostCanaryNameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['start']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canary)[':name']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCanaryNameStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canary)[':name']['start']['$post']>) {
      return parseResponse(client.canary[':name'].start.$post(args, options))
    },
  })
}

export function usePostCanaryNameStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.canary)[':name']['start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.canary)[':name']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanaryNameStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostCanaryNameStopMutationKey() {
  return ['canary', '/canary/:name/stop', 'POST'] as const
}

export function getPostCanaryNameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.canary)[':name']['stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.canary)[':name']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCanaryNameStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.canary)[':name']['stop']['$post']>) {
      return parseResponse(client.canary[':name'].stop.$post(args, options))
    },
  })
}

export function usePostCanaryNameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.canary)[':name']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.canary)[':name']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanaryNameStopMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
