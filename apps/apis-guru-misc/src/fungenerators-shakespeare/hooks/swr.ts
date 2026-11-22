import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShakespeareKey() {
  return ['shakespeare'] as const
}

export function getGetShakespeareGenerateInsultKey(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
) {
  return ['shakespeare', '/shakespeare/generate/insult', args] as const
}

export function useGetShakespeareGenerateInsult<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
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
        ? getGetShakespeareGenerateInsultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.generate.insult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShakespeareGenerateInsult<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
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
        ? getGetShakespeareGenerateInsultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.generate.insult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShakespeareGenerateLoremIpsumKey(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
) {
  return ['shakespeare', '/shakespeare/generate/lorem-ipsum', args] as const
}

export function useGetShakespeareGenerateLoremIpsum<TError = unknown>(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
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
        ? getGetShakespeareGenerateLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shakespeare.generate['lorem-ipsum'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShakespeareGenerateLoremIpsum<TError = unknown>(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
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
        ? getGetShakespeareGenerateLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shakespeare.generate['lorem-ipsum'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShakespeareGenerateNameKey(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
) {
  return ['shakespeare', '/shakespeare/generate/name', args] as const
}

export function useGetShakespeareGenerateName<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
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
        ? getGetShakespeareGenerateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.generate.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShakespeareGenerateName<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
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
        ? getGetShakespeareGenerateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.generate.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShakespeareQuoteKey() {
  return ['shakespeare', '/shakespeare/quote'] as const
}

export function useGetShakespeareQuote<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShakespeareQuoteKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.quote.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShakespeareQuote<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShakespeareQuoteKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.quote.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShakespeareTranslateKey(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
) {
  return ['shakespeare', '/shakespeare/translate', args] as const
}

export function useGetShakespeareTranslate<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
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
        ? getGetShakespeareTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShakespeareTranslate<TError = unknown>(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
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
        ? getGetShakespeareTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shakespeare.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
