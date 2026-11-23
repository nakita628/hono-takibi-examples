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

export function getOfrepKey() {
  return ['ofrep'] as const
}

export function getPostOfrepV1EvaluateFlagsKeyMutationKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags/:key', 'POST'] as const
}

export function getPostOfrepV1EvaluateFlagsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOfrepV1EvaluateFlagsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
    ) {
      return parseResponse(client.ofrep.v1.evaluate.flags[':key'].$post(args, options))
    },
  })
}

export function injectPostOfrepV1EvaluateFlagsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
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
    const mutationDefaults = getPostOfrepV1EvaluateFlagsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOfrepV1EvaluateFlagsMutationKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags', 'POST'] as const
}

export function getPostOfrepV1EvaluateFlagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ofrep.v1.evaluate.flags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOfrepV1EvaluateFlagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>) {
      return parseResponse(client.ofrep.v1.evaluate.flags.$post(args, options))
    },
  })
}

export function injectPostOfrepV1EvaluateFlags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ofrep.v1.evaluate.flags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>,
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
    const mutationDefaults = getPostOfrepV1EvaluateFlagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
