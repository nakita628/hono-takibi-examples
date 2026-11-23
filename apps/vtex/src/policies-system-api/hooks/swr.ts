import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiPolicyEngineEvaluateKey() {
  return ['api', '/api/policy-engine/evaluate', 'POST'] as const
}

export function usePostApiPolicyEngineEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPolicyEngineEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']> },
      ) => parseResponse(client.api['policy-engine'].evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPolicyEnginePoliciesKey(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/policy-engine/policies', keyArgs] as const
}

export function useGetApiPolicyEnginePolicies<TError = unknown>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPolicyEnginePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['policy-engine'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPolicyEnginePolicies<TError = unknown>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPolicyEnginePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['policy-engine'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPolicyEnginePoliciesIdKey(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/policy-engine/policies/:id', keyArgs] as const
}

export function useGetApiPolicyEnginePoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPolicyEnginePoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['policy-engine'].policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPolicyEnginePoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPolicyEnginePoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['policy-engine'].policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPolicyEnginePoliciesIdKey() {
  return ['api', '/api/policy-engine/policies/:id', 'PUT'] as const
}

export function usePutApiPolicyEnginePoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPolicyEnginePoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>
        },
      ) => parseResponse(client.api['policy-engine'].policies[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPolicyEnginePoliciesIdKey() {
  return ['api', '/api/policy-engine/policies/:id', 'POST'] as const
}

export function usePostApiPolicyEnginePoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPolicyEnginePoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>
        },
      ) => parseResponse(client.api['policy-engine'].policies[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPolicyEnginePoliciesIdKey() {
  return ['api', '/api/policy-engine/policies/:id', 'DELETE'] as const
}

export function useDeleteApiPolicyEnginePoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPolicyEnginePoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>
        },
      ) => parseResponse(client.api['policy-engine'].policies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
