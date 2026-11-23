import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProjectsKey() {
  return ['Projects'] as const
}

export function getProjectsUsersKey() {
  return ['ProjectsUsers'] as const
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.Projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects', keyArgs] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.Projects)[':projectId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects/:projectId', keyArgs] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Projects)[':projectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Projects)[':projectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsUsersQueryKey(args: InferRequestType<typeof client.ProjectsUsers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ProjectsUsers', '/ProjectsUsers', keyArgs] as const
}

export function getProjectsUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ProjectsUsers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsersQueryKey>
  >({
    queryKey: getProjectsUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ProjectsUsers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ProjectsUsers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ProjectsUsers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsProjectIdTasksQueryKey(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects/:projectId/Tasks', keyArgs] as const
}

export function getProjectsProjectIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects[':projectId'].Tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects/:projectId/Tasks/:taskId', keyArgs] as const
}

export function getProjectsProjectIdTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects[':projectId'].Tasks[':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProjectsProjectIdTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutProjectsProjectIdTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdTasksTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdTasksTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdTimeQueryKey(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects/:projectId/Time', keyArgs] as const
}

export function getProjectsProjectIdTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects[':projectId'].Time.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdTimeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdTimeTimeEntryIdQueryKey(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Projects', '/Projects/:projectId/Time/:timeEntryId', keyArgs] as const
}

export function getProjectsProjectIdTimeTimeEntryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdTimeTimeEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Projects[':projectId'].Time[':timeEntryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTimeTimeEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdTimeTimeEntryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutProjectsProjectIdTimeTimeEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdTimeTimeEntryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdTimeTimeEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdTimeTimeEntryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
