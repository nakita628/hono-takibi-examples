import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPutOcsV2PhpAppsViewerApiV1ConfigKeyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/viewer/api/v1/config/:key', 'PUT'] as const
}

export function getPutOcsV2PhpAppsViewerApiV1ConfigKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsViewerApiV1ConfigKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.viewer.api.v1.config[':key'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsViewerApiV1ConfigKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsViewerApiV1ConfigKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
