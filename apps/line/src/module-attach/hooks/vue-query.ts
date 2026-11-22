import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getModuleKey() {
  return ['module'] as const
}

export function getPostModuleAuthV1TokenMutationKey() {
  return ['module', '/module/auth/v1/token', 'POST'] as const
}

export function getPostModuleAuthV1TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.module.auth.v1.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.module.auth.v1.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModuleAuthV1TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.module.auth.v1.token.$post>) {
      return parseResponse(client.module.auth.v1.token.$post(args, options))
    },
  })
}

export function usePostModuleAuthV1Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.module.auth.v1.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.module.auth.v1.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModuleAuthV1TokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
