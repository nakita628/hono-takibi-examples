import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getModuleKey() {
  return ['module'] as const
}

export function getPostModuleAuthV1TokenKey() {
  return ['module', '/module/auth/v1/token', 'POST'] as const
}

export function usePostModuleAuthV1Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.module.auth.v1.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.module.auth.v1.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModuleAuthV1TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.module.auth.v1.token.$post> },
      ) => parseResponse(client.module.auth.v1.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
