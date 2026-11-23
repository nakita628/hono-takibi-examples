import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPostAnythingAllParamTypesIdId2Key() {
  return ['anything', '/anything/all-param-types/:id/:id2', 'POST'] as const
}

export function usePostAnythingAllParamTypesIdId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingAllParamTypesIdId2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>
        },
      ) =>
        parseResponse(client.anything['all-param-types'][':id'][':id2'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
