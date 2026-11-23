import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiMailServicePvtProvidersEmailProviderDkimKey() {
  return ['api', '/api/mail-service/pvt/providers/:EmailProvider/dkim', 'POST'] as const
}

export function usePostApiMailServicePvtProvidersEmailProviderDkim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMailServicePvtProvidersEmailProviderDkimKey()
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
            (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['mail-service'].pvt.providers[':EmailProvider'].dkim.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
