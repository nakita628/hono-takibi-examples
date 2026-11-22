import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppinstallsKey() {
  return ['appinstalls'] as const
}

export function getDeleteAppinstalls202609ExternalInstallKey() {
  return ['appinstalls', '/appinstalls/2026-09/external-install', 'DELETE'] as const
}

export function useDeleteAppinstalls202609ExternalInstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appinstalls)['2026-09']['external-install']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppinstalls202609ExternalInstallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.appinstalls['2026-09']['external-install'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
