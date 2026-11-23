import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=AddPermission', keyArgs] as const
}

export function getAccountNumberQueueNameActionAddPermissionQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionAddPermissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionAddPermission<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionAddPermissionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAddPermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionAddPermissionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCancelMessageMoveTaskQueryKey(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelMessageMoveTask', '/#Action=CancelMessageMoveTask', keyArgs] as const
}

export function getActionCancelMessageMoveTaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCancelMessageMoveTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CancelMessageMoveTask'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCancelMessageMoveTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionCancelMessageMoveTaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCancelMessageMoveTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCancelMessageMoveTaskMutationOptions<
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

export function getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibility',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionChangeMessageVisibilityQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionChangeMessageVisibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionChangeMessageVisibility<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionChangeMessageVisibilityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionChangeMessageVisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionChangeMessageVisibilityMutationOptions<
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

export function getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ChangeMessageVisibilityBatch',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionChangeMessageVisibilityBatch<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionChangeMessageVisibilityBatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionChangeMessageVisibilityBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionChangeMessageVisibilityBatchMutationOptions<
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

export function getActionCreateQueueQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateQueue', '/#Action=CreateQueue', keyArgs] as const
}

export function getActionCreateQueueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateQueueQueryKey>
  >({
    queryKey: getActionCreateQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateQueue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionCreateQueueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionCreateQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionDeleteMessageQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionDeleteMessageQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionDeleteMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionDeleteMessage<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionDeleteMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionDeleteMessageBatchQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=DeleteMessageBatch',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionDeleteMessageBatchQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionDeleteMessageBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionDeleteMessageBatch<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionDeleteMessageBatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteMessageBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteMessageBatchMutationOptions<
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

export function getAccountNumberQueueNameActionDeleteQueueQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionDeleteQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionDeleteQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionDeleteQueue<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionDeleteQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionGetQueueAttributesQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=GetQueueAttributes',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionGetQueueAttributesQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionGetQueueAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionGetQueueAttributes<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionGetQueueAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionGetQueueAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetQueueAttributesMutationOptions<
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

export function getActionGetQueueUrlQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetQueueUrl', '/#Action=GetQueueUrl', keyArgs] as const
}

export function getActionGetQueueUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetQueueUrlQueryKey>
  >({
    queryKey: getActionGetQueueUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetQueueUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionGetQueueUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetQueueUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionGetQueueUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionGetQueueUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetQueueUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=ListDeadLetterSourceQueues',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionListDeadLetterSourceQueues<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionListDeadLetterSourceQueuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListDeadLetterSourceQueues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListDeadLetterSourceQueuesMutationOptions<
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

export function getActionListMessageMoveTasksQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMessageMoveTasks', '/#Action=ListMessageMoveTasks', keyArgs] as const
}

export function getActionListMessageMoveTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionListMessageMoveTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListMessageMoveTasks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListMessageMoveTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionListMessageMoveTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListMessageMoveTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListMessageMoveTasksMutationOptions<
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

export function getAccountNumberQueueNameActionListQueueTagsQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ListQueueTags', keyArgs] as const
}

export function getAccountNumberQueueNameActionListQueueTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionListQueueTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionListQueueTags<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionListQueueTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListQueueTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListQueueTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionListQueuesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListQueues', '/#Action=ListQueues', keyArgs] as const
}

export function getActionListQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListQueuesQueryKey>
  >({
    queryKey: getActionListQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListQueues'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionListQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListQueuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionListQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListQueuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionPurgeQueueQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=PurgeQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionPurgeQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionPurgeQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionPurgeQueue<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionPurgeQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionPurgeQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPurgeQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionReceiveMessageQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ReceiveMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionReceiveMessageQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionReceiveMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionReceiveMessage<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionReceiveMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionReceiveMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionReceiveMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionRemovePermissionQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=RemovePermission', keyArgs] as const
}

export function getAccountNumberQueueNameActionRemovePermissionQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionRemovePermissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionRemovePermission<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionRemovePermissionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemovePermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRemovePermissionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionSendMessageQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessage', keyArgs] as const
}

export function getAccountNumberQueueNameActionSendMessageQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionSendMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionSendMessage<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionSendMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSendMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionSendMessageBatchQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessageBatch', keyArgs] as const
}

export function getAccountNumberQueueNameActionSendMessageBatchQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionSendMessageBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionSendMessageBatch<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionSendMessageBatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSendMessageBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSendMessageBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionSetQueueAttributesQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':AccountNumber',
    '/:AccountNumber/:QueueName/#Action=SetQueueAttributes',
    keyArgs,
  ] as const
}

export function getAccountNumberQueueNameActionSetQueueAttributesQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionSetQueueAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionSetQueueAttributes<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionSetQueueAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSetQueueAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetQueueAttributesMutationOptions<
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

export function getActionStartMessageMoveTaskQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartMessageMoveTask', '/#Action=StartMessageMoveTask', keyArgs] as const
}

export function getActionStartMessageMoveTaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStartMessageMoveTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartMessageMoveTask'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartMessageMoveTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionStartMessageMoveTaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartMessageMoveTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionStartMessageMoveTaskMutationOptions<
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

export function getAccountNumberQueueNameActionTagQueueQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=TagQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionTagQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionTagQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionTagQueue<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountNumberQueueNameActionTagQueueQueryKey>
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
      ...getAccountNumberQueueNameActionTagQueueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionTagQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagQueue']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TagQueue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionTagQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountNumberQueueNameActionUntagQueueQueryKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=UntagQueue', keyArgs] as const
}

export function getAccountNumberQueueNameActionUntagQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountNumberQueueNameActionUntagQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountNumberQueueNameActionUntagQueue<
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
  args: () => InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountNumberQueueNameActionUntagQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUntagQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUntagQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
