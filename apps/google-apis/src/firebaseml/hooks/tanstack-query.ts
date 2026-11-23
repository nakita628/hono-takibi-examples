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

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getV1beta2NameQueryKey(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:name', args] as const
}

export function getV1beta2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameQueryKey>
  >({
    queryKey: getV1beta2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'DELETE'] as const
}

export function getDeleteV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>) {
      return parseResponse(client.v1beta2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'PATCH'] as const
}

export function getPatchV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>) {
      return parseResponse(client.v1beta2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta2NameDownloadQueryKey(
  args: InferRequestType<(typeof client.v1beta2)[':name:download']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:name:download', args] as const
}

export function getV1beta2NameDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name:download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameDownloadQueryKey>
  >({
    queryKey: getV1beta2NameDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta2[':name:download'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta2NameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name:download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2NameDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta2NameDownloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta2NameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':name:download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta2)[':name:download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2NameDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta2NameDownloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1beta2ParentModelsQueryKey(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:parent/models', args] as const
}

export function getV1beta2ParentModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ParentModelsQueryKey>
  >({
    queryKey: getV1beta2ParentModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta2[':parent'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta2ParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2ParentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta2ParentModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta2ParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta2ParentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta2ParentModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1beta2ParentModelsMutationKey() {
  return ['v1beta2', '/v1beta2/:parent/models', 'POST'] as const
}

export function getPostV1beta2ParentModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':parent']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2ParentModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':parent']['models']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':parent'].models.$post(args, options))
    },
  })
}

export function usePostV1beta2ParentModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta2)[':parent']['models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta2)[':parent']['models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta2ParentModelsMutationOptions<TError, TOnMutateResult>(
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
