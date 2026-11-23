import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1OrderFeedbackMutationKey() {
  return ['v1', '/v1/order/feedback', 'POST'] as const
}

export function getPostV1OrderFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.order.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.order.feedback.$post>) {
      return parseResponse(client.v1.order.feedback.$post(args, options))
    },
  })
}

export function usePostV1OrderFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.feedback.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.order.feedback.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrderFeedbackMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1OrderScreenMutationKey() {
  return ['v1', '/v1/order/screen', 'POST'] as const
}

export function getPostV1OrderScreenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.screen.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.order.screen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderScreenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.order.screen.$post>) {
      return parseResponse(client.v1.order.screen.$post(args, options))
    },
  })
}

export function usePostV1OrderScreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.screen.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.order.screen.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrderScreenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
