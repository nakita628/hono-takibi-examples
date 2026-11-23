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

export function injectPostV1OrderFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.feedback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.order.feedback.$post>,
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
    const mutationDefaults = getPostV1OrderFeedbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1OrderScreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.screen.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.order.screen.$post>,
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
    const mutationDefaults = getPostV1OrderScreenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
