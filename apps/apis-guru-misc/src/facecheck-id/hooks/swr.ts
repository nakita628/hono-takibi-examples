import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiDeletePicKey() {
  return ['api', '/api/delete_pic', 'POST'] as const
}

export function usePostApiDeletePic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete_pic.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.delete_pic.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDeletePicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.delete_pic.$post> }) =>
        parseResponse(client.api.delete_pic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInfoKey() {
  return ['api', '/api/info', 'POST'] as const
}

export function usePostApiInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.info.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.info.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSearchKey() {
  return ['api', '/api/search', 'POST'] as const
}

export function usePostApiSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.search.$post> }) =>
        parseResponse(client.api.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUploadPicKey() {
  return ['api', '/api/upload_pic', 'POST'] as const
}

export function usePostApiUploadPic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload_pic.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.upload_pic.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadPicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.upload_pic.$post> }) =>
        parseResponse(client.api.upload_pic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
