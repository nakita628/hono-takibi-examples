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

export function getYourPullDOCRequestAPIPathKey() {
  return ['Your Pull DOC Request API Path'] as const
}

export function getYourPullURIRequestAPIPathKey() {
  return ['Your Pull URI Request API Path'] as const
}

export function getPostYourPullDOCRequestAPIPathMutationKey() {
  return ['Your Pull DOC Request API Path', '/Your Pull DOC Request API Path', 'POST'] as const
}

export function getPostYourPullDOCRequestAPIPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['Your Pull DOC Request API Path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostYourPullDOCRequestAPIPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']>,
    ) {
      return parseResponse(client['Your Pull DOC Request API Path'].$post(args, options))
    },
  })
}

export function injectPostYourPullDOCRequestAPIPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['Your Pull DOC Request API Path']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['Your Pull DOC Request API Path']['$post']>,
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
    const mutationDefaults = getPostYourPullDOCRequestAPIPathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostYourPullURIRequestAPIPathMutationKey() {
  return ['Your Pull URI Request API Path', '/Your Pull URI Request API Path', 'POST'] as const
}

export function getPostYourPullURIRequestAPIPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['Your Pull URI Request API Path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostYourPullURIRequestAPIPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']>,
    ) {
      return parseResponse(client['Your Pull URI Request API Path'].$post(args, options))
    },
  })
}

export function injectPostYourPullURIRequestAPIPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['Your Pull URI Request API Path']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['Your Pull URI Request API Path']['$post']>,
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
    const mutationDefaults = getPostYourPullURIRequestAPIPathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
