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

export function getContentKey() {
  return ['content'] as const
}

export function getContentJsonKey() {
  return ['content.json'] as const
}

export function getContentJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['content.json']['$get']>>,
) {
  return ['content.json', '/content.json', toValue(args)] as const
}

export function getContentJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['content.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['content.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['content.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>
            >
          >,
          ReturnType<typeof getContentJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['content.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentSourceSectionJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>
  >,
) {
  return ['content', '/content/:source/:section.json', toValue(args)] as const
}

export function getContentSourceSectionJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSourceSectionJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':source'][':section.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSourceSectionJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContentSourceSectionJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSourceSectionJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSourceSectionJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':source'][':section.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentSourceSectionTimePeriodJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
  >,
) {
  return ['content', '/content/:source/:section/:time-period.json', toValue(args)] as const
}

export function getContentSourceSectionTimePeriodJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSourceSectionTimePeriodJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':source'][':section'][':time-period.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSourceSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
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
                    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
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
                    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentSourceSectionTimePeriodJsonQueryKey>
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
            ReturnType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSourceSectionTimePeriodJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSourceSectionTimePeriodJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':source'][':section'][':time-period.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
