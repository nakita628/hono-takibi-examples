import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getPostTemplatesTemplateTokenCompileKey() {
  return ['templates', '/templates/:template-token/compile', 'POST'] as const
}

export function usePostTemplatesTemplateTokenCompile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template-token']['compile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateTokenCompileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>
        },
      ) => parseResponse(client.templates[':template-token'].compile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
