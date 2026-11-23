import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getPostV1beta1TextSynthesizeKey() {
  return ['v1beta1', '/v1beta1/text:synthesize', 'POST'] as const
}

export function usePostV1beta1TextSynthesize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['text:synthesize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)['text:synthesize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1TextSynthesizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)['text:synthesize']['$post']> },
      ) => parseResponse(client.v1beta1['text:synthesize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1VoicesKey(args: InferRequestType<typeof client.v1beta1.voices.$get>) {
  return ['v1beta1', '/v1beta1/voices', args] as const
}

export function useGetV1beta1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NameKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function useGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NameOperationsKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name/operations', args] as const
}

export function useGetV1beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
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
        ? getGetV1beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
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
        ? getGetV1beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentSynthesizeLongAudioKey() {
  return ['v1beta1', '/v1beta1/:parent:synthesizeLongAudio', 'POST'] as const
}

export function usePostV1beta1ParentSynthesizeLongAudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent:synthesizeLongAudio']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent:synthesizeLongAudio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentSynthesizeLongAudioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta1)[':parent:synthesizeLongAudio']['$post']>
        },
      ) => parseResponse(client.v1beta1[':parent:synthesizeLongAudio'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
