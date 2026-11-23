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

export function getPodocKey() {
  return ['podoc'] as const
}

export function getPostPodocCertificateMutationKey() {
  return ['podoc', '/podoc/certificate', 'POST'] as const
}

export function getPostPodocCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podoc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.podoc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPodocCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.podoc.certificate.$post>) {
      return parseResponse(client.podoc.certificate.$post(args, options))
    },
  })
}

export function injectPostPodocCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.podoc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.podoc.certificate.$post>,
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
    const mutationDefaults = getPostPodocCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
