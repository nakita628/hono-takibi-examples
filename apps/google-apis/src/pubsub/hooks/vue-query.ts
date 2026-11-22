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

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getPutV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'PUT'] as const
}

export function getPutV1beta2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$put']>) {
      return parseResponse(client.v1beta2[':name'].$put(args, options))
    },
  })
}

export function usePutV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$put']>,
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
  const mutationDefaults = getPutV1beta2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta2ProjectSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>
  >,
) {
  return ['v1beta2', '/v1beta2/:project/subscriptions', toValue(args)] as const
}

export function getV1beta2ProjectSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ProjectSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':project'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ProjectSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ProjectSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ProjectSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ProjectSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':project'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta2ProjectTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':project']['topics']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:project/topics', toValue(args)] as const
}

export function getV1beta2ProjectTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':project']['topics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ProjectTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':project'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ProjectTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':project']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':project']['topics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':project']['topics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':project']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ProjectTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':project']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ProjectTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ProjectTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':project'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta2ResourceGetIamPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>
  >,
) {
  return ['v1beta2', '/v1beta2/:resource:getIamPolicy', toValue(args)] as const
}

export function getV1beta2ResourceGetIamPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ResourceGetIamPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':resource:getIamPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ResourceGetIamPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ResourceGetIamPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ResourceGetIamPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':resource:getIamPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta2ResourceSetIamPolicyMutationKey() {
  return ['v1beta2', '/v1beta2/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1beta2ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta2ResourceSetIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1beta2ResourceSetIamPolicyMutationOptions<
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

export function getPostV1beta2ResourceTestIamPermissionsMutationKey() {
  return ['v1beta2', '/v1beta2/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1beta2ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1beta2ResourceTestIamPermissions<
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
                  ReturnType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV1beta2ResourceTestIamPermissionsMutationOptions<
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

export function getV1beta2SubscriptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':subscription']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:subscription', toValue(args)] as const
}

export function getV1beta2SubscriptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':subscription']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2SubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':subscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2Subscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':subscription']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2SubscriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2SubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2SubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':subscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta2SubscriptionMutationKey() {
  return ['v1beta2', '/v1beta2/:subscription', 'DELETE'] as const
}

export function getDeleteV1beta2SubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':subscription']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta2SubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':subscription']['$delete']>) {
      return parseResponse(client.v1beta2[':subscription'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta2Subscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':subscription']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':subscription']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta2SubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta2SubscriptionAcknowledgeMutationKey() {
  return ['v1beta2', '/v1beta2/:subscription:acknowledge', 'POST'] as const
}

export function getPostV1beta2SubscriptionAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2SubscriptionAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':subscription:acknowledge'].$post(args, options))
    },
  })
}

export function usePostV1beta2SubscriptionAcknowledge<
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
                Awaited<ReturnType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>,
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
  const mutationDefaults = getPostV1beta2SubscriptionAcknowledgeMutationOptions<
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

export function getPostV1beta2SubscriptionModifyAckDeadlineMutationKey() {
  return ['v1beta2', '/v1beta2/:subscription:modifyAckDeadline', 'POST'] as const
}

export function getPostV1beta2SubscriptionModifyAckDeadlineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2SubscriptionModifyAckDeadlineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':subscription:modifyAckDeadline'].$post(args, options))
    },
  })
}

export function usePostV1beta2SubscriptionModifyAckDeadline<
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
                  ReturnType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>,
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
  const mutationDefaults = getPostV1beta2SubscriptionModifyAckDeadlineMutationOptions<
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

export function getPostV1beta2SubscriptionModifyPushConfigMutationKey() {
  return ['v1beta2', '/v1beta2/:subscription:modifyPushConfig', 'POST'] as const
}

export function getPostV1beta2SubscriptionModifyPushConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2SubscriptionModifyPushConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':subscription:modifyPushConfig'].$post(args, options))
    },
  })
}

export function usePostV1beta2SubscriptionModifyPushConfig<
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
                  ReturnType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>,
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
  const mutationDefaults = getPostV1beta2SubscriptionModifyPushConfigMutationOptions<
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

export function getPostV1beta2SubscriptionPullMutationKey() {
  return ['v1beta2', '/v1beta2/:subscription:pull', 'POST'] as const
}

export function getPostV1beta2SubscriptionPullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':subscription:pull']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':subscription:pull']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2SubscriptionPullMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':subscription:pull']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':subscription:pull'].$post(args, options))
    },
  })
}

export function usePostV1beta2SubscriptionPull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':subscription:pull']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':subscription:pull']['$post']>,
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
  const mutationDefaults = getPostV1beta2SubscriptionPullMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta2TopicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':topic']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:topic', toValue(args)] as const
}

export function getV1beta2TopicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':topic']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2TopicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':topic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2Topic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':topic']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta2TopicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2TopicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2TopicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':topic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta2TopicMutationKey() {
  return ['v1beta2', '/v1beta2/:topic', 'DELETE'] as const
}

export function getDeleteV1beta2TopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':topic']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta2TopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':topic']['$delete']>) {
      return parseResponse(client.v1beta2[':topic'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta2Topic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':topic']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':topic']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta2TopicMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta2TopicSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>
  >,
) {
  return ['v1beta2', '/v1beta2/:topic/subscriptions', toValue(args)] as const
}

export function getV1beta2TopicSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2TopicSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':topic'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2TopicSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2TopicSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2TopicSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2TopicSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':topic'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta2TopicPublishMutationKey() {
  return ['v1beta2', '/v1beta2/:topic:publish', 'POST'] as const
}

export function getPostV1beta2TopicPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':topic:publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':topic:publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2TopicPublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':topic:publish']['$post']>) {
      return parseResponse(client.v1beta2[':topic:publish'].$post(args, options))
    },
  })
}

export function usePostV1beta2TopicPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':topic:publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':topic:publish']['$post']>,
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
  const mutationDefaults = getPostV1beta2TopicPublishMutationOptions<TError, TOnMutateResult>(
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
