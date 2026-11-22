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

export function getNameKey() {
  return ['name'] as const
}

export function getSearchJsonKey() {
  return ['search.json'] as const
}

export function getNameConceptTypeSpecificConceptJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
  >,
) {
  return ['name', '/name/:concept-type/:specific-concept.json', toValue(args)] as const
}

export function getNameConceptTypeSpecificConceptJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNameConceptTypeSpecificConceptJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.name[':concept-type'][':specific-concept.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNameConceptTypeSpecificConceptJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
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
                    (typeof client.name)[':concept-type'][':specific-concept.json']['$get']
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
                    (typeof client.name)[':concept-type'][':specific-concept.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNameConceptTypeSpecificConceptJsonQueryKey>
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
            ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNameConceptTypeSpecificConceptJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNameConceptTypeSpecificConceptJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.name[':concept-type'][':specific-concept.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
) {
  return ['search.json', '/search.json', toValue(args)] as const
}

export function getSearchJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['search.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['search.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
