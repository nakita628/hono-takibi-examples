import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPlaycustomappKey() {
  return ['playcustomapp'] as const
}

export function getPostPlaycustomappV1AccountsAccountCustomAppsKey() {
  return ['playcustomapp', '/playcustomapp/v1/accounts/:account/customApps', 'POST'] as const
}

export function usePostPlaycustomappV1AccountsAccountCustomApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaycustomappV1AccountsAccountCustomAppsKey()
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
            (typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']
          >
        },
      ) =>
        parseResponse(
          client.playcustomapp.v1.accounts[':account'].customApps.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
