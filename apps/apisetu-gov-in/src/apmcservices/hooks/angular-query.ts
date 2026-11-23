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

export function getApmclKey() {
  return ['apmcl'] as const
}

export function getPostApmclCertificateMutationKey() {
  return ['apmcl', '/apmcl/certificate', 'POST'] as const
}

export function getPostApmclCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apmcl.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.apmcl.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApmclCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apmcl.certificate.$post>) {
      return parseResponse(client.apmcl.certificate.$post(args, options))
    },
  })
}

export function injectPostApmclCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apmcl.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.apmcl.certificate.$post>,
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
    const mutationDefaults = getPostApmclCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
