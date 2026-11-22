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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1VariablesKeyQueryKey(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
) {
  return ['v1', '/v1/variables/:key', args] as const
}

export function getV1VariablesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VariablesKeyQueryKey>
  >({
    queryKey: getV1VariablesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.variables[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1VariablesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VariablesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VariablesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VariablesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VariablesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VariablesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1VariablesKeyMutationKey() {
  return ['v1', '/v1/variables/:key', 'PUT'] as const
}

export function getPutV1VariablesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.variables)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1VariablesKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':key']['$put']>) {
      return parseResponse(client.v1.variables[':key'].$put(args, options))
    },
  })
}

export function usePutV1VariablesKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.variables)[':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1VariablesKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1VariablesKeyMutationKey() {
  return ['v1', '/v1/variables/:key', 'DELETE'] as const
}

export function getDeleteV1VariablesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.variables)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VariablesKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':key']['$delete']>) {
      return parseResponse(client.v1.variables[':key'].$delete(args, options))
    },
  })
}

export function useDeleteV1VariablesKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.variables)[':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1VariablesKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1GoalsQueryKey(args: InferRequestType<typeof client.v1.goals.$get>) {
  return ['v1', '/v1/goals', args] as const
}

export function getV1GoalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.goals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1GoalsQueryKey>
  >({
    queryKey: getV1GoalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.goals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Goals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.goals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1GoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GoalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Goals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.goals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1GoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GoalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1WorkflowsWorkflowKeyQueryKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_key', args] as const
}

export function getV1WorkflowsWorkflowKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsWorkflowKeyQueryKey>
  >({
    queryKey: getV1WorkflowsWorkflowKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows[':workflow_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1WorkflowsWorkflowKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsWorkflowKeyQueryKey>
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
      ...getV1WorkflowsWorkflowKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1WorkflowsWorkflowKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsWorkflowKeyQueryKey>
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
      ...getV1WorkflowsWorkflowKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1WorkflowsWorkflowKeyMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1WorkflowsWorkflowKeyMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key', 'DELETE'] as const
}

export function getDeleteV1WorkflowsWorkflowKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WorkflowsWorkflowKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1WorkflowsWorkflowKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1WorkflowsWorkflowKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1CommitsIdQueryKey(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
) {
  return ['v1', '/v1/commits/:id', args] as const
}

export function getV1CommitsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CommitsIdQueryKey>
  >({
    queryKey: getV1CommitsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.commits[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CommitsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CommitsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CommitsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CommitsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CommitsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CommitsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SourcesKeyStatusQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
) {
  return ['v1', '/v1/sources/:key/status', args] as const
}

export function getV1SourcesKeyStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyStatusQueryKey>
  >({
    queryKey: getV1SourcesKeyStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':key'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SourcesKeyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesKeyStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourcesKeyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesKeyStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PartialsPartialKeyValidateMutationKey() {
  return ['v1', '/v1/partials/:partial_key/validate', 'PUT'] as const
}

export function getPutV1PartialsPartialKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PartialsPartialKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.partials[':partial_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1PartialsPartialKeyValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PartialsPartialKeyValidateMutationOptions<
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

export function getV1WhoamiQueryKey() {
  return ['v1', '/v1/whoami'] as const
}

export function getV1WhoamiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >({
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WhoamiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WhoamiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SourcesQueryKey(args: InferRequestType<typeof client.v1.sources.$get>) {
  return ['v1', '/v1/sources', args] as const
}

export function getV1SourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourcesQueryKey>
  >({
    queryKey: getV1SourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1EmailLayoutsPreviewMutationKey() {
  return ['v1', '/v1/email_layouts/preview', 'POST'] as const
}

export function getPostV1EmailLayoutsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.email_layouts.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailLayoutsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email_layouts.preview.$post>) {
      return parseResponse(client.v1.email_layouts.preview.$post(args, options))
    },
  })
}

export function usePostV1EmailLayoutsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email_layouts.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EmailLayoutsPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1WorkflowsWorkflowKeyValidateMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/validate', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKeyValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyValidateMutationOptions<
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

export function getV1MessageTypesQueryKey(
  args: InferRequestType<typeof client.v1.message_types.$get>,
) {
  return ['v1', '/v1/message_types', args] as const
}

export function getV1MessageTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.message_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessageTypesQueryKey>
  >({
    queryKey: getV1MessageTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.message_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1MessageTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.message_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessageTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MessageTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MessageTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.message_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessageTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MessageTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1GoalsGoalKeyQueryKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
) {
  return ['v1', '/v1/goals/:goal_key', args] as const
}

export function getV1GoalsGoalKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GoalsGoalKeyQueryKey>
  >({
    queryKey: getV1GoalsGoalKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.goals[':goal_key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1GoalsGoalKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GoalsGoalKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GoalsGoalKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1GoalsGoalKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GoalsGoalKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GoalsGoalKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1GoalsGoalKeyMutationKey() {
  return ['v1', '/v1/goals/:goal_key', 'PUT'] as const
}

export function getPutV1GoalsGoalKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GoalsGoalKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>) {
      return parseResponse(client.v1.goals[':goal_key'].$put(args, options))
    },
  })
}

export function usePutV1GoalsGoalKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GoalsGoalKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1GoalsGoalKeyMutationKey() {
  return ['v1', '/v1/goals/:goal_key', 'DELETE'] as const
}

export function getDeleteV1GoalsGoalKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GoalsGoalKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']>) {
      return parseResponse(client.v1.goals[':goal_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1GoalsGoalKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1GoalsGoalKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1EnvironmentsQueryKey(
  args: InferRequestType<typeof client.v1.environments.$get>,
) {
  return ['v1', '/v1/environments', args] as const
}

export function getV1EnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsQueryKey>
  >({
    queryKey: getV1EnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.environments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EnvironmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.environments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EnvironmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AssetsAssetIdMutationKey() {
  return ['v1', '/v1/assets/:asset_id', 'DELETE'] as const
}

export function getDeleteV1AssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':asset_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>) {
      return parseResponse(client.v1.assets[':asset_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.assets)[':asset_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AssetsQueryKey(args: InferRequestType<typeof client.v1.assets.$get>) {
  return ['v1', '/v1/assets', args] as const
}

export function getV1AssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AssetsQueryKey>
  >({
    queryKey: getV1AssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1AssetsMutationKey() {
  return ['v1', '/v1/assets', 'POST'] as const
}

export function getPostV1AssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.assets.$post>) {
      return parseResponse(client.v1.assets.$post(args, options))
    },
  })
}

export function usePostV1Assets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.assets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BroadcastsBroadcastKeyQueryKey(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
) {
  return ['v1', '/v1/broadcasts/:broadcast_key', args] as const
}

export function getV1BroadcastsBroadcastKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BroadcastsBroadcastKeyQueryKey>
  >({
    queryKey: getV1BroadcastsBroadcastKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.broadcasts[':broadcast_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BroadcastsBroadcastKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BroadcastsBroadcastKeyQueryKey>
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
      ...getV1BroadcastsBroadcastKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BroadcastsBroadcastKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BroadcastsBroadcastKeyQueryKey>
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
      ...getV1BroadcastsBroadcastKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1BroadcastsBroadcastKeyMutationKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key', 'PUT'] as const
}

export function getPutV1BroadcastsBroadcastKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BroadcastsBroadcastKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>,
    ) {
      return parseResponse(client.v1.broadcasts[':broadcast_key'].$put(args, options))
    },
  })
}

export function usePutV1BroadcastsBroadcastKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BroadcastsBroadcastKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1FeedbackMutationKey() {
  return ['v1', '/v1/feedback', 'POST'] as const
}

export function getPostV1FeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.feedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.feedback.$post>) {
      return parseResponse(client.v1.feedback.$post(args, options))
    },
  })
}

export function usePostV1Feedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.feedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1TemplatesPreviewMutationKey() {
  return ['v1', '/v1/templates/preview', 'POST'] as const
}

export function getPostV1TemplatesPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.templates.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.templates.preview.$post>) {
      return parseResponse(client.v1.templates.preview.$post(args, options))
    },
  })
}

export function usePostV1TemplatesPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.templates.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TemplatesPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1GuidesGuideKeyActivateMutationKey() {
  return ['v1', '/v1/guides/:guide_key/activate', 'PUT'] as const
}

export function getPutV1GuidesGuideKeyActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuidesGuideKeyActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>,
    ) {
      return parseResponse(client.v1.guides[':guide_key'].activate.$put(args, options))
    },
  })
}

export function usePutV1GuidesGuideKeyActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GuidesGuideKeyActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1CommitsPromoteMutationKey() {
  return ['v1', '/v1/commits/promote', 'PUT'] as const
}

export function getPutV1CommitsPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.promote.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commits.promote.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CommitsPromoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commits.promote.$put>) {
      return parseResponse(client.v1.commits.promote.$put(args, options))
    },
  })
}

export function usePutV1CommitsPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.promote.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commits.promote.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CommitsPromoteMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1WarehouseSyncsWarehouseSyncKeyRunMutationKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/run', 'PUT'] as const
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehouseSyncsWarehouseSyncKeyRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']
      >,
    ) {
      return parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].run.$put(args, options))
    },
  })
}

export function usePutV1WarehouseSyncsWarehouseSyncKeyRun<
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
                ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WarehouseSyncsWarehouseSyncKeyRunMutationOptions<
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

export function getV1GuidesQueryKey(args: InferRequestType<typeof client.v1.guides.$get>) {
  return ['v1', '/v1/guides', args] as const
}

export function getV1GuidesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.guides.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1GuidesQueryKey>
  >({
    queryKey: getV1GuidesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.guides.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Guides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.guides.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuidesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GuidesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Guides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.guides.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuidesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GuidesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1HeadlessAccountsMutationKey() {
  return ['v1', '/v1/headless_accounts', 'POST'] as const
}

export function getPostV1HeadlessAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1HeadlessAccountsMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.headless_accounts.$post(undefined, options))
    },
  })
}

export function usePostV1HeadlessAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1HeadlessAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AudiencesQueryKey(args: InferRequestType<typeof client.v1.audiences.$get>) {
  return ['v1', '/v1/audiences', args] as const
}

export function getV1AudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.audiences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AudiencesQueryKey>
  >({
    queryKey: getV1AudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Audiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.audiences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AudiencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Audiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.audiences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AudiencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1TranslationsQueryKey(
  args: InferRequestType<typeof client.v1.translations.$get>,
) {
  return ['v1', '/v1/translations', args] as const
}

export function getV1TranslationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.translations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TranslationsQueryKey>
  >({
    queryKey: getV1TranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.translations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Translations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.translations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TranslationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TranslationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Translations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.translations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TranslationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TranslationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1TranslationsLocaleCodeQueryKey(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
) {
  return ['v1', '/v1/translations/:locale_code', args] as const
}

export function getV1TranslationsLocaleCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TranslationsLocaleCodeQueryKey>
  >({
    queryKey: getV1TranslationsLocaleCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.translations[':locale_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1TranslationsLocaleCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TranslationsLocaleCodeQueryKey>
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
      ...getV1TranslationsLocaleCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1TranslationsLocaleCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TranslationsLocaleCodeQueryKey>
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
      ...getV1TranslationsLocaleCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1TranslationsLocaleCodeMutationKey() {
  return ['v1', '/v1/translations/:locale_code', 'PUT'] as const
}

export function getPutV1TranslationsLocaleCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TranslationsLocaleCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']>,
    ) {
      return parseResponse(client.v1.translations[':locale_code'].$put(args, options))
    },
  })
}

export function usePutV1TranslationsLocaleCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1TranslationsLocaleCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1GoalsGoalKeyValidateMutationKey() {
  return ['v1', '/v1/goals/:goal_key/validate', 'PUT'] as const
}

export function getPutV1GoalsGoalKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GoalsGoalKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.goals[':goal_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1GoalsGoalKeyValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GoalsGoalKeyValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1TagsNameMutationKey() {
  return ['v1', '/v1/tags/:name', 'PUT'] as const
}

export function getPutV1TagsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TagsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':name']['$put']>) {
      return parseResponse(client.v1.tags[':name'].$put(args, options))
    },
  })
}

export function usePutV1TagsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1TagsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TagsNameMutationKey() {
  return ['v1', '/v1/tags/:name', 'DELETE'] as const
}

export function getDeleteV1TagsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':name']['$delete']>) {
      return parseResponse(client.v1.tags[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.tags)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TagsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SourcesKeyRehearseMutationKey() {
  return ['v1', '/v1/sources/:key/rehearse', 'POST'] as const
}

export function getPostV1SourcesKeyRehearseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['rehearse']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesKeyRehearseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']>,
    ) {
      return parseResponse(client.v1.sources[':key'].rehearse.$post(args, options))
    },
  })
}

export function usePostV1SourcesKeyRehearse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['rehearse']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SourcesKeyRehearseMutationOptions<TError, TOnMutateResult>(
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

export function getV1SchemasQueryKey(args: InferRequestType<typeof client.v1.schemas.$get>) {
  return ['v1', '/v1/schemas', args] as const
}

export function getV1SchemasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.schemas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SchemasQueryKey>
  >({
    queryKey: getV1SchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.schemas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Schemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.schemas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SchemasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Schemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.schemas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SchemasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ChannelGroupsQueryKey(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
) {
  return ['v1', '/v1/channel_groups', args] as const
}

export function getV1ChannelGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.channel_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelGroupsQueryKey>
  >({
    queryKey: getV1ChannelGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.channel_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ChannelGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ChannelGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ChannelGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ChannelGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1PartialsPartialKeyQueryKey(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
) {
  return ['v1', '/v1/partials/:partial_key', args] as const
}

export function getV1PartialsPartialKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PartialsPartialKeyQueryKey>
  >({
    queryKey: getV1PartialsPartialKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.partials[':partial_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PartialsPartialKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartialsPartialKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PartialsPartialKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PartialsPartialKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartialsPartialKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PartialsPartialKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PartialsPartialKeyMutationKey() {
  return ['v1', '/v1/partials/:partial_key', 'PUT'] as const
}

export function getPutV1PartialsPartialKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PartialsPartialKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']>) {
      return parseResponse(client.v1.partials[':partial_key'].$put(args, options))
    },
  })
}

export function usePutV1PartialsPartialKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PartialsPartialKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PartialsPartialKeyMutationKey() {
  return ['v1', '/v1/partials/:partial_key', 'DELETE'] as const
}

export function getDeleteV1PartialsPartialKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PartialsPartialKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']>,
    ) {
      return parseResponse(client.v1.partials[':partial_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1PartialsPartialKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PartialsPartialKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1VariablesQueryKey(args: InferRequestType<typeof client.v1.variables.$get>) {
  return ['v1', '/v1/variables', args] as const
}

export function getV1VariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.variables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VariablesQueryKey>
  >({
    queryKey: getV1VariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1GuidesGuideKeyQueryKey(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
) {
  return ['v1', '/v1/guides/:guide_key', args] as const
}

export function getV1GuidesGuideKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuidesGuideKeyQueryKey>
  >({
    queryKey: getV1GuidesGuideKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.guides[':guide_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GuidesGuideKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuidesGuideKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GuidesGuideKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1GuidesGuideKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuidesGuideKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GuidesGuideKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1GuidesGuideKeyMutationKey() {
  return ['v1', '/v1/guides/:guide_key', 'PUT'] as const
}

export function getPutV1GuidesGuideKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuidesGuideKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']>) {
      return parseResponse(client.v1.guides[':guide_key'].$put(args, options))
    },
  })
}

export function usePutV1GuidesGuideKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GuidesGuideKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1GuidesGuideKeyMutationKey() {
  return ['v1', '/v1/guides/:guide_key', 'DELETE'] as const
}

export function getDeleteV1GuidesGuideKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GuidesGuideKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']>) {
      return parseResponse(client.v1.guides[':guide_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1GuidesGuideKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1GuidesGuideKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1SourcesKeyQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
) {
  return ['v1', '/v1/sources/:key', args] as const
}

export function getV1SourcesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyQueryKey>
  >({
    queryKey: getV1SourcesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SourcesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourcesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SourcesKeyMutationKey() {
  return ['v1', '/v1/sources/:key', 'PUT'] as const
}

export function getPutV1SourcesKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SourcesKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.sources)[':key']['$put']>) {
      return parseResponse(client.v1.sources[':key'].$put(args, options))
    },
  })
}

export function usePutV1SourcesKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SourcesKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1ReusableRequestsReusableRequestKeyValidateMutationKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key/validate', 'PUT'] as const
}

export function getPutV1ReusableRequestsReusableRequestKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ReusableRequestsReusableRequestKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.reusable_requests[':reusable_request_key'].validate.$put(args, options),
      )
    },
  })
}

export function usePutV1ReusableRequestsReusableRequestKeyValidate<
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
                  (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
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
  const mutationDefaults = getPutV1ReusableRequestsReusableRequestKeyValidateMutationOptions<
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

export function getPutV1CommitsIdPromoteMutationKey() {
  return ['v1', '/v1/commits/:id/promote', 'PUT'] as const
}

export function getPutV1CommitsIdPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.commits)[':id']['promote']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CommitsIdPromoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']>) {
      return parseResponse(client.v1.commits[':id'].promote.$put(args, options))
    },
  })
}

export function usePutV1CommitsIdPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.commits)[':id']['promote']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CommitsIdPromoteMutationOptions<TError, TOnMutateResult>(
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

export function getV1HeadlessAccountsStatusQueryKey() {
  return ['v1', '/v1/headless_accounts/status'] as const
}

export function getV1HeadlessAccountsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HeadlessAccountsStatusQueryKey>
  >({
    queryKey: getV1HeadlessAccountsStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.headless_accounts.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1HeadlessAccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
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
              Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HeadlessAccountsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1HeadlessAccountsStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1HeadlessAccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
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
              Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HeadlessAccountsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1HeadlessAccountsStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1MessageTypesMessageTypeKeyValidateMutationKey() {
  return ['v1', '/v1/message_types/:message_type_key/validate', 'PUT'] as const
}

export function getPutV1MessageTypesMessageTypeKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessageTypesMessageTypeKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.message_types)[':message_type_key']['validate']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.message_types[':message_type_key'].validate.$put(args, options),
      )
    },
  })
}

export function usePutV1MessageTypesMessageTypeKeyValidate<
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
                  (typeof client.v1.message_types)[':message_type_key']['validate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1MessageTypesMessageTypeKeyValidateMutationOptions<
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

export function getPutV1WorkflowsWorkflowKeyUnarchiveMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/unarchive', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].unarchive.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKeyUnarchive<
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
                ReturnType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyUnarchiveMutationOptions<
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

export function getV1ChannelsQueryKey(args: InferRequestType<typeof client.v1.channels.$get>) {
  return ['v1', '/v1/channels', args] as const
}

export function getV1ChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ChannelsQueryKey>
  >({
    queryKey: getV1ChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Channels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Channels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EnvironmentsEnvironmentSlugQueryKey(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
) {
  return ['v1', '/v1/environments/:environment_slug', args] as const
}

export function getV1EnvironmentsEnvironmentSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentSlugQueryKey>
  >({
    queryKey: getV1EnvironmentsEnvironmentSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments[':environment_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnvironmentsEnvironmentSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentSlugQueryKey>
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
      ...getV1EnvironmentsEnvironmentSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EnvironmentsEnvironmentSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentSlugQueryKey>
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
      ...getV1EnvironmentsEnvironmentSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1PartialsQueryKey(args: InferRequestType<typeof client.v1.partials.$get>) {
  return ['v1', '/v1/partials', args] as const
}

export function getV1PartialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.partials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PartialsQueryKey>
  >({
    queryKey: getV1PartialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.partials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Partials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.partials.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PartialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Partials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.partials.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PartialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PartialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1WarehouseSyncsWarehouseSyncKeySettingsMutationKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/settings', 'PUT'] as const
}

export function getPutV1WarehouseSyncsWarehouseSyncKeySettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehouseSyncsWarehouseSyncKeySettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].settings.$put(args, options),
      )
    },
  })
}

export function usePutV1WarehouseSyncsWarehouseSyncKeySettings<
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
                  (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
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
  const mutationDefaults = getPutV1WarehouseSyncsWarehouseSyncKeySettingsMutationOptions<
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

export function getV1MessageTypesMessageTypeKeyQueryKey(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
) {
  return ['v1', '/v1/message_types/:message_type_key', args] as const
}

export function getV1MessageTypesMessageTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessageTypesMessageTypeKeyQueryKey>
  >({
    queryKey: getV1MessageTypesMessageTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.message_types[':message_type_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1MessageTypesMessageTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessageTypesMessageTypeKeyQueryKey>
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
      ...getV1MessageTypesMessageTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1MessageTypesMessageTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessageTypesMessageTypeKeyQueryKey>
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
      ...getV1MessageTypesMessageTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1MessageTypesMessageTypeKeyMutationKey() {
  return ['v1', '/v1/message_types/:message_type_key', 'PUT'] as const
}

export function getPutV1MessageTypesMessageTypeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessageTypesMessageTypeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']>,
    ) {
      return parseResponse(client.v1.message_types[':message_type_key'].$put(args, options))
    },
  })
}

export function usePutV1MessageTypesMessageTypeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1MessageTypesMessageTypeKeyMutationOptions<
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

export function getV1MembersIdQueryKey(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
) {
  return ['v1', '/v1/members/:id', args] as const
}

export function getV1MembersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MembersIdQueryKey>
  >({
    queryKey: getV1MembersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.members[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1MembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1MembersIdMutationKey() {
  return ['v1', '/v1/members/:id', 'DELETE'] as const
}

export function getDeleteV1MembersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.members)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MembersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.members)[':id']['$delete']>) {
      return parseResponse(client.v1.members[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1MembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.members)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.members)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1MembersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AudiencesAudienceKeyQueryKey(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
) {
  return ['v1', '/v1/audiences/:audience_key', args] as const
}

export function getV1AudiencesAudienceKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudiencesAudienceKeyQueryKey>
  >({
    queryKey: getV1AudiencesAudienceKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audiences[':audience_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AudiencesAudienceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudiencesAudienceKeyQueryKey>
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
      ...getV1AudiencesAudienceKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AudiencesAudienceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudiencesAudienceKeyQueryKey>
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
      ...getV1AudiencesAudienceKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1AudiencesAudienceKeyMutationKey() {
  return ['v1', '/v1/audiences/:audience_key', 'PUT'] as const
}

export function getPutV1AudiencesAudienceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AudiencesAudienceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']>,
    ) {
      return parseResponse(client.v1.audiences[':audience_key'].$put(args, options))
    },
  })
}

export function usePutV1AudiencesAudienceKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AudiencesAudienceKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AudiencesAudienceKeyMutationKey() {
  return ['v1', '/v1/audiences/:audience_key', 'DELETE'] as const
}

export function getDeleteV1AudiencesAudienceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AudiencesAudienceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']>,
    ) {
      return parseResponse(client.v1.audiences[':audience_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1AudiencesAudienceKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AudiencesAudienceKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1WebhooksQueryKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function getV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >({
    queryKey: getV1WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1WebhooksMutationKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function getPostV1WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webhooks.$post>) {
      return parseResponse(client.v1.webhooks.$post(args, options))
    },
  })
}

export function usePostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1PartialsPartialKeyDiscardMutationKey() {
  return ['v1', '/v1/partials/:partial_key/discard', 'PUT'] as const
}

export function getPutV1PartialsPartialKeyDiscardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PartialsPartialKeyDiscardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>,
    ) {
      return parseResponse(client.v1.partials[':partial_key'].discard.$put(args, options))
    },
  })
}

export function usePutV1PartialsPartialKeyDiscard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PartialsPartialKeyDiscardMutationOptions<
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

export function getV1PreferenceCenterQueryKey(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
) {
  return ['v1', '/v1/preference_center', args] as const
}

export function getV1PreferenceCenterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.preference_center.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreferenceCenterQueryKey>
  >({
    queryKey: getV1PreferenceCenterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preference_center.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1PreferenceCenter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreferenceCenterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PreferenceCenterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PreferenceCenter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreferenceCenterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PreferenceCenterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PreferenceCenterMutationKey() {
  return ['v1', '/v1/preference_center', 'PUT'] as const
}

export function getPutV1PreferenceCenterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.preference_center.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PreferenceCenterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.preference_center.$put>) {
      return parseResponse(client.v1.preference_center.$put(args, options))
    },
  })
}

export function usePutV1PreferenceCenter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.preference_center.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PreferenceCenterMutationOptions<TError, TOnMutateResult>(
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

export function getV1CommitsQueryKey(args: InferRequestType<typeof client.v1.commits.$get>) {
  return ['v1', '/v1/commits', args] as const
}

export function getV1CommitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.commits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommitsQueryKey>
  >({
    queryKey: getV1CommitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.commits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Commits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.commits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CommitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CommitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Commits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.commits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CommitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CommitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1CommitsMutationKey() {
  return ['v1', '/v1/commits', 'PUT'] as const
}

export function getPutV1CommitsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.commits.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CommitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commits.$put>) {
      return parseResponse(client.v1.commits.$put(args, options))
    },
  })
}

export function usePutV1Commits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.commits.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CommitsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1HeadlessAccountsClaimMutationKey() {
  return ['v1', '/v1/headless_accounts/claim', 'POST'] as const
}

export function getPostV1HeadlessAccountsClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.claim.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.headless_accounts.claim.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HeadlessAccountsClaimMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.headless_accounts.claim.$post>) {
      return parseResponse(client.v1.headless_accounts.claim.$post(args, options))
    },
  })
}

export function usePostV1HeadlessAccountsClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.headless_accounts.claim.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.headless_accounts.claim.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1HeadlessAccountsClaimMutationOptions<TError, TOnMutateResult>(
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

export function getV1WarehousesWarehouseKeyQueryKey(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
) {
  return ['v1', '/v1/warehouses/:warehouse_key', args] as const
}

export function getV1WarehousesWarehouseKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesWarehouseKeyQueryKey>
  >({
    queryKey: getV1WarehousesWarehouseKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouses[':warehouse_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1WarehousesWarehouseKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehousesWarehouseKeyQueryKey>
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
      ...getV1WarehousesWarehouseKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1WarehousesWarehouseKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehousesWarehouseKeyQueryKey>
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
      ...getV1WarehousesWarehouseKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BillingSummaryQueryKey() {
  return ['v1', '/v1/billing/summary'] as const
}

export function getV1BillingSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSummaryQueryKey>
  >({
    queryKey: getV1BillingSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BillingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BillingSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BillingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BillingSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1WarehouseSyncsQueryKey(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
) {
  return ['v1', '/v1/warehouse_syncs', args] as const
}

export function getV1WarehouseSyncsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.warehouse_syncs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsQueryKey>
  >({
    queryKey: getV1WarehouseSyncsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouse_syncs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1WarehouseSyncs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WarehouseSyncsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1WarehouseSyncs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WarehouseSyncsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SchemasItemTypeQueryKey(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
) {
  return ['v1', '/v1/schemas/:item_type', args] as const
}

export function getV1SchemasItemTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SchemasItemTypeQueryKey>
  >({
    queryKey: getV1SchemasItemTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.schemas[':item_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SchemasItemType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SchemasItemTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SchemasItemTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SchemasItemType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SchemasItemTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SchemasItemTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SchemasItemTypeMutationKey() {
  return ['v1', '/v1/schemas/:item_type', 'PUT'] as const
}

export function getPutV1SchemasItemTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SchemasItemTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']>) {
      return parseResponse(client.v1.schemas[':item_type'].$put(args, options))
    },
  })
}

export function usePutV1SchemasItemType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SchemasItemTypeMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1BroadcastsBroadcastKeyCancelMutationKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/cancel', 'PUT'] as const
}

export function getPutV1BroadcastsBroadcastKeyCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BroadcastsBroadcastKeyCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.broadcasts[':broadcast_key'].cancel.$put(args, options))
    },
  })
}

export function usePutV1BroadcastsBroadcastKeyCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BroadcastsBroadcastKeyCancelMutationOptions<
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

export function getV1ReusableRequestsQueryKey(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
) {
  return ['v1', '/v1/reusable_requests', args] as const
}

export function getV1ReusableRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reusable_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReusableRequestsQueryKey>
  >({
    queryKey: getV1ReusableRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reusable_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ReusableRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReusableRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ReusableRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ReusableRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReusableRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ReusableRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EnvironmentsEnvironmentSlugDefaultsQueryKey(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
) {
  return ['v1', '/v1/environments/:environment_slug/defaults', args] as const
}

export function getV1EnvironmentsEnvironmentSlugDefaultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentSlugDefaultsQueryKey>
  >({
    queryKey: getV1EnvironmentsEnvironmentSlugDefaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments[':environment_slug'].defaults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnvironmentsEnvironmentSlugDefaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentSlugDefaultsQueryKey>
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
      ...getV1EnvironmentsEnvironmentSlugDefaultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EnvironmentsEnvironmentSlugDefaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentSlugDefaultsQueryKey>
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
      ...getV1EnvironmentsEnvironmentSlugDefaultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1EnvironmentsEnvironmentSlugDefaultsMutationKey() {
  return ['v1', '/v1/environments/:environment_slug/defaults', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentSlugDefaultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentSlugDefaultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environment_slug']['defaults']['$put']
      >,
    ) {
      return parseResponse(client.v1.environments[':environment_slug'].defaults.$put(args, options))
    },
  })
}

export function usePutV1EnvironmentsEnvironmentSlugDefaults<
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
                ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EnvironmentsEnvironmentSlugDefaultsMutationOptions<
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

export function getV1BranchesQueryKey(args: InferRequestType<typeof client.v1.branches.$get>) {
  return ['v1', '/v1/branches', args] as const
}

export function getV1BranchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.branches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BranchesQueryKey>
  >({
    queryKey: getV1BranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.branches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Branches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.branches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BranchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Branches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.branches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BranchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PartialsPartialKeyUnarchiveMutationKey() {
  return ['v1', '/v1/partials/:partial_key/unarchive', 'PUT'] as const
}

export function getPutV1PartialsPartialKeyUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PartialsPartialKeyUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>,
    ) {
      return parseResponse(client.v1.partials[':partial_key'].unarchive.$put(args, options))
    },
  })
}

export function usePutV1PartialsPartialKeyUnarchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PartialsPartialKeyUnarchiveMutationOptions<
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

export function getV1ReusableRequestsReusableRequestKeyQueryKey(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
) {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', args] as const
}

export function getV1ReusableRequestsReusableRequestKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReusableRequestsReusableRequestKeyQueryKey>
  >({
    queryKey: getV1ReusableRequestsReusableRequestKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reusable_requests[':reusable_request_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ReusableRequestsReusableRequestKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReusableRequestsReusableRequestKeyQueryKey>
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
      ...getV1ReusableRequestsReusableRequestKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ReusableRequestsReusableRequestKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReusableRequestsReusableRequestKeyQueryKey>
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
      ...getV1ReusableRequestsReusableRequestKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ReusableRequestsReusableRequestKeyMutationKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', 'PUT'] as const
}

export function getPutV1ReusableRequestsReusableRequestKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ReusableRequestsReusableRequestKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>,
    ) {
      return parseResponse(client.v1.reusable_requests[':reusable_request_key'].$put(args, options))
    },
  })
}

export function usePutV1ReusableRequestsReusableRequestKey<
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
                ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ReusableRequestsReusableRequestKeyMutationOptions<
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

export function getDeleteV1ReusableRequestsReusableRequestKeyMutationKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', 'DELETE'] as const
}

export function getDeleteV1ReusableRequestsReusableRequestKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ReusableRequestsReusableRequestKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.reusable_requests[':reusable_request_key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ReusableRequestsReusableRequestKey<
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
                ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ReusableRequestsReusableRequestKeyMutationOptions<
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

export function getV1PreferenceCategoriesQueryKey() {
  return ['v1', '/v1/preference_categories'] as const
}

export function getV1PreferenceCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreferenceCategoriesQueryKey>
  >({
    queryKey: getV1PreferenceCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preference_categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PreferenceCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreferenceCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PreferenceCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PreferenceCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreferenceCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PreferenceCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AuditLogsQueryKey(args: InferRequestType<typeof client.v1.audit_logs.$get>) {
  return ['v1', '/v1/audit_logs', args] as const
}

export function getV1AuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.audit_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AuditLogsQueryKey>
  >({
    queryKey: getV1AuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audit_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AuditLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.audit_logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AuditLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AuditLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.audit_logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AuditLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EmailLayoutsEmailLayoutKeyQueryKey(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
) {
  return ['v1', '/v1/email_layouts/:email_layout_key', args] as const
}

export function getV1EmailLayoutsEmailLayoutKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailLayoutsEmailLayoutKeyQueryKey>
  >({
    queryKey: getV1EmailLayoutsEmailLayoutKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email_layouts[':email_layout_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EmailLayoutsEmailLayoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailLayoutsEmailLayoutKeyQueryKey>
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
      ...getV1EmailLayoutsEmailLayoutKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EmailLayoutsEmailLayoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailLayoutsEmailLayoutKeyQueryKey>
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
      ...getV1EmailLayoutsEmailLayoutKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1EmailLayoutsEmailLayoutKeyMutationKey() {
  return ['v1', '/v1/email_layouts/:email_layout_key', 'PUT'] as const
}

export function getPutV1EmailLayoutsEmailLayoutKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailLayoutsEmailLayoutKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>,
    ) {
      return parseResponse(client.v1.email_layouts[':email_layout_key'].$put(args, options))
    },
  })
}

export function usePutV1EmailLayoutsEmailLayoutKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EmailLayoutsEmailLayoutKeyMutationOptions<
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

export function getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationKey() {
  return ['v1', '/v1/goals/:goal_key/attachments/:resource_type/:resource_key', 'PUT'] as const
}

export function getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1GoalsGoalKeyAttachmentsResourceTypeResourceKey<
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
                  (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
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
  const mutationDefaults = getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationOptions<
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

export function getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationKey() {
  return ['v1', '/v1/goals/:goal_key/attachments/:resource_type/:resource_key', 'DELETE'] as const
}

export function getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKey<
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
                  (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
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
  const mutationDefaults = getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyMutationOptions<
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

export function getPutV1BroadcastsBroadcastKeyRunMutationKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/run', 'PUT'] as const
}

export function getPutV1BroadcastsBroadcastKeyRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BroadcastsBroadcastKeyRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>,
    ) {
      return parseResponse(client.v1.broadcasts[':broadcast_key'].run.$put(args, options))
    },
  })
}

export function usePutV1BroadcastsBroadcastKeyRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BroadcastsBroadcastKeyRunMutationOptions<
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

export function getPostV1PartialsPreviewMutationKey() {
  return ['v1', '/v1/partials/preview', 'POST'] as const
}

export function getPostV1PartialsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.partials.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PartialsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.partials.preview.$post>) {
      return parseResponse(client.v1.partials.preview.$post(args, options))
    },
  })
}

export function usePostV1PartialsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.partials.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PartialsPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AssetsUploadsMutationKey() {
  return ['v1', '/v1/assets/uploads', 'POST'] as const
}

export function getPostV1AssetsUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.uploads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.assets.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssetsUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.assets.uploads.$post>) {
      return parseResponse(client.v1.assets.uploads.$post(args, options))
    },
  })
}

export function usePostV1AssetsUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.uploads.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.assets.uploads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AssetsUploadsMutationOptions<TError, TOnMutateResult>(
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

export function getV1WarehousesQueryKey(args: InferRequestType<typeof client.v1.warehouses.$get>) {
  return ['v1', '/v1/warehouses', args] as const
}

export function getV1WarehousesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.warehouses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesQueryKey>
  >({
    queryKey: getV1WarehousesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Warehouses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.warehouses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehousesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WarehousesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Warehouses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.warehouses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehousesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WarehousesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1EmailLayoutsEmailLayoutKeyValidateMutationKey() {
  return ['v1', '/v1/email_layouts/:email_layout_key/validate', 'PUT'] as const
}

export function getPutV1EmailLayoutsEmailLayoutKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailLayoutsEmailLayoutKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email_layouts[':email_layout_key'].validate.$put(args, options),
      )
    },
  })
}

export function usePutV1EmailLayoutsEmailLayoutKeyValidate<
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
                  (typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EmailLayoutsEmailLayoutKeyValidateMutationOptions<
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

export function getPutV1ReusableRequestsReusableRequestKeyUnarchiveMutationKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key/unarchive', 'PUT'] as const
}

export function getPutV1ReusableRequestsReusableRequestKeyUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ReusableRequestsReusableRequestKeyUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.reusable_requests[':reusable_request_key'].unarchive.$put(args, options),
      )
    },
  })
}

export function usePutV1ReusableRequestsReusableRequestKeyUnarchive<
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
                  (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
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
  const mutationDefaults = getPutV1ReusableRequestsReusableRequestKeyUnarchiveMutationOptions<
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

export function getV1MembersQueryKey(args: InferRequestType<typeof client.v1.members.$get>) {
  return ['v1', '/v1/members', args] as const
}

export function getV1MembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MembersQueryKey>
  >({
    queryKey: getV1MembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Members<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Members<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/steps/:step_ref/preview_template', 'POST'] as const
}

export function getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows[':workflow_key'].steps[':step_ref'].preview_template.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplate<
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
                  (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
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
  const mutationDefaults = getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateMutationOptions<
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

export function getPutV1TranslationsLocaleCodeValidateMutationKey() {
  return ['v1', '/v1/translations/:locale_code/validate', 'PUT'] as const
}

export function getPutV1TranslationsLocaleCodeValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TranslationsLocaleCodeValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.translations[':locale_code'].validate.$put(args, options))
    },
  })
}

export function usePutV1TranslationsLocaleCodeValidate<
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
                ReturnType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1TranslationsLocaleCodeValidateMutationOptions<
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

export function getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/runs', args] as const
}

export function getV1WarehouseSyncsWarehouseSyncKeyRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey>
  >({
    queryKey: getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1WarehouseSyncsWarehouseSyncKeyRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey>
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
      ...getV1WarehouseSyncsWarehouseSyncKeyRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1WarehouseSyncsWarehouseSyncKeyRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey>
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
      ...getV1WarehouseSyncsWarehouseSyncKeyRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1PreferenceCategoriesNameMutationKey() {
  return ['v1', '/v1/preference_categories/:name', 'PUT'] as const
}

export function getPutV1PreferenceCategoriesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PreferenceCategoriesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']>,
    ) {
      return parseResponse(client.v1.preference_categories[':name'].$put(args, options))
    },
  })
}

export function usePutV1PreferenceCategoriesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PreferenceCategoriesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PreferenceCategoriesNameMutationKey() {
  return ['v1', '/v1/preference_categories/:name', 'DELETE'] as const
}

export function getDeleteV1PreferenceCategoriesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PreferenceCategoriesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']>,
    ) {
      return parseResponse(client.v1.preference_categories[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1PreferenceCategoriesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PreferenceCategoriesNameMutationOptions<
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

export function getPutV1BranchesBranchSlugRebaseMutationKey() {
  return ['v1', '/v1/branches/:branch_slug/rebase', 'PUT'] as const
}

export function getPutV1BranchesBranchSlugRebaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BranchesBranchSlugRebaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>,
    ) {
      return parseResponse(client.v1.branches[':branch_slug'].rebase.$put(args, options))
    },
  })
}

export function usePutV1BranchesBranchSlugRebase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BranchesBranchSlugRebaseMutationOptions<TError, TOnMutateResult>(
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

export function getV1BroadcastsQueryKey(args: InferRequestType<typeof client.v1.broadcasts.$get>) {
  return ['v1', '/v1/broadcasts', args] as const
}

export function getV1BroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.broadcasts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BroadcastsQueryKey>
  >({
    queryKey: getV1BroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.broadcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Broadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Broadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1WorkflowsQueryKey(args: InferRequestType<typeof client.v1.workflows.$get>) {
  return ['v1', '/v1/workflows', args] as const
}

export function getV1WorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsQueryKey>
  >({
    queryKey: getV1WorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1WorkflowsWorkflowKeyDiscardMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/discard', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyDiscardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyDiscardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].discard.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKeyDiscard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyDiscardMutationOptions<
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

export function getPutV1GuidesGuideKeyValidateMutationKey() {
  return ['v1', '/v1/guides/:guide_key/validate', 'PUT'] as const
}

export function getPutV1GuidesGuideKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuidesGuideKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.guides[':guide_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1GuidesGuideKeyValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GuidesGuideKeyValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1WorkflowsWorkflowKeyRunMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/run', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].run.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKeyRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyRunMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1BroadcastsBroadcastKeySendMutationKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/send', 'PUT'] as const
}

export function getPutV1BroadcastsBroadcastKeySendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BroadcastsBroadcastKeySendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>,
    ) {
      return parseResponse(client.v1.broadcasts[':broadcast_key'].send.$put(args, options))
    },
  })
}

export function usePutV1BroadcastsBroadcastKeySend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BroadcastsBroadcastKeySendMutationOptions<
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

export function getPutV1BroadcastsBroadcastKeyValidateMutationKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/validate', 'PUT'] as const
}

export function getPutV1BroadcastsBroadcastKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BroadcastsBroadcastKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.broadcasts[':broadcast_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1BroadcastsBroadcastKeyValidate<
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
                ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BroadcastsBroadcastKeyValidateMutationOptions<
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

export function getPutV1GuidesGuideKeyUnarchiveMutationKey() {
  return ['v1', '/v1/guides/:guide_key/unarchive', 'PUT'] as const
}

export function getPutV1GuidesGuideKeyUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuidesGuideKeyUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>,
    ) {
      return parseResponse(client.v1.guides[':guide_key'].unarchive.$put(args, options))
    },
  })
}

export function usePutV1GuidesGuideKeyUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GuidesGuideKeyUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SchemasItemTypeValidateMutationKey() {
  return ['v1', '/v1/schemas/:item_type/validate', 'PUT'] as const
}

export function getPutV1SchemasItemTypeValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SchemasItemTypeValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.schemas[':item_type'].validate.$put(args, options))
    },
  })
}

export function usePutV1SchemasItemTypeValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SchemasItemTypeValidateMutationOptions<TError, TOnMutateResult>(
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

export function getV1ChannelGroupsChannelGroupKeyQueryKey(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
) {
  return ['v1', '/v1/channel_groups/:channel_group_key', args] as const
}

export function getV1ChannelGroupsChannelGroupKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelGroupsChannelGroupKeyQueryKey>
  >({
    queryKey: getV1ChannelGroupsChannelGroupKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.channel_groups[':channel_group_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelGroupsChannelGroupKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelGroupsChannelGroupKeyQueryKey>
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
      ...getV1ChannelGroupsChannelGroupKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ChannelGroupsChannelGroupKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelGroupsChannelGroupKeyQueryKey>
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
      ...getV1ChannelGroupsChannelGroupKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ChannelGroupsChannelGroupKeyMutationKey() {
  return ['v1', '/v1/channel_groups/:channel_group_key', 'PUT'] as const
}

export function getPutV1ChannelGroupsChannelGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ChannelGroupsChannelGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>,
    ) {
      return parseResponse(client.v1.channel_groups[':channel_group_key'].$put(args, options))
    },
  })
}

export function usePutV1ChannelGroupsChannelGroupKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ChannelGroupsChannelGroupKeyMutationOptions<
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

export function getDeleteV1ChannelGroupsChannelGroupKeyMutationKey() {
  return ['v1', '/v1/channel_groups/:channel_group_key', 'DELETE'] as const
}

export function getDeleteV1ChannelGroupsChannelGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ChannelGroupsChannelGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>,
    ) {
      return parseResponse(client.v1.channel_groups[':channel_group_key'].$delete(args, options))
    },
  })
}

export function useDeleteV1ChannelGroupsChannelGroupKey<
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
                  ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ChannelGroupsChannelGroupKeyMutationOptions<
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

export function getV1SourcesKeyEventsQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
) {
  return ['v1', '/v1/sources/:key/events', args] as const
}

export function getV1SourcesKeyEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyEventsQueryKey>
  >({
    queryKey: getV1SourcesKeyEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':key'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SourcesKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesKeyEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourcesKeyEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesKeyEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyValidateMutationKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/validate', 'PUT'] as const
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehouseSyncsWarehouseSyncKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].validate.$put(args, options),
      )
    },
  })
}

export function usePutV1WarehouseSyncsWarehouseSyncKeyValidate<
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
                  (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
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
  const mutationDefaults = getPutV1WarehouseSyncsWarehouseSyncKeyValidateMutationOptions<
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

export function getV1SourceProvidersQueryKey() {
  return ['v1', '/v1/source_providers'] as const
}

export function getV1SourceProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceProvidersQueryKey>
  >({
    queryKey: getV1SourceProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.source_providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SourceProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourceProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourceProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourceProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1AudiencesAudienceKeyValidateMutationKey() {
  return ['v1', '/v1/audiences/:audience_key/validate', 'PUT'] as const
}

export function getPutV1AudiencesAudienceKeyValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AudiencesAudienceKeyValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>,
    ) {
      return parseResponse(client.v1.audiences[':audience_key'].validate.$put(args, options))
    },
  })
}

export function usePutV1AudiencesAudienceKeyValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AudiencesAudienceKeyValidateMutationOptions<
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

export function getV1TagsQueryKey() {
  return ['v1', '/v1/tags'] as const
}

export function getV1TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TagsQueryKey>
  >({
    queryKey: getV1TagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PreferenceCenterResetMutationKey() {
  return ['v1', '/v1/preference_center/reset', 'PUT'] as const
}

export function getPutV1PreferenceCenterResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.reset.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.preference_center.reset.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PreferenceCenterResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.preference_center.reset.$put>) {
      return parseResponse(client.v1.preference_center.reset.$put(args, options))
    },
  })
}

export function usePutV1PreferenceCenterReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.reset.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.preference_center.reset.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PreferenceCenterResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ApiKeysExchangeMutationKey() {
  return ['v1', '/v1/api_keys/exchange', 'POST'] as const
}

export function getPostV1ApiKeysExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api_keys.exchange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.api_keys.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApiKeysExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.api_keys.exchange.$post>) {
      return parseResponse(client.v1.api_keys.exchange.$post(args, options))
    },
  })
}

export function usePostV1ApiKeysExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.api_keys.exchange.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.api_keys.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApiKeysExchangeMutationOptions<TError, TOnMutateResult>(
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

export function getV1WebhooksIdQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function getV1WebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >({
    queryKey: getV1WebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1WebhooksIdMutationKey() {
  return ['v1', '/v1/webhooks/:id', 'PUT'] as const
}

export function getPutV1WebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>) {
      return parseResponse(client.v1.webhooks[':id'].$put(args, options))
    },
  })
}

export function usePutV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1WebhooksIdMutationKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function getDeleteV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>) {
      return parseResponse(client.v1.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1WarehouseSyncsWarehouseSyncKeyQueryKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key', args] as const
}

export function getV1WarehouseSyncsWarehouseSyncKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyQueryKey>
  >({
    queryKey: getV1WarehouseSyncsWarehouseSyncKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1WarehouseSyncsWarehouseSyncKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyQueryKey>
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
      ...getV1WarehouseSyncsWarehouseSyncKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1WarehouseSyncsWarehouseSyncKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyQueryKey>
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
      ...getV1WarehouseSyncsWarehouseSyncKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyMutationKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key', 'PUT'] as const
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehouseSyncsWarehouseSyncKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>,
    ) {
      return parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$put(args, options))
    },
  })
}

export function usePutV1WarehouseSyncsWarehouseSyncKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WarehouseSyncsWarehouseSyncKeyMutationOptions<
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

export function getPostV1GoalsGoalKeyCloneMutationKey() {
  return ['v1', '/v1/goals/:goal_key/clone', 'POST'] as const
}

export function getPostV1GoalsGoalKeyCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GoalsGoalKeyCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>,
    ) {
      return parseResponse(client.v1.goals[':goal_key'].clone.$post(args, options))
    },
  })
}

export function usePostV1GoalsGoalKeyClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1GoalsGoalKeyCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1WorkflowsWorkflowKeyActivateMutationKey() {
  return ['v1', '/v1/workflows/:workflow_key/activate', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowKeyActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowKeyActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_key'].activate.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowKeyActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1WorkflowsWorkflowKeyActivateMutationOptions<
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

export function getV1ChannelsChannelKeyQueryKey(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
) {
  return ['v1', '/v1/channels/:channel_key', args] as const
}

export function getV1ChannelsChannelKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelsChannelKeyQueryKey>
  >({
    queryKey: getV1ChannelsChannelKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.channels[':channel_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelsChannelKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelsChannelKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ChannelsChannelKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ChannelsChannelKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelsChannelKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ChannelsChannelKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EmailLayoutsQueryKey(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
) {
  return ['v1', '/v1/email_layouts', args] as const
}

export function getV1EmailLayoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email_layouts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailLayoutsQueryKey>
  >({
    queryKey: getV1EmailLayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email_layouts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1EmailLayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailLayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EmailLayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EmailLayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailLayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EmailLayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SourceProvidersKeyQueryKey(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
) {
  return ['v1', '/v1/source_providers/:key', args] as const
}

export function getV1SourceProvidersKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceProvidersKeyQueryKey>
  >({
    queryKey: getV1SourceProvidersKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.source_providers[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SourceProvidersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceProvidersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourceProvidersKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourceProvidersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceProvidersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourceProvidersKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BranchesBranchSlugQueryKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_slug', args] as const
}

export function getV1BranchesBranchSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchSlugQueryKey>
  >({
    queryKey: getV1BranchesBranchSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.branches[':branch_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BranchesBranchSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BranchesBranchSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BranchesBranchSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BranchesBranchSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BranchesBranchSlugMutationKey() {
  return ['v1', '/v1/branches/:branch_slug', 'POST'] as const
}

export function getPostV1BranchesBranchSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BranchesBranchSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']>) {
      return parseResponse(client.v1.branches[':branch_slug'].$post(args, options))
    },
  })
}

export function usePostV1BranchesBranchSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BranchesBranchSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1BranchesBranchSlugMutationKey() {
  return ['v1', '/v1/branches/:branch_slug', 'DELETE'] as const
}

export function getDeleteV1BranchesBranchSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BranchesBranchSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']>,
    ) {
      return parseResponse(client.v1.branches[':branch_slug'].$delete(args, options))
    },
  })
}

export function useDeleteV1BranchesBranchSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BranchesBranchSlugMutationOptions<TError, TOnMutateResult>(
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

export function getV1SourcesKeyLogsQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
) {
  return ['v1', '/v1/sources/:key/logs', args] as const
}

export function getV1SourcesKeyLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyLogsQueryKey>
  >({
    queryKey: getV1SourcesKeyLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':key'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SourcesKeyLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesKeyLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SourcesKeyLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesKeyLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesKeyLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1GoalsGoalKeyAttachmentsQueryKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
) {
  return ['v1', '/v1/goals/:goal_key/attachments', args] as const
}

export function getV1GoalsGoalKeyAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GoalsGoalKeyAttachmentsQueryKey>
  >({
    queryKey: getV1GoalsGoalKeyAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.goals[':goal_key'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GoalsGoalKeyAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GoalsGoalKeyAttachmentsQueryKey>
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
      ...getV1GoalsGoalKeyAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1GoalsGoalKeyAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GoalsGoalKeyAttachmentsQueryKey>
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
      ...getV1GoalsGoalKeyAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
