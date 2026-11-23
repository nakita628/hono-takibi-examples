import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostDataStudioDataSource202609<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataStudioDataSource202609MutationOptions<
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

export function createDataStudioDataSource202609DatasourceId<
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
  args: () => InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getDataStudioDataSource202609DatasourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDataStudioDataSource202609DatasourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDataStudioDataSource202609DatasourceIdMutationOptions<
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

export function createDeleteDataStudioDataSource202609DatasourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDataStudioDataSource202609DatasourceIdMutationOptions<
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
