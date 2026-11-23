import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiMailServicePvtProvidersEmailProviderDkimMutationKey() {
  return ['api', '/api/mail-service/pvt/providers/:EmailProvider/dkim', 'POST'] as const
}

export function getPostApiMailServicePvtProvidersEmailProviderDkimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiMailServicePvtProvidersEmailProviderDkimMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
      >,
    ) {
      return parseResponse(
        client.api['mail-service'].pvt.providers[':EmailProvider'].dkim.$post(args, options),
      )
    },
  })
}

export function createPostApiMailServicePvtProvidersEmailProviderDkim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiMailServicePvtProvidersEmailProviderDkimMutationOptions<
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
