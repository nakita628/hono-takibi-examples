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

export function getRatcrKey() {
  return ['ratcr'] as const
}

export function getPostRatcrCertificateMutationKey() {
  return ['ratcr', '/ratcr/certificate', 'POST'] as const
}

export function getPostRatcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ratcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRatcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ratcr.certificate.$post>) {
      return parseResponse(client.ratcr.certificate.$post(args, options))
    },
  })
}

export function injectPostRatcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ratcr.certificate.$post>,
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
    const mutationDefaults = getPostRatcrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
