import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostEvents202609Send<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEvents202609SendMutationOptions<TError, TOnMutateResult>(
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

export function usePostEvents202609SendBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEvents202609SendBatchMutationOptions<TError, TOnMutateResult>(
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
