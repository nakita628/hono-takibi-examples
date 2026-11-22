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

export function getV1ReportQueryKey() {
  return ['v1', '/v1/report'] as const
}

export function getV1ReportQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ReportQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.report.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Report<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>
          >,
          ReturnType<typeof getV1ReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ReportQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.report.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Report<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.report.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.report.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ReportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.report)[':id']['$get']>>,
) {
  return ['v1', '/v1/report/:id', toValue(args)] as const
}

export function getV1ReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.report)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.report[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.report)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ReportIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.report[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.report)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.report)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ReportIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1ReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.report)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.report)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ReportIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SloQueryKey() {
  return ['v1', '/v1/slo'] as const
}

export function getV1SloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.slo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Slo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
          ReturnType<typeof getV1SloQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.slo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Slo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.slo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.slo.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SloMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1SloIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.slo)[':id']['$get']>>,
) {
  return ['v1', '/v1/slo/:id', toValue(args)] as const
}

export function getV1SloIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.slo)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SloIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.slo[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SloId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.slo)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SloIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SloIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SloIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.slo[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1SloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.slo)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.slo)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SloIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1SloId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SloIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
