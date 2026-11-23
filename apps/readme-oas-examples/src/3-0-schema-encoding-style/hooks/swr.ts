import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormKey() {
  return ['form'] as const
}

export function getPutFormPrimitiveKey() {
  return ['form', '/form/primitive', 'PUT'] as const
}

export function usePutFormPrimitive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form.primitive.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.form.primitive.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFormPrimitiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.form.primitive.$put> }) =>
        parseResponse(client.form.primitive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
