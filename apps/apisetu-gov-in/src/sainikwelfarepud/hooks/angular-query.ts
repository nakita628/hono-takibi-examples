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

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getPostDpcerCertificateMutationKey() {
  return ['dpcer', '/dpcer/certificate', 'POST'] as const
}

export function getPostDpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpcer.certificate.$post>) {
      return parseResponse(client.dpcer.certificate.$post(args, options))
    },
  })
}

export function injectPostDpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dpcer.certificate.$post>,
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
    const mutationDefaults = getPostDpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
