import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getMultipleResponsesKey() {
  return ['multiple-responses'] as const
}

export function getAnythingArrayOfPrimitivesQueryKey() {
  return ['anything', '/anything/array-of-primitives'] as const
}

export function getAnythingArrayOfPrimitivesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingArrayOfPrimitivesQueryKey>
  >({
    queryKey: getAnythingArrayOfPrimitivesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['array-of-primitives'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingArrayOfPrimitives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingArrayOfPrimitivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingArrayOfPrimitivesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnythingObjectQueryKey(
  args: InferRequestType<typeof client.anything.object.$get>,
) {
  return ['anything', '/anything/object', args] as const
}

export function getAnythingObjectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.object.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingObjectQueryKey>
  >({
    queryKey: getAnythingObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.object.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingObject<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.object.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingMarkdownQueryKey() {
  return ['anything', '/anything/markdown'] as const
}

export function getAnythingMarkdownQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingMarkdownQueryKey>
  >({
    queryKey: getAnythingMarkdownQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.markdown.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingMarkdown<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingMarkdownQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingMarkdownQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnythingArrayOfObjectsQueryKey() {
  return ['anything', '/anything/array-of-objects'] as const
}

export function getAnythingArrayOfObjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingArrayOfObjectsQueryKey>
  >({
    queryKey: getAnythingArrayOfObjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['array-of-objects'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingArrayOfObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingArrayOfObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingArrayOfObjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnythingPolymorphismQueryKey() {
  return ['anything', '/anything/polymorphism'] as const
}

export function getAnythingPolymorphismQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPolymorphismQueryKey>
  >({
    queryKey: getAnythingPolymorphismQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.polymorphism.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingPolymorphism<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPolymorphismQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingPolymorphismQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnythingRecursiveQueryKey() {
  return ['anything', '/anything/recursive'] as const
}

export function getAnythingRecursiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingRecursiveQueryKey>
  >({
    queryKey: getAnythingRecursiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.recursive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingRecursive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingRecursiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingRecursiveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnythingReturnsAsJsonButIsActuallyStringQueryKey() {
  return ['anything', '/anything/returns-as-json-but-is-actually-string'] as const
}

export function getAnythingReturnsAsJsonButIsActuallyStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything)['returns-as-json-but-is-actually-string']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.anything)['returns-as-json-but-is-actually-string']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingReturnsAsJsonButIsActuallyStringQueryKey>
  >({
    queryKey: getAnythingReturnsAsJsonButIsActuallyStringQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['returns-as-json-but-is-actually-string'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingReturnsAsJsonButIsActuallyString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything)['returns-as-json-but-is-actually-string']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything)['returns-as-json-but-is-actually-string']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingReturnsAsJsonButIsActuallyStringQueryKey>
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
      ...getAnythingReturnsAsJsonButIsActuallyStringQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMultipleResponsesObjectQueryKey() {
  return ['multiple-responses', '/multiple-responses/object'] as const
}

export function getMultipleResponsesObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMultipleResponsesObjectQueryKey>
  >({
    queryKey: getMultipleResponsesObjectQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['multiple-responses'].object.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMultipleResponsesObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMultipleResponsesObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMultipleResponsesObjectQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
