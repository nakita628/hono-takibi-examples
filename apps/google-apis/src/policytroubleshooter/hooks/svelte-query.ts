import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1IamTroubleshootMutationKey() {
  return ['v1', '/v1/iam:troubleshoot', 'POST'] as const
}

export function getPostV1IamTroubleshootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['iam:troubleshoot']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['iam:troubleshoot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IamTroubleshootMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['iam:troubleshoot']['$post']>) {
      return parseResponse(client.v1['iam:troubleshoot'].$post(args, options))
    },
  })
}

export function createPostV1IamTroubleshoot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['iam:troubleshoot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['iam:troubleshoot']['$post']>,
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
    const mutationDefaults = getPostV1IamTroubleshootMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
