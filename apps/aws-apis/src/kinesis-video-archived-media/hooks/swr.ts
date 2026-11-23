import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetClipKey() {
  return ['getClip'] as const
}

export function getGetDASHStreamingSessionURLKey() {
  return ['getDASHStreamingSessionURL'] as const
}

export function getGetHLSStreamingSessionURLKey() {
  return ['getHLSStreamingSessionURL'] as const
}

export function getGetImagesKey() {
  return ['getImages'] as const
}

export function getGetMediaForFragmentListKey() {
  return ['getMediaForFragmentList'] as const
}

export function getListFragmentsKey() {
  return ['listFragments'] as const
}

export function getPostGetClipKey() {
  return ['getClip', '/getClip', 'POST'] as const
}

export function usePostGetClip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getClip.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getClip.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetClipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getClip.$post> }) =>
        parseResponse(client.getClip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDASHStreamingSessionURLKey() {
  return ['getDASHStreamingSessionURL', '/getDASHStreamingSessionURL', 'POST'] as const
}

export function usePostGetDASHStreamingSessionURL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getDASHStreamingSessionURL.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getDASHStreamingSessionURL.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDASHStreamingSessionURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getDASHStreamingSessionURL.$post> },
      ) => parseResponse(client.getDASHStreamingSessionURL.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetHLSStreamingSessionURLKey() {
  return ['getHLSStreamingSessionURL', '/getHLSStreamingSessionURL', 'POST'] as const
}

export function usePostGetHLSStreamingSessionURL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getHLSStreamingSessionURL.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getHLSStreamingSessionURL.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetHLSStreamingSessionURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getHLSStreamingSessionURL.$post> },
      ) => parseResponse(client.getHLSStreamingSessionURL.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetImagesKey() {
  return ['getImages', '/getImages', 'POST'] as const
}

export function usePostGetImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getImages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getImages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getImages.$post> }) =>
        parseResponse(client.getImages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetMediaForFragmentListKey() {
  return ['getMediaForFragmentList', '/getMediaForFragmentList', 'POST'] as const
}

export function usePostGetMediaForFragmentList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getMediaForFragmentList.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getMediaForFragmentList.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetMediaForFragmentListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getMediaForFragmentList.$post> },
      ) => parseResponse(client.getMediaForFragmentList.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListFragmentsKey() {
  return ['listFragments', '/listFragments', 'POST'] as const
}

export function usePostListFragments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFragments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listFragments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListFragmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listFragments.$post> }) =>
        parseResponse(client.listFragments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
