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

export function getV1VariablesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.variables)[':key']['$get']>>,
) {
  return ['v1', '/v1/variables/:key', toValue(args)] as const
}

export function getV1VariablesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.variables)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VariablesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.variables[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VariablesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.variables)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VariablesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VariablesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VariablesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.variables[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.variables)[':key']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1GoalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.goals.$get>>,
) {
  return ['v1', '/v1/goals', toValue(args)] as const
}

export function getV1GoalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.goals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GoalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.goals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Goals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.goals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>
          >,
          ReturnType<typeof getV1GoalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1GoalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GoalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.goals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsWorkflowKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>>,
) {
  return ['v1', '/v1/workflows/:workflow_key', toValue(args)] as const
}

export function getV1WorkflowsWorkflowKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsWorkflowKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows[':workflow_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsWorkflowKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsWorkflowKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsWorkflowKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows[':workflow_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commits)[':id']['$get']>>,
) {
  return ['v1', '/v1/commits/:id', toValue(args)] as const
}

export function getV1CommitsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commits)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CommitsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.commits[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CommitsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commits)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1CommitsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CommitsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CommitsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.commits[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourcesKeyStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>>,
) {
  return ['v1', '/v1/sources/:key/status', toValue(args)] as const
}

export function getV1SourcesKeyStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesKeyStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources[':key'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SourcesKeyStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesKeyStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources[':key'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1WhoamiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          ReturnType<typeof getV1WhoamiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WhoamiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.whoami.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
) {
  return ['v1', '/v1/sources', toValue(args)] as const
}

export function getV1SourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
          >,
          ReturnType<typeof getV1SourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.email_layouts.preview.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.email_layouts.preview.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.message_types.$get>>,
) {
  return ['v1', '/v1/message_types', toValue(args)] as const
}

export function getV1MessageTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.message_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessageTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.message_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessageTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.message_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>
            >
          >,
          ReturnType<typeof getV1MessageTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessageTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessageTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.message_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1GoalsGoalKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>>,
) {
  return ['v1', '/v1/goals/:goal_key', toValue(args)] as const
}

export function getV1GoalsGoalKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GoalsGoalKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.goals[':goal_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GoalsGoalKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GoalsGoalKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GoalsGoalKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GoalsGoalKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.goals[':goal_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.environments.$get>>,
) {
  return ['v1', '/v1/environments', toValue(args)] as const
}

export function getV1EnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.environments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.environments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>
            >
          >,
          ReturnType<typeof getV1EnvironmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1AssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
) {
  return ['v1', '/v1/assets', toValue(args)] as const
}

export function getV1AssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
          >,
          ReturnType<typeof getV1AssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.assets.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>,
) {
  return ['v1', '/v1/broadcasts/:broadcast_key', toValue(args)] as const
}

export function getV1BroadcastsBroadcastKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BroadcastsBroadcastKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.broadcasts[':broadcast_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BroadcastsBroadcastKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BroadcastsBroadcastKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BroadcastsBroadcastKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.broadcasts[':broadcast_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.feedback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.feedback.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']
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

export function getV1GuidesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.guides.$get>>,
) {
  return ['v1', '/v1/guides', toValue(args)] as const
}

export function getV1GuidesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.guides.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GuidesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.guides.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Guides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.guides.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>
          >,
          ReturnType<typeof getV1GuidesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1GuidesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GuidesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.guides.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1AudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audiences.$get>>,
) {
  return ['v1', '/v1/audiences', toValue(args)] as const
}

export function getV1AudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audiences.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Audiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
          >,
          ReturnType<typeof getV1AudiencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TranslationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.translations.$get>>,
) {
  return ['v1', '/v1/translations', toValue(args)] as const
}

export function getV1TranslationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.translations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Translations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.translations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>
            >
          >,
          ReturnType<typeof getV1TranslationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TranslationsLocaleCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>>,
) {
  return ['v1', '/v1/translations/:locale_code', toValue(args)] as const
}

export function getV1TranslationsLocaleCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TranslationsLocaleCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.translations[':locale_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TranslationsLocaleCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TranslationsLocaleCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TranslationsLocaleCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.translations[':locale_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':name']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1SchemasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schemas.$get>>,
) {
  return ['v1', '/v1/schemas', toValue(args)] as const
}

export function getV1SchemasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schemas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.schemas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Schemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schemas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>
          >,
          ReturnType<typeof getV1SchemasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChannelGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channel_groups.$get>>,
) {
  return ['v1', '/v1/channel_groups', toValue(args)] as const
}

export function getV1ChannelGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channel_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChannelGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.channel_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChannelGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channel_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>
            >
          >,
          ReturnType<typeof getV1ChannelGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChannelGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.channel_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PartialsPartialKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>>,
) {
  return ['v1', '/v1/partials/:partial_key', toValue(args)] as const
}

export function getV1PartialsPartialKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PartialsPartialKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.partials[':partial_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PartialsPartialKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PartialsPartialKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PartialsPartialKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PartialsPartialKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.partials[':partial_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1VariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
) {
  return ['v1', '/v1/variables', toValue(args)] as const
}

export function getV1VariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.variables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
          >,
          ReturnType<typeof getV1VariablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1GuidesGuideKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>>,
) {
  return ['v1', '/v1/guides/:guide_key', toValue(args)] as const
}

export function getV1GuidesGuideKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GuidesGuideKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.guides[':guide_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GuidesGuideKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GuidesGuideKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuidesGuideKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GuidesGuideKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.guides[':guide_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['$get']>>,
) {
  return ['v1', '/v1/sources/:key', toValue(args)] as const
}

export function getV1SourcesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourcesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SourcesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1HeadlessAccountsStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1HeadlessAccountsStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.headless_accounts.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>
              >
            >
          >,
          ReturnType<typeof getV1HeadlessAccountsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HeadlessAccountsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1HeadlessAccountsStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.headless_accounts.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.message_types)[':message_type_key']['validate']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1ChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channels.$get>>,
) {
  return ['v1', '/v1/channels', toValue(args)] as const
}

export function getV1ChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Channels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
          >,
          ReturnType<typeof getV1ChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EnvironmentsEnvironmentSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>
  >,
) {
  return ['v1', '/v1/environments/:environment_slug', toValue(args)] as const
}

export function getV1EnvironmentsEnvironmentSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EnvironmentsEnvironmentSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.environments[':environment_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EnvironmentsEnvironmentSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EnvironmentsEnvironmentSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.environments[':environment_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PartialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.partials.$get>>,
) {
  return ['v1', '/v1/partials', toValue(args)] as const
}

export function getV1PartialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.partials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PartialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.partials.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Partials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.partials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
          >,
          ReturnType<typeof getV1PartialsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PartialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PartialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.partials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>
  >,
) {
  return ['v1', '/v1/message_types/:message_type_key', toValue(args)] as const
}

export function getV1MessageTypesMessageTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessageTypesMessageTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.message_types[':message_type_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MessageTypesMessageTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessageTypesMessageTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessageTypesMessageTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.message_types[':message_type_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.members)[':id']['$get']>>,
) {
  return ['v1', '/v1/members/:id', toValue(args)] as const
}

export function getV1MembersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.members)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MembersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.members[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.members)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1MembersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MembersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MembersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.members[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>>,
) {
  return ['v1', '/v1/audiences/:audience_key', toValue(args)] as const
}

export function getV1AudiencesAudienceKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudiencesAudienceKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audiences[':audience_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudiencesAudienceKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudiencesAudienceKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudiencesAudienceKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audiences[':audience_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
) {
  return ['v1', '/v1/webhooks', toValue(args)] as const
}

export function getV1WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          ReturnType<typeof getV1WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preference_center.$get>>,
) {
  return ['v1', '/v1/preference_center', toValue(args)] as const
}

export function getV1PreferenceCenterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preference_center.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PreferenceCenterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preference_center.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PreferenceCenter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preference_center.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
            >
          >,
          ReturnType<typeof getV1PreferenceCenterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreferenceCenterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PreferenceCenterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preference_center.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1CommitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commits.$get>>,
) {
  return ['v1', '/v1/commits', toValue(args)] as const
}

export function getV1CommitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CommitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.commits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Commits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>
          >,
          ReturnType<typeof getV1CommitsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CommitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.commits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.commits.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>,
) {
  return ['v1', '/v1/warehouses/:warehouse_key', toValue(args)] as const
}

export function getV1WarehousesWarehouseKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WarehousesWarehouseKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.warehouses[':warehouse_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WarehousesWarehouseKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesWarehouseKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WarehousesWarehouseKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.warehouses[':warehouse_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BillingSummaryQueryKey() {
  return ['v1', '/v1/billing/summary'] as const
}

export function getV1BillingSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1BillingSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.billing.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BillingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>
            >
          >,
          ReturnType<typeof getV1BillingSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1BillingSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.billing.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WarehouseSyncsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouse_syncs.$get>>,
) {
  return ['v1', '/v1/warehouse_syncs', toValue(args)] as const
}

export function getV1WarehouseSyncsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouse_syncs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WarehouseSyncsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.warehouse_syncs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WarehouseSyncs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouse_syncs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>
            >
          >,
          ReturnType<typeof getV1WarehouseSyncsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WarehouseSyncsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.warehouse_syncs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SchemasItemTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>>,
) {
  return ['v1', '/v1/schemas/:item_type', toValue(args)] as const
}

export function getV1SchemasItemTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SchemasItemTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.schemas[':item_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SchemasItemType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SchemasItemTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SchemasItemTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SchemasItemTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.schemas[':item_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reusable_requests.$get>>,
) {
  return ['v1', '/v1/reusable_requests', toValue(args)] as const
}

export function getV1ReusableRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reusable_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReusableRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reusable_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReusableRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reusable_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
            >
          >,
          ReturnType<typeof getV1ReusableRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReusableRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReusableRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reusable_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EnvironmentsEnvironmentSlugDefaultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
  >,
) {
  return ['v1', '/v1/environments/:environment_slug/defaults', toValue(args)] as const
}

export function getV1EnvironmentsEnvironmentSlugDefaultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EnvironmentsEnvironmentSlugDefaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.environments[':environment_slug'].defaults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
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
                    (typeof client.v1.environments)[':environment_slug']['defaults']['$get']
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
                    (typeof client.v1.environments)[':environment_slug']['defaults']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EnvironmentsEnvironmentSlugDefaultsQueryKey>
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
            ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentSlugDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EnvironmentsEnvironmentSlugDefaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.environments[':environment_slug'].defaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.environments)[':environment_slug']['defaults']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.environments)[':environment_slug']['defaults']['$put']
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

export function getV1BranchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.branches.$get>>,
) {
  return ['v1', '/v1/branches', toValue(args)] as const
}

export function getV1BranchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.branches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.branches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Branches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.branches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
          >,
          ReturnType<typeof getV1BranchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
  >,
) {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', toValue(args)] as const
}

export function getV1ReusableRequestsReusableRequestKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReusableRequestsReusableRequestKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reusable_requests[':reusable_request_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ReusableRequestsReusableRequestKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReusableRequestsReusableRequestKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReusableRequestsReusableRequestKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']
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

export function getV1PreferenceCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PreferenceCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preference_categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
            >
          >,
          ReturnType<typeof getV1PreferenceCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreferenceCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PreferenceCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preference_categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AuditLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audit_logs.$get>>,
) {
  return ['v1', '/v1/audit_logs', toValue(args)] as const
}

export function getV1AuditLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audit_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audit_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AuditLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audit_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
          >,
          ReturnType<typeof getV1AuditLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audit_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailLayoutsEmailLayoutKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>
  >,
) {
  return ['v1', '/v1/email_layouts/:email_layout_key', toValue(args)] as const
}

export function getV1EmailLayoutsEmailLayoutKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailLayoutsEmailLayoutKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email_layouts[':email_layout_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmailLayoutsEmailLayoutKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailLayoutsEmailLayoutKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailLayoutsEmailLayoutKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email_layouts[':email_layout_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1WarehousesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouses.$get>>,
) {
  return ['v1', '/v1/warehouses', toValue(args)] as const
}

export function getV1WarehousesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WarehousesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.warehouses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Warehouses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.warehouses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
          >,
          ReturnType<typeof getV1WarehousesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WarehousesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.warehouses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1MembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.members.$get>>,
) {
  return ['v1', '/v1/members', toValue(args)] as const
}

export function getV1MembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.members.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.members.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Members<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.members.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>
          >,
          ReturnType<typeof getV1MembersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
  >,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/runs', toValue(args)] as const
}

export function getV1WarehouseSyncsWarehouseSyncKeyRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
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
                    (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']
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
                    (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey>
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
            ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WarehouseSyncsWarehouseSyncKeyRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1BroadcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.broadcasts.$get>>,
) {
  return ['v1', '/v1/broadcasts', toValue(args)] as const
}

export function getV1BroadcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.broadcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.broadcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Broadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.broadcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
          >,
          ReturnType<typeof getV1BroadcastsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
) {
  return ['v1', '/v1/workflows', toValue(args)] as const
}

export function getV1WorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
          >,
          ReturnType<typeof getV1WorkflowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>
  >,
) {
  return ['v1', '/v1/channel_groups/:channel_group_key', toValue(args)] as const
}

export function getV1ChannelGroupsChannelGroupKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChannelGroupsChannelGroupKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.channel_groups[':channel_group_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChannelGroupsChannelGroupKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelGroupsChannelGroupKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChannelGroupsChannelGroupKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.channel_groups[':channel_group_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>>,
) {
  return ['v1', '/v1/sources/:key/events', toValue(args)] as const
}

export function getV1SourcesKeyEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesKeyEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources[':key'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SourcesKeyEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesKeyEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources[':key'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1SourceProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SourceProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.source_providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourceProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
            >
          >,
          ReturnType<typeof getV1SourceProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SourceProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.source_providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>,
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

export function getV1TagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
          >,
          ReturnType<typeof getV1TagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.preference_center.reset.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.preference_center.reset.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
) {
  return ['v1', '/v1/webhooks/:id', toValue(args)] as const
}

export function getV1WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1WebhooksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>
  >,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key', toValue(args)] as const
}

export function getV1WarehouseSyncsWarehouseSyncKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WarehouseSyncsWarehouseSyncKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.warehouse_syncs[':warehouse_sync_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>
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
                  ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehouseSyncsWarehouseSyncKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WarehouseSyncsWarehouseSyncKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>>,
) {
  return ['v1', '/v1/channels/:channel_key', toValue(args)] as const
}

export function getV1ChannelsChannelKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChannelsChannelKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.channels[':channel_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChannelsChannelKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChannelsChannelKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelsChannelKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChannelsChannelKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.channels[':channel_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmailLayoutsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email_layouts.$get>>,
) {
  return ['v1', '/v1/email_layouts', toValue(args)] as const
}

export function getV1EmailLayoutsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email_layouts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailLayoutsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email_layouts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailLayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email_layouts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>
            >
          >,
          ReturnType<typeof getV1EmailLayoutsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailLayoutsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailLayoutsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email_layouts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourceProvidersKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>>,
) {
  return ['v1', '/v1/source_providers/:key', toValue(args)] as const
}

export function getV1SourceProvidersKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourceProvidersKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.source_providers[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourceProvidersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SourceProvidersKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceProvidersKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourceProvidersKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.source_providers[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BranchesBranchSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>>,
) {
  return ['v1', '/v1/branches/:branch_slug', toValue(args)] as const
}

export function getV1BranchesBranchSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BranchesBranchSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.branches[':branch_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BranchesBranchSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BranchesBranchSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BranchesBranchSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.branches[':branch_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>>,
) {
  return ['v1', '/v1/sources/:key/logs', toValue(args)] as const
}

export function getV1SourcesKeyLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesKeyLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources[':key'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourcesKeyLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SourcesKeyLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesKeyLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesKeyLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources[':key'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1GoalsGoalKeyAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>
  >,
) {
  return ['v1', '/v1/goals/:goal_key/attachments', toValue(args)] as const
}

export function getV1GoalsGoalKeyAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GoalsGoalKeyAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.goals[':goal_key'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GoalsGoalKeyAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GoalsGoalKeyAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GoalsGoalKeyAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.goals[':goal_key'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
