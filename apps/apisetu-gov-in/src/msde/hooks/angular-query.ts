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

export function getIticrKey() {
  return ['iticr'] as const
}

export function getPostIticrCertificateMutationKey() {
  return ['iticr', '/iticr/certificate', 'POST'] as const
}

export function getPostIticrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iticr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.iticr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIticrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.iticr.certificate.$post>) {
      return parseResponse(client.iticr.certificate.$post(args, options))
    },
  })
}

export function injectPostIticrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.iticr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.iticr.certificate.$post>,
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
    const mutationDefaults = getPostIticrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
