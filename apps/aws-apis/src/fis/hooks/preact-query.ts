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

export function getActionsKey() {
  return ['actions'] as const
}

export function getExperimentTemplatesKey() {
  return ['experimentTemplates'] as const
}

export function getExperimentsKey() {
  return ['experiments'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTargetResourceTypesKey() {
  return ['targetResourceTypes'] as const
}

export function getExperimentTemplatesQueryKey(
  args: InferRequestType<typeof client.experimentTemplates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['experimentTemplates', '/experimentTemplates', keyArgs] as const
}

export function getExperimentTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.experimentTemplates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentTemplatesQueryKey>
  >({
    queryKey: getExperimentTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.experimentTemplates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExperimentTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.experimentTemplates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExperimentTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExperimentTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.experimentTemplates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExperimentTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostExperimentTemplatesMutationKey() {
  return ['experimentTemplates', '/experimentTemplates', 'POST'] as const
}

export function getPostExperimentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.experimentTemplates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExperimentTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.experimentTemplates.$post>) {
      return parseResponse(client.experimentTemplates.$post(args, options))
    },
  })
}

export function usePostExperimentTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.experimentTemplates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExperimentTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getExperimentTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['experimentTemplates', '/experimentTemplates/:id', keyArgs] as const
}

export function getExperimentTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentTemplatesIdQueryKey>
  >({
    queryKey: getExperimentTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.experimentTemplates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExperimentTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentTemplatesIdQueryKey>
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
      ...getExperimentTemplatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExperimentTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentTemplatesIdQueryKey>
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
      ...getExperimentTemplatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteExperimentTemplatesIdMutationKey() {
  return ['experimentTemplates', '/experimentTemplates/:id', 'DELETE'] as const
}

export function getDeleteExperimentTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.experimentTemplates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExperimentTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.experimentTemplates)[':id']['$delete']>,
    ) {
      return parseResponse(client.experimentTemplates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteExperimentTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.experimentTemplates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExperimentTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchExperimentTemplatesIdMutationKey() {
  return ['experimentTemplates', '/experimentTemplates/:id', 'PATCH'] as const
}

export function getPatchExperimentTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.experimentTemplates)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExperimentTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.experimentTemplates)[':id']['$patch']>) {
      return parseResponse(client.experimentTemplates[':id'].$patch(args, options))
    },
  })
}

export function usePatchExperimentTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.experimentTemplates)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExperimentTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['actions', '/actions/:id', keyArgs] as const
}

export function getActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.actions)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >({
    queryKey: getActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExperimentsIdQueryKey(
  args: InferRequestType<(typeof client.experiments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['experiments', '/experiments/:id', keyArgs] as const
}

export function getExperimentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experiments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentsIdQueryKey>
  >({
    queryKey: getExperimentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.experiments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExperimentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experiments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExperimentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExperimentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.experiments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExperimentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteExperimentsIdMutationKey() {
  return ['experiments', '/experiments/:id', 'DELETE'] as const
}

export function getDeleteExperimentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.experiments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExperimentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.experiments)[':id']['$delete']>) {
      return parseResponse(client.experiments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteExperimentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.experiments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExperimentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getTargetResourceTypesResourceTypeQueryKey(
  args: InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['targetResourceTypes', '/targetResourceTypes/:resourceType', keyArgs] as const
}

export function getTargetResourceTypesResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetResourceTypesResourceTypeQueryKey>
  >({
    queryKey: getTargetResourceTypesResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targetResourceTypes[':resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetResourceTypesResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetResourceTypesResourceTypeQueryKey>
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
      ...getTargetResourceTypesResourceTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetResourceTypesResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetResourceTypesResourceTypeQueryKey>
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
      ...getTargetResourceTypesResourceTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getActionsQueryKey(args: InferRequestType<typeof client.actions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['actions', '/actions', keyArgs] as const
}

export function getActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActionsQueryKey>
  >({
    queryKey: getActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExperimentsQueryKey(args: InferRequestType<typeof client.experiments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['experiments', '/experiments', keyArgs] as const
}

export function getExperimentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.experiments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExperimentsQueryKey>
  >({
    queryKey: getExperimentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.experiments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.experiments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExperimentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.experiments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExperimentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostExperimentsMutationKey() {
  return ['experiments', '/experiments', 'POST'] as const
}

export function getPostExperimentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$post>>>>>,
    TError,
    InferRequestType<typeof client.experiments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExperimentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.experiments.$post>) {
      return parseResponse(client.experiments.$post(args, options))
    },
  })
}

export function usePostExperiments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.experiments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExperimentsMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getDeleteTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'DELETE'] as const
}

export function getDeleteTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$delete']>) {
      return parseResponse(client.tags[':resourceArn'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getTargetResourceTypesQueryKey(
  args: InferRequestType<typeof client.targetResourceTypes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['targetResourceTypes', '/targetResourceTypes', keyArgs] as const
}

export function getTargetResourceTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.targetResourceTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetResourceTypesQueryKey>
  >({
    queryKey: getTargetResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targetResourceTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTargetResourceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targetResourceTypes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetResourceTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetResourceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targetResourceTypes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetResourceTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
