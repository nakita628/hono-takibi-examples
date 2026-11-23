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

export function getOtcerKey() {
  return ['otcer'] as const
}

export function getPostOtcerCertificateMutationKey() {
  return ['otcer', '/otcer/certificate', 'POST'] as const
}

export function getPostOtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.otcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.otcer.certificate.$post>) {
      return parseResponse(client.otcer.certificate.$post(args, options))
    },
  })
}

export function injectPostOtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.otcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.otcer.certificate.$post>,
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
    const mutationDefaults = getPostOtcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
