import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiPolicyEngineEvaluateMutationKey() {
  return ['api', '/api/policy-engine/evaluate', 'POST'] as const
}

export function getPostApiPolicyEngineEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPolicyEngineEvaluateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']>,
    ) {
      return parseResponse(client.api['policy-engine'].evaluate.$post(args, options))
    },
  })
}

export function createPostApiPolicyEngineEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['evaluate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']>,
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
    const mutationDefaults = getPostApiPolicyEngineEvaluateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPolicyEnginePoliciesQueryKey(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/policy-engine/policies', keyArgs] as const
}

export function getApiPolicyEnginePoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPolicyEnginePoliciesQueryKey>
  >({
    queryKey: getApiPolicyEnginePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['policy-engine'].policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPolicyEnginePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPolicyEnginePoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPolicyEnginePoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPolicyEnginePoliciesIdQueryKey(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/policy-engine/policies/:id', keyArgs] as const
}

export function getApiPolicyEnginePoliciesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPolicyEnginePoliciesIdQueryKey>
  >({
    queryKey: getApiPolicyEnginePoliciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['policy-engine'].policies[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPolicyEnginePoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPolicyEnginePoliciesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPolicyEnginePoliciesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiPolicyEnginePoliciesIdMutationKey() {
  return ['api', '/api/policy-engine/policies/:id', 'PUT'] as const
}

export function getPutApiPolicyEnginePoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPolicyEnginePoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>,
    ) {
      return parseResponse(client.api['policy-engine'].policies[':id'].$put(args, options))
    },
  })
}

export function createPutApiPolicyEnginePoliciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>,
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
    const mutationDefaults = getPutApiPolicyEnginePoliciesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPolicyEnginePoliciesIdMutationKey() {
  return ['api', '/api/policy-engine/policies/:id', 'POST'] as const
}

export function getPostApiPolicyEnginePoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPolicyEnginePoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>,
    ) {
      return parseResponse(client.api['policy-engine'].policies[':id'].$post(args, options))
    },
  })
}

export function createPostApiPolicyEnginePoliciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>,
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
    const mutationDefaults = getPostApiPolicyEnginePoliciesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiPolicyEnginePoliciesIdMutationKey() {
  return ['api', '/api/policy-engine/policies/:id', 'DELETE'] as const
}

export function getDeleteApiPolicyEnginePoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPolicyEnginePoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['policy-engine'].policies[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiPolicyEnginePoliciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPolicyEnginePoliciesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
