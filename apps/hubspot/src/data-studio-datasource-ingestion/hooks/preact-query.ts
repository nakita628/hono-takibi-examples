import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataStudioKey() {
  return ['data-studio'] as const
}

export function getPostDataStudioDataSource202609MutationKey() {
  return ['data-studio', '/data-studio/data-source/2026-09', 'POST'] as const
}

export function getPostDataStudioDataSource202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataStudioDataSource202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>,
    ) {
      return parseResponse(client['data-studio']['data-source']['2026-09'].$post(args, options))
    },
  })
}

export function usePostDataStudioDataSource202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataStudioDataSource202609MutationOptions<
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

export function getDataStudioDataSource202609DatasourceIdQueryKey(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
) {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', args] as const
}

export function getDataStudioDataSource202609DatasourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataStudioDataSource202609DatasourceIdQueryKey>
  >({
    queryKey: getDataStudioDataSource202609DatasourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-studio']['data-source']['2026-09'][':datasourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataStudioDataSource202609DatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataStudioDataSource202609DatasourceIdQueryKey>
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
      ...getDataStudioDataSource202609DatasourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataStudioDataSource202609DatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataStudioDataSource202609DatasourceIdQueryKey>
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
      ...getDataStudioDataSource202609DatasourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDataStudioDataSource202609DatasourceIdMutationKey() {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', 'PUT'] as const
}

export function getPutDataStudioDataSource202609DatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDataStudioDataSource202609DatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
      >,
    ) {
      return parseResponse(
        client['data-studio']['data-source']['2026-09'][':datasourceId'].$put(args, options),
      )
    },
  })
}

export function usePutDataStudioDataSource202609DatasourceId<
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
                  (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
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
  const mutationDefaults = getPutDataStudioDataSource202609DatasourceIdMutationOptions<
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

export function getDeleteDataStudioDataSource202609DatasourceIdMutationKey() {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', 'DELETE'] as const
}

export function getDeleteDataStudioDataSource202609DatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataStudioDataSource202609DatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['data-studio']['data-source']['2026-09'][':datasourceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDataStudioDataSource202609DatasourceId<
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
                  (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
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
  const mutationDefaults = getDeleteDataStudioDataSource202609DatasourceIdMutationOptions<
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
