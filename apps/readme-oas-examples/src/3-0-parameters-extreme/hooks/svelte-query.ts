import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPostAnythingAllParamTypesIdId2MutationKey() {
  return ['anything', '/anything/all-param-types/:id/:id2', 'POST'] as const
}

export function getPostAnythingAllParamTypesIdId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingAllParamTypesIdId2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>,
    ) {
      return parseResponse(client.anything['all-param-types'][':id'][':id2'].$post(args, options))
    },
  })
}

export function createPostAnythingAllParamTypesIdId2<
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
                ReturnType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['all-param-types'][':id'][':id2']['$post']>,
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
    const mutationDefaults = getPostAnythingAllParamTypesIdId2MutationOptions<
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
