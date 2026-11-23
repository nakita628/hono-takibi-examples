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

export function getMakePdfKey() {
  return ['make-pdf'] as const
}

export function getPostMakePdfMutationKey() {
  return ['make-pdf', '/make-pdf', 'POST'] as const
}

export function getPostMakePdfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['make-pdf']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['make-pdf']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMakePdfMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['make-pdf']['$post']>) {
      return parseResponse(client['make-pdf'].$post(args, options))
    },
  })
}

export function injectPostMakePdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['make-pdf']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['make-pdf']['$post']>,
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
    const mutationDefaults = getPostMakePdfMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
