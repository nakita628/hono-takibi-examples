import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppinstallsKey() {
  return ['appinstalls'] as const
}

export function getDeleteAppinstalls202609ExternalInstallMutationKey() {
  return ['appinstalls', '/appinstalls/2026-09/external-install', 'DELETE'] as const
}

export function getDeleteAppinstalls202609ExternalInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppinstalls202609ExternalInstallMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.appinstalls['2026-09']['external-install'].$delete(undefined, options),
      )
    },
  })
}

export function useDeleteAppinstalls202609ExternalInstall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppinstalls202609ExternalInstallMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
