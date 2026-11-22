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

export function getNbcerKey() {
  return ['nbcer'] as const
}

export function getPostNbcerCertificateMutationKey() {
  return ['nbcer', '/nbcer/certificate', 'POST'] as const
}

export function getPostNbcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nbcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nbcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNbcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nbcer.certificate.$post>) {
      return parseResponse(client.nbcer.certificate.$post(args, options))
    },
  })
}

export function injectPostNbcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nbcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nbcer.certificate.$post>,
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
    const mutationDefaults = getPostNbcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
