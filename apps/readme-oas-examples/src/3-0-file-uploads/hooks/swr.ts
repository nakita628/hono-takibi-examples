import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPostAnythingImagePngKey() {
  return ['anything', '/anything/image-png', 'POST'] as const
}

export function usePostAnythingImagePng<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['image-png']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['image-png']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingImagePngKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['image-png']['$post']> },
      ) => parseResponse(client.anything['image-png'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAnythingMultipartFormdataKey() {
  return ['anything', '/anything/multipart-formdata', 'PUT'] as const
}

export function usePutAnythingMultipartFormdata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['multipart-formdata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingMultipartFormdataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['multipart-formdata']['$put']> },
      ) => parseResponse(client.anything['multipart-formdata'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingMultipartFormdataKey() {
  return ['anything', '/anything/multipart-formdata', 'POST'] as const
}

export function usePostAnythingMultipartFormdata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['multipart-formdata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['multipart-formdata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingMultipartFormdataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['multipart-formdata']['$post']> },
      ) => parseResponse(client.anything['multipart-formdata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
