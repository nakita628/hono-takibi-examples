import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getPostTemplatesTemplateTokenCompileMutationKey() {
  return ['templates', '/templates/:template-token/compile', 'POST'] as const
}

export function getPostTemplatesTemplateTokenCompileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template-token']['compile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateTokenCompileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>,
    ) {
      return parseResponse(client.templates[':template-token'].compile.$post(args, options))
    },
  })
}

export function createPostTemplatesTemplateTokenCompile<
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
                  ReturnType<(typeof client.templates)[':template-token']['compile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>,
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
    const mutationDefaults = getPostTemplatesTemplateTokenCompileMutationOptions<
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
