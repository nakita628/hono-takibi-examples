import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostGetClipMutationKey() {
  return ['getClip', '/getClip', 'POST'] as const
}

export function getPostGetClipMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getClip.$post>>>>>,
    TError,
    InferRequestType<typeof client.getClip.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetClipMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getClip.$post>) {
      return parseResponse(client.getClip.$post(args, options))
    },
  })
}

export function usePostGetClip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getClip.$post>>>>>,
        TError,
        InferRequestType<typeof client.getClip.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetClipMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetDASHStreamingSessionURLMutationKey() {
  return ['getDASHStreamingSessionURL', '/getDASHStreamingSessionURL', 'POST'] as const
}

export function getPostGetDASHStreamingSessionURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getDASHStreamingSessionURL.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getDASHStreamingSessionURL.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDASHStreamingSessionURLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getDASHStreamingSessionURL.$post>) {
      return parseResponse(client.getDASHStreamingSessionURL.$post(args, options))
    },
  })
}

export function usePostGetDASHStreamingSessionURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.getDASHStreamingSessionURL.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.getDASHStreamingSessionURL.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDASHStreamingSessionURLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetHLSStreamingSessionURLMutationKey() {
  return ['getHLSStreamingSessionURL', '/getHLSStreamingSessionURL', 'POST'] as const
}

export function getPostGetHLSStreamingSessionURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getHLSStreamingSessionURL.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getHLSStreamingSessionURL.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetHLSStreamingSessionURLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getHLSStreamingSessionURL.$post>) {
      return parseResponse(client.getHLSStreamingSessionURL.$post(args, options))
    },
  })
}

export function usePostGetHLSStreamingSessionURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getHLSStreamingSessionURL.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getHLSStreamingSessionURL.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetHLSStreamingSessionURLMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetImagesMutationKey() {
  return ['getImages', '/getImages', 'POST'] as const
}

export function getPostGetImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getImages.$post>>>>>,
    TError,
    InferRequestType<typeof client.getImages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getImages.$post>) {
      return parseResponse(client.getImages.$post(args, options))
    },
  })
}

export function usePostGetImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getImages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getImages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetMediaForFragmentListMutationKey() {
  return ['getMediaForFragmentList', '/getMediaForFragmentList', 'POST'] as const
}

export function getPostGetMediaForFragmentListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getMediaForFragmentList.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getMediaForFragmentList.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetMediaForFragmentListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getMediaForFragmentList.$post>) {
      return parseResponse(client.getMediaForFragmentList.$post(args, options))
    },
  })
}

export function usePostGetMediaForFragmentList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getMediaForFragmentList.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getMediaForFragmentList.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetMediaForFragmentListMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListFragmentsMutationKey() {
  return ['listFragments', '/listFragments', 'POST'] as const
}

export function getPostListFragmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFragments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listFragments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListFragmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listFragments.$post>) {
      return parseResponse(client.listFragments.$post(args, options))
    },
  })
}

export function usePostListFragments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFragments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listFragments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListFragmentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
