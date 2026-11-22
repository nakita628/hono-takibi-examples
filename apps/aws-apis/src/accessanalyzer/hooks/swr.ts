import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccessPreviewKey() {
  return ['access-preview'] as const
}

export function getAccessPreviewAnalyzerArnKey() {
  return ['access-preview#analyzerArn'] as const
}

export function getAnalyzedResourceKey() {
  return ['analyzed-resource'] as const
}

export function getAnalyzedResourceAnalyzerArnResourceArnKey() {
  return ['analyzed-resource#analyzerArn&resourceArn'] as const
}

export function getAnalyzerKey() {
  return ['analyzer'] as const
}

export function getArchiveRuleKey() {
  return ['archive-rule'] as const
}

export function getFindingKey() {
  return ['finding'] as const
}

export function getPolicyKey() {
  return ['policy'] as const
}

export function getResourceKey() {
  return ['resource'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutArchiveRuleKey() {
  return ['archive-rule', '/archive-rule', 'PUT'] as const
}

export function usePutArchiveRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['archive-rule']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['archive-rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutArchiveRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['archive-rule']['$put']> }) =>
        parseResponse(client['archive-rule'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPolicyGenerationJobIdKey(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/generation/:jobId', keyArgs] as const
}

export function useGetPolicyGenerationJobId<TError = unknown>(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
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
        ? getGetPolicyGenerationJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy.generation[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPolicyGenerationJobId<TError = unknown>(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
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
        ? getGetPolicyGenerationJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy.generation[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPolicyGenerationJobIdKey() {
  return ['policy', '/policy/generation/:jobId', 'PUT'] as const
}

export function usePutPolicyGenerationJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policy.generation)[':jobId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPolicyGenerationJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policy.generation)[':jobId']['$put']> },
      ) => parseResponse(client.policy.generation[':jobId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccessPreviewKey() {
  return ['access-preview', '/access-preview', 'PUT'] as const
}

export function usePutAccessPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['access-preview']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-preview']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['access-preview']['$put']> },
      ) => parseResponse(client['access-preview'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyzerKey(args: InferRequestType<typeof client.analyzer.$get>) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer', keyArgs] as const
}

export function useGetAnalyzer<TError = unknown>(
  args: InferRequestType<typeof client.analyzer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyzerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.analyzer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAnalyzer<TError = unknown>(
  args: InferRequestType<typeof client.analyzer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyzerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.analyzer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAnalyzerKey() {
  return ['analyzer', '/analyzer', 'PUT'] as const
}

export function usePutAnalyzer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.analyzer.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyzerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analyzer.$put> }) =>
        parseResponse(client.analyzer.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyzerAnalyzerNameArchiveRuleKey(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName/archive-rule', keyArgs] as const
}

export function useGetAnalyzerAnalyzerNameArchiveRule<TError = unknown>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
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
        ? getGetAnalyzerAnalyzerNameArchiveRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analyzer[':analyzerName']['archive-rule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyzerAnalyzerNameArchiveRule<TError = unknown>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
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
        ? getGetAnalyzerAnalyzerNameArchiveRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analyzer[':analyzerName']['archive-rule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnalyzerAnalyzerNameArchiveRuleKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule', 'PUT'] as const
}

export function usePutAnalyzerAnalyzerNameArchiveRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyzerAnalyzerNameArchiveRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>
        },
      ) => parseResponse(client.analyzer[':analyzerName']['archive-rule'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyzerAnalyzerNameKey(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName', keyArgs] as const
}

export function useGetAnalyzerAnalyzerName<TError = unknown>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
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
        ? getGetAnalyzerAnalyzerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyzer[':analyzerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyzerAnalyzerName<TError = unknown>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
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
        ? getGetAnalyzerAnalyzerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyzer[':analyzerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAnalyzerAnalyzerNameKey() {
  return ['analyzer', '/analyzer/:analyzerName', 'DELETE'] as const
}

export function useDeleteAnalyzerAnalyzerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalyzerAnalyzerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']> },
      ) => parseResponse(client.analyzer[':analyzerName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyzerAnalyzerNameArchiveRuleRuleNameKey(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', keyArgs] as const
}

export function useGetAnalyzerAnalyzerNameArchiveRuleRuleName<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
              >
            >
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
        ? getGetAnalyzerAnalyzerNameArchiveRuleRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyzerAnalyzerNameArchiveRuleRuleName<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
              >
            >
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
        ? getGetAnalyzerAnalyzerNameArchiveRuleRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAnalyzerAnalyzerNameArchiveRuleRuleNameKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', 'PUT'] as const
}

export function usePutAnalyzerAnalyzerNameArchiveRuleRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyzerAnalyzerNameArchiveRuleRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', 'DELETE'] as const
}

export function useDeleteAnalyzerAnalyzerNameArchiveRuleRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccessPreviewAccessPreviewIdAnalyzerArnKey(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-preview', '/access-preview/:accessPreviewId#analyzerArn', keyArgs] as const
}

export function useGetAccessPreviewAccessPreviewIdAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
            >
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
        ? getGetAccessPreviewAccessPreviewIdAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-preview'][':accessPreviewId#analyzerArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessPreviewAccessPreviewIdAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
            >
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
        ? getGetAccessPreviewAccessPreviewIdAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-preview'][':accessPreviewId#analyzerArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyzedResourceAnalyzerArnResourceArnKey(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'analyzed-resource#analyzerArn&resourceArn',
    '/analyzed-resource#analyzerArn&resourceArn',
    keyArgs,
  ] as const
}

export function useGetAnalyzedResourceAnalyzerArnResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
            >
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
        ? getGetAnalyzedResourceAnalyzerArnResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['analyzed-resource#analyzerArn&resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyzedResourceAnalyzerArnResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
            >
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
        ? getGetAnalyzedResourceAnalyzerArnResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['analyzed-resource#analyzerArn&resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFindingIdAnalyzerArnKey(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['finding', '/finding/:id#analyzerArn', keyArgs] as const
}

export function useGetFindingIdAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
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
        ? getGetFindingIdAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.finding[':id#analyzerArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingIdAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
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
        ? getGetFindingIdAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.finding[':id#analyzerArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessPreviewAccessPreviewIdKey() {
  return ['access-preview', '/access-preview/:accessPreviewId', 'POST'] as const
}

export function usePostAccessPreviewAccessPreviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-preview'][':accessPreviewId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessPreviewAccessPreviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>
        },
      ) => parseResponse(client['access-preview'][':accessPreviewId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessPreviewAnalyzerArnKey(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-preview#analyzerArn', '/access-preview#analyzerArn', keyArgs] as const
}

export function useGetAccessPreviewAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
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
        ? getGetAccessPreviewAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-preview#analyzerArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessPreviewAnalyzerArn<TError = unknown>(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
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
        ? getGetAccessPreviewAnalyzerArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-preview#analyzerArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyzedResourceKey() {
  return ['analyzed-resource', '/analyzed-resource', 'POST'] as const
}

export function usePostAnalyzedResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['analyzed-resource']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['analyzed-resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyzedResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['analyzed-resource']['$post']> },
      ) => parseResponse(client['analyzed-resource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFindingKey() {
  return ['finding', '/finding', 'PUT'] as const
}

export function usePutFinding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.finding.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFindingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.finding.$put> }) =>
        parseResponse(client.finding.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingKey() {
  return ['finding', '/finding', 'POST'] as const
}

export function usePostFinding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.finding.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.finding.$post> }) =>
        parseResponse(client.finding.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPolicyGenerationKey(
  args: InferRequestType<typeof client.policy.generation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/generation', keyArgs] as const
}

export function useGetPolicyGeneration<TError = unknown>(
  args: InferRequestType<typeof client.policy.generation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
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
        ? getGetPolicyGenerationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy.generation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPolicyGeneration<TError = unknown>(
  args: InferRequestType<typeof client.policy.generation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
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
        ? getGetPolicyGenerationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy.generation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPolicyGenerationKey() {
  return ['policy', '/policy/generation', 'PUT'] as const
}

export function usePutPolicyGeneration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.policy.generation.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPolicyGenerationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.policy.generation.$put> }) =>
        parseResponse(client.policy.generation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourceScanKey() {
  return ['resource', '/resource/scan', 'POST'] as const
}

export function usePostResourceScan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource.scan.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.resource.scan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resource.scan.$post> }) =>
        parseResponse(client.resource.scan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPolicyValidationKey() {
  return ['policy', '/policy/validation', 'POST'] as const
}

export function usePostPolicyValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.validation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.policy.validation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPolicyValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.policy.validation.$post> }) =>
        parseResponse(client.policy.validation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
