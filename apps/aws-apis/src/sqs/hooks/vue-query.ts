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

export function getActionAddPermissionKey() {
  return ['#Action=AddPermission'] as const
}

export function getActionCancelMessageMoveTaskKey() {
  return ['#Action=CancelMessageMoveTask'] as const
}

export function getActionChangeMessageVisibilityKey() {
  return ['#Action=ChangeMessageVisibility'] as const
}

export function getActionChangeMessageVisibilityBatchKey() {
  return ['#Action=ChangeMessageVisibilityBatch'] as const
}

export function getActionCreateQueueKey() {
  return ['#Action=CreateQueue'] as const
}

export function getActionDeleteMessageKey() {
  return ['#Action=DeleteMessage'] as const
}

export function getActionDeleteMessageBatchKey() {
  return ['#Action=DeleteMessageBatch'] as const
}

export function getActionDeleteQueueKey() {
  return ['#Action=DeleteQueue'] as const
}

export function getActionGetQueueAttributesKey() {
  return ['#Action=GetQueueAttributes'] as const
}

export function getActionGetQueueUrlKey() {
  return ['#Action=GetQueueUrl'] as const
}

export function getActionListDeadLetterSourceQueuesKey() {
  return ['#Action=ListDeadLetterSourceQueues'] as const
}

export function getActionListMessageMoveTasksKey() {
  return ['#Action=ListMessageMoveTasks'] as const
}

export function getActionListQueueTagsKey() {
  return ['#Action=ListQueueTags'] as const
}

export function getActionListQueuesKey() {
  return ['#Action=ListQueues'] as const
}

export function getActionPurgeQueueKey() {
  return ['#Action=PurgeQueue'] as const
}

export function getActionReceiveMessageKey() {
  return ['#Action=ReceiveMessage'] as const
}

export function getActionRemovePermissionKey() {
  return ['#Action=RemovePermission'] as const
}

export function getActionSendMessageKey() {
  return ['#Action=SendMessage'] as const
}

export function getActionSendMessageBatchKey() {
  return ['#Action=SendMessageBatch'] as const
}

export function getActionSetQueueAttributesKey() {
  return ['#Action=SetQueueAttributes'] as const
}

export function getActionStartMessageMoveTaskKey() {
  return ['#Action=StartMessageMoveTask'] as const
}

export function getActionTagQueueKey() {
  return ['#Action=TagQueue'] as const
}

export function getActionUntagQueueKey() {
  return ['#Action=UntagQueue'] as const
}

export function getAccountNumberKey() {
  return ['{AccountNumber}'] as const
}

export function getAccountNumberQueueNameActionAddPermissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=AddPermission', keyArgs] as const
}

export function getAccountNumberQueueNameActionAddPermissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionAddPermissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionAddPermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionAddPermissionQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionAddPermissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionAddPermissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddPermissionMutationKey() {
  return ['#Action=AddPermission', '/#Action=AddPermission', 'POST'] as const
}

export function getPostActionAddPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddPermissionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AddPermission']['$post']>) {
      return parseResponse(client['#Action=AddPermission'].$post(args, options))
    },
  })
}

export function usePostActionAddPermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
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
  const mutationDefaults = getPostActionAddPermissionMutationOptions<TError, TOnMutateResult>(
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

export function getActionCancelMessageMoveTaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CancelMessageMoveTask', '/#Action=CancelMessageMoveTask', keyArgs] as const
}

export function getActionCancelMessageMoveTaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCancelMessageMoveTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CancelMessageMoveTask'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCancelMessageMoveTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCancelMessageMoveTaskQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCancelMessageMoveTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCancelMessageMoveTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CancelMessageMoveTask'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCancelMessageMoveTaskMutationKey() {
  return ['#Action=CancelMessageMoveTask', '/#Action=CancelMessageMoveTask', 'POST'] as const
}

export function getPostActionCancelMessageMoveTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCancelMessageMoveTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>,
    ) {
      return parseResponse(client['#Action=CancelMessageMoveTask'].$post(args, options))
    },
  })
}

export function usePostActionCancelMessageMoveTask<
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
                Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>,
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
  const mutationDefaults = getPostActionCancelMessageMoveTaskMutationOptions<
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

export function getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibility',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionChangeMessageVisibilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountNumberQueueNameActionChangeMessageVisibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionChangeMessageVisibilityMutationKey() {
  return ['#Action=ChangeMessageVisibility', '/#Action=ChangeMessageVisibility', 'POST'] as const
}

export function getPostActionChangeMessageVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionChangeMessageVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>,
    ) {
      return parseResponse(client['#Action=ChangeMessageVisibility'].$post(args, options))
    },
  })
}

export function usePostActionChangeMessageVisibility<
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
                Awaited<ReturnType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>,
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
  const mutationDefaults = getPostActionChangeMessageVisibilityMutationOptions<
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

export function getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibilityBatch',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountNumberQueueNameActionChangeMessageVisibilityBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionChangeMessageVisibilityBatchMutationKey() {
  return [
    '#Action=ChangeMessageVisibilityBatch',
    '/#Action=ChangeMessageVisibilityBatch',
    'POST',
  ] as const
}

export function getPostActionChangeMessageVisibilityBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionChangeMessageVisibilityBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>,
    ) {
      return parseResponse(client['#Action=ChangeMessageVisibilityBatch'].$post(args, options))
    },
  })
}

export function usePostActionChangeMessageVisibilityBatch<
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
                  ReturnType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>,
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
  const mutationDefaults = getPostActionChangeMessageVisibilityBatchMutationOptions<
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

export function getActionCreateQueueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateQueue', '/#Action=CreateQueue', keyArgs] as const
}

export function getActionCreateQueueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateQueue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateQueueQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateQueue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateQueueMutationKey() {
  return ['#Action=CreateQueue', '/#Action=CreateQueue', 'POST'] as const
}

export function getPostActionCreateQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateQueueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateQueue']['$post']>) {
      return parseResponse(client['#Action=CreateQueue'].$post(args, options))
    },
  })
}

export function usePostActionCreateQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateQueue']['$post']>,
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
  const mutationDefaults = getPostActionCreateQueueMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionDeleteMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionDeleteMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionDeleteMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionDeleteMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionDeleteMessageQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionDeleteMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionDeleteMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteMessageMutationKey() {
  return ['#Action=DeleteMessage', '/#Action=DeleteMessage', 'POST'] as const
}

export function getPostActionDeleteMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteMessage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']>) {
      return parseResponse(client['#Action=DeleteMessage'].$post(args, options))
    },
  })
}

export function usePostActionDeleteMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']>,
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
  const mutationDefaults = getPostActionDeleteMessageMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionDeleteMessageBatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=DeleteMessageBatch',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionDeleteMessageBatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionDeleteMessageBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionDeleteMessageBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionDeleteMessageBatchQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionDeleteMessageBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionDeleteMessageBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteMessageBatchMutationKey() {
  return ['#Action=DeleteMessageBatch', '/#Action=DeleteMessageBatch', 'POST'] as const
}

export function getPostActionDeleteMessageBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteMessageBatch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteMessageBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteMessageBatch'].$post(args, options))
    },
  })
}

export function usePostActionDeleteMessageBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteMessageBatch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']>,
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
  const mutationDefaults = getPostActionDeleteMessageBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionDeleteQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionDeleteQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionDeleteQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionDeleteQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionDeleteQueueQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionDeleteQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionDeleteQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteQueueMutationKey() {
  return ['#Action=DeleteQueue', '/#Action=DeleteQueue', 'POST'] as const
}

export function getPostActionDeleteQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteQueue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteQueueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']>) {
      return parseResponse(client['#Action=DeleteQueue'].$post(args, options))
    },
  })
}

export function usePostActionDeleteQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteQueue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']>,
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
  const mutationDefaults = getPostActionDeleteQueueMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionGetQueueAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=GetQueueAttributes',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionGetQueueAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionGetQueueAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionGetQueueAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionGetQueueAttributesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionGetQueueAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionGetQueueAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetQueueAttributesMutationKey() {
  return ['#Action=GetQueueAttributes', '/#Action=GetQueueAttributes', 'POST'] as const
}

export function getPostActionGetQueueAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetQueueAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetQueueAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetQueueAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetQueueAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetQueueAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']>,
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
  const mutationDefaults = getPostActionGetQueueAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetQueueUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetQueueUrl', '/#Action=GetQueueUrl', keyArgs] as const
}

export function getActionGetQueueUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetQueueUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetQueueUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetQueueUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetQueueUrlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetQueueUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetQueueUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetQueueUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetQueueUrlMutationKey() {
  return ['#Action=GetQueueUrl', '/#Action=GetQueueUrl', 'POST'] as const
}

export function getPostActionGetQueueUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetQueueUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']>) {
      return parseResponse(client['#Action=GetQueueUrl'].$post(args, options))
    },
  })
}

export function usePostActionGetQueueUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']>,
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
  const mutationDefaults = getPostActionGetQueueUrlMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ListDeadLetterSourceQueues',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountNumberQueueNameActionListDeadLetterSourceQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListDeadLetterSourceQueuesMutationKey() {
  return [
    '#Action=ListDeadLetterSourceQueues',
    '/#Action=ListDeadLetterSourceQueues',
    'POST',
  ] as const
}

export function getPostActionListDeadLetterSourceQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListDeadLetterSourceQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>,
    ) {
      return parseResponse(client['#Action=ListDeadLetterSourceQueues'].$post(args, options))
    },
  })
}

export function usePostActionListDeadLetterSourceQueues<
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
                Awaited<ReturnType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>,
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
  const mutationDefaults = getPostActionListDeadLetterSourceQueuesMutationOptions<
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

export function getActionListMessageMoveTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListMessageMoveTasks', '/#Action=ListMessageMoveTasks', keyArgs] as const
}

export function getActionListMessageMoveTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListMessageMoveTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListMessageMoveTasks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListMessageMoveTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListMessageMoveTasksQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListMessageMoveTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListMessageMoveTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListMessageMoveTasks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListMessageMoveTasksMutationKey() {
  return ['#Action=ListMessageMoveTasks', '/#Action=ListMessageMoveTasks', 'POST'] as const
}

export function getPostActionListMessageMoveTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListMessageMoveTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>,
    ) {
      return parseResponse(client['#Action=ListMessageMoveTasks'].$post(args, options))
    },
  })
}

export function usePostActionListMessageMoveTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>,
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
  const mutationDefaults = getPostActionListMessageMoveTasksMutationOptions<
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

export function getAccountNumberQueueNameActionListQueueTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ListQueueTags', keyArgs] as const
}

export function getAccountNumberQueueNameActionListQueueTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionListQueueTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionListQueueTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionListQueueTagsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionListQueueTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionListQueueTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListQueueTagsMutationKey() {
  return ['#Action=ListQueueTags', '/#Action=ListQueueTags', 'POST'] as const
}

export function getPostActionListQueueTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueueTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListQueueTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']>) {
      return parseResponse(client['#Action=ListQueueTags'].$post(args, options))
    },
  })
}

export function usePostActionListQueueTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListQueueTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']>,
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
  const mutationDefaults = getPostActionListQueueTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListQueuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListQueues']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListQueues', '/#Action=ListQueues', keyArgs] as const
}

export function getActionListQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListQueues']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListQueues'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListQueues']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListQueuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListQueues'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListQueuesMutationKey() {
  return ['#Action=ListQueues', '/#Action=ListQueues', 'POST'] as const
}

export function getPostActionListQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListQueues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListQueuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListQueues']['$post']>) {
      return parseResponse(client['#Action=ListQueues'].$post(args, options))
    },
  })
}

export function usePostActionListQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListQueues']['$post']>,
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
  const mutationDefaults = getPostActionListQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionPurgeQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=PurgeQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionPurgeQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionPurgeQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionPurgeQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionPurgeQueueQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionPurgeQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionPurgeQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPurgeQueueMutationKey() {
  return ['#Action=PurgeQueue', '/#Action=PurgeQueue', 'POST'] as const
}

export function getPostActionPurgeQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PurgeQueue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPurgeQueueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']>) {
      return parseResponse(client['#Action=PurgeQueue'].$post(args, options))
    },
  })
}

export function usePostActionPurgeQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PurgeQueue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']>,
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
  const mutationDefaults = getPostActionPurgeQueueMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionReceiveMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ReceiveMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionReceiveMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionReceiveMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionReceiveMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionReceiveMessageQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionReceiveMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionReceiveMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionReceiveMessageMutationKey() {
  return ['#Action=ReceiveMessage', '/#Action=ReceiveMessage', 'POST'] as const
}

export function getPostActionReceiveMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ReceiveMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionReceiveMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']>) {
      return parseResponse(client['#Action=ReceiveMessage'].$post(args, options))
    },
  })
}

export function usePostActionReceiveMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ReceiveMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']>,
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
  const mutationDefaults = getPostActionReceiveMessageMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionRemovePermissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=RemovePermission', keyArgs] as const
}

export function getAccountNumberQueueNameActionRemovePermissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionRemovePermissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionRemovePermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionRemovePermissionQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionRemovePermissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionRemovePermissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemovePermissionMutationKey() {
  return ['#Action=RemovePermission', '/#Action=RemovePermission', 'POST'] as const
}

export function getPostActionRemovePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemovePermissionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>) {
      return parseResponse(client['#Action=RemovePermission'].$post(args, options))
    },
  })
}

export function usePostActionRemovePermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
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
  const mutationDefaults = getPostActionRemovePermissionMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionSendMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionSendMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionSendMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionSendMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionSendMessageQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionSendMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionSendMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSendMessageMutationKey() {
  return ['#Action=SendMessage', '/#Action=SendMessage', 'POST'] as const
}

export function getPostActionSendMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendMessage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SendMessage']['$post']>) {
      return parseResponse(client['#Action=SendMessage'].$post(args, options))
    },
  })
}

export function usePostActionSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SendMessage']['$post']>,
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
  const mutationDefaults = getPostActionSendMessageMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionSendMessageBatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessageBatch', keyArgs] as const
}

export function getAccountNumberQueueNameActionSendMessageBatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionSendMessageBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionSendMessageBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionSendMessageBatchQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionSendMessageBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionSendMessageBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSendMessageBatchMutationKey() {
  return ['#Action=SendMessageBatch', '/#Action=SendMessageBatch', 'POST'] as const
}

export function getPostActionSendMessageBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendMessageBatch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendMessageBatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']>) {
      return parseResponse(client['#Action=SendMessageBatch'].$post(args, options))
    },
  })
}

export function usePostActionSendMessageBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendMessageBatch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']>,
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
  const mutationDefaults = getPostActionSendMessageBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionSetQueueAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=SetQueueAttributes',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionSetQueueAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionSetQueueAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionSetQueueAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionSetQueueAttributesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionSetQueueAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionSetQueueAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetQueueAttributesMutationKey() {
  return ['#Action=SetQueueAttributes', '/#Action=SetQueueAttributes', 'POST'] as const
}

export function getPostActionSetQueueAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetQueueAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetQueueAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=SetQueueAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetQueueAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetQueueAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']>,
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
  const mutationDefaults = getPostActionSetQueueAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionStartMessageMoveTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartMessageMoveTask', '/#Action=StartMessageMoveTask', keyArgs] as const
}

export function getActionStartMessageMoveTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartMessageMoveTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartMessageMoveTask'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartMessageMoveTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartMessageMoveTaskQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartMessageMoveTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartMessageMoveTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartMessageMoveTask'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartMessageMoveTaskMutationKey() {
  return ['#Action=StartMessageMoveTask', '/#Action=StartMessageMoveTask', 'POST'] as const
}

export function getPostActionStartMessageMoveTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartMessageMoveTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']>,
    ) {
      return parseResponse(client['#Action=StartMessageMoveTask'].$post(args, options))
    },
  })
}

export function usePostActionStartMessageMoveTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']>,
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
  const mutationDefaults = getPostActionStartMessageMoveTaskMutationOptions<
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

export function getAccountNumberQueueNameActionTagQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=TagQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionTagQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionTagQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionTagQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionTagQueueQueryKey>
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
          Awaited<
            ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionTagQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionTagQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagQueueMutationKey() {
  return ['#Action=TagQueue', '/#Action=TagQueue', 'POST'] as const
}

export function getPostActionTagQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagQueue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagQueueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagQueue']['$post']>) {
      return parseResponse(client['#Action=TagQueue'].$post(args, options))
    },
  })
}

export function usePostActionTagQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagQueue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagQueue']['$post']>,
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
  const mutationDefaults = getPostActionTagQueueMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumberQueueNameActionUntagQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=UntagQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionUntagQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumberQueueNameActionUntagQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumberQueueNameActionUntagQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountNumberQueueNameActionUntagQueueQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumberQueueNameActionUntagQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumberQueueNameActionUntagQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagQueueMutationKey() {
  return ['#Action=UntagQueue', '/#Action=UntagQueue', 'POST'] as const
}

export function getPostActionUntagQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagQueue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagQueueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagQueue']['$post']>) {
      return parseResponse(client['#Action=UntagQueue'].$post(args, options))
    },
  })
}

export function usePostActionUntagQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagQueue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagQueue']['$post']>,
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
  const mutationDefaults = getPostActionUntagQueueMutationOptions<TError, TOnMutateResult>(
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
