import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventsKey() {
  return ['events'] as const
}

export function getPostEvents202609SendMutationKey() {
  return ['events', '/events/2026-09/send', 'POST'] as const
}

export function getPostEvents202609SendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['send']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.events)['2026-09']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvents202609SendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)['2026-09']['send']['$post']>) {
      return parseResponse(client.events['2026-09'].send.$post(args, options))
    },
  })
}

export function createPostEvents202609Send<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.events)['2026-09']['send']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.events)['2026-09']['send']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvents202609SendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEvents202609SendBatchMutationKey() {
  return ['events', '/events/2026-09/send/batch', 'POST'] as const
}

export function getPostEvents202609SendBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['send']['batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvents202609SendBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
    ) {
      return parseResponse(client.events['2026-09'].send.batch.$post(args, options))
    },
  })
}

export function createPostEvents202609SendBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.events)['2026-09']['send']['batch']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvents202609SendBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
