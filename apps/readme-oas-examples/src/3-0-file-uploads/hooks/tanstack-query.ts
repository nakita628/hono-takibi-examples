import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPostAnythingImagePngMutationKey() {
  return ['anything', '/anything/image-png', 'POST'] as const
}

export function getPostAnythingImagePngMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['image-png']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['image-png']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingImagePngMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['image-png']['$post']>) {
      return parseResponse(client.anything['image-png'].$post(args, options))
    },
  })
}

export function usePostAnythingImagePng<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['image-png']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['image-png']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingImagePngMutationOptions<TError, TOnMutateResult>(
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

export function getPutAnythingMultipartFormdataMutationKey() {
  return ['anything', '/anything/multipart-formdata', 'PUT'] as const
}

export function getPutAnythingMultipartFormdataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['multipart-formdata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingMultipartFormdataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['multipart-formdata']['$put']>,
    ) {
      return parseResponse(client.anything['multipart-formdata'].$put(args, options))
    },
  })
}

export function usePutAnythingMultipartFormdata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['multipart-formdata']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAnythingMultipartFormdataMutationOptions<TError, TOnMutateResult>(
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

export function getPostAnythingMultipartFormdataMutationKey() {
  return ['anything', '/anything/multipart-formdata', 'POST'] as const
}

export function getPostAnythingMultipartFormdataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['multipart-formdata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingMultipartFormdataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['multipart-formdata']['$post']>,
    ) {
      return parseResponse(client.anything['multipart-formdata'].$post(args, options))
    },
  })
}

export function usePostAnythingMultipartFormdata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['multipart-formdata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingMultipartFormdataMutationOptions<TError, TOnMutateResult>(
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
