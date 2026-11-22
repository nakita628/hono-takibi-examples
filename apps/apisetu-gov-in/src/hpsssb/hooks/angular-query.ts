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

export function getAdcrdKey() {
  return ['adcrd'] as const
}

export function getPostAdcrdCertificateMutationKey() {
  return ['adcrd', '/adcrd/certificate', 'POST'] as const
}

export function getPostAdcrdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adcrd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.adcrd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdcrdCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adcrd.certificate.$post>) {
      return parseResponse(client.adcrd.certificate.$post(args, options))
    },
  })
}

export function injectPostAdcrdCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.adcrd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.adcrd.certificate.$post>,
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
    const mutationDefaults = getPostAdcrdCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
