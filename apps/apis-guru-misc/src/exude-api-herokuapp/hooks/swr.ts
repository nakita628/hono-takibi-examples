import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getExudeKey() {
  return ['exude'] as const
}

export function getPostExudeTypeDataKey() {
  return ['exude', '/exude/:type/data', 'POST'] as const
}

export function usePostExudeTypeData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exude)[':type']['data']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exude)[':type']['data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExudeTypeDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exude)[':type']['data']['$post']> },
      ) => parseResponse(client.exude[':type'].data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExudeTypeFileKey() {
  return ['exude', '/exude/:type/file', 'POST'] as const
}

export function usePostExudeTypeFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exude)[':type']['file']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exude)[':type']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExudeTypeFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exude)[':type']['file']['$post']> },
      ) => parseResponse(client.exude[':type'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
