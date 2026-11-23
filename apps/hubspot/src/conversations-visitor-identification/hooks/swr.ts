import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVisitorIdentificationKey() {
  return ['visitor-identification'] as const
}

export function getPostVisitorIdentification202609TokensCreateKey() {
  return [
    'visitor-identification',
    '/visitor-identification/2026-09/tokens/create',
    'POST',
  ] as const
}

export function usePostVisitorIdentification202609TokensCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVisitorIdentification202609TokensCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client['visitor-identification']['2026-09'].tokens.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
