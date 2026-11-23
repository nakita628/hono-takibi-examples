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

export function getRecordsKey() {
  return ['records'] as const
}

export function getRecordsFormatKey() {
  return ['records.{format}'] as const
}

export function getRecordsFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['records.{format}']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['records.{format}', '/records.{format}', keyArgs] as const
}

export function getRecordsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['records.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['records.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['records.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
            >
          >,
          ReturnType<typeof getRecordsFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['records.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['records.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordsRecordIdFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['records', '/records/:record_id.{format}', keyArgs] as const
}

export function getRecordsRecordIdFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordsRecordIdFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.records[':record_id.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordsRecordIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':record_id.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecordsRecordIdFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.records)[':record_id.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordIdFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordsRecordIdFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.records[':record_id.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordsRecordIdMoreLikeThisFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['records', '/records/:record_id/more_like_this.{format}', keyArgs] as const
}

export function getRecordsRecordIdMoreLikeThisFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordsRecordIdMoreLikeThisFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.records[':record_id']['more_like_this.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordsRecordIdMoreLikeThisFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
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
                    (typeof client.records)[':record_id']['more_like_this.{format}']['$get']
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
                    (typeof client.records)[':record_id']['more_like_this.{format}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRecordsRecordIdMoreLikeThisFormatQueryKey>
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
            ReturnType<(typeof client.records)[':record_id']['more_like_this.{format}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsRecordIdMoreLikeThisFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordsRecordIdMoreLikeThisFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.records[':record_id']['more_like_this.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
