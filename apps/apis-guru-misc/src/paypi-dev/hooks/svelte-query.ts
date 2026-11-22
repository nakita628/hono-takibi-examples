import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckCodeKey() {
  return ['checkCode'] as const
}

export function getSendCodeKey() {
  return ['sendCode'] as const
}

export function getPostCheckCodeMutationKey() {
  return ['checkCode', '/checkCode', 'POST'] as const
}

export function getPostCheckCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkCode.$post>>>>>,
    TError,
    InferRequestType<typeof client.checkCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checkCode.$post>) {
      return parseResponse(client.checkCode.$post(args, options))
    },
  })
}

export function createPostCheckCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkCode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.checkCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCheckCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendCodeMutationKey() {
  return ['sendCode', '/sendCode', 'POST'] as const
}

export function getPostSendCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendCode.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendCode.$post>) {
      return parseResponse(client.sendCode.$post(args, options))
    },
  })
}

export function createPostSendCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendCode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sendCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
