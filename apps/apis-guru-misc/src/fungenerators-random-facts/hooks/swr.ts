import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFactKey() {
  return ['fact'] as const
}

export function getGetFactKey(args: InferRequestType<typeof client.fact.$get>) {
  return ['fact', '/fact', args] as const
}

export function useGetFact<TError = unknown>(
  args: InferRequestType<typeof client.fact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fact.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFact<TError = unknown>(
  args: InferRequestType<typeof client.fact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fact.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutFactKey() {
  return ['fact', '/fact', 'PUT'] as const
}

export function usePutFact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fact.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fact.$put> }) =>
        parseResponse(client.fact.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFactKey() {
  return ['fact', '/fact', 'DELETE'] as const
}

export function useDeleteFact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fact.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fact.$delete> }) =>
        parseResponse(client.fact.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFactCategoriesKey(
  args: InferRequestType<typeof client.fact.categories.$get>,
) {
  return ['fact', '/fact/categories', args] as const
}

export function useGetFactCategories<TError = unknown>(
  args: InferRequestType<typeof client.fact.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactCategories<TError = unknown>(
  args: InferRequestType<typeof client.fact.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactFodKey(args: InferRequestType<typeof client.fact.fod.$get>) {
  return ['fact', '/fact/fod', args] as const
}

export function useGetFactFod<TError = unknown>(
  args: InferRequestType<typeof client.fact.fod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactFodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fact.fod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFactFod<TError = unknown>(
  args: InferRequestType<typeof client.fact.fod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactFodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fact.fod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFactFodCategoriesKey() {
  return ['fact', '/fact/fod/categories'] as const
}

export function useGetFactFodCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactFodCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.fod.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactFodCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactFodCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.fod.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactNumbersKey(args: InferRequestType<typeof client.fact.numbers.$get>) {
  return ['fact', '/fact/numbers', args] as const
}

export function useGetFactNumbers<TError = unknown>(
  args: InferRequestType<typeof client.fact.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactNumbers<TError = unknown>(
  args: InferRequestType<typeof client.fact.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactOnthisdayBornKey(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
) {
  return ['fact', '/fact/onthisday/born', args] as const
}

export function useGetFactOnthisdayBorn<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
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
        ? getGetFactOnthisdayBornKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.born.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactOnthisdayBorn<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
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
        ? getGetFactOnthisdayBornKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.born.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactOnthisdayDiedKey(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
) {
  return ['fact', '/fact/onthisday/died', args] as const
}

export function useGetFactOnthisdayDied<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
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
        ? getGetFactOnthisdayDiedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.died.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactOnthisdayDied<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
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
        ? getGetFactOnthisdayDiedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.died.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactOnthisdayEventKey(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
) {
  return ['fact', '/fact/onthisday/event', args] as const
}

export function useGetFactOnthisdayEvent<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
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
        ? getGetFactOnthisdayEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactOnthisdayEvent<TError = unknown>(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
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
        ? getGetFactOnthisdayEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.onthisday.event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactRandomKey(args: InferRequestType<typeof client.fact.random.$get>) {
  return ['fact', '/fact/random', args] as const
}

export function useGetFactRandom<TError = unknown>(
  args: InferRequestType<typeof client.fact.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactRandom<TError = unknown>(
  args: InferRequestType<typeof client.fact.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFactSearchKey(args: InferRequestType<typeof client.fact.search.$get>) {
  return ['fact', '/fact/search', args] as const
}

export function useGetFactSearch<TError = unknown>(
  args: InferRequestType<typeof client.fact.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactSearch<TError = unknown>(
  args: InferRequestType<typeof client.fact.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFactSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fact.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
