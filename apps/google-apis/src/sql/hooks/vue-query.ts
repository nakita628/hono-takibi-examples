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

export function getSqlKey() {
  return ['sql'] as const
}

export function getSqlV1beta4FlagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sql.v1beta4.flags.$get>>,
) {
  return ['sql', '/sql/v1beta4/flags', toValue(args)] as const
}

export function getSqlV1beta4FlagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sql.v1beta4.flags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4FlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.flags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4Flags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sql.v1beta4.flags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>
            >
          >,
          ReturnType<typeof getSqlV1beta4FlagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4FlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4FlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.flags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSqlV1beta4ProjectsProjectInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
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
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances']['$post']
      >,
    ) {
      return parseResponse(client.sql.v1beta4.projects[':project'].instances.$post(args, options))
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstances<
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
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>,
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
    >
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'PUT'] as const
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSqlV1beta4ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].$put(args, options),
      )
    },
  })
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstance<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
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
  const mutationDefaults = getPutSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
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

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'DELETE'] as const
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSqlV1beta4ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstance<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
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
  const mutationDefaults = getDeleteSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
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

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'PATCH'] as const
}

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSqlV1beta4ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].$patch(args, options),
      )
    },
  })
}

export function usePatchSqlV1beta4ProjectsProjectInstancesInstance<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
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
  const mutationDefaults = getPatchSqlV1beta4ProjectsProjectInstancesInstanceMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/addServerCa', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].addServerCa.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCa<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/backupRuns', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns/:id',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns/:id',
    'DELETE',
  ] as const
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
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
    getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/clone', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].clone.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceClone<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/connectSettings',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].connectSettings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceConnectSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].connectSettings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/createEphemeral',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].createEphemeral.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeral<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/databases', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceDatabases<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'PUT',
  ] as const
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
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
    getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'DELETE',
  ] as const
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
          ':database'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
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
    getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'PATCH',
  ] as const
}

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
          ':database'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
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
    getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/demoteMaster', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].demoteMaster.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMaster<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceExportMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/export', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].export.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceExport<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceExportMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/failover', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].failover.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceFailover<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/getDiskShrinkConfig',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey
          >
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceImportMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/import', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].import.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceImport<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceImportMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/listServerCas',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].listServerCas.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceListServerCas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].listServerCas.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/performDiskShrink',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].performDiskShrink.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrink<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/promoteReplica',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].promoteReplica.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplica<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/rescheduleMaintenance',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenance<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/resetReplicaSize',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].resetReplicaSize.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSize<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/resetSslConfig',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].resetSslConfig.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfig<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/restart', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].restart.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRestart<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/restoreBackup',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].restoreBackup.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackup<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/rotateServerCa',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].rotateServerCa.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCa<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceSslCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/sslCerts', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceSslCerts<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
          ':sha1Fingerprint'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey
          >
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
            ':sha1Fingerprint'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    'DELETE',
  ] as const
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
          ':sha1Fingerprint'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
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
    getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/startExternalSync',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].startExternalSync.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSync<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/startReplica', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].startReplica.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStartReplica<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/stopReplica', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].stopReplica.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStopReplica<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/truncateLog', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].truncateLog.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLog<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
    >
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'PUT'] as const
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].users.$put(args, options),
      )
    },
  })
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
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
  const mutationDefaults = getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'POST'] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].users.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
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
  const mutationDefaults = getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'DELETE'] as const
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].users.$delete(args, options),
      )
    },
  })
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsers<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
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
  const mutationDefaults = getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersMutationOptions<
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

export function getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
    >
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/users/:name',
    toValue(args),
  ] as const
}

export function getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance'].users[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectInstancesInstanceUsersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].users[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/verifyExternalSyncSettings',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[
          ':instance'
        ].verifyExternalSyncSettings.$post(args, options),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettings<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
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

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance:generateEphemeralCert',
    'POST',
  ] as const
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
      >,
    ) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCert<
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
                    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
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
    getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
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

export function getSqlV1beta4ProjectsProjectOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/operations', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
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
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectOperationsQueryKey>
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
            ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSqlV1beta4ProjectsProjectOperationsOperationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
    >
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/operations/:operation', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectOperationsOperationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectOperationsOperationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].operations[':operation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectOperationsOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
                    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectOperationsOperationQueryKey>
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
              (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectOperationsOperationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectOperationsOperationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].operations[':operation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSqlV1beta4ProjectsProjectTiersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/tiers', toValue(args)] as const
}

export function getSqlV1beta4ProjectsProjectTiersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqlV1beta4ProjectsProjectTiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sql.v1beta4.projects[':project'].tiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSqlV1beta4ProjectsProjectTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>
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
                  ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSqlV1beta4ProjectsProjectTiersQueryKey>
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
          Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSqlV1beta4ProjectsProjectTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqlV1beta4ProjectsProjectTiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sql.v1beta4.projects[':project'].tiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
