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

export function getRequestSubjectErasureKey() {
  return ['requestSubjectErasure'] as const
}

export function getPostRequestSubjectErasureMutationKey() {
  return ['requestSubjectErasure', '/requestSubjectErasure', 'POST'] as const
}

export function getPostRequestSubjectErasureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.requestSubjectErasure.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.requestSubjectErasure.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestSubjectErasureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestSubjectErasure.$post>) {
      return parseResponse(client.requestSubjectErasure.$post(args, options))
    },
  })
}

export function injectPostRequestSubjectErasure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.requestSubjectErasure.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.requestSubjectErasure.$post>,
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
    const mutationDefaults = getPostRequestSubjectErasureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
