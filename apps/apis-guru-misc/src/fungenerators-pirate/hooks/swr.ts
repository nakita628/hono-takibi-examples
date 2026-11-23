import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPirateKey() {
  return ['pirate'] as const
}

export function getGetPirateGenerateInsultKey(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
) {
  return ['pirate', '/pirate/generate/insult', args] as const
}

export function useGetPirateGenerateInsult<TError = unknown>(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
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
        ? getGetPirateGenerateInsultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate.insult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPirateGenerateInsult<TError = unknown>(
  args: InferRequestType<typeof client.pirate.generate.insult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
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
        ? getGetPirateGenerateInsultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate.insult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPirateGenerateLoremIpsumKey(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
) {
  return ['pirate', '/pirate/generate/lorem-ipsum', args] as const
}

export function useGetPirateGenerateLoremIpsum<TError = unknown>(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
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
        ? getGetPirateGenerateLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate['lorem-ipsum'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPirateGenerateLoremIpsum<TError = unknown>(
  args: InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
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
        ? getGetPirateGenerateLoremIpsumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate['lorem-ipsum'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPirateGenerateNameKey(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
) {
  return ['pirate', '/pirate/generate/name', args] as const
}

export function useGetPirateGenerateName<TError = unknown>(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
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
        ? getGetPirateGenerateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPirateGenerateName<TError = unknown>(
  args: InferRequestType<typeof client.pirate.generate.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
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
        ? getGetPirateGenerateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.generate.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPirateTranslateKey(
  args: InferRequestType<typeof client.pirate.translate.$get>,
) {
  return ['pirate', '/pirate/translate', args] as const
}

export function useGetPirateTranslate<TError = unknown>(
  args: InferRequestType<typeof client.pirate.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
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
        ? getGetPirateTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPirateTranslate<TError = unknown>(
  args: InferRequestType<typeof client.pirate.translate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
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
        ? getGetPirateTranslateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pirate.translate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
