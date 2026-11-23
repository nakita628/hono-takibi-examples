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

export function getDpicrKey() {
  return ['dpicr'] as const
}

export function getGovidKey() {
  return ['govid'] as const
}

export function getPostDpicrCertificateMutationKey() {
  return ['dpicr', '/dpicr/certificate', 'POST'] as const
}

export function getPostDpicrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpicr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpicrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpicr.certificate.$post>) {
      return parseResponse(client.dpicr.certificate.$post(args, options))
    },
  })
}

export function injectPostDpicrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dpicr.certificate.$post>,
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
    const mutationDefaults = getPostDpicrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGovidCertificateMutationKey() {
  return ['govid', '/govid/certificate', 'POST'] as const
}

export function getPostGovidCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.govid.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGovidCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.govid.certificate.$post>) {
      return parseResponse(client.govid.certificate.$post(args, options))
    },
  })
}

export function injectPostGovidCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.govid.certificate.$post>,
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
    const mutationDefaults = getPostGovidCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
