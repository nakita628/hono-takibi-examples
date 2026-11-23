import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getYourPullDOCRequestAPIPathKey() {
  return ['Your Pull DOC Request API Path'] as const
}

export function getYourPullURIRequestAPIPathKey() {
  return ['Your Pull URI Request API Path'] as const
}

export function getPostYourPullDOCRequestAPIPathKey() {
  return ['Your Pull DOC Request API Path', '/Your Pull DOC Request API Path', 'POST'] as const
}

export function usePostYourPullDOCRequestAPIPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['Your Pull DOC Request API Path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYourPullDOCRequestAPIPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']> },
      ) => parseResponse(client['Your Pull DOC Request API Path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostYourPullURIRequestAPIPathKey() {
  return ['Your Pull URI Request API Path', '/Your Pull URI Request API Path', 'POST'] as const
}

export function usePostYourPullURIRequestAPIPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['Your Pull URI Request API Path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostYourPullURIRequestAPIPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']> },
      ) => parseResponse(client['Your Pull URI Request API Path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
