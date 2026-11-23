import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
) {
  return ['name', '/name/:concept-type/:specific-concept.json', args] as const
}

export function getNameConceptTypeSpecificConceptJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNameConceptTypeSpecificConceptJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.name[':concept-type'][':specific-concept.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNameConceptTypeSpecificConceptJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.name)[':concept-type'][':specific-concept.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNameConceptTypeSpecificConceptJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchJsonQueryKey(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
) {
  return ['search.json', '/search.json', args] as const
}

export function getSearchJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['search.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchJsonQueryKey>
  >({
    queryKey: getSearchJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['search.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
