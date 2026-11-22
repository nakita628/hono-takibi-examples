import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNumbersKey() {
  return ['numbers'] as const
}

export function getGetNumbersBaseKey(args: InferRequestType<typeof client.numbers.base.$get>) {
  return ['numbers', '/numbers/base', args] as const
}

export function useGetNumbersBase<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersBaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersBase<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersBaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersBaseBinaryKey(
  args: InferRequestType<typeof client.numbers.base.binary.$get>,
) {
  return ['numbers', '/numbers/base/binary', args] as const
}

export function useGetNumbersBaseBinary<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.binary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersBaseBinaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.binary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersBaseBinary<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.binary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersBaseBinaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.binary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.binary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersBaseHexKey(
  args: InferRequestType<typeof client.numbers.base.hex.$get>,
) {
  return ['numbers', '/numbers/base/hex', args] as const
}

export function useGetNumbersBaseHex<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.hex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersBaseHexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.hex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersBaseHex<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.hex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersBaseHexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.hex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.hex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersBaseOctalKey(
  args: InferRequestType<typeof client.numbers.base.octal.$get>,
) {
  return ['numbers', '/numbers/base/octal', args] as const
}

export function useGetNumbersBaseOctal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.octal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersBaseOctalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.octal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersBaseOctal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.base.octal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersBaseOctalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.base.octal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.base.octal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersCardinalKey(
  args: InferRequestType<typeof client.numbers.cardinal.$get>,
) {
  return ['numbers', '/numbers/cardinal', args] as const
}

export function useGetNumbersCardinal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.cardinal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersCardinalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.cardinal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersCardinal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.cardinal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersCardinalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.cardinal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.cardinal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersCurrencyKey(
  args: InferRequestType<typeof client.numbers.currency.$get>,
) {
  return ['numbers', '/numbers/currency', args] as const
}

export function useGetNumbersCurrency<TError = unknown>(
  args: InferRequestType<typeof client.numbers.currency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.currency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersCurrency<TError = unknown>(
  args: InferRequestType<typeof client.numbers.currency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.currency.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.currency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersFactKey(args: InferRequestType<typeof client.numbers.fact.$get>) {
  return ['numbers', '/numbers/fact', args] as const
}

export function useGetNumbersFact<TError = unknown>(
  args: InferRequestType<typeof client.numbers.fact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersFactKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.fact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersFact<TError = unknown>(
  args: InferRequestType<typeof client.numbers.fact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersFactKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.fact.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.fact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersIsCubeKey(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
) {
  return ['numbers', '/numbers/is-cube', args] as const
}

export function useGetNumbersIsCube<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersIsCubeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-cube'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersIsCube<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersIsCubeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-cube']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-cube'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersIsPalindromeKey(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
) {
  return ['numbers', '/numbers/is-palindrome', args] as const
}

export function useGetNumbersIsPalindrome<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsPalindromeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-palindrome'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersIsPalindrome<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsPalindromeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers)['is-palindrome']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-palindrome'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersIsSquareKey(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
) {
  return ['numbers', '/numbers/is-square', args] as const
}

export function useGetNumbersIsSquare<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsSquareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-square'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersIsSquare<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsSquareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-square']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-square'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersIsTriangleKey(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
) {
  return ['numbers', '/numbers/is-triangle', args] as const
}

export function useGetNumbersIsTriangle<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsTriangleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-triangle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersIsTriangle<TError = unknown>(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersIsTriangleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.numbers)['is-triangle']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers['is-triangle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersNodKey() {
  return ['numbers', '/numbers/nod'] as const
}

export function useGetNumbersNod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersNodKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.nod.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersNod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersNodKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.nod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.nod.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersNumeralChineseKey(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
) {
  return ['numbers', '/numbers/numeral/chinese', args] as const
}

export function useGetNumbersNumeralChinese<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralChineseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.chinese.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersNumeralChinese<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralChineseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.chinese.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.chinese.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersNumeralEgyptianKey(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
) {
  return ['numbers', '/numbers/numeral/egyptian', args] as const
}

export function useGetNumbersNumeralEgyptian<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralEgyptianKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.egyptian.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersNumeralEgyptian<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralEgyptianKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.egyptian.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.egyptian.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersNumeralRomanKey(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
) {
  return ['numbers', '/numbers/numeral/roman', args] as const
}

export function useGetNumbersNumeralRoman<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralRomanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.roman.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersNumeralRoman<TError = unknown>(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersNumeralRomanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.numeral.roman.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.numeral.roman.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersOrdinalKey(
  args: InferRequestType<typeof client.numbers.ordinal.$get>,
) {
  return ['numbers', '/numbers/ordinal', args] as const
}

export function useGetNumbersOrdinal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.ordinal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersOrdinalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.ordinal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersOrdinal<TError = unknown>(
  args: InferRequestType<typeof client.numbers.ordinal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersOrdinalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.ordinal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.ordinal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPiKey(args: InferRequestType<typeof client.numbers.pi.$get>) {
  return ['numbers', '/numbers/pi', args] as const
}

export function useGetNumbersPi<TError = unknown>(
  args: InferRequestType<typeof client.numbers.pi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersPiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.pi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPi<TError = unknown>(
  args: InferRequestType<typeof client.numbers.pi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersPiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.pi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.pi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeFactorsKey(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
) {
  return ['numbers', '/numbers/prime/factors', args] as const
}

export function useGetNumbersPrimeFactors<TError = unknown>(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime.factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeFactors<TError = unknown>(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.numbers.prime.factors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime.factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsFermatPrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-fermat-prime', args] as const
}

export function useGetNumbersPrimeIsFermatPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsFermatPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-fermat-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsFermatPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsFermatPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-fermat-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsFibonacciPrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-fibonacci-prime', args] as const
}

export function useGetNumbersPrimeIsFibonacciPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsFibonacciPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-fibonacci-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsFibonacciPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsFibonacciPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-fibonacci-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsMersennePrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-mersenne-prime', args] as const
}

export function useGetNumbersPrimeIsMersennePrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsMersennePrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-mersenne-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsMersennePrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsMersennePrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-mersenne-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsPartitionPrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-partition-prime', args] as const
}

export function useGetNumbersPrimeIsPartitionPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPartitionPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-partition-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsPartitionPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPartitionPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-partition-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.numbers.prime['is-partition-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsPellPrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-pell-prime', args] as const
}

export function useGetNumbersPrimeIsPellPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPellPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-pell-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsPellPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPellPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-pell-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-pell-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsPerfectKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-perfect', args] as const
}

export function useGetNumbersPrimeIsPerfect<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPerfectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-perfect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsPerfect<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPerfectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-perfect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-perfect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersPrimeIsPrimeKey(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
) {
  return ['numbers', '/numbers/prime/is-prime', args] as const
}

export function useGetNumbersPrimeIsPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersPrimeIsPrime<TError = unknown>(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNumbersPrimeIsPrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.numbers.prime)['is-prime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.prime['is-prime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNumbersRandomKey(args: InferRequestType<typeof client.numbers.random.$get>) {
  return ['numbers', '/numbers/random', args] as const
}

export function useGetNumbersRandom<TError = unknown>(
  args: InferRequestType<typeof client.numbers.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersRandom<TError = unknown>(
  args: InferRequestType<typeof client.numbers.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
