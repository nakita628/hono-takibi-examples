import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyzeKey() {
  return ['analyze'] as const
}

export function getAreaOfInterestKey() {
  return ['areaOfInterest'] as const
}

export function getDescribeKey() {
  return ['describe'] as const
}

export function getDetectKey() {
  return ['detect'] as const
}

export function getGenerateThumbnailKey() {
  return ['generateThumbnail'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getOcrKey() {
  return ['ocr'] as const
}

export function getTagKey() {
  return ['tag'] as const
}

export function getPostAnalyzeKey() {
  return ['analyze', '/analyze', 'POST'] as const
}

export function usePostAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyze.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.analyze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analyze.$post> }) =>
        parseResponse(client.analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAreaOfInterestKey() {
  return ['areaOfInterest', '/areaOfInterest', 'POST'] as const
}

export function usePostAreaOfInterest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areaOfInterest.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.areaOfInterest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAreaOfInterestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.areaOfInterest.$post> }) =>
        parseResponse(client.areaOfInterest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeKey() {
  return ['describe', '/describe', 'POST'] as const
}

export function usePostDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.describe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describe.$post> }) =>
        parseResponse(client.describe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectKey() {
  return ['detect', '/detect', 'POST'] as const
}

export function usePostDetect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.detect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.detect.$post> }) =>
        parseResponse(client.detect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateThumbnailKey() {
  return ['generateThumbnail', '/generateThumbnail', 'POST'] as const
}

export function usePostGenerateThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateThumbnail.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.generateThumbnail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.generateThumbnail.$post> }) =>
        parseResponse(client.generateThumbnail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsKey() {
  return ['models', '/models'] as const
}

export function useGetModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModelsModelAnalyzeKey() {
  return ['models', '/models/:model/analyze', 'POST'] as const
}

export function usePostModelsModelAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':model']['analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':model']['analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsModelAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':model']['analyze']['$post']> },
      ) => parseResponse(client.models[':model'].analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrKey() {
  return ['ocr', '/ocr', 'POST'] as const
}

export function usePostOcr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ocr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ocr.$post> }) =>
        parseResponse(client.ocr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagKey() {
  return ['tag', '/tag', 'POST'] as const
}

export function usePostTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tag.$post> }) =>
        parseResponse(client.tag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
