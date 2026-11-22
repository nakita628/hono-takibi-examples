import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getPostIndexPhpOcmSharesKey() {
  return ['index.php', '/index.php/ocm/shares', 'POST'] as const
}

export function usePostIndexPhpOcmShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['ocm']['shares']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpOcmSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']> },
      ) => parseResponse(client['index.php'].ocm.shares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexPhpOcmNotificationsKey() {
  return ['index.php', '/index.php/ocm/notifications', 'POST'] as const
}

export function usePostIndexPhpOcmNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['ocm']['notifications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpOcmNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']> },
      ) => parseResponse(client['index.php'].ocm.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
