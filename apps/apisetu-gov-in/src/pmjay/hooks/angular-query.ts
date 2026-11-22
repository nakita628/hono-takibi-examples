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

export function getPmjayKey() {
  return ['pmjay'] as const
}

export function getPostPmjayCertificateMutationKey() {
  return ['pmjay', '/pmjay/certificate', 'POST'] as const
}

export function getPostPmjayCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pmjay.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pmjay.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPmjayCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pmjay.certificate.$post>) {
      return parseResponse(client.pmjay.certificate.$post(args, options))
    },
  })
}

export function injectPostPmjayCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pmjay.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pmjay.certificate.$post>,
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
    const mutationDefaults = getPostPmjayCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
