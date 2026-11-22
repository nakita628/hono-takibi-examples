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

export function getPecerKey() {
  return ['pecer'] as const
}

export function getPostPecerCertificateMutationKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function getPostPecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pecer.certificate.$post>) {
      return parseResponse(client.pecer.certificate.$post(args, options))
    },
  })
}

export function injectPostPecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pecer.certificate.$post>,
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
    const mutationDefaults = getPostPecerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
