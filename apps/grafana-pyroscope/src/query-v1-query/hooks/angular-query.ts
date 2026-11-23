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

export function getQueryV1QueryBackendServiceKey() {
  return ['query.v1.QueryBackendService'] as const
}

export function getQueryV1QueryFrontendServiceKey() {
  return ['query.v1.QueryFrontendService'] as const
}

export function getPostQueryV1QueryBackendServiceInvokeMutationKey() {
  return ['query.v1.QueryBackendService', '/query.v1.QueryBackendService/Invoke', 'POST'] as const
}

export function getPostQueryV1QueryBackendServiceInvokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryV1QueryBackendServiceInvokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>,
    ) {
      return parseResponse(client['query.v1.QueryBackendService'].Invoke.$post(args, options))
    },
  })
}

export function injectPostQueryV1QueryBackendServiceInvoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>,
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
    const mutationDefaults = getPostQueryV1QueryBackendServiceInvokeMutationOptions<
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

export function getPostQueryV1QueryFrontendServiceQueryMutationKey() {
  return ['query.v1.QueryFrontendService', '/query.v1.QueryFrontendService/Query', 'POST'] as const
}

export function getPostQueryV1QueryFrontendServiceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryV1QueryFrontendServiceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>,
    ) {
      return parseResponse(client['query.v1.QueryFrontendService'].Query.$post(args, options))
    },
  })
}

export function injectPostQueryV1QueryFrontendServiceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>,
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
    const mutationDefaults = getPostQueryV1QueryFrontendServiceQueryMutationOptions<
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
