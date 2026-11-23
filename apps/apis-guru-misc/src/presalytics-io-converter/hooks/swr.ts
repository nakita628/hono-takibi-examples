import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSvgconvertKey() {
  return ['svgconvert'] as const
}

export function getPostSvgconvertKey() {
  return ['svgconvert', '/svgconvert', 'POST'] as const
}

export function usePostSvgconvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.svgconvert.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.svgconvert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSvgconvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.svgconvert.$post> }) =>
        parseResponse(client.svgconvert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
