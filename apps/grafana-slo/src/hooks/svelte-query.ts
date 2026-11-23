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

export function getV1ReportQueryKey() {
  return ['v1', '/v1/report'] as const
}

export function getV1ReportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ReportQueryKey>
  >({
    queryKey: getV1ReportQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.report.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Report<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReportQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ReportMutationKey() {
  return ['v1', '/v1/report', 'POST'] as const
}

export function getPostV1ReportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.report.$post>) {
      return parseResponse(client.v1.report.$post(args, options))
    },
  })
}

export function createPostV1Report<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.report.$post>,
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
    const mutationDefaults = getPostV1ReportMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReportIdQueryKey(
  args: InferRequestType<(typeof client.v1.report)[':id']['$get']>,
) {
  return ['v1', '/v1/report/:id', args] as const
}

export function getV1ReportIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.report)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportIdQueryKey>
  >({
    queryKey: getV1ReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.report[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ReportId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.report)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ReportIdMutationKey() {
  return ['v1', '/v1/report/:id', 'PUT'] as const
}

export function getPutV1ReportIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.report)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.report)[':id']['$put']>) {
      return parseResponse(client.v1.report[':id'].$put(args, options))
    },
  })
}

export function createPutV1ReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.report)[':id']['$put']>,
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
    const mutationDefaults = getPutV1ReportIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ReportIdMutationKey() {
  return ['v1', '/v1/report/:id', 'DELETE'] as const
}

export function getDeleteV1ReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.report)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.report)[':id']['$delete']>) {
      return parseResponse(client.v1.report[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.report)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SloQueryKey() {
  return ['v1', '/v1/slo'] as const
}

export function getV1SloQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SloQueryKey>
  >({
    queryKey: getV1SloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.slo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Slo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1SloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SloQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1SloMutationKey() {
  return ['v1', '/v1/slo', 'POST'] as const
}

export function getPostV1SloMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.slo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SloMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.slo.$post>) {
      return parseResponse(client.v1.slo.$post(args, options))
    },
  })
}

export function createPostV1Slo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.slo.$post>,
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
    const mutationDefaults = getPostV1SloMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SloIdQueryKey(args: InferRequestType<(typeof client.v1.slo)[':id']['$get']>) {
  return ['v1', '/v1/slo/:id', args] as const
}

export function getV1SloIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.slo)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SloIdQueryKey>
  >({
    queryKey: getV1SloIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.slo[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SloId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.slo)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SloIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SloIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1SloIdMutationKey() {
  return ['v1', '/v1/slo/:id', 'PUT'] as const
}

export function getPutV1SloIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1.slo)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SloIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.slo)[':id']['$put']>) {
      return parseResponse(client.v1.slo[':id'].$put(args, options))
    },
  })
}

export function createPutV1SloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.slo)[':id']['$put']>,
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
    const mutationDefaults = getPutV1SloIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1SloIdMutationKey() {
  return ['v1', '/v1/slo/:id', 'DELETE'] as const
}

export function getDeleteV1SloIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.slo)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SloIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.slo)[':id']['$delete']>) {
      return parseResponse(client.v1.slo[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1SloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.slo)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1SloIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
