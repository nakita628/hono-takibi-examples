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

export function getPostV1BehaviorMutationKey() {
  return ['v1', '/v1/behavior', 'POST'] as const
}

export function getPostV1BehaviorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.behavior.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.behavior.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BehaviorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.behavior.$post>) {
      return parseResponse(client.v1.behavior.$post(args, options))
    },
  })
}

export function usePostV1Behavior<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.behavior.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.behavior.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BehaviorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ChecksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.$get>>,
) {
  return ['v1', '/v1/checks', toValue(args)] as const
}

export function getV1ChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.checks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Checks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
          >,
          ReturnType<typeof getV1ChecksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ChecksMutationKey() {
  return ['v1', '/v1/checks', 'POST'] as const
}

export function getPostV1ChecksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.checks.$post>) {
      return parseResponse(client.v1.checks.$post(args, options))
    },
  })
}

export function usePostV1Checks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.checks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ChecksHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.health.$get>>,
) {
  return ['v1', '/v1/checks/health', toValue(args)] as const
}

export function getV1ChecksHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChecksHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.checks.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChecksHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.checks.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>
            >
          >,
          ReturnType<typeof getV1ChecksHealthQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChecksHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.checks.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChecksCheckIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>>,
) {
  return ['v1', '/v1/checks/:check_id', toValue(args)] as const
}

export function getV1ChecksCheckIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChecksCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.checks[':check_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChecksCheckIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksCheckIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChecksCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.checks[':check_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChecksCheckIdDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>
  >,
) {
  return ['v1', '/v1/checks/:check_id/details', toValue(args)] as const
}

export function getV1ChecksCheckIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChecksCheckIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.checks[':check_id'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChecksCheckIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChecksCheckIdDetailsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksCheckIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChecksCheckIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.checks[':check_id'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChecksCheckIdPdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>,
) {
  return ['v1', '/v1/checks/:check_id/pdf', toValue(args)] as const
}

export function getV1ChecksCheckIdPdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChecksCheckIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.checks[':check_id'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChecksCheckIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChecksCheckIdPdfQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksCheckIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChecksCheckIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.checks[':check_id'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ChecksCheckIdPdfMutationKey() {
  return ['v1', '/v1/checks/:check_id/pdf', 'POST'] as const
}

export function getPostV1ChecksCheckIdPdfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChecksCheckIdPdfMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>,
    ) {
      return parseResponse(client.v1.checks[':check_id'].pdf.$post(args, options))
    },
  })
}

export function usePostV1ChecksCheckIdPdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ChecksCheckIdPdfMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
) {
  return ['v1', '/v1/config', toValue(args)] as const
}

export function getV1ConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
          >,
          ReturnType<typeof getV1ConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ConfigMutationKey() {
  return ['v1', '/v1/config', 'PUT'] as const
}

export function getPutV1ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.config.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.config.$put>) {
      return parseResponse(client.v1.config.$put(args, options))
    },
  })
}

export function usePutV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.config.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ConfigMutationKey() {
  return ['v1', '/v1/config', 'POST'] as const
}

export function getPostV1ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.config.$post>) {
      return parseResponse(client.v1.config.$post(args, options))
    },
  })
}

export function usePostV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.config.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ConfigMutationKey() {
  return ['v1', '/v1/config', 'DELETE'] as const
}

export function getDeleteV1ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$delete>>>>>,
    TError,
    InferRequestType<typeof client.v1.config.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.config.$delete>) {
      return parseResponse(client.v1.config.$delete(args, options))
    },
  })
}

export function useDeleteV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.config.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ContinuousChecksQueryKey() {
  return ['v1', '/v1/continuous-checks'] as const
}

export function getV1ContinuousChecksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ContinuousChecksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['continuous-checks'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContinuousChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>>
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
                Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ContinuousChecksQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContinuousChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ContinuousChecksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['continuous-checks'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ContinuousChecksMutationKey() {
  return ['v1', '/v1/continuous-checks', 'POST'] as const
}

export function getPostV1ContinuousChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['continuous-checks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContinuousChecksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['continuous-checks']['$post']>) {
      return parseResponse(client.v1['continuous-checks'].$post(args, options))
    },
  })
}

export function usePostV1ContinuousChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['continuous-checks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ContinuousChecksMutationOptions<TError, TOnMutateResult>(
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

export function getV1ContinuousChecksContinuousCheckIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>
  >,
) {
  return ['v1', '/v1/continuous-checks/:continuous_check_id', toValue(args)] as const
}

export function getV1ContinuousChecksContinuousCheckIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContinuousChecksContinuousCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['continuous-checks'][':continuous_check_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContinuousChecksContinuousCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>
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
                    (typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']
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
                    (typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ContinuousChecksContinuousCheckIdQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContinuousChecksContinuousCheckIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContinuousChecksContinuousCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['continuous-checks'][':continuous_check_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ContinuousChecksContinuousCheckIdMutationKey() {
  return ['v1', '/v1/continuous-checks/:continuous_check_id', 'PUT'] as const
}

export function getPutV1ContinuousChecksContinuousCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ContinuousChecksContinuousCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['continuous-checks'][':continuous_check_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1ContinuousChecksContinuousCheckId<
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
                    (typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ContinuousChecksContinuousCheckIdMutationOptions<
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

export function getV1ContinuousChecksContinuousCheckIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
    >
  >,
) {
  return ['v1', '/v1/continuous-checks/:continuous_check_id/history', toValue(args)] as const
}

export function getV1ContinuousChecksContinuousCheckIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContinuousChecksContinuousCheckIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['continuous-checks'][':continuous_check_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContinuousChecksContinuousCheckIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
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
                    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
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
                    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ContinuousChecksContinuousCheckIdHistoryQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContinuousChecksContinuousCheckIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContinuousChecksContinuousCheckIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['continuous-checks'][':continuous_check_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1HooksQueryKey() {
  return ['v1', '/v1/hooks'] as const
}

export function getV1HooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1HooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.hooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Hooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>
          >,
          ReturnType<typeof getV1HooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1HooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.hooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1HooksMutationKey() {
  return ['v1', '/v1/hooks', 'POST'] as const
}

export function getPostV1HooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.hooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hooks.$post>) {
      return parseResponse(client.v1.hooks.$post(args, options))
    },
  })
}

export function usePostV1Hooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.hooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1HooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1HooksHookIdMutationKey() {
  return ['v1', '/v1/hooks/:hook_id', 'PUT'] as const
}

export function getPutV1HooksHookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.hooks)[':hook_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.hooks)[':hook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1HooksHookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.hooks)[':hook_id']['$put']>) {
      return parseResponse(client.v1.hooks[':hook_id'].$put(args, options))
    },
  })
}

export function usePutV1HooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.hooks)[':hook_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.hooks)[':hook_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1HooksHookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1HooksHookIdMutationKey() {
  return ['v1', '/v1/hooks/:hook_id', 'DELETE'] as const
}

export function getDeleteV1HooksHookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.hooks)[':hook_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.hooks)[':hook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1HooksHookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.hooks)[':hook_id']['$delete']>) {
      return parseResponse(client.v1.hooks[':hook_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1HooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.hooks)[':hook_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.hooks)[':hook_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1HooksHookIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.$get>>,
) {
  return ['v1', '/v1/reports', toValue(args)] as const
}

export function getV1ReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Reports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
          >,
          ReturnType<typeof getV1ReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ReportsMutationKey() {
  return ['v1', '/v1/reports', 'POST'] as const
}

export function getPostV1ReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.reports.$post>) {
      return parseResponse(client.v1.reports.$post(args, options))
    },
  })
}

export function usePostV1Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.reports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ReportsReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>>,
) {
  return ['v1', '/v1/reports/:report_id', toValue(args)] as const
}

export function getV1ReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reports[':report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ReportsReportIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reports[':report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ReportsReportIdUploadMutationKey() {
  return ['v1', '/v1/reports/:report_id/upload', 'POST'] as const
}

export function getPostV1ReportsReportIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.reports)[':report_id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReportsReportIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.reports)[':report_id']['upload']['$post']>,
    ) {
      return parseResponse(client.v1.reports[':report_id'].upload.$post(args, options))
    },
  })
}

export function usePostV1ReportsReportIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.reports)[':report_id']['upload']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ReportsReportIdUploadMutationOptions<TError, TOnMutateResult>(
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
