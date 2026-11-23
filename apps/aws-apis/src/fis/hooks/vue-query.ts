import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.experimentTemplates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['experimentTemplates', '/experimentTemplates', keyArgs] as const
}

export function getExperimentTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.experimentTemplates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExperimentTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.experimentTemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExperimentTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.experimentTemplates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>
            >
          >,
          ReturnType<typeof getExperimentTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experimentTemplates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExperimentTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.experimentTemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['experimentTemplates', '/experimentTemplates/:id', keyArgs] as const
}

export function getExperimentTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExperimentTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.experimentTemplates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExperimentTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.experimentTemplates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExperimentTemplatesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExperimentTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.experimentTemplates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['actions', '/actions/:id', keyArgs] as const
}

export function getActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getActionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExperimentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experiments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['experiments', '/experiments/:id', keyArgs] as const
}

export function getExperimentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experiments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExperimentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.experiments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExperimentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.experiments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getExperimentsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.experiments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExperimentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.experiments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.experiments)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.experiments)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['targetResourceTypes', '/targetResourceTypes/:resourceType', keyArgs] as const
}

export function getTargetResourceTypesResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetResourceTypesResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targetResourceTypes[':resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targetResourceTypes)[':resourceType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTargetResourceTypesResourceTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetResourceTypesResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targetResourceTypes[':resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['actions', '/actions', keyArgs] as const
}

export function getActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
          >,
          ReturnType<typeof getActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExperimentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.experiments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['experiments', '/experiments', keyArgs] as const
}

export function getExperimentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.experiments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.experiments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.experiments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>
          >,
          ReturnType<typeof getExperimentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.experiments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.experiments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.targetResourceTypes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['targetResourceTypes', '/targetResourceTypes', keyArgs] as const
}

export function getTargetResourceTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targetResourceTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetResourceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targetResourceTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetResourceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targetResourceTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>
            >
          >,
          ReturnType<typeof getTargetResourceTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targetResourceTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetResourceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetResourceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targetResourceTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
