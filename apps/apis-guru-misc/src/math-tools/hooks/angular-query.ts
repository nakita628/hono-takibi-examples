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

export function getNumbersKey() {
  return ['numbers'] as const
}

export function getNumbersBaseQueryKey(args: InferRequestType<typeof client.numbers.base.$get>) {
  return ['numbers', '/numbers/base', args] as const
}

export function getNumbersBaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.base.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseQueryKey>
  >({
    queryKey: getNumbersBaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.base.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersBase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.base.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersBaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersBaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersBaseBinaryQueryKey(
  args: InferRequestType<typeof client.numbers.base.binary.$get>,
) {
  return ['numbers', '/numbers/base/binary', args] as const
}

export function getNumbersBaseBinaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.base.binary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseBinaryQueryKey>
  >({
    queryKey: getNumbersBaseBinaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.base.binary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersBaseBinary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.base.binary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersBaseBinaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersBaseBinaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersBaseHexQueryKey(
  args: InferRequestType<typeof client.numbers.base.hex.$get>,
) {
  return ['numbers', '/numbers/base/hex', args] as const
}

export function getNumbersBaseHexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.base.hex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseHexQueryKey>
  >({
    queryKey: getNumbersBaseHexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.base.hex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersBaseHex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.base.hex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersBaseHexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersBaseHexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersBaseOctalQueryKey(
  args: InferRequestType<typeof client.numbers.base.octal.$get>,
) {
  return ['numbers', '/numbers/base/octal', args] as const
}

export function getNumbersBaseOctalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.base.octal.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersBaseOctalQueryKey>
  >({
    queryKey: getNumbersBaseOctalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.base.octal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersBaseOctal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.base.octal.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersBaseOctalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersBaseOctalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersCardinalQueryKey(
  args: InferRequestType<typeof client.numbers.cardinal.$get>,
) {
  return ['numbers', '/numbers/cardinal', args] as const
}

export function getNumbersCardinalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.cardinal.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersCardinalQueryKey>
  >({
    queryKey: getNumbersCardinalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.cardinal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersCardinal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.cardinal.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersCardinalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersCardinalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersCurrencyQueryKey(
  args: InferRequestType<typeof client.numbers.currency.$get>,
) {
  return ['numbers', '/numbers/currency', args] as const
}

export function getNumbersCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.currency.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersCurrencyQueryKey>
  >({
    queryKey: getNumbersCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.currency.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersCurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.currency.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersCurrencyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersFactQueryKey(args: InferRequestType<typeof client.numbers.fact.$get>) {
  return ['numbers', '/numbers/fact', args] as const
}

export function getNumbersFactQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.fact.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersFactQueryKey>
  >({
    queryKey: getNumbersFactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.fact.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersFact<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.fact.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersFactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersFactQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersIsCubeQueryKey(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
) {
  return ['numbers', '/numbers/is-cube', args] as const
}

export function getNumbersIsCubeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsCubeQueryKey>
  >({
    queryKey: getNumbersIsCubeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers['is-cube'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersIsCube<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersIsCubeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersIsCubeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersIsPalindromeQueryKey(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
) {
  return ['numbers', '/numbers/is-palindrome', args] as const
}

export function getNumbersIsPalindromeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsPalindromeQueryKey>
  >({
    queryKey: getNumbersIsPalindromeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers['is-palindrome'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersIsPalindrome<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersIsPalindromeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersIsPalindromeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersIsSquareQueryKey(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
) {
  return ['numbers', '/numbers/is-square', args] as const
}

export function getNumbersIsSquareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsSquareQueryKey>
  >({
    queryKey: getNumbersIsSquareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers['is-square'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersIsSquare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers)['is-square']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersIsSquareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersIsSquareQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersIsTriangleQueryKey(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
) {
  return ['numbers', '/numbers/is-triangle', args] as const
}

export function getNumbersIsTriangleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersIsTriangleQueryKey>
  >({
    queryKey: getNumbersIsTriangleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers['is-triangle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersIsTriangle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersIsTriangleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersIsTriangleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersNodQueryKey() {
  return ['numbers', '/numbers/nod'] as const
}

export function getNumbersNodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersNodQueryKey>
  >({
    queryKey: getNumbersNodQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.nod.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersNod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersNodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersNodQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersNumeralChineseQueryKey(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
) {
  return ['numbers', '/numbers/numeral/chinese', args] as const
}

export function getNumbersNumeralChineseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralChineseQueryKey>
  >({
    queryKey: getNumbersNumeralChineseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.numeral.chinese.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersNumeralChinese<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.numeral.chinese.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersNumeralChineseQueryKey>
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
      ...getNumbersNumeralChineseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersNumeralEgyptianQueryKey(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
) {
  return ['numbers', '/numbers/numeral/egyptian', args] as const
}

export function getNumbersNumeralEgyptianQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralEgyptianQueryKey>
  >({
    queryKey: getNumbersNumeralEgyptianQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.numeral.egyptian.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersNumeralEgyptian<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersNumeralEgyptianQueryKey>
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
      ...getNumbersNumeralEgyptianQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersNumeralRomanQueryKey(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
) {
  return ['numbers', '/numbers/numeral/roman', args] as const
}

export function getNumbersNumeralRomanQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersNumeralRomanQueryKey>
  >({
    queryKey: getNumbersNumeralRomanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.numeral.roman.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersNumeralRoman<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.numeral.roman.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersNumeralRomanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersNumeralRomanQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersOrdinalQueryKey(
  args: InferRequestType<typeof client.numbers.ordinal.$get>,
) {
  return ['numbers', '/numbers/ordinal', args] as const
}

export function getNumbersOrdinalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.ordinal.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersOrdinalQueryKey>
  >({
    queryKey: getNumbersOrdinalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.ordinal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersOrdinal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.ordinal.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersOrdinalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersOrdinalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersPiQueryKey(args: InferRequestType<typeof client.numbers.pi.$get>) {
  return ['numbers', '/numbers/pi', args] as const
}

export function getNumbersPiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.pi.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersPiQueryKey>
  >({
    queryKey: getNumbersPiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.pi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersPi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.pi.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersPiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersPiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersPrimeFactorsQueryKey(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
) {
  return ['numbers', '/numbers/prime/factors', args] as const
}

export function getNumbersPrimeFactorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeFactorsQueryKey>
  >({
    queryKey: getNumbersPrimeFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime.factors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersPrimeFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.prime.factors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersPrimeFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersPrimeFactorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersPrimeIsFermatPrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-fermat-prime', args] as const
}

export function getNumbersPrimeIsFermatPrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsFermatPrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-fermat-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsFermatPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsFermatPrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsFibonacciPrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-fibonacci-prime', args] as const
}

export function getNumbersPrimeIsFibonacciPrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsFibonacciPrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-fibonacci-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsFibonacciPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsFibonacciPrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsMersennePrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-mersenne-prime', args] as const
}

export function getNumbersPrimeIsMersennePrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsMersennePrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-mersenne-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsMersennePrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsMersennePrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsPartitionPrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-partition-prime', args] as const
}

export function getNumbersPrimeIsPartitionPrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsPartitionPrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-partition-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsPartitionPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsPartitionPrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsPellPrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-pell-prime', args] as const
}

export function getNumbersPrimeIsPellPrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsPellPrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-pell-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsPellPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsPellPrimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsPerfectQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-perfect', args] as const
}

export function getNumbersPrimeIsPerfectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNumbersPrimeIsPerfectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-perfect'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsPerfect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNumbersPrimeIsPerfectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNumbersPrimeIsPrimeQueryKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-prime', args] as const
}

export function getNumbersPrimeIsPrimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersPrimeIsPrimeQueryKey>
  >({
    queryKey: getNumbersPrimeIsPrimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.prime['is-prime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNumbersPrimeIsPrime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersPrimeIsPrimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersPrimeIsPrimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNumbersRandomQueryKey(
  args: InferRequestType<typeof client.numbers.random.$get>,
) {
  return ['numbers', '/numbers/random', args] as const
}

export function getNumbersRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.numbers.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersRandomQueryKey>
  >({
    queryKey: getNumbersRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNumbersRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.numbers.random.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersRandomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
