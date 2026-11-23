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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1FlagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flags.$get>>,
) {
  return ['v1', '/v1/flags', toValue(args)] as const
}

export function getV1FlagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.flags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Flags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>
          >,
          ReturnType<typeof getV1FlagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.flags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project/instances', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesMutationKey() {
  return ['v1', '/v1/projects/:project/instances', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project'].instances.$post(args, options))
    },
  })
}

export function usePostV1ProjectsProjectInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$put(args, options),
      )
    },
  })
}

export function usePutV1ProjectsProjectInstancesInstance<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
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
  const mutationDefaults = getPutV1ProjectsProjectInstancesInstanceMutationOptions<
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

export function getDeleteV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectInstancesInstance<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceMutationOptions<
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

export function getPatchV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectInstancesInstance<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
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
  const mutationDefaults = getPatchV1ProjectsProjectInstancesInstanceMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/addServerCa', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].addServerCa.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceAddServerCa<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceBackupRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].backupRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceBackupRuns<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceBackupRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectInstancesInstanceBackupRunsId<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceCloneMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/clone', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].clone.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceClone<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceCloneMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/connectSettings', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceConnectSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].connectSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceConnectSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].connectSettings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/createEphemeral', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].createEphemeral.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceCreateEphemeral<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceDatabasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceDatabasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceDatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceDatabasesMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceDatabases<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDatabasesMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/databases/:database',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
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
  const mutationDefaults = getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
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
  const mutationDefaults =
    getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
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
  const mutationDefaults =
    getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceDemoteMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demote', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDemoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].demote.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceDemote<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDemoteMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demoteMaster', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].demoteMaster.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceDemoteMaster<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceExportMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/export', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].export.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceExport<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceExportMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceFailoverMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/failover', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceFailoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceFailoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].failover.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceFailover<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceFailoverMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/getDiskShrinkConfig',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/getLatestRecoveryTime',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceGetLatestRecoveryTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceImportMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/import', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].import.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceImport<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceImportMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceListServerCasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/listServerCas', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceListServerCasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceListServerCasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].listServerCas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceListServerCas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceListServerCasQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceListServerCasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceListServerCasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].listServerCas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/performDiskShrink', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].performDiskShrink.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstancePerformDiskShrink<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
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
  const mutationDefaults =
    getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/promoteReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].promoteReplica.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstancePromoteReplica<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceReencryptMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/reencrypt', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceReencryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceReencryptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].reencrypt.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceReencrypt<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceReencryptMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rescheduleMaintenance', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceRescheduleMaintenance<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
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
  const mutationDefaults =
    getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetReplicaSize', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].resetReplicaSize.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceResetReplicaSize<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetSslConfig', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].resetSslConfig.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceResetSslConfig<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceRestartMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restart', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].restart.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceRestart<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRestartMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restoreBackup', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].restoreBackup.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceRestoreBackup<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rotateServerCa', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].rotateServerCa.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceRotateServerCa<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceSslCertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceSslCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceSslCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceSslCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceSslCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].sslCerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceSslCertsMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceSslCertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceSslCertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceSslCerts<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceSslCertsMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
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
  const mutationDefaults =
    getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startExternalSync', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].startExternalSync.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceStartExternalSync<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
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
  const mutationDefaults =
    getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].startReplica.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceStartReplica<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/stopReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].stopReplica.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceStopReplica<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/switchover', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].switchover.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceSwitchover<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/truncateLog', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].truncateLog.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceTruncateLog<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$put(args, options),
      )
    },
  })
}

export function usePutV1ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
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
  const mutationDefaults = getPutV1ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getDeleteV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getV1ProjectsProjectInstancesInstanceUsersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users/:name', toValue(args)] as const
}

export function getV1ProjectsProjectInstancesInstanceUsersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectInstancesInstanceUsersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectInstancesInstanceUsersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersNameQueryKey>
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
              (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectInstancesInstanceUsersNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].instances[':instance'].users[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/verifyExternalSyncSettings',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].verifyExternalSyncSettings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettings<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
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
  const mutationDefaults =
    getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
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

export function getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance:generateEphemeralCert', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectInstancesInstanceGenerateEphemeralCert<
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
                    (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
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
  const mutationDefaults =
    getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
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

export function getV1ProjectsProjectOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project/operations', toValue(args)] as const
}

export function getV1ProjectsProjectOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectOperationsOperationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project/operations/:operation', toValue(args)] as const
}

export function getV1ProjectsProjectOperationsOperationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectOperationsOperationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].operations[':operation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectOperationsOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
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
                    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
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
                    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectOperationsOperationQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectOperationsOperationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectOperationsOperationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].operations[':operation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectOperationsOperationCancelMutationKey() {
  return ['v1', '/v1/projects/:project/operations/:operation/cancel', 'POST'] as const
}

export function getPostV1ProjectsProjectOperationsOperationCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectOperationsOperationCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].operations[':operation'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectOperationsOperationCancel<
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
                    (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectOperationsOperationCancelMutationOptions<
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

export function getV1ProjectsProjectTiersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project/tiers', toValue(args)] as const
}

export function getV1ProjectsProjectTiersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectTiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].tiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectTiersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectTiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].tiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
