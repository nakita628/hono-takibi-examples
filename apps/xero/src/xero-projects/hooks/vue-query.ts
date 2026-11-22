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

export function getProjectsKey() {
  return ['Projects'] as const
}

export function getProjectsUsersKey() {
  return ['ProjectsUsers'] as const
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects', keyArgs] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['Projects', '/Projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.Projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Projects.$post>) {
      return parseResponse(client.Projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects/:projectId', keyArgs] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdMutationKey() {
  return ['Projects', '/Projects/:projectId', 'PUT'] as const
}

export function getPutProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Projects)[':projectId']['$put']>) {
      return parseResponse(client.Projects[':projectId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Projects)[':projectId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchProjectsProjectIdMutationKey() {
  return ['Projects', '/Projects/:projectId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Projects)[':projectId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Projects)[':projectId']['$patch']>) {
      return parseResponse(client.Projects[':projectId'].$patch(args, options))
    },
  })
}

export function usePatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Projects)[':projectId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['$patch']>,
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
  const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ProjectsUsers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ProjectsUsers', '/ProjectsUsers', keyArgs] as const
}

export function getProjectsUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ProjectsUsers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ProjectsUsers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ProjectsUsers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
          >,
          ReturnType<typeof getProjectsUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ProjectsUsers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects/:projectId/Tasks', keyArgs] as const
}

export function getProjectsProjectIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects[':projectId'].Tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTasksQueryKey>
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
          Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects[':projectId'].Tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdTasksMutationKey() {
  return ['Projects', '/Projects/:projectId/Tasks', 'POST'] as const
}

export function getPostProjectsProjectIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$post']>,
    ) {
      return parseResponse(client.Projects[':projectId'].Tasks.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdTasksMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects/:projectId/Tasks/:taskId', keyArgs] as const
}

export function getProjectsProjectIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects[':projectId'].Tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>
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
                  ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTasksTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects[':projectId'].Tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdTasksTaskIdMutationKey() {
  return ['Projects', '/Projects/:projectId/Tasks/:taskId', 'PUT'] as const
}

export function getPutProjectsProjectIdTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>,
    ) {
      return parseResponse(client.Projects[':projectId'].Tasks[':taskId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectIdTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdTasksTaskIdMutationOptions<
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

export function getDeleteProjectsProjectIdTasksTaskIdMutationKey() {
  return ['Projects', '/Projects/:projectId/Tasks/:taskId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']>,
    ) {
      return parseResponse(client.Projects[':projectId'].Tasks[':taskId'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectIdTasksTaskIdMutationOptions<
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

export function getProjectsProjectIdTimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects/:projectId/Time', keyArgs] as const
}

export function getProjectsProjectIdTimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects[':projectId'].Time.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTimeQueryKey>
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
          Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects[':projectId'].Time.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdTimeMutationKey() {
  return ['Projects', '/Projects/:projectId/Time', 'POST'] as const
}

export function getPostProjectsProjectIdTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Time']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Projects)[':projectId']['Time']['$post']>,
    ) {
      return parseResponse(client.Projects[':projectId'].Time.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['Time']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdTimeMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdTimeTimeEntryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Projects', '/Projects/:projectId/Time/:timeEntryId', keyArgs] as const
}

export function getProjectsProjectIdTimeTimeEntryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTimeTimeEntryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Projects[':projectId'].Time[':timeEntryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTimeTimeEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
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
                  ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTimeTimeEntryIdQueryKey>
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
            ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTimeTimeEntryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTimeTimeEntryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Projects[':projectId'].Time[':timeEntryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdTimeTimeEntryIdMutationKey() {
  return ['Projects', '/Projects/:projectId/Time/:timeEntryId', 'PUT'] as const
}

export function getPutProjectsProjectIdTimeTimeEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdTimeTimeEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']
      >,
    ) {
      return parseResponse(client.Projects[':projectId'].Time[':timeEntryId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectIdTimeTimeEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdTimeTimeEntryIdMutationOptions<
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

export function getDeleteProjectsProjectIdTimeTimeEntryIdMutationKey() {
  return ['Projects', '/Projects/:projectId/Time/:timeEntryId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdTimeTimeEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdTimeTimeEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Projects[':projectId'].Time[':timeEntryId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdTimeTimeEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdTimeTimeEntryIdMutationOptions<
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
