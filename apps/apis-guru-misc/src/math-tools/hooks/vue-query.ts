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

export function getNumbersKey() {
  return ['numbers'] as const
}

export function getNumbersBaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.$get>>,
) {
  return ['numbers', '/numbers/base', toValue(args)] as const
}

export function getNumbersBaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersBaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.base.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNumbersBase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
          >,
          ReturnType<typeof getNumbersBaseQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersBaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.base.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersBaseBinaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.binary.$get>>,
) {
  return ['numbers', '/numbers/base/binary', toValue(args)] as const
}

export function getNumbersBaseBinaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.binary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersBaseBinaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.base.binary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersBaseBinary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.binary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
            >
          >,
          ReturnType<typeof getNumbersBaseBinaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseBinaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersBaseBinaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.base.binary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersBaseHexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.hex.$get>>,
) {
  return ['numbers', '/numbers/base/hex', toValue(args)] as const
}

export function getNumbersBaseHexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.hex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersBaseHexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.base.hex.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersBaseHex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.hex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>
            >
          >,
          ReturnType<typeof getNumbersBaseHexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseHexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersBaseHexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.base.hex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersBaseOctalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.octal.$get>>,
) {
  return ['numbers', '/numbers/base/octal', toValue(args)] as const
}

export function getNumbersBaseOctalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.octal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersBaseOctalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.base.octal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersBaseOctal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.base.octal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>
            >
          >,
          ReturnType<typeof getNumbersBaseOctalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseOctalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersBaseOctalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.base.octal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersCardinalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.cardinal.$get>>,
) {
  return ['numbers', '/numbers/cardinal', toValue(args)] as const
}

export function getNumbersCardinalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.cardinal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersCardinalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.cardinal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersCardinal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.cardinal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>
            >
          >,
          ReturnType<typeof getNumbersCardinalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersCardinalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersCardinalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.cardinal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersCurrencyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.currency.$get>>,
) {
  return ['numbers', '/numbers/currency', toValue(args)] as const
}

export function getNumbersCurrencyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.currency.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersCurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.currency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersCurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.currency.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>
            >
          >,
          ReturnType<typeof getNumbersCurrencyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersCurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.currency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersFactQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.fact.$get>>,
) {
  return ['numbers', '/numbers/fact', toValue(args)] as const
}

export function getNumbersFactQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.fact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersFactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.fact.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNumbersFact<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.fact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
          >,
          ReturnType<typeof getNumbersFactQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersFactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersFactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.fact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersIsCubeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-cube']['$get']>>,
) {
  return ['numbers', '/numbers/is-cube', toValue(args)] as const
}

export function getNumbersIsCubeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-cube']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersIsCubeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers['is-cube'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersIsCube<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-cube']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
            >
          >,
          ReturnType<typeof getNumbersIsCubeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsCubeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersIsCubeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers['is-cube'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersIsPalindromeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>>,
) {
  return ['numbers', '/numbers/is-palindrome', toValue(args)] as const
}

export function getNumbersIsPalindromeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersIsPalindromeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers['is-palindrome'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersIsPalindrome<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersIsPalindromeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsPalindromeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersIsPalindromeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers['is-palindrome'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersIsSquareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-square']['$get']>>,
) {
  return ['numbers', '/numbers/is-square', toValue(args)] as const
}

export function getNumbersIsSquareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-square']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersIsSquareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers['is-square'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersIsSquare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-square']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersIsSquareQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsSquareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersIsSquareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers['is-square'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersIsTriangleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-triangle']['$get']>>,
) {
  return ['numbers', '/numbers/is-triangle', toValue(args)] as const
}

export function getNumbersIsTriangleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-triangle']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersIsTriangleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers['is-triangle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersIsTriangle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers)['is-triangle']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersIsTriangleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsTriangleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersIsTriangleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers['is-triangle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersNodQueryKey() {
  return ['numbers', '/numbers/nod'] as const
}

export function getNumbersNodQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNumbersNodQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.nod.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNumbersNod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
          >,
          ReturnType<typeof getNumbersNodQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersNodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNumbersNodQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.nod.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersNumeralChineseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.chinese.$get>>,
) {
  return ['numbers', '/numbers/numeral/chinese', toValue(args)] as const
}

export function getNumbersNumeralChineseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.chinese.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersNumeralChineseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.numeral.chinese.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersNumeralChinese<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.chinese.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
            >
          >,
          ReturnType<typeof getNumbersNumeralChineseQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralChineseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersNumeralChineseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.numeral.chinese.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersNumeralEgyptianQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.egyptian.$get>>,
) {
  return ['numbers', '/numbers/numeral/egyptian', toValue(args)] as const
}

export function getNumbersNumeralEgyptianQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.egyptian.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersNumeralEgyptianQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.numeral.egyptian.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersNumeralEgyptian<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.egyptian.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
            >
          >,
          ReturnType<typeof getNumbersNumeralEgyptianQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralEgyptianQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersNumeralEgyptianQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.numeral.egyptian.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersNumeralRomanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.roman.$get>>,
) {
  return ['numbers', '/numbers/numeral/roman', toValue(args)] as const
}

export function getNumbersNumeralRomanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.roman.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersNumeralRomanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.numeral.roman.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersNumeralRoman<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.numeral.roman.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
            >
          >,
          ReturnType<typeof getNumbersNumeralRomanQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralRomanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersNumeralRomanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.numeral.roman.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersOrdinalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.ordinal.$get>>,
) {
  return ['numbers', '/numbers/ordinal', toValue(args)] as const
}

export function getNumbersOrdinalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.ordinal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersOrdinalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.ordinal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersOrdinal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.ordinal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>
            >
          >,
          ReturnType<typeof getNumbersOrdinalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersOrdinalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersOrdinalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.ordinal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.pi.$get>>,
) {
  return ['numbers', '/numbers/pi', toValue(args)] as const
}

export function getNumbersPiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.pi.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.pi.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNumbersPi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.pi.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
          >,
          ReturnType<typeof getNumbersPiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersPiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.pi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeFactorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.prime.factors.$get>>,
) {
  return ['numbers', '/numbers/prime/factors', toValue(args)] as const
}

export function getNumbersPrimeFactorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.prime.factors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime.factors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.prime.factors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
            >
          >,
          ReturnType<typeof getNumbersPrimeFactorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime.factors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsFermatPrimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>
  >,
) {
  return ['numbers', '/numbers/prime/is-fermat-prime', toValue(args)] as const
}

export function getNumbersPrimeIsFermatPrimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsFermatPrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-fermat-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsFermatPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsFermatPrimeQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsFermatPrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsFermatPrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-fermat-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsFibonacciPrimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>
  >,
) {
  return ['numbers', '/numbers/prime/is-fibonacci-prime', toValue(args)] as const
}

export function getNumbersPrimeIsFibonacciPrimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsFibonacciPrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-fibonacci-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsFibonacciPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsFibonacciPrimeQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsFibonacciPrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsFibonacciPrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-fibonacci-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsMersennePrimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>
  >,
) {
  return ['numbers', '/numbers/prime/is-mersenne-prime', toValue(args)] as const
}

export function getNumbersPrimeIsMersennePrimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsMersennePrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-mersenne-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsMersennePrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsMersennePrimeQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsMersennePrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsMersennePrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-mersenne-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsPartitionPrimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>
  >,
) {
  return ['numbers', '/numbers/prime/is-partition-prime', toValue(args)] as const
}

export function getNumbersPrimeIsPartitionPrimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsPartitionPrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-partition-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsPartitionPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsPartitionPrimeQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsPartitionPrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsPartitionPrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-partition-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsPellPrimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>,
) {
  return ['numbers', '/numbers/prime/is-pell-prime', toValue(args)] as const
}

export function getNumbersPrimeIsPellPrimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsPellPrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-pell-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsPellPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsPellPrimeQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsPellPrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsPellPrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-pell-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsPerfectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>>,
) {
  return ['numbers', '/numbers/prime/is-perfect', toValue(args)] as const
}

export function getNumbersPrimeIsPerfectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsPerfectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-perfect'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsPerfect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsPerfectQueryKey>
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
          Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsPerfectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsPerfectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-perfect'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersPrimeIsPrimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>>,
) {
  return ['numbers', '/numbers/prime/is-prime', toValue(args)] as const
}

export function getNumbersPrimeIsPrimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersPrimeIsPrimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.prime['is-prime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersPrimeIsPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNumbersPrimeIsPrimeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsPrimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersPrimeIsPrimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.prime['is-prime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.random.$get>>,
) {
  return ['numbers', '/numbers/random', toValue(args)] as const
}

export function getNumbersRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNumbersRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.random.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.numbers.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
          >,
          ReturnType<typeof getNumbersRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNumbersRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
