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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1GroupNameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':groupName']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:groupName', args] as const
}

export function getV1beta1GroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':groupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1GroupNameQueryKey>
  >({
    queryKey: getV1beta1GroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':groupName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1GroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':groupName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1GroupNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1GroupNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1GroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':groupName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':groupName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1GroupNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1GroupNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PUT'] as const
}

export function getPutV1beta1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>) {
      return parseResponse(client.v1beta1[':name'].$put(args, options))
    },
  })
}

export function usePutV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1beta1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ProjectNameEventsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:projectName/events', args] as const
}

export function getV1beta1ProjectNameEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectNameEventsQueryKey>
  >({
    queryKey: getV1beta1ProjectNameEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':projectName'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ProjectNameEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectNameEventsQueryKey>
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
      ...getV1beta1ProjectNameEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ProjectNameEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectNameEventsQueryKey>
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
      ...getV1beta1ProjectNameEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1beta1ProjectNameEventsMutationKey() {
  return ['v1beta1', '/v1beta1/:projectName/events', 'DELETE'] as const
}

export function getDeleteV1beta1ProjectNameEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1ProjectNameEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$delete']>,
    ) {
      return parseResponse(client.v1beta1[':projectName'].events.$delete(args, options))
    },
  })
}

export function useDeleteV1beta1ProjectNameEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1ProjectNameEventsMutationOptions<
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

export function getPostV1beta1ProjectNameEventsReportMutationKey() {
  return ['v1beta1', '/v1beta1/:projectName/events:report', 'POST'] as const
}

export function getPostV1beta1ProjectNameEventsReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectNameEventsReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':projectName']['events:report'].$post(args, options))
    },
  })
}

export function usePostV1beta1ProjectNameEventsReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ProjectNameEventsReportMutationOptions<
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

export function getV1beta1ProjectNameGroupStatsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:projectName/groupStats', args] as const
}

export function getV1beta1ProjectNameGroupStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectNameGroupStatsQueryKey>
  >({
    queryKey: getV1beta1ProjectNameGroupStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':projectName'].groupStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ProjectNameGroupStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectNameGroupStatsQueryKey>
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
      ...getV1beta1ProjectNameGroupStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ProjectNameGroupStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectNameGroupStatsQueryKey>
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
      ...getV1beta1ProjectNameGroupStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
