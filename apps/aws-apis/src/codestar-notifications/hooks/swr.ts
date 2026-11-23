import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateNotificationRuleKey() {
  return ['createNotificationRule'] as const
}

export function getDeleteNotificationRuleKey() {
  return ['deleteNotificationRule'] as const
}

export function getDeleteTargetKey() {
  return ['deleteTarget'] as const
}

export function getDescribeNotificationRuleKey() {
  return ['describeNotificationRule'] as const
}

export function getListEventTypesKey() {
  return ['listEventTypes'] as const
}

export function getListNotificationRulesKey() {
  return ['listNotificationRules'] as const
}

export function getListTagsForResourceKey() {
  return ['listTagsForResource'] as const
}

export function getListTargetsKey() {
  return ['listTargets'] as const
}

export function getSubscribeKey() {
  return ['subscribe'] as const
}

export function getTagResourceKey() {
  return ['tagResource'] as const
}

export function getUnsubscribeKey() {
  return ['unsubscribe'] as const
}

export function getUntagResourceKey() {
  return ['untagResource'] as const
}

export function getUpdateNotificationRuleKey() {
  return ['updateNotificationRule'] as const
}

export function getPostCreateNotificationRuleKey() {
  return ['createNotificationRule', '/createNotificationRule', 'POST'] as const
}

export function usePostCreateNotificationRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createNotificationRule.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createNotificationRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateNotificationRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createNotificationRule.$post> },
      ) => parseResponse(client.createNotificationRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteNotificationRuleKey() {
  return ['deleteNotificationRule', '/deleteNotificationRule', 'POST'] as const
}

export function usePostDeleteNotificationRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteNotificationRule.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteNotificationRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteNotificationRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteNotificationRule.$post> },
      ) => parseResponse(client.deleteNotificationRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteTargetKey() {
  return ['deleteTarget', '/deleteTarget', 'POST'] as const
}

export function usePostDeleteTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteTarget.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteTarget.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteTarget.$post> }) =>
        parseResponse(client.deleteTarget.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeNotificationRuleKey() {
  return ['describeNotificationRule', '/describeNotificationRule', 'POST'] as const
}

export function usePostDescribeNotificationRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeNotificationRule.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeNotificationRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeNotificationRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeNotificationRule.$post> },
      ) => parseResponse(client.describeNotificationRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListEventTypesKey() {
  return ['listEventTypes', '/listEventTypes', 'POST'] as const
}

export function usePostListEventTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listEventTypes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listEventTypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListEventTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listEventTypes.$post> }) =>
        parseResponse(client.listEventTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListNotificationRulesKey() {
  return ['listNotificationRules', '/listNotificationRules', 'POST'] as const
}

export function usePostListNotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listNotificationRules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listNotificationRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListNotificationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listNotificationRules.$post> },
      ) => parseResponse(client.listNotificationRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForResourceKey() {
  return ['listTagsForResource', '/listTagsForResource', 'POST'] as const
}

export function usePostListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listTagsForResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listTagsForResource.$post> }) =>
        parseResponse(client.listTagsForResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTargetsKey() {
  return ['listTargets', '/listTargets', 'POST'] as const
}

export function usePostListTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTargets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listTargets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listTargets.$post> }) =>
        parseResponse(client.listTargets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscribeKey() {
  return ['subscribe', '/subscribe', 'POST'] as const
}

export function usePostSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscribe.$post> }) =>
        parseResponse(client.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagResourceKey() {
  return ['tagResource', '/tagResource', 'POST'] as const
}

export function usePostTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagResource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tagResource.$post> }) =>
        parseResponse(client.tagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnsubscribeKey() {
  return ['unsubscribe', '/unsubscribe', 'POST'] as const
}

export function usePostUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.unsubscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unsubscribe.$post> }) =>
        parseResponse(client.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceResourceArnTagKeysKey() {
  return ['untagResource', '/untagResource/:resourceArn#tagKeys', 'POST'] as const
}

export function usePostUntagResourceResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>
        },
      ) => parseResponse(client.untagResource[':resourceArn#tagKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateNotificationRuleKey() {
  return ['updateNotificationRule', '/updateNotificationRule', 'POST'] as const
}

export function usePostUpdateNotificationRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateNotificationRule.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateNotificationRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateNotificationRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateNotificationRule.$post> },
      ) => parseResponse(client.updateNotificationRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
