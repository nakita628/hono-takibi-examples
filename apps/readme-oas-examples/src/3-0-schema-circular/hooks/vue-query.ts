import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCircularKey() {
  return ['circular'] as const
}

export function getNestedTestKey() {
  return ['nestedTest'] as const
}

export function getNotQuiteCircularKey() {
  return ['not-quite-circular'] as const
}

export function getPutNestedTestMutationKey() {
  return ['nestedTest', '/nestedTest', 'PUT'] as const
}

export function getPutNestedTestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nestedTest.$put>>>>>,
    TError,
    InferRequestType<typeof client.nestedTest.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutNestedTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nestedTest.$put>) {
      return parseResponse(client.nestedTest.$put(args, options))
    },
  })
}

export function usePutNestedTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nestedTest.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.nestedTest.$put>,
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
  const mutationDefaults = getPutNestedTestMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCircularMutationKey() {
  return ['circular', '/circular', 'PUT'] as const
}

export function getPutCircularMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.circular.$put>>>>>,
    TError,
    InferRequestType<typeof client.circular.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCircularMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.circular.$put>) {
      return parseResponse(client.circular.$put(args, options))
    },
  })
}

export function usePutCircular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.circular.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.circular.$put>,
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
  const mutationDefaults = getPutCircularMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNotQuiteCircularMutationKey() {
  return ['not-quite-circular', '/not-quite-circular', 'POST'] as const
}

export function getPostNotQuiteCircularMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['not-quite-circular']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['not-quite-circular']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotQuiteCircularMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['not-quite-circular']['$post']>) {
      return parseResponse(client['not-quite-circular'].$post(args, options))
    },
  })
}

export function usePostNotQuiteCircular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['not-quite-circular']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['not-quite-circular']['$post']>,
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
  const mutationDefaults = getPostNotQuiteCircularMutationOptions<TError, TOnMutateResult>(
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
