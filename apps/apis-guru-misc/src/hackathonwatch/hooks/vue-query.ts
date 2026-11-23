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

export function getHackathonsKey() {
  return ['hackathons'] as const
}

export function getSwaggerDocKey() {
  return ['swagger_doc'] as const
}

export function getSwaggerDocJsonKey() {
  return ['swagger_doc.json'] as const
}

export function getHackathonsComingJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)['coming.json']['$get']>>,
) {
  return ['hackathons', '/hackathons/coming.json', toValue(args)] as const
}

export function getHackathonsComingJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)['coming.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHackathonsComingJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hackathons['coming.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHackathonsComingJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)['coming.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHackathonsComingJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHackathonsComingJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHackathonsComingJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hackathons['coming.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHackathonsIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)[':id.json']['$get']>>,
) {
  return ['hackathons', '/hackathons/:id.json', toValue(args)] as const
}

export function getHackathonsIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHackathonsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hackathons[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHackathonsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hackathons)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHackathonsIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHackathonsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHackathonsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hackathons[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSwaggerDocJsonQueryKey() {
  return ['swagger_doc.json', '/swagger_doc.json'] as const
}

export function getSwaggerDocJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSwaggerDocJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['swagger_doc.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSwaggerDocJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
            >
          >,
          ReturnType<typeof getSwaggerDocJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwaggerDocJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSwaggerDocJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['swagger_doc.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSwaggerDocNameJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>>,
) {
  return ['swagger_doc', '/swagger_doc/:name.json', toValue(args)] as const
}

export function getSwaggerDocNameJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSwaggerDocNameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.swagger_doc[':name.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSwaggerDocNameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSwaggerDocNameJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwaggerDocNameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSwaggerDocNameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.swagger_doc[':name.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
