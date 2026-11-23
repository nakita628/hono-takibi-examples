import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePostApiPolicyEngineEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiPolicyEngineEvaluateMutationOptions<TError, TOnMutateResult>(
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

export function getApiPolicyEnginePoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/policy-engine/policies', keyArgs] as const
}

export function getApiPolicyEnginePoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPolicyEnginePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['policy-engine'].policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPolicyEnginePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPolicyEnginePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPolicyEnginePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['policy-engine'].policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPolicyEnginePoliciesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/policy-engine/policies/:id', keyArgs] as const
}

export function getApiPolicyEnginePoliciesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPolicyEnginePoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['policy-engine'].policies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPolicyEnginePoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPolicyEnginePoliciesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPolicyEnginePoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['policy-engine'].policies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPolicyEnginePoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiPolicyEnginePoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiPolicyEnginePoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiPolicyEnginePoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiPolicyEnginePoliciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiPolicyEnginePoliciesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
