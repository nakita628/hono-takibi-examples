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

export function getChangesKey() {
  return ['changes'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getInstancesKey() {
  return ['instances'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getModalitiesKey() {
  return ['modalities'] as const
}

export function getPatientsKey() {
  return ['patients'] as const
}

export function getPeersKey() {
  return ['peers'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getQueriesKey() {
  return ['queries'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getStorageCommitmentKey() {
  return ['storage-commitment'] as const
}

export function getStudiesKey() {
  return ['studies'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getToolsKey() {
  return ['tools'] as const
}

export function getChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
) {
  return ['changes', '/changes', toValue(args)] as const
}

export function getChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          ReturnType<typeof getChangesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChangesMutationKey() {
  return ['changes', '/changes', 'DELETE'] as const
}

export function getDeleteChangesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteChangesMutationKey(),
    async mutationFn() {
      return parseResponse(client.changes.$delete(undefined, options))
    },
  })
}

export function useDeleteChanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteChangesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
) {
  return ['exports', '/exports', toValue(args)] as const
}

export function getExportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
          >,
          ReturnType<typeof getExportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteExportsMutationKey() {
  return ['exports', '/exports', 'DELETE'] as const
}

export function getDeleteExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteExportsMutationKey(),
    async mutationFn() {
      return parseResponse(client.exports.$delete(undefined, options))
    },
  })
}

export function useDeleteExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
) {
  return ['instances', '/instances', toValue(args)] as const
}

export function getInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
          >,
          ReturnType<typeof getInstancesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstancesMutationKey() {
  return ['instances', '/instances', 'POST'] as const
}

export function getPostInstancesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>>,
    TError,
    InferRequestType<typeof client.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instances.$post>) {
      return parseResponse(client.instances.$post(args, options))
    },
  })
}

export function usePostInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.instances.$post>,
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
  const mutationDefaults = getPostInstancesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstancesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['$get']>>,
) {
  return ['instances', '/instances/:id', toValue(args)] as const
}

export function getInstancesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInstancesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteInstancesIdMutationKey() {
  return ['instances', '/instances/:id', 'DELETE'] as const
}

export function getDeleteInstancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['$delete']>) {
      return parseResponse(client.instances[':id'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteInstancesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstancesIdAnonymizeMutationKey() {
  return ['instances', '/instances/:id/anonymize', 'POST'] as const
}

export function getPostInstancesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAnonymizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
    ) {
      return parseResponse(client.instances[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostInstancesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['anonymize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
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
  const mutationDefaults = getPostInstancesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>>,
) {
  return ['instances', '/instances/:id/attachments', toValue(args)] as const
}

export function getInstancesIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name', keyArgs] as const
}

export function getInstancesIdAttachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstancesIdAttachmentsNameMutationKey() {
  return ['instances', '/instances/:id/attachments/:name', 'PUT'] as const
}

export function getPutInstancesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.instances[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutInstancesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
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
  const mutationDefaults = getPutInstancesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancesIdAttachmentsNameMutationKey() {
  return ['instances', '/instances/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteInstancesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.instances[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesIdAttachmentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteInstancesIdAttachmentsNameMutationOptions<
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

export function getPostInstancesIdAttachmentsNameCompressMutationKey() {
  return ['instances', '/instances/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].compress.$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameCompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
          >,
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameCompressMutationOptions<
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

export function getInstancesIdAttachmentsNameCompressedDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameCompressedDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameCompressedData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameCompressedDataQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameCompressedDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameCompressedMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameCompressedMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameCompressedMd5QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameCompressedMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameCompressedSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameCompressedSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameCompressedSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameCompressedSizeQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameCompressedSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/data', keyArgs] as const
}

export function getInstancesIdAttachmentsNameDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameDataQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/info', keyArgs] as const
}

export function getInstancesIdAttachmentsNameInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['info']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameInfoQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameIsCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getInstancesIdAttachmentsNameIsCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameIsCompressedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameIsCompressedQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameIsCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameIsCompressedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/md5', keyArgs] as const
}

export function getInstancesIdAttachmentsNameMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].md5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['md5']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['md5']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameMd5QueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name'].md5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/attachments/:name/size', keyArgs] as const
}

export function getInstancesIdAttachmentsNameSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdAttachmentsNameSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].size.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdAttachmentsNameSizeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdAttachmentsNameSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].attachments[':name'].size.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstancesIdAttachmentsNameUncompressMutationKey() {
  return ['instances', '/instances/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameUncompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
          >,
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostInstancesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['instances', '/instances/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameVerifyMd5<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
          >,
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getInstancesIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['content']['$get']>>,
) {
  return ['instances', '/instances/:id/content', toValue(args)] as const
}

export function getInstancesIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstancesIdExportMutationKey() {
  return ['instances', '/instances/:id/export', 'POST'] as const
}

export function getPostInstancesIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['export']['$post']>) {
      return parseResponse(client.instances[':id'].export.$post(args, options))
    },
  })
}

export function usePostInstancesIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['export']['$post']>,
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
  const mutationDefaults = getPostInstancesIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['file']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/file', keyArgs] as const
}

export function getInstancesIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['frames']['$get']>>,
) {
  return ['instances', '/instances/:id/frames', toValue(args)] as const
}

export function getInstancesIdFramesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['frames']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFrames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['frames']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>
  >,
) {
  return ['instances', '/instances/:id/frames/:frame', toValue(args)] as const
}

export function getInstancesIdFramesFrameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrame<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageInt16QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/frames/:frame/image-int16', keyArgs] as const
}

export function getInstancesIdFramesFrameImageInt16QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameImageInt16QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-int16'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameImageInt16QueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageInt16QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameImageInt16QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame']['image-int16'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageUint16QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/frames/:frame/image-uint16', keyArgs] as const
}

export function getInstancesIdFramesFrameImageUint16QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameImageUint16QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-uint16'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameImageUint16QueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageUint16QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameImageUint16QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame']['image-uint16'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageUint8QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/frames/:frame/image-uint8', keyArgs] as const
}

export function getInstancesIdFramesFrameImageUint8QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameImageUint8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-uint8'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameImageUint8QueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageUint8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameImageUint8QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame']['image-uint8'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameMatlabQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
  >,
) {
  return ['instances', '/instances/:id/frames/:frame/matlab', toValue(args)] as const
}

export function getInstancesIdFramesFrameMatlabQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameMatlabQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].matlab.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameMatlabQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameMatlabQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameMatlabQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].matlab.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameNumpyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
  >,
) {
  return ['instances', '/instances/:id/frames/:frame/numpy', toValue(args)] as const
}

export function getInstancesIdFramesFrameNumpyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameNumpyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].numpy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameNumpyQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameNumpyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameNumpyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].numpy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFramePreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/frames/:frame/preview', keyArgs] as const
}

export function getInstancesIdFramesFramePreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFramePreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFramePreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['preview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['preview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFramePreviewQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFramePreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFramePreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRawQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
  >,
) {
  return ['instances', '/instances/:id/frames/:frame/raw', toValue(args)] as const
}

export function getInstancesIdFramesFrameRawQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameRawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].raw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameRawQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameRawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].raw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRawGzQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
  >,
) {
  return ['instances', '/instances/:id/frames/:frame/raw.gz', toValue(args)] as const
}

export function getInstancesIdFramesFrameRawGzQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameRawGzQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['raw.gz'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameRawGz<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameRawGzQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRawGzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameRawGzQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame']['raw.gz'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRenderedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/frames/:frame/rendered', keyArgs] as const
}

export function getInstancesIdFramesFrameRenderedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdFramesFrameRenderedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].rendered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdFramesFrameRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesIdFramesFrameRenderedQueryKey>
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
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRenderedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdFramesFrameRenderedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].frames[':frame'].rendered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdHeaderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['header']['$get']>>,
) {
  return ['instances', '/instances/:id/header', toValue(args)] as const
}

export function getInstancesIdHeaderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['header']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdHeaderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].header.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdHeader<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['header']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdHeaderQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdHeaderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdHeaderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].header.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdImageInt16QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/image-int16', keyArgs] as const
}

export function getInstancesIdImageInt16QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdImageInt16QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id']['image-int16'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdImageInt16QueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageInt16QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdImageInt16QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id']['image-int16'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdImageUint16QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/image-uint16', keyArgs] as const
}

export function getInstancesIdImageUint16QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdImageUint16QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id']['image-uint16'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdImageUint16QueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageUint16QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdImageUint16QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id']['image-uint16'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdImageUint8QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/image-uint8', keyArgs] as const
}

export function getInstancesIdImageUint8QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdImageUint8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id']['image-uint8'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdImageUint8QueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageUint8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdImageUint8QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id']['image-uint8'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdMatlabQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>>,
) {
  return ['instances', '/instances/:id/matlab', toValue(args)] as const
}

export function getInstancesIdMatlabQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdMatlabQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].matlab.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdMatlabQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMatlabQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdMatlabQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].matlab.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>>,
) {
  return ['instances', '/instances/:id/metadata', toValue(args)] as const
}

export function getInstancesIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdMetadataNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/metadata/:name', keyArgs] as const
}

export function getInstancesIdMetadataNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdMetadataNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].metadata[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdMetadataNameQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMetadataNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdMetadataNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].metadata[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstancesIdMetadataNameMutationKey() {
  return ['instances', '/instances/:id/metadata/:name', 'PUT'] as const
}

export function getPutInstancesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.instances[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutInstancesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
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
  const mutationDefaults = getPutInstancesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancesIdMetadataNameMutationKey() {
  return ['instances', '/instances/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteInstancesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.instances[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteInstancesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstancesIdModifyMutationKey() {
  return ['instances', '/instances/:id/modify', 'POST'] as const
}

export function getPostInstancesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['modify']['$post']>) {
      return parseResponse(client.instances[':id'].modify.$post(args, options))
    },
  })
}

export function usePostInstancesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['modify']['$post']>,
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
  const mutationDefaults = getPostInstancesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdModuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['module']['$get']>>,
) {
  return ['instances', '/instances/:id/module', toValue(args)] as const
}

export function getInstancesIdModuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['module']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdModuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].module.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['module']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdModuleQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdModuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdModuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].module.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdNumpyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>>,
) {
  return ['instances', '/instances/:id/numpy', toValue(args)] as const
}

export function getInstancesIdNumpyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdNumpyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].numpy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdNumpyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdNumpyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdNumpyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].numpy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdPatientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['patient']['$get']>>,
) {
  return ['instances', '/instances/:id/patient', toValue(args)] as const
}

export function getInstancesIdPatientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['patient']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdPatientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].patient.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['patient']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdPatientQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPatientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdPatientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].patient.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdPdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>>,
) {
  return ['instances', '/instances/:id/pdf', toValue(args)] as const
}

export function getInstancesIdPdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdPdfQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['preview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/preview', keyArgs] as const
}

export function getInstancesIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstancesIdReconstructMutationKey() {
  return ['instances', '/instances/:id/reconstruct', 'POST'] as const
}

export function getPostInstancesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.instances[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostInstancesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['reconstruct']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
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
  const mutationDefaults = getPostInstancesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdRenderedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['instances', '/instances/:id/rendered', keyArgs] as const
}

export function getInstancesIdRenderedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdRenderedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].rendered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdRenderedQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdRenderedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdRenderedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].rendered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['series']['$get']>>,
) {
  return ['instances', '/instances/:id/series', toValue(args)] as const
}

export function getInstancesIdSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['series']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['series']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdSimplifiedTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>
  >,
) {
  return ['instances', '/instances/:id/simplified-tags', toValue(args)] as const
}

export function getInstancesIdSimplifiedTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdSimplifiedTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id']['simplified-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdSimplifiedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdSimplifiedTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdSimplifiedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdSimplifiedTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id']['simplified-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>>,
) {
  return ['instances', '/instances/:id/statistics', toValue(args)] as const
}

export function getInstancesIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdStudyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['study']['$get']>>,
) {
  return ['instances', '/instances/:id/study', toValue(args)] as const
}

export function getInstancesIdStudyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['study']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdStudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].study.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['study']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdStudyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdStudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdStudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].study.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesIdTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['tags']['$get']>>,
) {
  return ['instances', '/instances/:id/tags', toValue(args)] as const
}

export function getInstancesIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':id']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesIdTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  return ['jobs', '/jobs', toValue(args)] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
) {
  return ['jobs', '/jobs/:id', toValue(args)] as const
}

export function getJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsIdCancelMutationKey() {
  return ['jobs', '/jobs/:id/cancel', 'POST'] as const
}

export function getPostJobsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>) {
      return parseResponse(client.jobs[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostJobsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostJobsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobsIdPauseMutationKey() {
  return ['jobs', '/jobs/:id/pause', 'POST'] as const
}

export function getPostJobsIdPauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdPauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>) {
      return parseResponse(client.jobs[':id'].pause.$post(args, options))
    },
  })
}

export function usePostJobsIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>,
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
  const mutationDefaults = getPostJobsIdPauseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsIdResubmitMutationKey() {
  return ['jobs', '/jobs/:id/resubmit', 'POST'] as const
}

export function getPostJobsIdResubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resubmit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdResubmitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>) {
      return parseResponse(client.jobs[':id'].resubmit.$post(args, options))
    },
  })
}

export function usePostJobsIdResubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['resubmit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>,
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
  const mutationDefaults = getPostJobsIdResubmitMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobsIdResumeMutationKey() {
  return ['jobs', '/jobs/:id/resume', 'POST'] as const
}

export function getPostJobsIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>) {
      return parseResponse(client.jobs[':id'].resume.$post(args, options))
    },
  })
}

export function usePostJobsIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['resume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>,
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
  const mutationDefaults = getPostJobsIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function getJobsIdKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>>,
) {
  return ['jobs', '/jobs/:id/:key', toValue(args)] as const
}

export function getJobsIdKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'][':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsIdKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsIdKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'][':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModalitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modalities.$get>>,
) {
  return ['modalities', '/modalities', toValue(args)] as const
}

export function getModalitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modalities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModalitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.modalities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useModalities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modalities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
          >,
          ReturnType<typeof getModalitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModalitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModalitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.modalities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModalitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.modalities)[':id']['$get']>>,
) {
  return ['modalities', '/modalities/:id', toValue(args)] as const
}

export function getModalitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.modalities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModalitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.modalities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModalitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.modalities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getModalitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModalitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModalitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.modalities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutModalitiesIdMutationKey() {
  return ['modalities', '/modalities/:id', 'PUT'] as const
}

export function getPutModalitiesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutModalitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['$put']>) {
      return parseResponse(client.modalities[':id'].$put(args, options))
    },
  })
}

export function usePutModalitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['$put']>,
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
  const mutationDefaults = getPutModalitiesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteModalitiesIdMutationKey() {
  return ['modalities', '/modalities/:id', 'DELETE'] as const
}

export function getDeleteModalitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModalitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['$delete']>) {
      return parseResponse(client.modalities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteModalitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteModalitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getModalitiesIdConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>
  >,
) {
  return ['modalities', '/modalities/:id/configuration', toValue(args)] as const
}

export function getModalitiesIdConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModalitiesIdConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.modalities[':id'].configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModalitiesIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModalitiesIdConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModalitiesIdConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModalitiesIdConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.modalities[':id'].configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModalitiesIdEchoMutationKey() {
  return ['modalities', '/modalities/:id/echo', 'POST'] as const
}

export function getPostModalitiesIdEchoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['echo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdEchoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>) {
      return parseResponse(client.modalities[':id'].echo.$post(args, options))
    },
  })
}

export function usePostModalitiesIdEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['echo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdEchoMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindMutationKey() {
  return ['modalities', '/modalities/:id/find', 'POST'] as const
}

export function getPostModalitiesIdFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['find']['$post']>) {
      return parseResponse(client.modalities[':id'].find.$post(args, options))
    },
  })
}

export function usePostModalitiesIdFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindInstanceMutationKey() {
  return ['modalities', '/modalities/:id/find-instance', 'POST'] as const
}

export function getPostModalitiesIdFindInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-instance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-instance'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find-instance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindPatientMutationKey() {
  return ['modalities', '/modalities/:id/find-patient', 'POST'] as const
}

export function getPostModalitiesIdFindPatientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-patient']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindPatientMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-patient'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindPatient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find-patient']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindPatientMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindSeriesMutationKey() {
  return ['modalities', '/modalities/:id/find-series', 'POST'] as const
}

export function getPostModalitiesIdFindSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-series'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find-series']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindSeriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindStudyMutationKey() {
  return ['modalities', '/modalities/:id/find-study', 'POST'] as const
}

export function getPostModalitiesIdFindStudyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-study']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindStudyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-study'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindStudy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find-study']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindStudyMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindWorklistMutationKey() {
  return ['modalities', '/modalities/:id/find-worklist', 'POST'] as const
}

export function getPostModalitiesIdFindWorklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-worklist']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindWorklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-worklist'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindWorklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['find-worklist']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdFindWorklistMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdMoveMutationKey() {
  return ['modalities', '/modalities/:id/move', 'POST'] as const
}

export function getPostModalitiesIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['move']['$post']>) {
      return parseResponse(client.modalities[':id'].move.$post(args, options))
    },
  })
}

export function usePostModalitiesIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['move']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['move']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdMoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdQueryMutationKey() {
  return ['modalities', '/modalities/:id/query', 'POST'] as const
}

export function getPostModalitiesIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['query']['$post']>) {
      return parseResponse(client.modalities[':id'].query.$post(args, options))
    },
  })
}

export function usePostModalitiesIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['query']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdStorageCommitmentMutationKey() {
  return ['modalities', '/modalities/:id/storage-commitment', 'POST'] as const
}

export function getPostModalitiesIdStorageCommitmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['storage-commitment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStorageCommitmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['storage-commitment'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdStorageCommitment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.modalities)[':id']['storage-commitment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdStorageCommitmentMutationOptions<
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

export function getPostModalitiesIdStoreMutationKey() {
  return ['modalities', '/modalities/:id/store', 'POST'] as const
}

export function getPostModalitiesIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['store']['$post']>) {
      return parseResponse(client.modalities[':id'].store.$post(args, options))
    },
  })
}

export function usePostModalitiesIdStore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['store']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['store']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdStoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdStoreStraightMutationKey() {
  return ['modalities', '/modalities/:id/store-straight', 'POST'] as const
}

export function getPostModalitiesIdStoreStraightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStoreStraightMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['store-straight'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdStoreStraight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.modalities)[':id']['store-straight']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
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
  const mutationDefaults = getPostModalitiesIdStoreStraightMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.patients.$get>>,
) {
  return ['patients', '/patients', toValue(args)] as const
}

export function getPatientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.patients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePatients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.patients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
          >,
          ReturnType<typeof getPatientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPatientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['$get']>>,
) {
  return ['patients', '/patients/:id', toValue(args)] as const
}

export function getPatientsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPatientsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePatientsIdMutationKey() {
  return ['patients', '/patients/:id', 'DELETE'] as const
}

export function getDeletePatientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['$delete']>) {
      return parseResponse(client.patients[':id'].$delete(args, options))
    },
  })
}

export function useDeletePatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePatientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdAnonymizeMutationKey() {
  return ['patients', '/patients/:id/anonymize', 'POST'] as const
}

export function getPostPatientsIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAnonymizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
    ) {
      return parseResponse(client.patients[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostPatientsIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['anonymize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
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
  const mutationDefaults = getPostPatientsIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdArchiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['archive']['$get']>>,
) {
  return ['patients', '/patients/:id/archive', toValue(args)] as const
}

export function getPatientsIdArchiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['archive']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdArchiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].archive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['archive']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdArchiveQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdArchiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdArchiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].archive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPatientsIdArchiveMutationKey() {
  return ['patients', '/patients/:id/archive', 'POST'] as const
}

export function getPostPatientsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['archive']['$post']>) {
      return parseResponse(client.patients[':id'].archive.$post(args, options))
    },
  })
}

export function usePostPatientsIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['archive']['$post']>,
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
  const mutationDefaults = getPostPatientsIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>>,
) {
  return ['patients', '/patients/:id/attachments', toValue(args)] as const
}

export function getPatientsIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name', keyArgs] as const
}

export function getPatientsIdAttachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPatientsIdAttachmentsNameMutationKey() {
  return ['patients', '/patients/:id/attachments/:name', 'PUT'] as const
}

export function getPutPatientsIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.patients[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutPatientsIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
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
  const mutationDefaults = getPutPatientsIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePatientsIdAttachmentsNameMutationKey() {
  return ['patients', '/patients/:id/attachments/:name', 'DELETE'] as const
}

export function getDeletePatientsIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.patients[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeletePatientsIdAttachmentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
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
  const mutationDefaults = getDeletePatientsIdAttachmentsNameMutationOptions<
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

export function getPostPatientsIdAttachmentsNameCompressMutationKey() {
  return ['patients', '/patients/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].compress.$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameCompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
          >,
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameCompressMutationOptions<
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

export function getPatientsIdAttachmentsNameCompressedDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameCompressedDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameCompressedData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameCompressedDataQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameCompressedDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameCompressedMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameCompressedMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameCompressedMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameCompressedMd5QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameCompressedMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameCompressedSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameCompressedSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameCompressedSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameCompressedSizeQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameCompressedSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/data', keyArgs] as const
}

export function getPatientsIdAttachmentsNameDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameDataQueryKey>
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
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/info', keyArgs] as const
}

export function getPatientsIdAttachmentsNameInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['info']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameInfoQueryKey>
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
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameIsCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getPatientsIdAttachmentsNameIsCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameIsCompressedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameIsCompressedQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameIsCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameIsCompressedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/md5', keyArgs] as const
}

export function getPatientsIdAttachmentsNameMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].md5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameMd5QueryKey>
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
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name'].md5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/attachments/:name/size', keyArgs] as const
}

export function getPatientsIdAttachmentsNameSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdAttachmentsNameSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].size.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPatientsIdAttachmentsNameSizeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdAttachmentsNameSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].attachments[':name'].size.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPatientsIdAttachmentsNameUncompressMutationKey() {
  return ['patients', '/patients/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameUncompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
          >,
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameUncompressMutationOptions<
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

export function getPostPatientsIdAttachmentsNameVerifyMd5MutationKey() {
  return ['patients', '/patients/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameVerifyMd5<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
          >,
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getPatientsIdInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['instances']['$get']>>,
) {
  return ['patients', '/patients/:id/instances', toValue(args)] as const
}

export function getPatientsIdInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdInstancesTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>
  >,
) {
  return ['patients', '/patients/:id/instances-tags', toValue(args)] as const
}

export function getPatientsIdInstancesTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdInstancesTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id']['instances-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdInstancesTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdInstancesTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdInstancesTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id']['instances-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['media']['$get']>>,
) {
  return ['patients', '/patients/:id/media', toValue(args)] as const
}

export function getPatientsIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdMediaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPatientsIdMediaMutationKey() {
  return ['patients', '/patients/:id/media', 'POST'] as const
}

export function getPostPatientsIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['media']['$post']>) {
      return parseResponse(client.patients[':id'].media.$post(args, options))
    },
  })
}

export function usePostPatientsIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['media']['$post']>,
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
  const mutationDefaults = getPostPatientsIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>>,
) {
  return ['patients', '/patients/:id/metadata', toValue(args)] as const
}

export function getPatientsIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdMetadataNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['patients', '/patients/:id/metadata/:name', keyArgs] as const
}

export function getPatientsIdMetadataNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdMetadataNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].metadata[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdMetadataNameQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMetadataNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdMetadataNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].metadata[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPatientsIdMetadataNameMutationKey() {
  return ['patients', '/patients/:id/metadata/:name', 'PUT'] as const
}

export function getPutPatientsIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.patients[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutPatientsIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
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
  const mutationDefaults = getPutPatientsIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePatientsIdMetadataNameMutationKey() {
  return ['patients', '/patients/:id/metadata/:name', 'DELETE'] as const
}

export function getDeletePatientsIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.patients[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeletePatientsIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
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
  const mutationDefaults = getDeletePatientsIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdModifyMutationKey() {
  return ['patients', '/patients/:id/modify', 'POST'] as const
}

export function getPostPatientsIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['modify']['$post']>) {
      return parseResponse(client.patients[':id'].modify.$post(args, options))
    },
  })
}

export function usePostPatientsIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['modify']['$post']>,
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
  const mutationDefaults = getPostPatientsIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdModuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['module']['$get']>>,
) {
  return ['patients', '/patients/:id/module', toValue(args)] as const
}

export function getPatientsIdModuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['module']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdModuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].module.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['module']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdModuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdModuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdModuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].module.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdProtectedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['protected']['$get']>>,
) {
  return ['patients', '/patients/:id/protected', toValue(args)] as const
}

export function getPatientsIdProtectedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['protected']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdProtectedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].protected.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdProtected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['protected']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdProtectedQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdProtectedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdProtectedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].protected.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPatientsIdProtectedMutationKey() {
  return ['patients', '/patients/:id/protected', 'PUT'] as const
}

export function getPutPatientsIdProtectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['protected']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdProtectedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['protected']['$put']>) {
      return parseResponse(client.patients[':id'].protected.$put(args, options))
    },
  })
}

export function usePutPatientsIdProtected<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['protected']['$put']>,
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
  const mutationDefaults = getPutPatientsIdProtectedMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdReconstructMutationKey() {
  return ['patients', '/patients/:id/reconstruct', 'POST'] as const
}

export function getPostPatientsIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.patients[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostPatientsIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['reconstruct']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
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
  const mutationDefaults = getPostPatientsIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['series']['$get']>>,
) {
  return ['patients', '/patients/:id/series', toValue(args)] as const
}

export function getPatientsIdSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['series']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['series']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdSharedTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>>,
) {
  return ['patients', '/patients/:id/shared-tags', toValue(args)] as const
}

export function getPatientsIdSharedTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdSharedTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id']['shared-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdSharedTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdSharedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdSharedTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id']['shared-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>>,
) {
  return ['patients', '/patients/:id/statistics', toValue(args)] as const
}

export function getPatientsIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientsIdStudiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['studies']['$get']>>,
) {
  return ['patients', '/patients/:id/studies', toValue(args)] as const
}

export function getPatientsIdStudiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['studies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientsIdStudiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patients[':id'].studies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientsIdStudies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patients)[':id']['studies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientsIdStudiesQueryKey>
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
          Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdStudiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientsIdStudiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patients[':id'].studies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.$get>>,
) {
  return ['peers', '/peers', toValue(args)] as const
}

export function getPeersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.peers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
          ReturnType<typeof getPeersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.peers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['$get']>>,
) {
  return ['peers', '/peers/:id', toValue(args)] as const
}

export function getPeersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.peers[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPeersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.peers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPeersIdMutationKey() {
  return ['peers', '/peers/:id', 'PUT'] as const
}

export function getPutPeersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPeersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['$put']>) {
      return parseResponse(client.peers[':id'].$put(args, options))
    },
  })
}

export function usePutPeersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.peers)[':id']['$put']>,
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
  const mutationDefaults = getPutPeersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePeersIdMutationKey() {
  return ['peers', '/peers/:id', 'DELETE'] as const
}

export function getDeletePeersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['$delete']>) {
      return parseResponse(client.peers[':id'].$delete(args, options))
    },
  })
}

export function useDeletePeersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.peers)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePeersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPeersIdConfigurationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>>,
) {
  return ['peers', '/peers/:id/configuration', toValue(args)] as const
}

export function getPeersIdConfigurationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeersIdConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.peers[':id'].configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeersIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeersIdConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeersIdConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.peers[':id'].configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPeersIdStoreMutationKey() {
  return ['peers', '/peers/:id/store', 'POST'] as const
}

export function getPostPeersIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['store']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeersIdStoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['store']['$post']>) {
      return parseResponse(client.peers[':id'].store.$post(args, options))
    },
  })
}

export function usePostPeersIdStore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['store']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.peers)[':id']['store']['$post']>,
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
  const mutationDefaults = getPostPeersIdStoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostPeersIdStoreStraightMutationKey() {
  return ['peers', '/peers/:id/store-straight', 'POST'] as const
}

export function getPostPeersIdStoreStraightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.peers)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeersIdStoreStraightMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
    ) {
      return parseResponse(client.peers[':id']['store-straight'].$post(args, options))
    },
  })
}

export function usePostPeersIdStoreStraight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['store-straight']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
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
  const mutationDefaults = getPostPeersIdStoreStraightMutationOptions<TError, TOnMutateResult>(
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

export function getPeersIdSystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['system']['$get']>>,
) {
  return ['peers', '/peers/:id/system', toValue(args)] as const
}

export function getPeersIdSystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['system']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeersIdSystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.peers[':id'].system.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeersIdSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.peers)[':id']['system']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeersIdSystemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeersIdSystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.peers[':id'].system.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsQueryKey() {
  return ['plugins', '/plugins'] as const
}

export function getPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsExplorerJsQueryKey() {
  return ['plugins', '/plugins/explorer.js'] as const
}

export function getPluginsExplorerJsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPluginsExplorerJsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins['explorer.js'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsExplorerJs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPluginsExplorerJsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsExplorerJsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPluginsExplorerJsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins['explorer.js'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
) {
  return ['plugins', '/plugins/:id', toValue(args)] as const
}

export function getPluginsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPluginsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesQueryKey() {
  return ['queries', '/queries'] as const
}

export function getQueriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          ReturnType<typeof getQueriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.queries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['$get']>>,
) {
  return ['queries', '/queries/:id', toValue(args)] as const
}

export function getQueriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getQueriesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteQueriesIdMutationKey() {
  return ['queries', '/queries/:id', 'DELETE'] as const
}

export function getDeleteQueriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queries)[':id']['$delete']>) {
      return parseResponse(client.queries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteQueriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.queries)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteQueriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueriesIdAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['answers']['$get']>>,
) {
  return ['queries', '/queries/:id/answers', toValue(args)] as const
}

export function getQueriesIdAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].answers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesIdAnswersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesIdAnswersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>
  >,
) {
  return ['queries', '/queries/:id/answers/:index', toValue(args)] as const
}

export function getQueriesIdAnswersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdAnswersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].answers[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdAnswersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesIdAnswersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdAnswersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].answers[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesIdAnswersIndexContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
  >,
) {
  return ['queries', '/queries/:id/answers/:index/content', toValue(args)] as const
}

export function getQueriesIdAnswersIndexContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdAnswersIndexContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].answers[':index'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdAnswersIndexContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getQueriesIdAnswersIndexContentQueryKey>
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
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersIndexContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdAnswersIndexContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].answers[':index'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueriesIdAnswersIndexQueryInstancesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-instances', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQueryInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQueryInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-instances'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQueryInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
          >,
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQueryInstancesMutationOptions<
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

export function getPostQueriesIdAnswersIndexQuerySeriesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-series', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQuerySeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['query-series']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQuerySeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-series'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQuerySeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
          >,
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQuerySeriesMutationOptions<
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

export function getPostQueriesIdAnswersIndexQueryStudiesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-studies', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQueryStudiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQueryStudiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-studies'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQueryStudies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
          >,
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQueryStudiesMutationOptions<
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

export function getPostQueriesIdAnswersIndexRetrieveMutationKey() {
  return ['queries', '/queries/:id/answers/:index/retrieve', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']
      >,
    ) {
      return parseResponse(client.queries[':id'].answers[':index'].retrieve.$post(args, options))
    },
  })
}

export function usePostQueriesIdAnswersIndexRetrieve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']
          >,
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
  const mutationDefaults = getPostQueriesIdAnswersIndexRetrieveMutationOptions<
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

export function getQueriesIdLevelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['level']['$get']>>,
) {
  return ['queries', '/queries/:id/level', toValue(args)] as const
}

export function getQueriesIdLevelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['level']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdLevelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].level.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['level']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesIdLevelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdLevelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].level.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesIdModalityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['modality']['$get']>>,
) {
  return ['queries', '/queries/:id/modality', toValue(args)] as const
}

export function getQueriesIdModalityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['modality']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdModalityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].modality.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdModality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['modality']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesIdModalityQueryKey>
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
          Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdModalityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdModalityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].modality.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesIdQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['query']['$get']>>,
) {
  return ['queries', '/queries/:id/query', toValue(args)] as const
}

export function getQueriesIdQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesIdQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':id'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesIdQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':id']['query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesIdQueryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesIdQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':id'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueriesIdRetrieveMutationKey() {
  return ['queries', '/queries/:id/retrieve', 'POST'] as const
}

export function getPostQueriesIdRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':id']['retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdRetrieveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>) {
      return parseResponse(client.queries[':id'].retrieve.$post(args, options))
    },
  })
}

export function usePostQueriesIdRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':id']['retrieve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>,
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
  const mutationDefaults = getPostQueriesIdRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
) {
  return ['series', '/series', toValue(args)] as const
}

export function getSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          ReturnType<typeof getSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
) {
  return ['series', '/series/:id', toValue(args)] as const
}

export function getSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSeriesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSeriesIdMutationKey() {
  return ['series', '/series/:id', 'DELETE'] as const
}

export function getDeleteSeriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['$delete']>) {
      return parseResponse(client.series[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSeriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSeriesIdAnonymizeMutationKey() {
  return ['series', '/series/:id/anonymize', 'POST'] as const
}

export function getPostSeriesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>) {
      return parseResponse(client.series[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostSeriesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['anonymize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>,
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
  const mutationDefaults = getPostSeriesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdArchiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['archive']['$get']>>,
) {
  return ['series', '/series/:id/archive', toValue(args)] as const
}

export function getSeriesIdArchiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['archive']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdArchiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].archive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['archive']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdArchiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdArchiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdArchiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].archive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesIdArchiveMutationKey() {
  return ['series', '/series/:id/archive', 'POST'] as const
}

export function getPostSeriesIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['archive']['$post']>) {
      return parseResponse(client.series[':id'].archive.$post(args, options))
    },
  })
}

export function usePostSeriesIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['archive']['$post']>,
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
  const mutationDefaults = getPostSeriesIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['attachments']['$get']>>,
) {
  return ['series', '/series/:id/attachments', toValue(args)] as const
}

export function getSeriesIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name', keyArgs] as const
}

export function getSeriesIdAttachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSeriesIdAttachmentsNameMutationKey() {
  return ['series', '/series/:id/attachments/:name', 'PUT'] as const
}

export function getPutSeriesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSeriesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutSeriesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
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
  const mutationDefaults = getPutSeriesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSeriesIdAttachmentsNameMutationKey() {
  return ['series', '/series/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteSeriesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteSeriesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostSeriesIdAttachmentsNameCompressMutationKey() {
  return ['series', '/series/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].compress.$post(args, options))
    },
  })
}

export function usePostSeriesIdAttachmentsNameCompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
          >,
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameCompressMutationOptions<
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

export function getSeriesIdAttachmentsNameCompressedDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameCompressedDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameCompressedData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameCompressedDataQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameCompressedDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameCompressedMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameCompressedMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameCompressedMd5QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameCompressedMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameCompressedSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameCompressedSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameCompressedSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameCompressedSizeQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameCompressedSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/data', keyArgs] as const
}

export function getSeriesIdAttachmentsNameDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameDataQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/info', keyArgs] as const
}

export function getSeriesIdAttachmentsNameInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameIsCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getSeriesIdAttachmentsNameIsCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameIsCompressedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameIsCompressedQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameIsCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameIsCompressedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/md5', keyArgs] as const
}

export function getSeriesIdAttachmentsNameMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name'].md5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameMd5QueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name'].md5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/attachments/:name/size', keyArgs] as const
}

export function getSeriesIdAttachmentsNameSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdAttachmentsNameSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].attachments[':name'].size.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesIdAttachmentsNameSizeQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdAttachmentsNameSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].attachments[':name'].size.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesIdAttachmentsNameUncompressMutationKey() {
  return ['series', '/series/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.series[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostSeriesIdAttachmentsNameUncompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
          >,
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostSeriesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['series', '/series/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.series[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostSeriesIdAttachmentsNameVerifyMd5<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
          >,
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getSeriesIdInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances']['$get']>>,
) {
  return ['series', '/series/:id/instances', toValue(args)] as const
}

export function getSeriesIdInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdInstancesTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>>,
) {
  return ['series', '/series/:id/instances-tags', toValue(args)] as const
}

export function getSeriesIdInstancesTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdInstancesTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id']['instances-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdInstancesTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdInstancesTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdInstancesTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id']['instances-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['media']['$get']>>,
) {
  return ['series', '/series/:id/media', toValue(args)] as const
}

export function getSeriesIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdMediaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesIdMediaMutationKey() {
  return ['series', '/series/:id/media', 'POST'] as const
}

export function getPostSeriesIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['media']['$post']>) {
      return parseResponse(client.series[':id'].media.$post(args, options))
    },
  })
}

export function usePostSeriesIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['media']['$post']>,
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
  const mutationDefaults = getPostSeriesIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['metadata']['$get']>>,
) {
  return ['series', '/series/:id/metadata', toValue(args)] as const
}

export function getSeriesIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdMetadataNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['series', '/series/:id/metadata/:name', keyArgs] as const
}

export function getSeriesIdMetadataNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdMetadataNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].metadata[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdMetadataNameQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMetadataNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdMetadataNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].metadata[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSeriesIdMetadataNameMutationKey() {
  return ['series', '/series/:id/metadata/:name', 'PUT'] as const
}

export function getPutSeriesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSeriesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.series[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutSeriesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
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
  const mutationDefaults = getPutSeriesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSeriesIdMetadataNameMutationKey() {
  return ['series', '/series/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteSeriesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.series[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteSeriesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostSeriesIdModifyMutationKey() {
  return ['series', '/series/:id/modify', 'POST'] as const
}

export function getPostSeriesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['modify']['$post']>) {
      return parseResponse(client.series[':id'].modify.$post(args, options))
    },
  })
}

export function usePostSeriesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['modify']['$post']>,
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
  const mutationDefaults = getPostSeriesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdModuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['module']['$get']>>,
) {
  return ['series', '/series/:id/module', toValue(args)] as const
}

export function getSeriesIdModuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['module']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdModuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].module.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['module']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdModuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdModuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdModuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].module.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdNumpyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['numpy']['$get']>>,
) {
  return ['series', '/series/:id/numpy', toValue(args)] as const
}

export function getSeriesIdNumpyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['numpy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdNumpyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].numpy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['numpy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdNumpyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdNumpyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdNumpyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].numpy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdOrderedSlicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>>,
) {
  return ['series', '/series/:id/ordered-slices', toValue(args)] as const
}

export function getSeriesIdOrderedSlicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdOrderedSlicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id']['ordered-slices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdOrderedSlices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdOrderedSlicesQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdOrderedSlicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdOrderedSlicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id']['ordered-slices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdPatientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['patient']['$get']>>,
) {
  return ['series', '/series/:id/patient', toValue(args)] as const
}

export function getSeriesIdPatientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['patient']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdPatientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].patient.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['patient']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdPatientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdPatientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdPatientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].patient.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesIdReconstructMutationKey() {
  return ['series', '/series/:id/reconstruct', 'POST'] as const
}

export function getPostSeriesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.series[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostSeriesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['reconstruct']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
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
  const mutationDefaults = getPostSeriesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdSharedTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>>,
) {
  return ['series', '/series/:id/shared-tags', toValue(args)] as const
}

export function getSeriesIdSharedTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdSharedTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id']['shared-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdSharedTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdSharedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdSharedTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id']['shared-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['statistics']['$get']>>,
) {
  return ['series', '/series/:id/statistics', toValue(args)] as const
}

export function getSeriesIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesIdStudyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['study']['$get']>>,
) {
  return ['series', '/series/:id/study', toValue(args)] as const
}

export function getSeriesIdStudyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['study']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesIdStudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':id'].study.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':id']['study']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesIdStudyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdStudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesIdStudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':id'].study.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsQueryKey() {
  return ['statistics', '/statistics'] as const
}

export function getStatisticsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatisticsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
          >,
          ReturnType<typeof getStatisticsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatisticsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStorageCommitmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>>,
) {
  return ['storage-commitment', '/storage-commitment/:id', toValue(args)] as const
}

export function getStorageCommitmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageCommitmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['storage-commitment'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageCommitmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStorageCommitmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageCommitmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageCommitmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['storage-commitment'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStorageCommitmentIdRemoveMutationKey() {
  return ['storage-commitment', '/storage-commitment/:id/remove', 'POST'] as const
}

export function getPostStorageCommitmentIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStorageCommitmentIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
    ) {
      return parseResponse(client['storage-commitment'][':id'].remove.$post(args, options))
    },
  })
}

export function usePostStorageCommitmentIdRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
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
  const mutationDefaults = getPostStorageCommitmentIdRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.studies.$get>>,
) {
  return ['studies', '/studies', toValue(args)] as const
}

export function getStudiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.studies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStudies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.studies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
          >,
          ReturnType<typeof getStudiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['$get']>>,
) {
  return ['studies', '/studies/:id', toValue(args)] as const
}

export function getStudiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStudiesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteStudiesIdMutationKey() {
  return ['studies', '/studies/:id', 'DELETE'] as const
}

export function getDeleteStudiesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['$delete']>) {
      return parseResponse(client.studies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteStudiesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStudiesIdAnonymizeMutationKey() {
  return ['studies', '/studies/:id/anonymize', 'POST'] as const
}

export function getPostStudiesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>) {
      return parseResponse(client.studies[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostStudiesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['anonymize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>,
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
  const mutationDefaults = getPostStudiesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdArchiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['archive']['$get']>>,
) {
  return ['studies', '/studies/:id/archive', toValue(args)] as const
}

export function getStudiesIdArchiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['archive']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdArchiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].archive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['archive']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdArchiveQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdArchiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdArchiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].archive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStudiesIdArchiveMutationKey() {
  return ['studies', '/studies/:id/archive', 'POST'] as const
}

export function getPostStudiesIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['archive']['$post']>) {
      return parseResponse(client.studies[':id'].archive.$post(args, options))
    },
  })
}

export function usePostStudiesIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['archive']['$post']>,
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
  const mutationDefaults = getPostStudiesIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>>,
) {
  return ['studies', '/studies/:id/attachments', toValue(args)] as const
}

export function getStudiesIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name', keyArgs] as const
}

export function getStudiesIdAttachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStudiesIdAttachmentsNameMutationKey() {
  return ['studies', '/studies/:id/attachments/:name', 'PUT'] as const
}

export function getPutStudiesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStudiesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutStudiesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
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
  const mutationDefaults = getPutStudiesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStudiesIdAttachmentsNameMutationKey() {
  return ['studies', '/studies/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteStudiesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteStudiesIdAttachmentsNameMutationOptions<
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

export function getPostStudiesIdAttachmentsNameCompressMutationKey() {
  return ['studies', '/studies/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].compress.$post(args, options))
    },
  })
}

export function usePostStudiesIdAttachmentsNameCompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
          >,
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameCompressMutationOptions<
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

export function getStudiesIdAttachmentsNameCompressedDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameCompressedDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameCompressedData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameCompressedDataQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameCompressedDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name']['compressed-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameCompressedMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameCompressedMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameCompressedMd5QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameCompressedMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name']['compressed-md5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameCompressedSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameCompressedSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameCompressedSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameCompressedSizeQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameCompressedSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name']['compressed-size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/data', keyArgs] as const
}

export function getStudiesIdAttachmentsNameDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameDataQueryKey>
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
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/info', keyArgs] as const
}

export function getStudiesIdAttachmentsNameInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameInfoQueryKey>
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
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameIsCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getStudiesIdAttachmentsNameIsCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameIsCompressedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameIsCompressedQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameIsCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameIsCompressedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name']['is-compressed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameMd5QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/md5', keyArgs] as const
}

export function getStudiesIdAttachmentsNameMd5QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameMd5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].md5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameMd5QueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameMd5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameMd5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name'].md5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/attachments/:name/size', keyArgs] as const
}

export function getStudiesIdAttachmentsNameSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdAttachmentsNameSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].size.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStudiesIdAttachmentsNameSizeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdAttachmentsNameSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].attachments[':name'].size.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStudiesIdAttachmentsNameUncompressMutationKey() {
  return ['studies', '/studies/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostStudiesIdAttachmentsNameUncompress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
          >,
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostStudiesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['studies', '/studies/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostStudiesIdAttachmentsNameVerifyMd5<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
          >,
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getStudiesIdInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['instances']['$get']>>,
) {
  return ['studies', '/studies/:id/instances', toValue(args)] as const
}

export function getStudiesIdInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdInstancesTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>
  >,
) {
  return ['studies', '/studies/:id/instances-tags', toValue(args)] as const
}

export function getStudiesIdInstancesTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdInstancesTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id']['instances-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdInstancesTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdInstancesTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdInstancesTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id']['instances-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['media']['$get']>>,
) {
  return ['studies', '/studies/:id/media', toValue(args)] as const
}

export function getStudiesIdMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdMediaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStudiesIdMediaMutationKey() {
  return ['studies', '/studies/:id/media', 'POST'] as const
}

export function getPostStudiesIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['media']['$post']>) {
      return parseResponse(client.studies[':id'].media.$post(args, options))
    },
  })
}

export function usePostStudiesIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['media']['$post']>,
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
  const mutationDefaults = getPostStudiesIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostStudiesIdMergeMutationKey() {
  return ['studies', '/studies/:id/merge', 'POST'] as const
}

export function getPostStudiesIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['merge']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdMergeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['merge']['$post']>) {
      return parseResponse(client.studies[':id'].merge.$post(args, options))
    },
  })
}

export function usePostStudiesIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['merge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['merge']['$post']>,
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
  const mutationDefaults = getPostStudiesIdMergeMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>>,
) {
  return ['studies', '/studies/:id/metadata', toValue(args)] as const
}

export function getStudiesIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdMetadataNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['studies', '/studies/:id/metadata/:name', keyArgs] as const
}

export function getStudiesIdMetadataNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdMetadataNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].metadata[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdMetadataNameQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMetadataNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdMetadataNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].metadata[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStudiesIdMetadataNameMutationKey() {
  return ['studies', '/studies/:id/metadata/:name', 'PUT'] as const
}

export function getPutStudiesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStudiesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.studies[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutStudiesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
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
  const mutationDefaults = getPutStudiesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStudiesIdMetadataNameMutationKey() {
  return ['studies', '/studies/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteStudiesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.studies[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteStudiesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostStudiesIdModifyMutationKey() {
  return ['studies', '/studies/:id/modify', 'POST'] as const
}

export function getPostStudiesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['modify']['$post']>) {
      return parseResponse(client.studies[':id'].modify.$post(args, options))
    },
  })
}

export function usePostStudiesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['modify']['$post']>,
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
  const mutationDefaults = getPostStudiesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdModuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['module']['$get']>>,
) {
  return ['studies', '/studies/:id/module', toValue(args)] as const
}

export function getStudiesIdModuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['module']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdModuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].module.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['module']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdModuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdModuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdModuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].module.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdModulePatientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>
  >,
) {
  return ['studies', '/studies/:id/module-patient', toValue(args)] as const
}

export function getStudiesIdModulePatientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdModulePatientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id']['module-patient'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdModulePatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdModulePatientQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdModulePatientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdModulePatientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id']['module-patient'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdPatientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['patient']['$get']>>,
) {
  return ['studies', '/studies/:id/patient', toValue(args)] as const
}

export function getStudiesIdPatientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['patient']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdPatientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].patient.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['patient']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdPatientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdPatientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdPatientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].patient.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStudiesIdReconstructMutationKey() {
  return ['studies', '/studies/:id/reconstruct', 'POST'] as const
}

export function getPostStudiesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.studies[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostStudiesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['reconstruct']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
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
  const mutationDefaults = getPostStudiesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['series']['$get']>>,
) {
  return ['studies', '/studies/:id/series', toValue(args)] as const
}

export function getStudiesIdSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['series']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['series']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiesIdSharedTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>>,
) {
  return ['studies', '/studies/:id/shared-tags', toValue(args)] as const
}

export function getStudiesIdSharedTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdSharedTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id']['shared-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdSharedTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdSharedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdSharedTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id']['shared-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStudiesIdSplitMutationKey() {
  return ['studies', '/studies/:id/split', 'POST'] as const
}

export function getPostStudiesIdSplitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['split']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['split']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdSplitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['split']['$post']>) {
      return parseResponse(client.studies[':id'].split.$post(args, options))
    },
  })
}

export function usePostStudiesIdSplit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['split']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.studies)[':id']['split']['$post']>,
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
  const mutationDefaults = getPostStudiesIdSplitMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>>,
) {
  return ['studies', '/studies/:id/statistics', toValue(args)] as const
}

export function getStudiesIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiesIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studies[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStudiesIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiesIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studies[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemQueryKey() {
  return ['system', '/system'] as const
}

export function getSystemQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystem<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
          ReturnType<typeof getSystemQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsQueryKey() {
  return ['tools', '/tools'] as const
}

export function getToolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
          ReturnType<typeof getToolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsAcceptedTransferSyntaxesQueryKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes'] as const
}

export function getToolsAcceptedTransferSyntaxesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsAcceptedTransferSyntaxesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['accepted-transfer-syntaxes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsAcceptedTransferSyntaxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsAcceptedTransferSyntaxesQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsAcceptedTransferSyntaxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsAcceptedTransferSyntaxesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['accepted-transfer-syntaxes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsAcceptedTransferSyntaxesMutationKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes', 'PUT'] as const
}

export function getPutToolsAcceptedTransferSyntaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsAcceptedTransferSyntaxesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
    ) {
      return parseResponse(client.tools['accepted-transfer-syntaxes'].$put(args, options))
    },
  })
}

export function usePutToolsAcceptedTransferSyntaxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
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
  const mutationDefaults = getPutToolsAcceptedTransferSyntaxesMutationOptions<
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

export function getPostToolsBulkAnonymizeMutationKey() {
  return ['tools', '/tools/bulk-anonymize', 'POST'] as const
}

export function getPostToolsBulkAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-anonymize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>) {
      return parseResponse(client.tools['bulk-anonymize'].$post(args, options))
    },
  })
}

export function usePostToolsBulkAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['bulk-anonymize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>,
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
  const mutationDefaults = getPostToolsBulkAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkContentMutationKey() {
  return ['tools', '/tools/bulk-content', 'POST'] as const
}

export function getPostToolsBulkContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-content']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkContentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-content']['$post']>) {
      return parseResponse(client.tools['bulk-content'].$post(args, options))
    },
  })
}

export function usePostToolsBulkContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['bulk-content']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['bulk-content']['$post']>,
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
  const mutationDefaults = getPostToolsBulkContentMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkDeleteMutationKey() {
  return ['tools', '/tools/bulk-delete', 'POST'] as const
}

export function getPostToolsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-delete']['$post']>) {
      return parseResponse(client.tools['bulk-delete'].$post(args, options))
    },
  })
}

export function usePostToolsBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['bulk-delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['bulk-delete']['$post']>,
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
  const mutationDefaults = getPostToolsBulkDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkModifyMutationKey() {
  return ['tools', '/tools/bulk-modify', 'POST'] as const
}

export function getPostToolsBulkModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-modify']['$post']>) {
      return parseResponse(client.tools['bulk-modify'].$post(args, options))
    },
  })
}

export function usePostToolsBulkModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['bulk-modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['bulk-modify']['$post']>,
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
  const mutationDefaults = getPostToolsBulkModifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateArchiveMutationKey() {
  return ['tools', '/tools/create-archive', 'POST'] as const
}

export function getPostToolsCreateArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-archive']['$post']>) {
      return parseResponse(client.tools['create-archive'].$post(args, options))
    },
  })
}

export function usePostToolsCreateArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['create-archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['create-archive']['$post']>,
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
  const mutationDefaults = getPostToolsCreateArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateDicomMutationKey() {
  return ['tools', '/tools/create-dicom', 'POST'] as const
}

export function getPostToolsCreateDicomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-dicom']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-dicom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateDicomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-dicom']['$post']>) {
      return parseResponse(client.tools['create-dicom'].$post(args, options))
    },
  })
}

export function usePostToolsCreateDicom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['create-dicom']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['create-dicom']['$post']>,
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
  const mutationDefaults = getPostToolsCreateDicomMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateMediaMutationKey() {
  return ['tools', '/tools/create-media', 'POST'] as const
}

export function getPostToolsCreateMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-media']['$post']>) {
      return parseResponse(client.tools['create-media'].$post(args, options))
    },
  })
}

export function usePostToolsCreateMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['create-media']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['create-media']['$post']>,
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
  const mutationDefaults = getPostToolsCreateMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateMediaExtendedMutationKey() {
  return ['tools', '/tools/create-media-extended', 'POST'] as const
}

export function getPostToolsCreateMediaExtendedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['create-media-extended']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateMediaExtendedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
    ) {
      return parseResponse(client.tools['create-media-extended'].$post(args, options))
    },
  })
}

export function usePostToolsCreateMediaExtended<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['create-media-extended']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
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
  const mutationDefaults = getPostToolsCreateMediaExtendedMutationOptions<TError, TOnMutateResult>(
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

export function getToolsDefaultEncodingQueryKey() {
  return ['tools', '/tools/default-encoding'] as const
}

export function getToolsDefaultEncodingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsDefaultEncodingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['default-encoding'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsDefaultEncoding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsDefaultEncodingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsDefaultEncodingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsDefaultEncodingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['default-encoding'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsDefaultEncodingMutationKey() {
  return ['tools', '/tools/default-encoding', 'PUT'] as const
}

export function getPutToolsDefaultEncodingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['default-encoding']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsDefaultEncodingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['default-encoding']['$put']>) {
      return parseResponse(client.tools['default-encoding'].$put(args, options))
    },
  })
}

export function usePutToolsDefaultEncoding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['default-encoding']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['default-encoding']['$put']>,
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
  const mutationDefaults = getPutToolsDefaultEncodingMutationOptions<TError, TOnMutateResult>(
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

export function getToolsDicomConformanceQueryKey() {
  return ['tools', '/tools/dicom-conformance'] as const
}

export function getToolsDicomConformanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsDicomConformanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['dicom-conformance'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsDicomConformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsDicomConformanceQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsDicomConformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsDicomConformanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['dicom-conformance'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolsDicomEchoMutationKey() {
  return ['tools', '/tools/dicom-echo', 'POST'] as const
}

export function getPostToolsDicomEchoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-echo']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['dicom-echo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsDicomEchoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['dicom-echo']['$post']>) {
      return parseResponse(client.tools['dicom-echo'].$post(args, options))
    },
  })
}

export function usePostToolsDicomEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['dicom-echo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['dicom-echo']['$post']>,
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
  const mutationDefaults = getPostToolsDicomEchoMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsExecuteScriptMutationKey() {
  return ['tools', '/tools/execute-script', 'POST'] as const
}

export function getPostToolsExecuteScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['execute-script']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['execute-script']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsExecuteScriptMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['execute-script']['$post']>) {
      return parseResponse(client.tools['execute-script'].$post(args, options))
    },
  })
}

export function usePostToolsExecuteScript<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['execute-script']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['execute-script']['$post']>,
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
  const mutationDefaults = getPostToolsExecuteScriptMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsFindMutationKey() {
  return ['tools', '/tools/find', 'POST'] as const
}

export function getPostToolsFindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.find.$post>>>>>,
    TError,
    InferRequestType<typeof client.tools.find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.find.$post>) {
      return parseResponse(client.tools.find.$post(args, options))
    },
  })
}

export function usePostToolsFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.find.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tools.find.$post>,
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
  const mutationDefaults = getPostToolsFindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsGenerateUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)['generate-uid']['$get']>>,
) {
  return ['tools', '/tools/generate-uid', toValue(args)] as const
}

export function getToolsGenerateUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)['generate-uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolsGenerateUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['generate-uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsGenerateUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)['generate-uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsGenerateUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsGenerateUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolsGenerateUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['generate-uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolsInvalidateTagsMutationKey() {
  return ['tools', '/tools/invalidate-tags', 'POST'] as const
}

export function getPostToolsInvalidateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['invalidate-tags']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsInvalidateTagsMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools['invalidate-tags'].$post(undefined, options))
    },
  })
}

export function usePostToolsInvalidateTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['invalidate-tags']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostToolsInvalidateTagsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelQueryKey() {
  return ['tools', '/tools/log-level'] as const
}

export function getToolsLogLevelQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
            >
          >,
          ReturnType<typeof getToolsLogLevelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelMutationKey() {
  return ['tools', '/tools/log-level', 'PUT'] as const
}

export function getPutToolsLogLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level']['$put']>) {
      return parseResponse(client.tools['log-level'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelDicomQueryKey() {
  return ['tools', '/tools/log-level-dicom'] as const
}

export function getToolsLogLevelDicomQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelDicomQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-dicom'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelDicom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelDicomQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelDicomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelDicomQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-dicom'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelDicomMutationKey() {
  return ['tools', '/tools/log-level-dicom', 'PUT'] as const
}

export function getPutToolsLogLevelDicomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelDicomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>) {
      return parseResponse(client.tools['log-level-dicom'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelDicom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelDicomMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelGenericQueryKey() {
  return ['tools', '/tools/log-level-generic'] as const
}

export function getToolsLogLevelGenericQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelGenericQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-generic'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelGeneric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelGenericQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelGenericQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelGenericQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-generic'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelGenericMutationKey() {
  return ['tools', '/tools/log-level-generic', 'PUT'] as const
}

export function getPutToolsLogLevelGenericMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-generic']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelGenericMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-generic']['$put']>) {
      return parseResponse(client.tools['log-level-generic'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelGeneric<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-generic']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelGenericMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelHttpQueryKey() {
  return ['tools', '/tools/log-level-http'] as const
}

export function getToolsLogLevelHttpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelHttpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-http'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelHttp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelHttpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelHttpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelHttpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-http'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelHttpMutationKey() {
  return ['tools', '/tools/log-level-http', 'PUT'] as const
}

export function getPutToolsLogLevelHttpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-http']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelHttpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-http']['$put']>) {
      return parseResponse(client.tools['log-level-http'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelHttp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-http']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-http']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelHttpMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelJobsQueryKey() {
  return ['tools', '/tools/log-level-jobs'] as const
}

export function getToolsLogLevelJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-jobs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-jobs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelJobsMutationKey() {
  return ['tools', '/tools/log-level-jobs', 'PUT'] as const
}

export function getPutToolsLogLevelJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>) {
      return parseResponse(client.tools['log-level-jobs'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelJobsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelLuaQueryKey() {
  return ['tools', '/tools/log-level-lua'] as const
}

export function getToolsLogLevelLuaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelLuaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-lua'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelLua<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelLuaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelLuaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelLuaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-lua'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelLuaMutationKey() {
  return ['tools', '/tools/log-level-lua', 'PUT'] as const
}

export function getPutToolsLogLevelLuaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-lua']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelLuaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-lua']['$put']>) {
      return parseResponse(client.tools['log-level-lua'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelLua<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-lua']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelLuaMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelPluginsQueryKey() {
  return ['tools', '/tools/log-level-plugins'] as const
}

export function getToolsLogLevelPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-plugins'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelPluginsQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-plugins'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelPluginsMutationKey() {
  return ['tools', '/tools/log-level-plugins', 'PUT'] as const
}

export function getPutToolsLogLevelPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelPluginsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>) {
      return parseResponse(client.tools['log-level-plugins'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelPluginsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelSqliteQueryKey() {
  return ['tools', '/tools/log-level-sqlite'] as const
}

export function getToolsLogLevelSqliteQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsLogLevelSqliteQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['log-level-sqlite'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsLogLevelSqlite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsLogLevelSqliteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelSqliteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsLogLevelSqliteQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['log-level-sqlite'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsLogLevelSqliteMutationKey() {
  return ['tools', '/tools/log-level-sqlite', 'PUT'] as const
}

export function getPutToolsLogLevelSqliteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelSqliteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>) {
      return parseResponse(client.tools['log-level-sqlite'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelSqlite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>,
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
  const mutationDefaults = getPutToolsLogLevelSqliteMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsLookupMutationKey() {
  return ['tools', '/tools/lookup', 'POST'] as const
}

export function getPostToolsLookupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.lookup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.lookup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsLookupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.lookup.$post>) {
      return parseResponse(client.tools.lookup.$post(args, options))
    },
  })
}

export function usePostToolsLookup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.lookup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tools.lookup.$post>,
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
  const mutationDefaults = getPostToolsLookupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsMetricsQueryKey() {
  return ['tools', '/tools/metrics'] as const
}

export function getToolsMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
          >,
          ReturnType<typeof getToolsMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsMetricsMutationKey() {
  return ['tools', '/tools/metrics', 'PUT'] as const
}

export function getPutToolsMetricsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.metrics.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.metrics.$put>) {
      return parseResponse(client.tools.metrics.$put(args, options))
    },
  })
}

export function usePutToolsMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.tools.metrics.$put>,
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
  const mutationDefaults = getPutToolsMetricsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsMetricsPrometheusQueryKey() {
  return ['tools', '/tools/metrics-prometheus'] as const
}

export function getToolsMetricsPrometheusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsMetricsPrometheusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['metrics-prometheus'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsMetricsPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsMetricsPrometheusQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsMetricsPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsMetricsPrometheusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['metrics-prometheus'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsNowQueryKey() {
  return ['tools', '/tools/now'] as const
}

export function getToolsNowQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsNowQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools.now.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
          >,
          ReturnType<typeof getToolsNowQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsNowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsNowQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools.now.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsNowLocalQueryKey() {
  return ['tools', '/tools/now-local'] as const
}

export function getToolsNowLocalQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsNowLocalQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['now-local'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsNowLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
            >
          >,
          ReturnType<typeof getToolsNowLocalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNowLocalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsNowLocalQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['now-local'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolsReconstructMutationKey() {
  return ['tools', '/tools/reconstruct', 'POST'] as const
}

export function getPostToolsReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reconstruct.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.reconstruct.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsReconstructMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.reconstruct.$post>) {
      return parseResponse(client.tools.reconstruct.$post(args, options))
    },
  })
}

export function usePostToolsReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tools.reconstruct.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tools.reconstruct.$post>,
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
  const mutationDefaults = getPostToolsReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsResetMutationKey() {
  return ['tools', '/tools/reset', 'POST'] as const
}

export function getPostToolsResetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reset.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools.reset.$post(undefined, options))
    },
  })
}

export function usePostToolsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reset.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostToolsResetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostToolsShutdownMutationKey() {
  return ['tools', '/tools/shutdown', 'POST'] as const
}

export function getPostToolsShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.shutdown.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools.shutdown.$post(undefined, options))
    },
  })
}

export function usePostToolsShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tools.shutdown.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostToolsShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getToolsUnknownSopClassAcceptedQueryKey() {
  return ['tools', '/tools/unknown-sop-class-accepted'] as const
}

export function getToolsUnknownSopClassAcceptedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsUnknownSopClassAcceptedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools['unknown-sop-class-accepted'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsUnknownSopClassAccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsUnknownSopClassAcceptedQueryKey>
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
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsUnknownSopClassAcceptedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsUnknownSopClassAcceptedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools['unknown-sop-class-accepted'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsUnknownSopClassAcceptedMutationKey() {
  return ['tools', '/tools/unknown-sop-class-accepted', 'PUT'] as const
}

export function getPutToolsUnknownSopClassAcceptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsUnknownSopClassAcceptedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
    ) {
      return parseResponse(client.tools['unknown-sop-class-accepted'].$put(args, options))
    },
  })
}

export function usePutToolsUnknownSopClassAccepted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
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
  const mutationDefaults = getPutToolsUnknownSopClassAcceptedMutationOptions<
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
