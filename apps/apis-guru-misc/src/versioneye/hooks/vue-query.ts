import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1ScansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scans.$get>>,
) {
  return ['api', '/api/v1/scans', toValue(args)] as const
}

export function getApiV1ScansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ScansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Scans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scans.$get>>>>
          >,
          ReturnType<typeof getApiV1ScansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ScansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ScansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ScansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.scans)[':id']['$get']>>,
) {
  return ['api', '/api/v1/scans/:id', toValue(args)] as const
}

export function getApiV1ScansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.scans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ScansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ScansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.scans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1ScansIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ScansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ScansIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>
  >,
) {
  return ['api', '/api/v1/scans/:id/files/:file_id', toValue(args)] as const
}

export function getApiV1ScansIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ScansIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scans[':id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ScansIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>
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
                  ReturnType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ScansIdFilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScansIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ScansIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scans[':id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
