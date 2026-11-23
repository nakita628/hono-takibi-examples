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

export function createPostV1Behavior<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.behavior.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.behavior.$post>,
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
    const mutationDefaults = getPostV1BehaviorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ChecksQueryKey(args: InferRequestType<typeof client.v1.checks.$get>) {
  return ['v1', '/v1/checks', args] as const
}

export function getV1ChecksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.checks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ChecksQueryKey>
  >({
    queryKey: getV1ChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.checks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Checks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.checks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChecksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Checks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.checks.$post>,
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
    const mutationDefaults = getPostV1ChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ChecksHealthQueryKey(
  args: InferRequestType<typeof client.v1.checks.health.$get>,
) {
  return ['v1', '/v1/checks/health', args] as const
}

export function getV1ChecksHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.checks.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksHealthQueryKey>
  >({
    queryKey: getV1ChecksHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.checks.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ChecksHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.checks.health.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.checks.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChecksHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChecksHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ChecksCheckIdQueryKey(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>,
) {
  return ['v1', '/v1/checks/:check_id', args] as const
}

export function getV1ChecksCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChecksCheckIdQueryKey>
  >({
    queryKey: getV1ChecksCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.checks[':check_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChecksCheckIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChecksCheckIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ChecksCheckIdDetailsQueryKey(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>,
) {
  return ['v1', '/v1/checks/:check_id/details', args] as const
}

export function getV1ChecksCheckIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ChecksCheckIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.checks[':check_id'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChecksCheckIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ChecksCheckIdDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ChecksCheckIdPdfQueryKey(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>,
) {
  return ['v1', '/v1/checks/:check_id/pdf', args] as const
}

export function getV1ChecksCheckIdPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ChecksCheckIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.checks[':check_id'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChecksCheckIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChecksCheckIdPdfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ChecksCheckIdPdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChecksCheckIdPdfMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigQueryKey(args: InferRequestType<typeof client.v1.config.$get>) {
  return ['v1', '/v1/config', args] as const
}

export function getV1ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ConfigQueryKey>
  >({
    queryKey: getV1ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.config.$put>,
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
    const mutationDefaults = getPutV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.config.$post>,
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
    const mutationDefaults = getPostV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.config.$delete>,
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
    const mutationDefaults = getDeleteV1ConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ContinuousChecksQueryKey() {
  return ['v1', '/v1/continuous-checks'] as const
}

export function getV1ContinuousChecksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContinuousChecksQueryKey>
  >({
    queryKey: getV1ContinuousChecksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['continuous-checks'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ContinuousChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['continuous-checks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ContinuousChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ContinuousChecksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ContinuousChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContinuousChecksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ContinuousChecksContinuousCheckIdQueryKey(
  args: InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>,
) {
  return ['v1', '/v1/continuous-checks/:continuous_check_id', args] as const
}

export function getV1ContinuousChecksContinuousCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContinuousChecksContinuousCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['continuous-checks'][':continuous_check_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ContinuousChecksContinuousCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ContinuousChecksContinuousCheckIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ContinuousChecksContinuousCheckId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ContinuousChecksContinuousCheckIdMutationOptions<
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

export function getV1ContinuousChecksContinuousCheckIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
  >,
) {
  return ['v1', '/v1/continuous-checks/:continuous_check_id/history', args] as const
}

export function getV1ContinuousChecksContinuousCheckIdHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContinuousChecksContinuousCheckIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['continuous-checks'][':continuous_check_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ContinuousChecksContinuousCheckIdHistory<
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
  args: () => InferRequestType<
    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ContinuousChecksContinuousCheckIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1HooksQueryKey() {
  return ['v1', '/v1/hooks'] as const
}

export function getV1HooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HooksQueryKey>
  >({
    queryKey: getV1HooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.hooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Hooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1HooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Hooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.hooks.$post>,
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
    const mutationDefaults = getPostV1HooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1HooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.hooks)[':hook_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.hooks)[':hook_id']['$put']>,
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
    const mutationDefaults = getPutV1HooksHookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1HooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1HooksHookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReportsQueryKey(args: InferRequestType<typeof client.v1.reports.$get>) {
  return ['v1', '/v1/reports', args] as const
}

export function getV1ReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ReportsQueryKey>
  >({
    queryKey: getV1ReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Reports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.reports.$post>,
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
    const mutationDefaults = getPostV1ReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>,
) {
  return ['v1', '/v1/reports/:report_id', args] as const
}

export function getV1ReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportsReportIdQueryKey>
  >({
    queryKey: getV1ReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports[':report_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.reports)[':report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReportsReportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ReportsReportIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ReportsReportIdUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
