import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHypernymsKey() {
  return ['hypernyms'] as const
}

export function getHyponymsKey() {
  return ['hyponyms'] as const
}

export function getInflectionsKey() {
  return ['inflections'] as const
}

export function getLmKey() {
  return ['lm'] as const
}

export function getSensesKey() {
  return ['senses'] as const
}

export function getValuesKey() {
  return ['values'] as const
}

export function getGetHypernymsKey(args: InferRequestType<typeof client.hypernyms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hypernyms', '/hypernyms', keyArgs] as const
}

export function useGetHypernyms<TError = unknown>(
  args: InferRequestType<typeof client.hypernyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHypernymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hypernyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHypernyms<TError = unknown>(
  args: InferRequestType<typeof client.hypernyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHypernymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypernyms.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hypernyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHyponymsKey(args: InferRequestType<typeof client.hyponyms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hyponyms', '/hyponyms', keyArgs] as const
}

export function useGetHyponyms<TError = unknown>(
  args: InferRequestType<typeof client.hyponyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHyponymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hyponyms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHyponyms<TError = unknown>(
  args: InferRequestType<typeof client.hyponyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHyponymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyponyms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hyponyms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetInflectionsKey(args: InferRequestType<typeof client.inflections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['inflections', '/inflections', keyArgs] as const
}

export function useGetInflections<TError = unknown>(
  args: InferRequestType<typeof client.inflections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInflectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inflections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInflections<TError = unknown>(
  args: InferRequestType<typeof client.inflections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInflectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inflections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inflections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLmFamilyKey(args: InferRequestType<typeof client.lm.family.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lm', '/lm/family', keyArgs] as const
}

export function useGetLmFamily<TError = unknown>(
  args: InferRequestType<typeof client.lm.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLmFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lm.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLmFamily<TError = unknown>(
  args: InferRequestType<typeof client.lm.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLmFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lm.family.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lm.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSensesKey(args: InferRequestType<typeof client.senses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['senses', '/senses', keyArgs] as const
}

export function useGetSenses<TError = unknown>(
  args: InferRequestType<typeof client.senses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSenses<TError = unknown>(
  args: InferRequestType<typeof client.senses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetValuesKey(args: InferRequestType<typeof client.values.$get>) {
  const { header: _, ...keyArgs } = args
  return ['values', '/values', keyArgs] as const
}

export function useGetValues<TError = unknown>(
  args: InferRequestType<typeof client.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.values.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetValues<TError = unknown>(
  args: InferRequestType<typeof client.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.values.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.values.$get(args, clientOptions)), restSwrOptions),
  }
}
