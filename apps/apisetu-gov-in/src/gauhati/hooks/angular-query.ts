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

export function getSocerKey() {
  return ['socer'] as const
}

export function getPostSocerCertificateMutationKey() {
  return ['socer', '/socer/certificate', 'POST'] as const
}

export function getPostSocerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.socer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSocerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.socer.certificate.$post>) {
      return parseResponse(client.socer.certificate.$post(args, options))
    },
  })
}

export function injectPostSocerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.socer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.socer.certificate.$post>,
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
    const mutationDefaults = getPostSocerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
