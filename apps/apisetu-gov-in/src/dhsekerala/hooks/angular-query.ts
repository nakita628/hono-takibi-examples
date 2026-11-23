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

export function getHpcerKey() {
  return ['hpcer'] as const
}

export function getPostHpcerCertificateMutationKey() {
  return ['hpcer', '/hpcer/certificate', 'POST'] as const
}

export function getPostHpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hpcer.certificate.$post>) {
      return parseResponse(client.hpcer.certificate.$post(args, options))
    },
  })
}

export function injectPostHpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hpcer.certificate.$post>,
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
    const mutationDefaults = getPostHpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
