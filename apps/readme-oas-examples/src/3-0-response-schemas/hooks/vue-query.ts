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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getMultipleResponsesKey() {
  return ['multiple-responses'] as const
}

export function getAnythingArrayOfPrimitivesQueryKey() {
  return ['anything', '/anything/array-of-primitives'] as const
}

export function getAnythingArrayOfPrimitivesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingArrayOfPrimitivesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything['array-of-primitives'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingArrayOfPrimitives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingArrayOfPrimitivesQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)['array-of-primitives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingArrayOfPrimitivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingArrayOfPrimitivesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything['array-of-primitives'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.object.$get>>,
) {
  return ['anything', '/anything/object', toValue(args)] as const
}

export function getAnythingObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.object.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.object.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingObject<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.object.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>
            >
          >,
          ReturnType<typeof getAnythingObjectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.object.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.object.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingMarkdownQueryKey() {
  return ['anything', '/anything/markdown'] as const
}

export function getAnythingMarkdownQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingMarkdownQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.markdown.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingMarkdown<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>
            >
          >,
          ReturnType<typeof getAnythingMarkdownQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.markdown.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingMarkdownQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingMarkdownQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.markdown.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingArrayOfObjectsQueryKey() {
  return ['anything', '/anything/array-of-objects'] as const
}

export function getAnythingArrayOfObjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingArrayOfObjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything['array-of-objects'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingArrayOfObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingArrayOfObjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)['array-of-objects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingArrayOfObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingArrayOfObjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything['array-of-objects'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingPolymorphismQueryKey() {
  return ['anything', '/anything/polymorphism'] as const
}

export function getAnythingPolymorphismQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingPolymorphismQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.polymorphism.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingPolymorphism<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>
            >
          >,
          ReturnType<typeof getAnythingPolymorphismQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.polymorphism.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPolymorphismQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingPolymorphismQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.polymorphism.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingRecursiveQueryKey() {
  return ['anything', '/anything/recursive'] as const
}

export function getAnythingRecursiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingRecursiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.recursive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingRecursive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>
            >
          >,
          ReturnType<typeof getAnythingRecursiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.recursive.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingRecursiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingRecursiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.recursive.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingReturnsAsJsonButIsActuallyStringQueryKey() {
  return ['anything', '/anything/returns-as-json-but-is-actually-string'] as const
}

export function getAnythingReturnsAsJsonButIsActuallyStringQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getAnythingReturnsAsJsonButIsActuallyStringQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything['returns-as-json-but-is-actually-string'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingReturnsAsJsonButIsActuallyString<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAnythingReturnsAsJsonButIsActuallyStringQueryKey>
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
            ReturnType<(typeof client.anything)['returns-as-json-but-is-actually-string']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingReturnsAsJsonButIsActuallyStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingReturnsAsJsonButIsActuallyStringQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything['returns-as-json-but-is-actually-string'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMultipleResponsesObjectQueryKey() {
  return ['multiple-responses', '/multiple-responses/object'] as const
}

export function getMultipleResponsesObjectQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMultipleResponsesObjectQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['multiple-responses'].object.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMultipleResponsesObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMultipleResponsesObjectQueryKey>
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
          Awaited<ReturnType<(typeof client)['multiple-responses']['object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMultipleResponsesObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMultipleResponsesObjectQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['multiple-responses'].object.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
