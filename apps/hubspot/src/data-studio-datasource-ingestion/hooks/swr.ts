import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataStudioKey() {
  return ['data-studio'] as const
}

export function getPostDataStudioDataSource202609Key() {
  return ['data-studio', '/data-studio/data-source/2026-09', 'POST'] as const
}

export function usePostDataStudioDataSource202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataStudioDataSource202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-studio']['data-source']['2026-09']['$post']>
        },
      ) => parseResponse(client['data-studio']['data-source']['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataStudioDataSource202609DatasourceIdKey(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
) {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', args] as const
}

export function useGetDataStudioDataSource202609DatasourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataStudioDataSource202609DatasourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-studio']['data-source']['2026-09'][':datasourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataStudioDataSource202609DatasourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataStudioDataSource202609DatasourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['data-studio']['data-source']['2026-09'][':datasourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDataStudioDataSource202609DatasourceIdKey() {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', 'PUT'] as const
}

export function usePutDataStudioDataSource202609DatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataStudioDataSource202609DatasourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-studio']['data-source']['2026-09'][':datasourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataStudioDataSource202609DatasourceIdKey() {
  return ['data-studio', '/data-studio/data-source/2026-09/:datasourceId', 'DELETE'] as const
}

export function useDeleteDataStudioDataSource202609DatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataStudioDataSource202609DatasourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['data-studio']['data-source']['2026-09'][':datasourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-studio']['data-source']['2026-09'][':datasourceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
