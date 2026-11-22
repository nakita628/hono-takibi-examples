import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostTemplatesTemplateTokenCompile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
